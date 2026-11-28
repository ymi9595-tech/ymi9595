#!/usr/bin/env python3
"""Fetch the 22 theme cover/step photos from Wikimedia Commons.

Each entry: slot -> (search query, substring that must appear in the file title,
                     korean caption, english caption)
Writes images/<slot>.jpg, merges images/credits.json and regenerates assets/credits.js.
"""
import json, os, re, sys, urllib.request
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from commons import api, search, UA

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(ROOT, "images")
os.makedirs(IMG, exist_ok=True)

SPEC = [
    ("th-mountain", "Seoraksan autumn", "Landscape in Seoraksan National Park 1", "설악산 국립공원의 능선", "A ridge in Seoraksan National Park"),
    ("th-mountain-p2", "Dobongsan trail", "Trail leading to peak of Dobongsan", "도봉산 정상으로 가는 길", "The trail to the Dobongsan summit"),
    ("th-coast", "Tongyeong Hallyeo waterway", "Cable Car-02", "한려수도를 보는 케이블카", "The cable car over the Hallyeo waterway"),
    ("th-coast-p2", "coastal road Korea sea", "coastal road of Yokjido", "바다를 낀 해안도로", "A coastal road beside the sea"),
    ("th-play", "Everland T Express", "T Express Everland", "에버랜드의 어트랙션", "A ride at Everland"),
    ("th-play-p2", "Everland Theme Park", "Everland Theme Park in Seoul", "놀이공원의 풍경", "Inside the theme park"),
    ("th-market", "Gwangjang Market", "Gwangjang Market, Seoul 01", "광장시장의 좌판", "Stalls at Gwangjang Market"),
    ("th-market-p2", "Gwangjang Market", "Gwangjang Market, Seoul 02", "시장 골목의 풍경", "A market alley"),
    ("th-festival", "Jinju Namgang lantern festival", "Lantern Festival 20111002", "진주 남강의 유등", "Lanterns on the Namgang in Jinju"),
    ("th-festival-p2", "Jinju namgang lantern festival", "lantern castle", "축제장의 등 조형물", "A lantern sculpture at the festival"),
    ("th-onsen", "outdoor public hot spring Yuseong", "foot bath at an outdoor public hot spring", "온천 거리의 족욕장", "A foot bath at a public hot spring"),
    ("th-onsen-p2", "Korean bathhouse", "찜질방 불가마", "찜질방의 불가마", "The kiln sauna inside a jjimjilbang"),
    ("th-hanok", "Bukchon Hanok Village", "Bukchon-ro 11-gil street with hanok houses at blue hour", "북촌의 한옥 골목", "A hanok alley in Bukchon"),
    ("th-hanok-p2", "Changdeokgung palace", "Daejojeon Hall of Changdeokgung", "창덕궁의 전각", "A hall at Changdeokgung Palace"),
    ("th-farm", "buckwheat field Korea", "Bongpyeong buckwheat field", "봉평의 메밀밭", "The buckwheat fields at Bongpyeong"),
    ("th-farm-p2", "rice paddy harvest Korea", "autumn rice field ready for harvesting", "수확을 앞둔 논", "A rice field ready for harvest"),
    ("th-animal", "sheep ranch Korea", "Sheep ranch", "초원의 양", "Sheep in the pasture"),
    ("th-animal-p2", "Alpaca World", "Alpaca Walking Hour", "목장의 알파카", "Alpacas at the farm"),
    ("th-night", "Gwangalli night", "Busan Gwangalli Night", "광안대교의 야경", "Gwangandaegyo bridge at night"),
    ("th-night-p2", "Seoul night skyline", "Seoul city skyline at night from Namsan", "도시의 야경", "City lights at night"),
    ("th-hotel", "Haeundae hotel", "Haeundae Grand Hotel", "해운대의 호텔", "A hotel at Haeundae"),
    ("th-hotel-p2", "Haeundae Beach", "Haeundae Beach 20200522 005", "해운대 해변", "Haeundae Beach"),
    ("th-beauty", "Gangnam street Seoul", "Teheran-ro Yeongdong-daero crossing", "강남의 거리", "A street in Gangnam"),
    ("th-beauty-p2", "Seoul night skyline", "Seoul Night Skyline 2022", "해 질 무렵의 도시", "The city at dusk"),
    ("th-drama", "Suncheon Open Set", "Suncheon Open Film Set 02", "촬영장의 옛 거리", "An old street on the Suncheon film set"),
    ("th-drama-p2", "Suncheon garden", "Suncheon Bay National Garden- Part II - SuncheonBNG2945", "순천만국가정원", "Suncheon Bay National Garden"),
    ("th-dog", "Jindo dog", "Korean Jindo dog", "반려견", "A dog"),
    ("th-dog-p2", "Korean dog", "Sapsal dog in front of a Hanok Village", "한옥마을 앞의 반려견", "A dog in front of a hanok village"),
    ("th-healing", "Korean temple forest", "Naesosa Temple", "산사의 풍경", "A mountain temple"),
    ("th-healing-p2", "비자나무숲", "비자나무숲", "비자나무 숲길", "A path through nutmeg trees"),
    ("th-hidden", "Gwangmyeong cave", "230902 Gwangmyeong Cave 01", "광명동굴", "Gwangmyeong Cave"),
    ("th-hidden-p2", "청령포", "청령포2", "청령포의 강", "The river at Cheongnyeongpo"),
    ("th-photo", "Pocheon Art Valley", "포천 아트밸리 beeniru 3", "포천아트밸리의 호수", "The lake at Pocheon Art Valley"),
    ("th-photo-p2", "herb garden Korea", "Herb Island-Sunflower", "허브아일랜드의 꽃밭", "Flower beds at Herb Island"),
    ("th-retro", "Gunsan Japanese house", "Japanese-style House in Sinheung-dong, Gunsan 04", "군산 신흥동의 일본식 가옥", "A Japanese-style house in Gunsan"),
    ("th-retro-p2", "Gunsan Japanese house", "Japanese-style House in Sinheung-dong, Gunsan 12", "근대 가옥의 골목", "A lane of modern-era houses"),
    ("th-sunrise", "sunrise East Sea Korea", "Full-orbed sunrise over East Sea", "동해의 일출", "Sunrise over the East Sea"),
    ("th-sunrise-p2", "Jeongdongjin", "Jeongdongjin Station 1", "정동진역", "Jeongdongjin Station"),
    ("th-camp", "glamping dome", "In Glamping (Marineping) dome - 1", "돔 형태의 글램핑 숙소", "A dome glamping unit"),
    ("th-camp-p2", "glamping dome", "In Glamping (Marineping) dome - 2", "글램핑 사이트", "A glamping pitch"),
    ("th-museum", "National Museum of Korea interior", "Interior View of the National Museum of Korea", "국립중앙박물관 전시실", "Inside the National Museum of Korea"),
    ("th-museum-p2", "Gyeongju National Museum", "Gyeongju National Museum.jpg", "국립경주박물관", "Gyeongju National Museum"),
    ("th-seasons", "Jinhae cherry blossom", "Cherry Blossom in Jinhae", "진해의 벚꽃", "Cherry blossom in Jinhae"),
    ("th-seasons-p2", "Naejangsan autumn", "Naejangsan Pavilion 2", "내장산의 가을", "Naejangsan in autumn"),
]

