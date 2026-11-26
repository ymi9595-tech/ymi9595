# 정 · Jeong — a little Korea, every day

A free, single-page English portal with four small Korean tools:

1. **My Korean name & this year's luck** — a real Korean given name matched to the feeling you choose, with its meaning, your 띠 (zodiac animal), and today's lucky food, colour and phrase. Saves as a 1000×1400 PNG card.
2. **Hanok rain focus timer** — a 25/5 pomodoro with rain and wind chimes generated live through the Web Audio API (no audio files), over an animated hanok veranda.
3. **Warm Korean phrases** — 41 original, gentle everyday Korean lines with romanisation, English meaning, speech playback, and a downloadable postcard.
4. **K-food home kitchen** — 8 Korean home recipes whose ingredient amounts re-measure for 1–4 servings, plus grocery notes and shelf phrases for Korean and Asian markets.

Everything runs in the browser. No accounts, no tracking. Latin type (Plus Jakarta Sans,
Fredoka) is self-hosted from `assets/fonts/` as static subset weights; the Korean display
faces (Jua, Gaegu) and Noto Sans KR come from Google Fonts.

## Design (2026-11 renewal)

Seongsu-dong pastel / K-pop photocard mood: milk cream, soft coral, lilac, sky blue and
sage mint, 24px+ rounded corners, masking tape, hand-placeable stickers and floating
bubbles. Type is **Plus Jakarta Sans** + **Fredoka** (Latin), **Jua** (Korean display),
**Gaegu** (handwriting) and **Noto Sans KR** (Korean body) — the canvas card and postcard
renderers use the same families.

Static site — open `index.html` or visit
<https://ymi9595-tech.github.io/ymi9595/korea-vibe/>.

## Shop & support links (2026-11-26)

Nothing on the page is gated. Four soft CTAs sit at the foot of the tools (phrase pack on
name / phrases / kitchen, colouring book on the rain timer), and the shop band lists six
cards — every one opens in a new tab with `rel="noopener noreferrer"`:

| Card | Price | Link |
|---|---|---|
| 100 Essential Daily Korean Expressions | $12.99 | <https://payhip.com/b/w0eXl> |
| Cozy Korean Countryside Coloring Book | $6.99 | <https://payhip.com/b/QHgIV> |
| The Little Bookshop of the Heart (10 journals) | $49 | <https://3511470888771.gumroad.com/l/little-bookshop-of-the-heart-10-journals> |
| K-Food Farm Kitchen (YouTube) | free | <https://www.youtube.com/@KFoodFarmKitchen> |
| Seoul Study Café Ambience (YouTube) | free | <https://www.youtube.com/@SeoulStudyCafeBGM> |
| Buy Danbi Lab a coffee (Ko-fi) | tip | <https://ko-fi.com/danbilab> |

Ko-fi mirrors (expression pack, colouring book) and the full Payhip store
(<https://payhip.com/DanbiLab>) sit under the grid. `assets/og-cover.png` (1200×630) is the
Open Graph / Twitter image; title, description, OG, Twitter and JSON-LD (WebSite +
WebApplication) live in `<head>`.
