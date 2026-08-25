from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets/projects/recent/device-provisioning"
OUT = ROOT / "output/social/device-provisioning"
OUT.mkdir(parents=True, exist_ok=True)

W, H = 1080, 1350
BG = (11, 25, 47)
WHITE = (247, 249, 255)
MUTED = (190, 201, 220)
BLUE = (53, 124, 255)
GREEN = (38, 193, 125)

def font(size, bold=False):
    candidates = [
        "/System/Library/Fonts/SFNSDisplay-Bold.otf" if bold else "/System/Library/Fonts/SFNSDisplay-Regular.otf",
        "/System/Library/Fonts/HelveticaNeue.ttc",
        "/Library/Fonts/Mark Simonson - Proxima Nova A Light.otf",
    ]
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()

def fit(img, box, crop=None):
    if crop:
        img = img.crop(crop)
    bw, bh = box
    scale = min(bw / img.width, bh / img.height)
    resized = img.resize((int(img.width * scale), int(img.height * scale)), Image.Resampling.LANCZOS)
    canvas = Image.new("RGB", box, (242, 245, 252))
    canvas.paste(resized, ((bw - resized.width) // 2, (bh - resized.height) // 2))
    return canvas

def wrap(draw, text, fnt, max_width):
    words, lines, line = text.split(), [], ""
    for word in words:
        candidate = (line + " " + word).strip()
        if draw.textbbox((0, 0), candidate, font=fnt)[2] <= max_width:
            line = candidate
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines

def make_slide(number, eyebrow, title, body, source, accent=BLUE, crop=None):
    canvas = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(canvas)
    draw.rectangle((0, 0, W, 20), fill=accent)
    draw.text((72, 72), f"{number:02d}  /  DEVICE PROVISIONING TOOLKIT", font=font(28, True), fill=accent)
    y = 140
    title_font = font(72, True)
    for line in wrap(draw, title, title_font, 920):
        draw.text((72, y), line, font=title_font, fill=WHITE)
        y += 82
    y += 10
    body_font = font(32)
    for line in wrap(draw, body, body_font, 900):
        draw.text((72, y), line, font=body_font, fill=MUTED)
        y += 44
    y += 28
    shot = fit(Image.open(source).convert("RGB"), (936, 760), crop=crop)
    canvas.paste(shot, (72, y))
    draw.rounded_rectangle((72, y, 1008, y + 760), radius=22, outline=accent, width=4)
    draw.text((72, 1270), "Research / practical decisions / safer deployment", font=font(24, True), fill=accent)
    return canvas

home = ASSETS / "home.png"
guide = ASSETS / "security-guide.png"

slides = [
    (1, "THE DECISION", "Choosing a device is a security decision.", "The toolkit compares personal, business and government use—not just price or specifications.", home, BLUE, None),
    # The second slide uses the recommendation/listings area as a detail view so
    # the carousel shows progression rather than repeating the opening frame.
    (2, "THE WORKFLOW", "Make the trade-off visible.", "Recommendations combine hardware, software, compliance and security posture in one place.", home, GREEN, (0, 360, 1200, 1550)),
    (3, "THE OUTCOME", "Every recommendation comes with a security guide.", "Clear setup, hardening and recovery guidance turns a purchase into a safer deployment.", guide, GREEN, None),
]

for number, eyebrow, title, body, source, accent, crop in slides:
    make_slide(number, eyebrow, title, body, source, accent, crop).save(OUT / f"{number:02d}.jpg", quality=94, optimize=True)

print(OUT)
