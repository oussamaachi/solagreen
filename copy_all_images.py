import os
import shutil
import glob

src_dir_base = r"c:\Users\omaac\OneDrive\Desktop\AGENCE\SOLAGREEN\NEW DOC"
dest_dir = r"c:\Users\omaac\OneDrive\Desktop\AGENCE\SOLAGREEN\public\realisations"

# Recreate directory
os.makedirs(dest_dir, exist_ok=True)

all_images = []

# Direct images
for ext in ["*.jpg", "*.jpeg", "*.png"]:
    all_images.extend(glob.glob(os.path.join(src_dir_base, ext)))

# Extracted images
extracted_dir = os.path.join(src_dir_base, "extracted")
if os.path.exists(extracted_dir):
    for ext in ["*.jpg", "*.jpeg", "*.png"]:
        all_images.extend(glob.glob(os.path.join(extracted_dir, ext)))

print(f"Total images found: {len(all_images)}")

copied = []
for i, img_path in enumerate(all_images):
    ext = os.path.splitext(img_path)[1]
    new_name = f"rea_{i+1}{ext}"
    dest_path = os.path.join(dest_dir, new_name)
    shutil.copy2(img_path, dest_path)
    copied.append(new_name)
    print(f"  [{i+1}] {os.path.basename(img_path)} -> {new_name}")

print(f"\nCopied {len(copied)} images to {dest_dir}")

# Now generate the JSX projects array entries
lines = []
for i, name in enumerate(copied):
    idx = i + 7  # IDs 7+
    lines.append(f"""        {{
            id: {idx},
            tag: "Chantier Réalisé",
            title: "Réalisation #{i+1}",
            location: "France",
            fiches: "—",
            prime: "—",
            year: "2025",
            image: "/realisations/{name}"
        }}""")

# Print for verification
print(f"\nGenerated {len(lines)} project entries for Projets.jsx")
print("First entry:")
print(lines[0])

# Write the entries to a temp file for easy copy
with open(r"c:\Users\omaac\OneDrive\Desktop\AGENCE\SOLAGREEN\_new_entries.txt", "w", encoding="utf-8") as f:
    f.write(",\n".join(lines))
print("\nEntries written to _new_entries.txt")
