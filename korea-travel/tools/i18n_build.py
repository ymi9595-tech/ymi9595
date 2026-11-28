#!/usr/bin/env python3
"""Build Japanese / Simplified-Chinese translations for the Korean copy.

  1. collect every `ko: '…'` string from the data files (in file order, so
     neighbours in a batch share context),
  2. translate ko → ja / zh-CN through Google's public translate endpoint,
     caching each result in tools/i18n_cache_<lang>.json so re-runs are cheap,
  3. write the translations back into the source files as `ja: '…', zh: '…'`
     right after the ko value.

Override the machine output where it matters with tools/i18n_override.json
({"ko string": {"ja": "...", "zh": "..."}}) — applied on every run and in the
injection step, so a curated wording always wins.

Run:  python3 tools/i18n_build.py            # translate (resumable, 4 min / run)
      python3 tools/i18n_build.py --inject   # write ja/zh into the sources
      python3 tools/i18n_build.py --report   # how many are still missing
"""
import json, os, re, sys, time, urllib.parse, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_FILES = [
    "assets/data.js",
    "assets/practical.js",
    "assets/credits.js",
]
THEME_SRC = os.path.join(ROOT, "tools", "themes_src")
CACHE = {l: os.path.join(ROOT, "tools", "i18n_cache_%s.json" % l) for l in ("ja", "zh")}
OVERRIDE = os.path.join(ROOT, "tools", "i18n_override.json")
KO = re.compile(r"ko:\s*'((?:[^'\\]|\\.)*)'")
UA = "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Mobile Safari/537.36"


def files():
    out = [os.path.join(ROOT, f) for f in SRC_FILES]
    out += [os.path.join(THEME_SRC, f) for f in sorted(os.listdir(THEME_SRC)) if f.endswith(".js")]
    return [f for f in out if os.path.exists(f)]


def load(path):
    if not os.path.exists(path):
        return {}
    with open(path, encoding="utf-8") as fh:
        return json.load(fh)


def overrides():
    """tools/i18n_override.json → (strings, terms)."""
    d = load(OVERRIDE)
    if "strings" in d or "terms" in d:
        return d.get("strings", {}), d.get("terms", {})
    return d, {}


def norm(text, lang):
    """Tidy the machine output: term fixes, then CJK typography."""
    if lang == "zh":
        text = re.sub(r"\s+([，。、；：！？）])", r"\1", text)
        text = re.sub(r"([（])\s+", r"\1", text)
        text = re.sub(r"(?<=[0-9])\s+(?=[\u4e00-\u9fff])", "", text)
        text = re.sub(r"(?<=[\u4e00-\u9fff])\s+(?=[0-9])", "", text)
    else:
        text = re.sub(r"\s+([、。，．！？）])", r"\1", text)
        text = re.sub(r"([（])\s+", r"\1", text)
    return text


def fix(ko, out, lang):
    _, terms = overrides()
    for trig, rules in terms.items():
        if trig in ko:
            for a, b in rules.get(lang, []):
                out = out.replace(a, b)
    return norm(out, lang)


def save(path, obj):
    tmp = path + ".tmp"
    with open(tmp, "w", encoding="utf-8") as fh:
        json.dump(obj, fh, ensure_ascii=False, indent=0, sort_keys=True)
    os.replace(tmp, path)


def collect():
    seen, order = set(), []
    for f in files():
        with open(f, encoding="utf-8") as fh:
            for s in KO.findall(fh.read()):
                s = s.replace("\\'", "'").replace("\\\\", "\\")
                if s in seen or not s.strip():
                    continue
                seen.add(s)
                order.append(s)
    return order


def call(lines, tl):
    url = "https://clients5.google.com/translate_a/t?" + urllib.parse.urlencode(
        {"client": "dict-chrome-ex", "sl": "ko", "tl": tl, "q": "\n".join(lines)})
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=45) as r:
        data = json.loads(r.read().decode("utf-8"))
    body = data[0] if isinstance(data[0], str) else "".join(x[0] for x in data[0])
    return body.split("\n")


def has_korean(s):
    return bool(re.search(r"[\uac10-\ud7a3]", s))


