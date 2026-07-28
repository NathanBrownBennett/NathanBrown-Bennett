"""Build the public Portfolio and ATS CV PDFs from one shared, verified profile."""

from pathlib import Path
from textwrap import wrap

from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf"
OUT.mkdir(parents=True, exist_ok=True)

PAGE_W, PAGE_H = A4
NAVY = HexColor("#0a192f")
PANEL = HexColor("#112a46")
INK = HexColor("#172a45")
TEXT = HexColor("#40536d")
MUTED = HexColor("#718096")
ACCENT = HexColor("#00bfa5")
PALE = HexColor("#eaf2f8")
RULE = HexColor("#cfdae5")


def paragraph_lines(text, font, size, width):
    words = text.split()
    lines, line = [], ""
    for word in words:
        candidate = word if not line else f"{line} {word}"
        if stringWidth(candidate, font, size) <= width:
            line = candidate
        else:
            lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def draw_text(c, text, x, y, width, font="Helvetica", size=9, leading=None, color=TEXT):
    leading = leading or size * 1.35
    c.setFillColor(color)
    c.setFont(font, size)
    for line in paragraph_lines(text, font, size, width):
        c.drawString(x, y, line)
        y -= leading
    return y


def section_label(c, label, x, y, width, dark=False):
    color = ACCENT if dark else NAVY
    c.setFillColor(color)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(x, y, label.upper())
    c.setStrokeColor(HexColor("#36506f") if dark else RULE)
    c.setLineWidth(0.6)
    c.line(x, y - 5, x + width, y - 5)
    return y - 18


