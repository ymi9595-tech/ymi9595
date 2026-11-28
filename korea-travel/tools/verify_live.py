#!/usr/bin/env python3
"""Live verification: screenshots + layout/image/console checks."""
import asyncio, json, os, sys
from playwright.async_api import async_playwright

BASE = "https://ymi9595-tech.github.io/ymi9595/korea-travel/"
OUT = "/workspace/downloads/korea-travel-shots-v2"
os.makedirs(OUT, exist_ok=True)

SHOPS = ["스타벅스", "이디야", "투썸", "메가커피", "빽다방", "학림다방", "을지다방", "터방내",
         "조양방직", "오설록", "스태픽스", "하남돼지집", "명동교자"]

async def measure(pg, label, out):
    m = await pg.evaluate("""() => {
      const de = document.documentElement;
      const imgs = [...document.images];
      const wide = [...document.querySelectorAll('body *')].filter(el => {
        const r = el.getBoundingClientRect();
        return r.width > 0 && (r.right > innerWidth + 1 || r.left < -1);
      }).slice(0, 5).map(el => el.tagName + '.' + (el.className || '') );
      return { vw: innerWidth, vh: innerHeight, scrollW: de.scrollWidth,
               overflow: de.scrollWidth - de.clientWidth,
               imgs: imgs.length,
               broken: imgs.filter(i => i.complete && i.naturalWidth === 0).length,
               pending: imgs.filter(i => !i.complete).length,
               wide, h: (document.querySelector('#detail h2') || document.querySelector('h1')).innerText,
               themeCards: document.querySelectorAll('#themeGrid .card').length,
               sideItems: document.querySelectorAll('.sitem').length,
               drawer: document.body.classList.contains('side-open') };
    }""")
    text = await pg.evaluate("document.body.innerText")
    m["shops"] = [s for s in SHOPS if s in text]
    m["label"] = label
    out.append(m)

async def run():
    out = []
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--no-sandbox"])
        ctx = await b.new_context(viewport={"width": 1280, "height": 800}, device_scale_factor=2)
        pg = await ctx.new_page()
        errs, failed = [], []
        pg.on("console", lambda m: errs.append(m.type + ": " + m.text) if m.type in ("error",) else None)
        pg.on("pageerror", lambda e: errs.append("pageerror: " + str(e)))
        pg.on("requestfailed", lambda r: failed.append(r.url.split("/")[-1] + " " + str(r.failure)))

        async def go(url, wait=1200):
            await pg.goto(url, wait_until="networkidle")
            await pg.wait_for_timeout(wait)

        # 1 desktop home
        await go(BASE + "?v=21")
        await pg.evaluate("window.scrollTo(0,0)")
        await pg.wait_for_timeout(400)
        await measure(pg, "desktop home", out)
        await pg.screenshot(path=f"{OUT}/desk-01-home-1280.png")

        # 2 theme list section
        await pg.evaluate("document.querySelector('#themes').scrollIntoView({block:'start'})")
        await pg.wait_for_timeout(700)
        await pg.screenshot(path=f"{OUT}/desk-02-theme-cards.png")

        # 3 dog theme detail
        await go(BASE + "#t-dog")
        await pg.wait_for_timeout(900)
        await measure(pg, "desktop theme dog", out)
        await pg.screenshot(path=f"{OUT}/desk-03-theme-dog.png")
        await pg.evaluate("window.scrollTo(0, 1500)")
        await pg.wait_for_timeout(700)
        await pg.screenshot(path=f"{OUT}/desk-04-theme-dog-course.png")

        # 4 seasons theme + tab switch
        await go(BASE + "#t-seasons")
        await pg.wait_for_timeout(700)
        await measure(pg, "desktop theme seasons", out)
        await pg.screenshot(path=f"{OUT}/desk-05-theme-seasons.png")
        try:
            await pg.click(".season-tabs [data-season='3']")
            await pg.wait_for_timeout(700)
            await pg.screenshot(path=f"{OUT}/desk-06-seasons-winter.png")
        except Exception as e:
            out.append({"label": "season tab click failed", "err": str(e)})

        # 5 hanok theme (25 sub themes, conds)
        await go(BASE + "#t-hanok")
        await pg.wait_for_timeout(600)
        await measure(pg, "desktop theme hanok", out)
        await pg.screenshot(path=f"{OUT}/desk-07-theme-hanok.png")

        # 6 EN switch on the dog theme
        await go(BASE + "#t-dog")
        await pg.click(".top .lang [data-lang='en']")
        await pg.wait_for_timeout(800)
        await measure(pg, "desktop theme dog EN", out)
        await pg.screenshot(path=f"{OUT}/desk-08-theme-dog-en.png")
        await pg.click(".top .lang [data-lang='ko']")
        await pg.wait_for_timeout(500)

        # 7 city detail still works
        await go(BASE + "#busan")
        await pg.wait_for_timeout(600)
        await measure(pg, "desktop city busan", out)
        await pg.screenshot(path=f"{OUT}/desk-09-city-busan.png")

        # 8 credits modal
        await go(BASE + "?v=21")
        await pg.click("#creditOpen")
        await pg.wait_for_timeout(900)
        await pg.screenshot(path=f"{OUT}/desk-10-credits.png")
        await pg.keyboard.press("Escape")

        # mobile
        m = await b.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2,
                                is_mobile=True, has_touch=True)
        mp = await m.new_page()
        mctx_errors = []
        mp.on("pageerror", lambda e: mctx_errors.append(str(e)))
        mp.on("console", lambda msg: mctx_errors.append("console: " + msg.text) if msg.type == "error" else None)
        await mp.goto(BASE + "?v=21", wait_until="networkidle")
        await mp.wait_for_timeout(1000)
        await measure(mp, "mobile home", out)
        await mp.screenshot(path=f"{OUT}/mob-01-home.png")
        await mp.click("#navBtn")
        await mp.wait_for_timeout(600)
        await measure(mp, "mobile drawer open", out)
        await mp.screenshot(path=f"{OUT}/mob-02-drawer.png")
        await mp.click("#sideTabs [data-tab='themes']")
        await mp.wait_for_timeout(500)
        await mp.screenshot(path=f"{OUT}/mob-03-drawer-themes.png")
        await mp.click(".side-list .sitem >> nth=13")   # 반려견
        await mp.wait_for_timeout(1200)
        await measure(mp, "mobile theme dog", out)
        await mp.screenshot(path=f"{OUT}/mob-04-theme-dog.png")
        await mp.evaluate("window.scrollTo(0, 900)")
        await mp.wait_for_timeout(600)
        await mp.screenshot(path=f"{OUT}/mob-05-theme-dog-scrolled.png")

        out.append({"label": "console errors", "desktop": errs[:8], "mobile": mctx_errors[:8], "failed": failed[:8]})
        await b.close()
    print(json.dumps(out, ensure_ascii=False, indent=1))

asyncio.run(run())