def build(budget=240):
    t0 = time.time()
    todo = collect()
    caches = {l: load(CACHE[l]) for l in CACHE}
    over, _ = overrides()
    missing = []
    for l in caches:
        for s in todo:
            if (over.get(s) or {}).get(l):
                caches[l][s] = over[s][l]
            elif not has_korean(s):
                caches[l][s] = s
            elif s not in caches[l]:
                missing.append((l, s))
    print("strings:", len(todo), "to translate:", len(missing))
    if not missing:
        return 0
    # keep file order, batch neighbours by language
    counts = {"ja": 0, "zh": 0}
    for lang in ("ja", "zh"):
        items = [s for (l, s) in missing if l == lang]
        i = 0
        while i < len(items):
            if time.time() - t0 > budget:
                save(CACHE["ja"], caches["ja"]); save(CACHE["zh"], caches["zh"])
                left = sum(1 for (l, s) in missing if s not in caches[l])
                print("time budget reached, %d left — run again" % left)
                return left
            batch = items[i:i + 18]
            try:
                got = call(batch, lang)
            except Exception as e:  # noqa: BLE001 — network hiccup: retry next run
                print("  !", lang, "batch at", i, "failed:", e)
                time.sleep(2.0)
                continue
            if len(got) != len(batch):
                # fall back to one by one for this batch
                got = []
                for s in batch:
                    try:
                        got.append("\n".join(call([s], lang)))
                        time.sleep(0.25)
                    except Exception as e:  # noqa: BLE001
                        got.append(None)
                        print("  ! single failed:", e)
            for s, g in zip(batch, got):
                if g and g.strip():
                    caches[lang][s] = fix(s, g, lang)
                    counts[lang] += 1
            i += len(batch)
            time.sleep(0.3)
        save(CACHE[lang], caches[lang])
        print("  %s done: %d" % (lang, counts[lang]))
    left = sum(1 for l in caches for s in todo if s not in caches[l])
    save(CACHE["ja"], caches["ja"]); save(CACHE["zh"], caches["zh"])
    return left


def refix():
    """Re-apply the override rules to everything already cached."""
    over, _ = overrides()
    for l in CACHE:
        c = load(CACHE[l])
        n = 0
        for k in list(c):
            v = (over.get(k) or {}).get(l) or fix(k, c[k], l)
            if v != c[k]:
                n += 1
            c[k] = v
        for k, v in over.items():
            if (v or {}).get(l):
                c[k] = v[l]
        save(CACHE[l], c)
        print(l, "updated", n, "of", len(c))


def inject():
    caches = {l: load(CACHE[l]) for l in CACHE}
    over, _ = overrides()

    def val(s, l):
        return (over.get(s) or {}).get(l) or caches[l].get(s) or ""

    changed_total = 0
    for f in files():
        with open(f, encoding="utf-8") as fh:
            text = fh.read()

        TRIPLE = re.compile(
            r"ko:\s*'((?:[^'\\]|\\.)*)'"
            r"(?:,\s*ja:\s*'(?:[^'\\]|\\.)*',\s*zh:\s*'(?:[^'\\]|\\.)*')?")

        def rep(m):
            raw = m.group(1)
            s = raw.replace("\\'", "'").replace("\\\\", "\\")
            ja, zh = val(s, "ja"), val(s, "zh")
            if not ja or not zh:
                return m.group(0)

            def esc(x):
                return x.replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n")

            return "ko: '%s', ja: '%s', zh: '%s'" % (raw, esc(ja), esc(zh))

        text = TRIPLE.sub(rep, text)
        with open(f, "w", encoding="utf-8") as fh:
            fh.write(text)
        n = len(KO.findall(text))
        changed_total += n
        print("wrote", os.path.relpath(f, ROOT))
    print("ko values now:", changed_total)


def report():
    todo = collect()
    for l in ("ja", "zh"):
        c = load(CACHE[l])
        miss = [s for s in todo if has_korean(s) and s not in c]
        print(l, "cached:", len(c), "missing:", len(miss))
        for s in miss[:8]:
            print("   -", s[:60])


if __name__ == "__main__":
    arg = sys.argv[1] if len(sys.argv) > 1 else ""
    if arg == "--inject":
        inject()
    elif arg == "--report":
        report()
    elif arg == "--fix":
        refix()
    else:
        left = 0
        while True:
            left = build()
            if left == 0:
                break
            print("continuing…", left)
        save(CACHE["ja"], load(CACHE["ja"]))
        report()
