import os
import shutil

src_dir_base = r"c:\Users\omaac\OneDrive\Desktop\AGENCE\SOLAGREEN\NEW DOC"
dest_dir = r"c:\Users\omaac\OneDrive\Desktop\AGENCE\SOLAGREEN\public\realisations"

os.makedirs(dest_dir, exist_ok=True)

selected_images = [
    os.path.join(src_dir_base, "image_viber_2025-02-14_14-23-35-584.jpg"),
    os.path.join(src_dir_base, "image_viber_2025-03-04_11-34-09-649.jpg"),
    os.path.join(src_dir_base, "image_viber_2025-04-01_09-16-12-641.jpg"),
    os.path.join(src_dir_base, "image_viber_2025-06-11_13-23-08-701.jpg"),
    os.path.join(src_dir_base, "extracted", "07-11-2025_c8a6538d-1d49-4a9b-a905-5b31a3edfe8c_page1_img1.jpeg"),
    os.path.join(src_dir_base, "extracted", "14-11-2025_967f7475-2258-4b9d-9869-689f590180c9_page4_img1.jpeg"),
    os.path.join(src_dir_base, "extracted", "23-02-2026_51366d99-b4ee-453c-a57f-df636584098d_page6_img1.jpeg"),
    os.path.join(src_dir_base, "extracted", "24-10-2025_73e1961c-dfc7-414c-a0ed-c226a9d137b0_page2_img1.jpeg"),
    os.path.join(src_dir_base, "extracted", "25-02-2026_84d27d9c-1a4f-43e8-b174-014fb8bb52a1_page5_img1.jpeg")
]

for i, img_path in enumerate(selected_images):
    if os.path.exists(img_path):
        ext = os.path.splitext(img_path)[1]
        dest_path = os.path.join(dest_dir, f"rea_{i+1}{ext}")
        shutil.copy2(img_path, dest_path)
        print(f"Copied {img_path} to {dest_path}")
    else:
        print(f"File not found: {img_path}")
