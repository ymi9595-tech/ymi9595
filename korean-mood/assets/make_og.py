#!/usr/bin/env python3
"""Build the 1200x630 Open Graph cover for Today's Korean Mood."""
from PIL import Image, ImageDraw, ImageFont
import random

W, H = 1200, 630
SERIF_KR = "/usr/share/fonts/opentype/pickle-hwp/NotoSerifCJKkr-Regular.otf"
SANS = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"
SANS_B = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"
SERIF = "/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf"
SERIF_I = "/usr/share/fonts/truetype/liberation/LiberationSerif-Italic.ttf"

INK = (34, 29, 24)
SOFT = (78, 70, 60)
FAINT = (124, 114, 99)
GOLD = (176, 141, 63)
ACCENT = (60, 74, 114)
SEAL = (168, 67, 58)

img = Image.new("RGB", (W, H), (251, 246, 232))
d = ImageDraw.Draw(img)

# soft paper wash
wash = Image.new("L", (W, H), 255)
wd = ImageDraw.Draw(wash)
for r in range(520, 0, -8):
    a = int(16 * (1 - r / 520))
    wd.ellipse([60 - r, -180 - r, 60 + r, -180 + r], fill=255 - a)
img = Image.composite(Image.new("RGB", (W, H), (255, 253, 246)), img, wash)
img.paste(Image.linear_gradient("L").resize((W, H)).rotate(180), (0, 0), Image.linear_gradient("L").resize((W, H)).rotate(180).point(lambda v: int(v * 0.10)))

d = ImageDraw.Draw(img, "RGBA")

# grain
random.seed(7)
for _ in range(9000):
    x, y = random.randrange(W), random.randrange(H)
    d.point((x, y), fill=(120, 96, 52, random.randint(6, 20)))

# frames
d.rectangle([26, 26, W - 26, H - 26], outline=(176, 141, 63, 120), width=2)
d.rectangle([38, 38, W - 38, H - 38], outline=(176, 141, 63, 70), width=1)

# corner brackets
for (cx, cy, sx, sy) in [(56, 56, 1, 1), (W - 56, 56, -1, 1), (56, H - 56, 1, -1), (W - 56, H - 56, -1, -1)]:
    d.line([(cx + 30 * sx, cy), (cx, cy), (cx, cy + 30 * sy)], fill=(176, 141, 63, 200), width=2)

# seal
d.rectangle([W - 112, 62, W - 68, 106], fill=(168, 67, 58, 235))
f_seal = ImageFont.truetype(SERIF_KR, 24)
d.text((W - 90, 84), "丹", font=f_seal, fill=(253, 246, 233), anchor="mm")


def tracked(draw, xy, text, font, fill, spacing):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + spacing


def tracked_w(draw, text, font, spacing):
    return sum(draw.textlength(c, font=font) + spacing for c in text) - spacing


f_eyebrow = ImageFont.truetype(SANS_B, 17)
f_mood = ImageFont.truetype(SANS_B, 19)
f_hangul = ImageFont.truetype(SERIF_KR, 132)
f_roman = ImageFont.truetype(SERIF_I, 34)
f_meaning = ImageFont.truetype(SANS, 26)
f_foot = ImageFont.truetype(SANS_B, 20)
f_foot2 = ImageFont.truetype(SANS, 15)

y = 84
t = "TODAY'S KOREAN MOOD"
tracked(d, ((W - tracked_w(d, t, f_eyebrow, 6)) / 2, y), t, f_eyebrow, FAINT, 6)

t = "MIDNIGHT IN SEOUL"
tracked(d, ((W - tracked_w(d, t, f_mood, 4)) / 2, y + 26), t, f_mood, ACCENT, 4)

d.line([(W / 2 - 34, 152), (W / 2 + 34, 152)], fill=(176, 141, 63, 120), width=1)

# hangul
d.text((W / 2, 272), "윤슬", font=f_hangul, fill=INK, anchor="mm")

# romanisation
d.text((W / 2, 378), "yunseul", font=f_roman, fill=ACCENT, anchor="mm")

# rule with diamond
ry = 416
d.line([(W / 2 - 150, ry), (W / 2 - 14, ry)], fill=(176, 141, 63, 160), width=1)
d.line([(W / 2 + 14, ry), (W / 2 + 150, ry)], fill=(176, 141, 63, 160), width=1)
d.polygon([(W / 2, ry - 5), (W / 2 + 5, ry), (W / 2, ry + 5), (W / 2 - 5, ry)], fill=ACCENT)

# meaning
d.text((W / 2, 462), "moonlight scattered on moving water", font=f_meaning, fill=INK, anchor="mm")

# footer
d.line([(W / 2 - 210, H - 104), (W / 2 + 210, H - 104)], fill=(34, 29, 24, 26), width=1)
t = "DanbiLab"
tracked(d, ((W - tracked_w(d, t, f_foot, 3)) / 2, H - 92), t, f_foot, ACCENT, 3)
t = "danbilab.substack.com  ·  free daily Korean cards"
tracked(d, ((W - tracked_w(d, t, f_foot2, 1)) / 2, H - 62), t, f_foot2, FAINT, 1)

img.save("assets/og-cover.png", optimize=True)
print("saved", img.size)
