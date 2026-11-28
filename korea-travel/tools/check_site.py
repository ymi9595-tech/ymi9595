#!/usr/bin/env python3
"""Static checks for the site: JS syntax, data completeness, image files."""
import json, os, re, sys
import quickjs

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def read(p):
    return open(os.path.join(ROOT, p), encoding="utf-8").read()

ctx = quickjs.Context()
for f in ("assets/data.js", "assets/themes.js", "assets/credits.js"):
    ctx.eval(read(f))

# syntax-check app.js without running it
app = read("assets/app.js")
ctx.eval("function __parse(src) { new Function(src); return true; }")
try:
    ctx.eval("__parse(%s)" % json.dumps(app))
    print("app.js syntax OK")
except Exception as e:
    sys.exit("app.js syntax error: %s" % e)

problems = []
def need(obj, key, where):
    v = obj.get(key) if isinstance(obj, dict) else None
    if v is None or (isinstance(v, str) and not v.strip()):
        problems.append("%s: missing %s" % (where, key))
    return v

def bi(v, where):
    if not isinstance(v, dict):
        problems.append("%s: not bilingual object" % where); return
    for lang in ("ko", "en"):
        s = v.get(lang)
        if not isinstance(s, str) or not s.strip():
            problems.append("%s: missing %s" % (where, lang))

themes = json.loads(ctx.eval("JSON.stringify(THEMES)"))
cities = json.loads(ctx.eval("JSON.stringify(CITIES)"))
credits = json.loads(ctx.eval("JSON.stringify(PHOTO_CREDITS)"))
print("themes:", len(themes), "cities:", len(cities), "credits:", len(credits))

phases = {"start", "morning", "lunch", "afternoon", "evening", "return"}
regions = {"capital", "gangwon", "jeolla", "gyeongsang", "jeju"}
img_dir = os.path.join(ROOT, "images")
files = set(os.listdir(img_dir))

def check_places(places, where):
    for i, p in enumerate(places):
        w = "%s.place[%d]" % (where, i)
        bi(p.get("name"), w + ".name"); bi(p.get("note"), w + ".note")
        need(p, "q", w)
        if p.get("region") not in regions:
            problems.append("%s: bad region %r" % (w, p.get("region")))

def check_course(course, where):
    need(course, "title", where); bi(course.get("title"), where + ".title")
    bi(course.get("meta"), where + ".meta")
    steps = course.get("steps") or []
    if len(steps) < 4:
        problems.append("%s: only %d steps" % (where, len(steps)))
    if not steps or steps[0].get("phase") != "start":
        problems.append("%s: first step is not start" % where)
    for j, s in enumerate(steps):
        w = "%s.step[%d]" % (where, j)
        for k in ("time", "q"):
            need(s, k, w)
        if s.get("phase") not in phases:
            problems.append("%s: bad phase %r" % (w, s.get("phase")))
        bi(s.get("name"), w + ".name"); bi(s.get("desc"), w + ".desc"); bi(s.get("move"), w + ".move")
        if not re.match(r"^\d{2}:\d{2}$", str(s.get("time", ""))):
            problems.append("%s: time not HH:MM (%r)" % (w, s.get("time")))
        if s.get("photo") and s["photo"] + ".jpg" not in files:
            problems.append("%s: photo missing %s" % (w, s["photo"]))

for t in themes:
    w = "theme:" + t["id"]
    bi(t.get("name"), w + ".name"); bi(t.get("tag"), w + ".tag")
    bi(t.get("sub"), w + ".sub"); bi(t.get("intro"), w + ".intro")
    bi(t.get("tip"), w + ".tip")
    need(t, "emoji", w)
    h = need(t, "hub", w) or {}
    bi(h.get("ko") and {"ko": h.get("ko"), "en": h.get("en")}, w + ".hub")
    need(h, "q", w + ".hub")
    if not isinstance(h.get("note"), dict):
        problems.append(w + ".hub: no note")
    else:
        bi(h["note"], w + ".hub.note")
    for f in t.get("food") or []:
        bi(f.get("slot"), w + ".food.slot"); bi(f.get("dish"), w + ".food.dish"); bi(f.get("note"), w + ".food.note")
    if not t.get("food"):
        problems.append(w + ": no food")
    if "th-%s.jpg" % t["id"] not in files:
        problems.append(w + ": cover image missing")
    for ph in t.get("photos") or []:
        if ph["file"] + ".jpg" not in files:
            problems.append(w + ": gallery image missing " + ph["file"])
        bi(ph.get("cap"), w + ".photo.cap")
        if ph["file"] not in credits:
            problems.append(w + ": no credit for " + ph["file"])
    if t["id"] + "-cover" != "x" and "th-" + t["id"] not in credits:
        problems.append(w + ": no credit for cover")
    if t.get("course"):
        check_course(t["course"], w + ".course")
    if t.get("places"):
        check_places(t["places"], w)
    if t.get("seasons4"):
        s4 = t["seasons4"]
        bi(s4.get("title"), w + ".seasons4.title")
        for si, s in enumerate(s4.get("items") or []):
            sw = "%s.season[%d]" % (w, si)
            bi(s.get("name"), sw + ".name"); bi(s.get("months"), sw + ".months")
            bi(s.get("blurb"), sw + ".blurb")
            if len(s.get("themes") or []) < 8:
                problems.append(sw + ": too few sub themes")
            for th in s.get("themes") or []:
                bi(th, sw + ".theme")
            check_places(s.get("places") or [], sw)
            check_course(s.get("course") or {}, sw + ".course")
    if not (t.get("course") or t.get("seasons4")):
        problems.append(w + ": no course")
    for c in t.get("conds") or []:
        bi(c.get("k"), w + ".cond.k"); bi(c.get("v"), w + ".cond.v")
    if t.get("subs"):
        for it in t["subs"].get("items") or []:
            bi(it.get("name"), w + ".sub.name"); bi(it.get("desc"), w + ".sub.desc")

for c in cities:
    if c["id"] + "-cover.jpg" not in files:
        problems.append("city %s: cover missing" % c["id"])
    check_course(c["courses"][0], "city:" + c["id"])

# restaurant / cafe brand names that must not appear (shop names, not dishes)
banned = ["스타벅스", "이디야", "투썸", "메가커피", "빽다방", "학림다방", "을지다방", "터방내",
          "조양방직", "마약김밥", "하남돼지집", "명동교자", "오설록", "스태픽스", "007양평"]
blob = read("assets/data.js") + read("assets/themes.js")
for b in banned:
    if b in blob:
        problems.append("banned shop name in data: " + b)

print("problems:", len(problems))
for p in problems[:60]:
    print(" -", p)
sys.exit(1 if problems else 0)
