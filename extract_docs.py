import fitz
import os
import sys

pdf_dir = r"c:\Users\omaac\OneDrive\Desktop\AGENCE\SOLAGREEN\NEW DOC"
output_dir = r"c:\Users\omaac\OneDrive\Desktop\AGENCE\SOLAGREEN\NEW DOC\extracted"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

for file in os.listdir(pdf_dir):
    if file.endswith(".pdf"):
        pdf_path = os.path.join(pdf_dir, file)
        doc = fitz.open(pdf_path)
        for i in range(len(doc)):
            image_list = doc.get_page_images(i)
            for img_index, img in enumerate(image_list):
                xref = img[0]
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]
                image_filename = f"{os.path.splitext(file)[0]}_page{i+1}_img{img_index+1}.{image_ext}"
                with open(os.path.join(output_dir, image_filename), "wb") as f:
                    f.write(image_bytes)
        print(f"Extracted images from {file}")