def info_for_titles(titles):
    d = api({"action": "query", "titles": "|".join(titles), "prop": "imageinfo",
             "iiprop": "url|size|mime|extmetadata", "iiurlwidth": 1400})
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

def download(url, dest):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=90) as r, open(dest, "wb") as f:
        f.write(r.read())

def main():
    credits_path = os.path.join(IMG, "credits.json")
    credits = json.load(open(credits_path)) if os.path.exists(credits_path) else {}
    if not credits:
        # seed from the existing generated file
        js = open(os.path.join(ROOT, "assets", "credits.js"), encoding="utf-8").read()
        body = js[js.index("{"): js.rindex("}") + 1]
        credits = json.loads(body)
    unresolved = []
    for slot, q, needle, cap_ko, cap_en in SPEC:
        dest = os.path.join(IMG, slot + ".jpg")
        if os.path.exists(dest) and "--force" not in sys.argv:
            print("skip", slot)
            continue
        cands = [c for c in search(q, 12) if needle.lower() in c["title"].lower()
                 and c["mime"] in ("image/jpeg", "image/png")]
        if not cands:
            unresolved.append((slot, q, needle))
            print("!! not found", slot, q, needle)
            continue
        title = cands[0]["title"]
        meta = info_for_titles([title]).get(title)
        if not meta:
            unresolved.append((slot, title, "no meta"))
            continue
        download(meta["thumb"], dest)
        credits[slot] = dict(meta, q=q, caption={"ko": cap_ko, "en": cap_en})
        print(f"ok {slot:16s} {meta['w']}x{meta['h']} {meta['license'][:14]:14s} {title[:70]}")
    json.dump(credits, open(credits_path, "w"), ensure_ascii=False, indent=1)

    # regenerate assets/credits.js
    keys = sorted(credits)
    lines = ["/* photo credits — Wikimedia Commons */", "const PHOTO_CREDITS = {"]
    for i, k in enumerate(keys):
        c = credits[k]
        obj = {kk: c.get(kk) for kk in ("title", "author", "license", "licenseurl", "page") if c.get(kk)}
        txt = json.dumps(obj, ensure_ascii=False, indent=1)
        txt = "\n".join(" " + ln for ln in txt.split("\n"))
        lines.append(f' "{k}": {txt},')
    lines.append("};")
    open(os.path.join(ROOT, "assets", "credits.js"), "w", encoding="utf-8").write("\n".join(lines) + "\n")
    print("credits:", len(keys), "entries; unresolved:", unresolved)

if __name__ == "__main__":
    main()