def portfolio_cv(path):
    c = canvas.Canvas(str(path), pagesize=A4)
    margin = 30
    left_w = 168
    gutter = 24
    right_x = margin + left_w + gutter
    right_w = PAGE_W - margin - right_x

    c.setFillColor(NAVY)
    c.rect(0, 0, left_w + margin + 12, PAGE_H, stroke=0, fill=1)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(margin, PAGE_H - 48, "PROJECT FOCUS")
    c.setFillColor(ACCENT)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(margin, PAGE_H - 63, "CYBERSECURITY + PRODUCT SYSTEMS")

    y = PAGE_H - 88
    for title, detail in [
        ("Inspector", "Controlled, hands-on cybersecurity learning for institutions."),
        ("MyMark", "Media-provenance research for abuse and sextortion response."),
        ("Business systems", "Useful operations, workflow and live-production tooling."),
    ]:
        c.setFillColor(white)
        c.setFont("Helvetica-Bold", 8.3)
        c.drawString(margin, y, title)
        y -= 11
        y = draw_text(c, detail, margin, y, left_w, size=7.6, leading=10.3, color=PALE)
        y -= 6

    y -= 10
    y = section_label(c, "Profile", margin, y, left_w, dark=True)
    y = draw_text(
        c,
        "Product-minded cybersecurity and software professional who finds what people or organisations need and turns unclear, inefficient or risky work into practical systems people can use.",
        margin,
        y,
        left_w,
        size=8.5,
        leading=12,
        color=PALE,
    )

    y -= 12
    y = section_label(c, "Capabilities", margin, y, left_w, dark=True)
    for item in [
        "Security engineering and OSINT",
        "Python, JavaScript and C#",
        "React, Express and Flask",
        "SQLite, Docker and WebSockets",
        "Splunk, Datadog and automation",
        "Product design and mentoring",
        "IT administration and operations",
    ]:
        y = draw_text(c, f"• {item}", margin, y, left_w, size=8.1, leading=12, color=PALE)

    y -= 8
    y = section_label(c, "Education", margin, y, left_w, dark=True)
    entries = [
        ("PGDip Network & Information Security", "Distinction, Kingston University London, 2026. Capstone: MyMark."),
        ("BSc Cyber Security & Digital Forensics", "2:1, Kingston University, 2024. Dissertation led to the Device Provisioning Toolkit."),
        ("A-Level EPQ", "Security vs Practicality research project."),
    ]
    for title, detail in entries:
        c.setFillColor(white)
        c.setFont("Helvetica-Bold", 8.2)
        c.drawString(margin, y, title)
        y -= 11
        y = draw_text(c, detail, margin, y, left_w, size=7.7, leading=10.5, color=PALE)
        y -= 8

    y -= 1
    y = section_label(c, "References", margin, y, left_w, dark=True)
    y = draw_text(c, "Mr. Gavin Ngulube - Director, Xeyus Ltd", margin, y, left_w, size=7.7, leading=10.5, color=PALE)
    y -= 4
    draw_text(c, "Mr. Jonathan Coleman - Director, Lunarversal", margin, y, left_w, size=7.7, leading=10.5, color=PALE)

    y = PAGE_H - 48
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 16)
    c.drawString(right_x, y, "Nathan Brown-Bennett")
    c.setFillColor(TEXT)
    c.setFont("Helvetica", 8.2)
    c.drawString(right_x, y - 15, "Nathanbrown-bennett@hotmail.com | github.com/NathanBrownBennett | London, UK")
    y -= 50

    y = section_label(c, "Experience", right_x, y, right_w)
    experience = [
        ("IT & Administration Support (Intermittent)", "GMT Electrical Services Ltd", "Jul 2025-Present", "Developed the company website and a staff portal for timesheets, audit checks and job cards; supports email, invoicing, calls and operational coordination."),
        ("Project & Creative Director, Trustee", "CERRF", "May-Jun 2025", "Directed Inspector and HackerGo cybersecurity learning tools across workshops, product storytelling, UX/UI, GitHub integration and MVP delivery."),
        ("Student Mentor & Teaching Assistant", "Kingston University London", "Jan-Mar 2025", "Supported undergraduate labs in Splunk, Datadog, AI automation, cloud data systems and Linux-based technical work."),
        ("Systems Engineer & Data Analyst", "Lunarversal", "2023-2025", "Worked across monitoring, Salesforce automation, GitHub access and testing, API configuration, OAuth and token-based integrations."),
        ("Security Engineer", "Xeyus Ltd", "2022-2023", "Delivered penetration-testing support, security consultancy and GDPR-focused technical work."),
    ]
    for title, company, date, detail in experience:
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 8.8)
        c.drawString(right_x, y, title)
        c.setFillColor(MUTED)
        c.setFont("Helvetica-Bold", 7.4)
        c.drawRightString(right_x + right_w, y, date)
        y -= 11
        c.setFillColor(TEXT)
        c.setFont("Helvetica-Bold", 7.7)
        c.drawString(right_x, y, company)
        y -= 11
        y = draw_text(c, detail, right_x, y, right_w, size=7.65, leading=10.4)
        y -= 8

    y -= 2
    y = section_label(c, "Selected builds", right_x, y, right_w)
    builds = [
        ("Inspector", "Institution-pilot cybersecurity learning platform with story-led lessons, a block command editor, isolated Docker terminals and a beta Containerlab network editor.", "Express, WebSockets, SQLite, Docker, PASETO, Containerlab"),
        ("MyMark", "Postgraduate Diploma capstone: a privacy-aware media-provenance and anti-abuse research system addressing image-based abuse and sextortion through accountable verification.", "Python, FastAPI, Vue, Electron, SQLite, Ed25519"),
        ("FlowCue", "Public-beta local/LAN show controller synchronising controller, performer and audience screens for churches, business presentations and live stages.", "React, Vite, Express, Socket.IO, SQLite, Electron"),
        ("Device Provisioning Toolkit", "Security-focused comparison and provisioning web app developed from the undergraduate dissertation.", "Python, Flask, SQLite, Graphviz, Pandas"),
    ]
    for title, detail, stack in builds:
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 8.8)
        c.drawString(right_x, y, title)
        y -= 11
        y = draw_text(c, detail, right_x, y, right_w, size=7.6, leading=10.1)
        c.setFillColor(ACCENT)
        c.setFont("Helvetica-Bold", 7.1)
        c.drawString(right_x, y, stack)
        y -= 17

    c.setStrokeColor(RULE)
    c.line(right_x, 28, PAGE_W - margin, 28)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 6.8)
    c.drawRightString(PAGE_W - margin, 16, "Public CV - residential address and phone available privately on request")
    c.save()


