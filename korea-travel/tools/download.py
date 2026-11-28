#!/usr/bin/env python3
"""Download chosen Commons photos into images/ with metadata for credits."""
import json, os, re, sys, urllib.request, urllib.parse
sys.path.insert(0, os.path.dirname(__file__))
from commons import api, UA

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(ROOT, "images")
os.makedirs(IMG, exist_ok=True)
META = os.path.join(IMG, "credits.json")

BAD = re.compile(r"(logo|map|diagram|coat of arms|flag of|signpost|stamp|seal of|statue of|poster|banknote|coin)", re.I)

def info_for_titles(titles):
    d = api({"action": "query", "titles": "|".join(titles), "prop": "imageinfo",
             "iiprop": "url|size|mime|extmetadata", "iiurlwidth": 1600})
    out = {}
    for pid, page in (d.get("query", {}).get("pages", {}) or {}).items():
        ii = (page.get("imageinfo") or [{}])[0]
        if not ii:
            continue
        em = ii.get("extmetadata", {})
        g = lambda k: re.sub(r"<[^>]+>", "", em.get(k, {}).get("value", "")).strip()
        out[page["title"]] = {
            "title": page["title"], "w": ii.get("width"), "h": ii.get("height"),
            "thumb": ii.get("thumburl") or ii.get("url"),
            "author": g("Artist"), "license": g("LicenseShortName"),
            "licenseurl": g("LicenseUrl"), "page": ii.get("descriptionurl"),
        }
    return out

def search_titles(term, limit=12):
    d = api({"action": "query", "generator": "search", "gsrsearch": term,
             "gsrnamespace": 6, "gsrlimit": limit, "prop": "imageinfo",
             "iiprop": "url|size|mime", "iiurlwidth": 1600})
    res = []
    for pid, page in (d.get("query", {}).get("pages", {}) or {}).items():
        ii = (page.get("imageinfo") or [{}])[0]
        if not ii or ii.get("mime") not in ("image/jpeg", "image/png"):
            continue
        w, h = ii.get("width") or 0, ii.get("height") or 1
        if w < 900:
            continue
        res.append((page["title"], w, h, w / h))
    return res

def score(r):
    t, w, h, ratio = r
    s = 0.0
    if 1.2 <= ratio <= 2.0:
        s += 3
    s += min(w, 4000) / 4000 * 2
    s -= abs(ratio - 1.55) * 2
    if BAD.search(t):
        s -= 6
    return s

def download(url, dest):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r, open(dest, "wb") as f:
        f.write(r.read())

def main(spec_path):
    spec = json.load(open(spec_path))
    credits = json.load(open(META)) if os.path.exists(META) else {}
    for slot, cfg in spec.items():
        dest = os.path.join(IMG, slot + ".jpg")
        if os.path.exists(dest) and "--force" not in sys.argv:
            print("skip", slot); continue
        title = cfg.get("file")
        if not title:
            cands = search_titles(cfg["q"])
            if not cands:
                print("!! no result", slot, cfg["q"]); continue
            cands.sort(key=score, reverse=True)
            title = cands[0][0]
        meta = info_for_titles([title]).get(title)
        if not meta:
            print("!! no meta", slot, title); continue
        download(meta["thumb"], dest)
        credits[slot] = dict(meta, q=cfg.get("q"))
        print(f"ok {slot:22s} {meta['w']}x{meta['h']} {meta['license'][:16]:16s} {title[:60]}")
    json.dump(credits, open(META, "w"), ensure_ascii=False, indent=1)

if __name__ == "__main__":
    main(sys.argv[1])
