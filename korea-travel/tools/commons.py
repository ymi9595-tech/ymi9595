#!/usr/bin/env python3
"""Search Wikimedia Commons for photos, print candidates (with license info)."""
import json, sys, urllib.parse, urllib.request

API = "https://commons.wikimedia.org/w/api.php"
UA = "DanbiLabKoreaTravelGuide/1.0 (educational travel guide; contact ymi9595@gmail.com)"

def api(params):
    params = dict(params, format="json")
    url = API + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=40) as r:
        return json.loads(r.read().decode())

def search(term, limit=8):
    d = api({
        "action": "query", "generator": "search",
        "gsrsearch": term, "gsrnamespace": 6, "gsrlimit": limit,
        "prop": "imageinfo",
        "iiprop": "url|size|mime|extmetadata",
        "iiurlwidth": 1500,
    })
    out = []
    for pid, page in (d.get("query", {}).get("pages", {}) or {}).items():
        ii = (page.get("imageinfo") or [{}])[0]
        if not ii:
            continue
        em = ii.get("extmetadata", {})
        def g(k):
            v = em.get(k, {}).get("value", "")
            # strip simple html
            import re
            return re.sub(r"<[^>]+>", "", v).strip()
        out.append({
            "title": page["title"],
            "w": ii.get("width"), "h": ii.get("height"),
            "mime": ii.get("mime"),
            "thumb": ii.get("thumburl") or ii.get("url"),
            "url": ii.get("url"),
            "author": g("Artist"),
            "license": g("LicenseShortName"),
            "desc": g("ImageDescription")[:160],
        })
    return out

if __name__ == "__main__":
    for term in sys.argv[1:]:
        print("### " + term)
        for i, c in enumerate(search(term, 10)):
            if c["mime"] not in ("image/jpeg", "image/png"):
                continue
            ratio = (c["w"] or 0) / max(1, (c["h"] or 1))
            print(f"{i:2d} {c['w']}x{c['h']} r={ratio:.2f} {c['license'][:22]:22s} {c['title'][:78]}")
            print(f"     img={c['url']}")
            print(f"     by={c['author'][:60]} | {c['desc'][:70]}")
