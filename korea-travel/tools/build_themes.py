#!/usr/bin/env python3
"""Build assets/themes.js from tools/themes_src/*.js (one object per theme).

Run:  python3 tools/build_themes.py
"""
import os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "tools", "themes_src")
OUT = os.path.join(ROOT, "assets", "themes.js")

def main():
    files = sorted(f for f in os.listdir(SRC) if f.endswith(".js"))
    head = None
    ui = None
    parts = []
    for f in files:
        body = open(os.path.join(SRC, f), encoding="utf-8").read().rstrip() + "\n"
        if f.startswith("00-"):
            head = body
        elif f.startswith("99-"):
            ui = body
        else:
            parts.append((f, body))
    if head is None or ui is None:
        sys.exit("missing 00-head.js or 99-ui.js")

    out = [head]
    for i, (f, body) in enumerate(parts):
        out.append(body)
    out.append(ui)
    text = "".join(out)
    # sanity: every part must end with "}," before the next
    for f, body in parts:
        if not body.rstrip().endswith("},"):
            sys.exit("%s does not end with a closing brace — fix the object literal" % f)
    open(OUT, "w", encoding="utf-8").write(text)
    ids = re.findall(r"^\s*id: '([a-z0-9-]+)'", text, re.M)
    print(f"wrote {OUT} — {os.path.getsize(OUT)} bytes, {len(parts)} themes: {', '.join(ids)}")

if __name__ == "__main__":
    main()
