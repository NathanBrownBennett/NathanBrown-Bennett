#!/usr/bin/env python3
"""Apply public-facing author and title metadata to the EPQ deck exports."""

from pathlib import Path
import shutil
import tempfile
import zipfile
import xml.etree.ElementTree as ET

from pypdf import PdfReader, PdfWriter


ROOT = Path(__file__).resolve().parents[1]
PPTX = ROOT / "assets/documents/a-level-epq-presentation.pptx"
PDF = ROOT / "assets/documents/a-level-epq-presentation.pdf"
TITLE = "Can cybersecurity keep pace with modern digital risk?"
AUTHOR = "Nathan Brown-Bennett"

CORE_NS = "http://schemas.openxmlformats.org/package/2006/metadata/core-properties"
DC_NS = "http://purl.org/dc/elements/1.1/"
ET.register_namespace("cp", CORE_NS)
ET.register_namespace("dc", DC_NS)
ET.register_namespace("dcterms", "http://purl.org/dc/terms/")
ET.register_namespace("xsi", "http://www.w3.org/2001/XMLSchema-instance")


def update_pptx() -> None:
    with tempfile.TemporaryDirectory() as temp_dir:
        output = Path(temp_dir) / PPTX.name
        with zipfile.ZipFile(PPTX, "r") as source, zipfile.ZipFile(
            output, "w", zipfile.ZIP_DEFLATED
        ) as target:
            for item in source.infolist():
                data = source.read(item.filename)
                if item.filename == "docProps/core.xml":
                    root = ET.fromstring(data.decode("utf-8-sig"))
                    creator = root.find(f"{{{DC_NS}}}creator")
                    modified_by = root.find(f"{{{CORE_NS}}}lastModifiedBy")
                    title = root.find(f"{{{DC_NS}}}title")
                    if creator is not None:
                        creator.text = AUTHOR
                    if modified_by is not None:
                        modified_by.text = AUTHOR
                    if title is not None:
                        title.text = TITLE
                    data = ET.tostring(root, encoding="utf-8", xml_declaration=True)
                target.writestr(item, data)
        shutil.copy2(output, PPTX)


def update_pdf() -> None:
    reader = PdfReader(PDF)
    writer = PdfWriter()
    for page in reader.pages:
        writer.add_page(page)
    metadata = dict(reader.metadata or {})
    metadata.update({"/Title": TITLE, "/Author": AUTHOR})
    writer.add_metadata(metadata)
    with tempfile.NamedTemporaryFile(suffix=".pdf", delete=False) as handle:
        temporary = Path(handle.name)
    try:
        with temporary.open("wb") as handle:
            writer.write(handle)
        shutil.copy2(temporary, PDF)
    finally:
        temporary.unlink(missing_ok=True)


if __name__ == "__main__":
    update_pptx()
    update_pdf()
    print(PPTX)
    print(PDF)
