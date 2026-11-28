#!/usr/bin/env python3
"""Screenshot + layout checks for the Korea travel guide."""
import json, os, sys
from playwright.sync_api import sync_playwright

URL = sys.argv[1] if len(sys.argv) > 1 else "https://ymi9595-tech.github.io/ymi9595/korea-travel/"
OUT = sys.argv[2] if len(sys.argv) > 2 else "/workspace/downloads/korea-travel-shots"
os.makedirs(OUT, exist_ok=True)
report = {}

with sync_playwright() as p:
    b = p.chromium.launch()
    errors = []

    def newpage(w, h, mobile=False):
        ctx = b.new_context(viewport={"width": w, "height": h}, device_scale_factor=2,
                            is_mobile=mobile, has_touch=mobile,
                            user_agent=("Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1" if mobile else None))
        pg = ctx.new_page()
        pg.on("console", lambda m: errors.append(f"{m.type}: {m.text}") if m.type in ("error", "warning") else None)
        pg.on("pageerror", lambda e: errors.append(f"pageerror: {e}"))
        return ctx, pg

    # ---------- desktop
    ctx, pg = newpage(1280, 800)
    pg.goto(URL, wait_until="networkidle")
    pg.wait_for_timeout(1200)
    report["cards"] = pg.locator(".card").count()
    report["overflow_desktop"] = pg.evaluate("document.documentElement.scrollWidth - window.innerWidth")
    pg.screenshot(path=f"{OUT}/01-cover-desktop-1280x800.png")
    pg.screenshot(path=f"{OUT}/02-cover-desktop-full.png", full_page=True)

    # detail view
    pg.click("[data-city='busan']")
    pg.wait_for_timeout(1400)
    report["busan_steps"] = pg.locator("#city .step").count()
    report["busan_imgs_broken"] = pg.evaluate("""Array.from(document.querySelectorAll('#city img')).filter(i=>!i.complete||i.naturalWidth===0).length""")
    pg.screenshot(path=f"{OUT}/03-busan-detail-desktop-1280x800.png")
    pg.screenshot(path=f"{OUT}/04-busan-detail-desktop-full.png", full_page=True)

    # EN toggle
    pg.click("#city [data-lang='en']")
    pg.wait_for_timeout(700)
    report["en_title"] = pg.evaluate("document.querySelector('#city h2') && document.querySelector('#city h2').innerText")
    pg.screenshot(path=f"{OUT}/05-busan-detail-EN-desktop-1280x800.png")
    pg.click("#city [data-close]")
    pg.wait_for_timeout(500)
    pg.screenshot(path=f"{OUT}/06-cover-EN-desktop-1280x800.png")
    report["overflow_desktop_en"] = pg.evaluate("document.documentElement.scrollWidth - window.innerWidth")
    ctx.close()

    # ---------- mobile
    ctx, pg = newpage(390, 844, mobile=True)
    pg.goto(URL, wait_until="networkidle")
    pg.wait_for_timeout(1200)
    # language persisted as EN from previous context? localStorage is per-context, so KR here.
    report["lang_mobile"] = pg.evaluate("document.documentElement.lang")
    report["overflow_mobile"] = pg.evaluate("document.documentElement.scrollWidth - window.innerWidth")
    pg.screenshot(path=f"{OUT}/07-cover-mobile-390x844.png")
    pg.screenshot(path=f"{OUT}/08-cover-mobile-full.png", full_page=True)
    pg.click("[data-city='jeju']")
    pg.wait_for_timeout(1400)
    report["overflow_mobile_city"] = pg.evaluate("document.querySelector('#city').scrollWidth - document.querySelector('#city').clientWidth")
    pg.screenshot(path=f"{OUT}/09-jeju-detail-mobile-390x844.png")
    pg.screenshot(path=f"{OUT}/10-jeju-detail-mobile-full.png", full_page=False)
    pg.click("#city [data-lang='en']")
    pg.wait_for_timeout(600)
    pg.screenshot(path=f"{OUT}/11-jeju-detail-EN-mobile-390x844.png")
    ctx.close()
    b.close()

report["errors"] = errors[:20]
print(json.dumps(report, ensure_ascii=False, indent=1))
print("files:", sorted(os.listdir(OUT)))