def ats_cv(path):
    c = canvas.Canvas(str(path), pagesize=A4)
    margin = 42
    width = PAGE_W - 2 * margin

    c.setFillColor(NAVY)
    c.rect(0, PAGE_H - 124, PAGE_W, 124, stroke=0, fill=1)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 22)
    c.drawString(margin, PAGE_H - 52, "Nathan Brown-Bennett")
    c.setFont("Helvetica-Bold", 10)
    c.setFillColor(ACCENT)
    c.drawString(margin, PAGE_H - 70, "CYBERSECURITY | SOFTWARE DEVELOPMENT | BUSINESS SYSTEMS")
    c.setFont("Helvetica", 8.6)
    c.setFillColor(PALE)
    c.drawString(margin, PAGE_H - 94, "Nathanbrown-bennett@hotmail.com | github.com/NathanBrownBennett | London, UK | Phone available on request")

    y = PAGE_H - 150
    def heading(label, y_value):
        c.setFillColor(NAVY)
        c.setFont("Helvetica-Bold", 10)
        c.drawString(margin, y_value, label.upper())
        c.setStrokeColor(ACCENT)
        c.setLineWidth(1)
        c.line(margin, y_value - 5, margin + width, y_value - 5)
        return y_value - 19

    y = heading("Profile", y)
    y = draw_text(c, "Product-minded cybersecurity and software professional who identifies unmet needs and turns unclear, inefficient or risky workflows into practical systems people can use. Bridges research, security engineering, product design and operational delivery across organisations, education and live environments.", margin, y, width, size=9.1, leading=12.3)
    y -= 11

    y = heading("Core skills", y)
    y = draw_text(c, "Security engineering; penetration testing; OSINT; GDPR; API and OAuth security; Python; JavaScript; C#; React; Express; Flask; SQLite; Docker; WebSockets; Splunk; Datadog; GitHub and CI/CD; technical mentoring; product design; IT administration; invoicing and operational support.", margin, y, width, size=9, leading=12.3)
    y -= 11

    y = heading("Professional experience", y)
    experience = [
        ("IT & Administration Support (Intermittent) - GMT Electrical Services Ltd", "Jul 2025-Present", "Developed the company website and a working staff portal for timesheets, audit checks and job-card workflows. Supports day-to-day operations through email, invoicing, telephone enquiries and administrative coordination."),
        ("Project & Creative Director, Trustee - CERRF", "May-Jun 2025", "Directed cybersecurity learning tools including Inspector and HackerGo; led workshops, product storytelling, UX/UI, GitHub integration and cross-platform MVP delivery."),
        ("Student Mentor & Teaching Assistant - Kingston University", "Jan-Mar 2025", "Supported undergraduate labs in Splunk, Datadog, AI automation and cloud data systems; guided students through monitoring and Linux-based technical work."),
        ("Systems Engineer & Data Analyst - Lunarversal", "2023-2025", "Worked across Splunk and Datadog monitoring, Salesforce automation, GitHub access and tests, API configuration, OAuth and token-based integrations."),
        ("Security Engineer - Xeyus Ltd", "2022-2023", "Delivered penetration-testing support, security consultancy and GDPR-focused technical work."),
    ]
    for role, date, detail in experience:
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(margin, y, role)
        c.setFillColor(MUTED)
        c.setFont("Helvetica-Bold", 8)
        c.drawRightString(margin + width, y, date)
        y -= 12
        y = draw_text(c, detail, margin, y, width, size=8.5, leading=11.2)
        y -= 8

    y -= 2
    y = heading("Selected projects", y)
    projects = [
        ("Inspector", "Institution-pilot cybersecurity learning platform combining story-led lessons, a block command editor, isolated Docker terminals and a beta Containerlab network editor. Stack: Express, WebSockets, SQLite, Docker, PASETO, Containerlab."),
        ("MyMark", "Postgraduate Diploma capstone: a privacy-aware media-provenance and anti-abuse research system for image-based abuse and sextortion. Stack: Python, FastAPI, Vue, Electron, SQLite, Ed25519."),
        ("FlowCue", "Public-beta local/LAN show controller for controller, performer and audience screens. Stack: React, Vite, Express, Socket.IO, SQLite, Electron."),
        ("Device Provisioning Toolkit", "Security-focused comparison and provisioning web app developed from the undergraduate dissertation. Stack: Python, Flask, SQLite, Graphviz, Pandas."),
    ]
    for title, detail in projects:
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 8.9)
        c.drawString(margin, y, title)
        y -= 11
        y = draw_text(c, detail, margin, y, width, size=8.3, leading=10.8)
        y -= 7

    y -= 2
    y = heading("Education", y)
    education = [
        "Postgraduate Diploma in Network and Information Security - Kingston University London (Distinction, 2026) | Capstone project: MyMark",
        "BSc Cyber Security and Digital Forensics - Kingston University (2:1, 2024) | Dissertation: How do we decide what devices we provide?",
        "A-Level EPQ - Security vs Practicality",
    ]
    for item in education:
        y = draw_text(c, item, margin, y, width, font="Helvetica-Bold", size=8.5, leading=11.2, color=INK)
        y -= 3

    c.setStrokeColor(RULE)
    c.line(margin, 28, PAGE_W - margin, 28)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 6.8)
    c.drawRightString(PAGE_W - margin, 16, "Public CV - residential address and phone available privately on request")
    c.save()


if __name__ == "__main__":
    portfolio_cv(OUT / "Nathan-Brown-Bennett-Portfolio-CV.pdf")
    ats_cv(OUT / "Nathan-Brown-Bennett-ATS-CV.pdf")
