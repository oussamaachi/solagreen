import os
import shutil
import glob
import re

src_dir_base = r"c:\Users\omaac\OneDrive\Desktop\AGENCE\SOLAGREEN\NEW DOC"
dest_dir = r"c:\Users\omaac\OneDrive\Desktop\AGENCE\SOLAGREEN\public\realisations"
projets_file = r"c:\Users\omaac\OneDrive\Desktop\AGENCE\SOLAGREEN\src\pages\Projets.jsx"

# Ensure directory exists and is empty
if os.path.exists(dest_dir):
    shutil.rmtree(dest_dir)
os.makedirs(dest_dir, exist_ok=True)

all_images = []
# Get all viber images
for f in glob.glob(os.path.join(src_dir_base, "*.jpg")):
    all_images.append(f)
for f in glob.glob(os.path.join(src_dir_base, "*.jpeg")):
    all_images.append(f)

# Get all extracted images
for f in glob.glob(os.path.join(src_dir_base, "extracted", "*.jpg")):
    all_images.append(f)
for f in glob.glob(os.path.join(src_dir_base, "extracted", "*.jpeg")):
    all_images.append(f)

print(f"Found {len(all_images)} images.")

project_objects = []

# Original 6 projects
original_projects = [
    {
        "id": 1,
        "tag": '"Solaire PV + CEE"',
        "title": '"Centrale PV 150 kWc — Centre commercial"',
        "location": '"Île-de-France (Conformité Loi Climat)"',
        "fiches": '"BAT-EN-109"',
        "prime": '"18 500 €"',
        "year": '"2024"',
        "image": '"/pv.png"'
    },
    {
        "id": 2,
        "tag": '"Audit + GTB BACS"',
        "title": '"Mise en conformité BACS"',
        "location": '"Groupe tertiaire Grand Paris"',
        "fiches": '"BAT-TH-116"',
        "prime": '"22 000 €"',
        "year": '"2025"',
        "image": '"/bacs.png"'
    },
    {
        "id": 3,
        "tag": '"Isolation Globale"',
        "title": '"ITE + Toiture-terrasse complexe hôtelier"',
        "location": '"Hauts-de-Seine"',
        "fiches": '"BAT-EN-101 / BAT-EN-102"',
        "prime": '"33 000 €"',
        "year": '"2024"',
        "image": '"/isolation.png"'
    },
    {
        "id": 4,
        "tag": '"Pilotage Energétique"',
        "title": '"GTB Couplée Chauffage/Éclairage"',
        "location": '"Campus industriel Essonne"',
        "fiches": '"BAT-TH-116"',
        "prime": '"15 000 €"',
        "year": '"2025"',
        "image": '"/pac.png"'
    },
    {
        "id": 5,
        "tag": '"Rénovation Enveloppe"',
        "title": '"Isolation combles et planchers 2500 m²"',
        "location": '"Bureaux — Val d\'Oise"',
        "fiches": '"BAT-EN-101 / BAT-EN-103"',
        "prime": '"28 000 €"',
        "year": '"2025"',
        "image": '"/hvac.png"'
    },
    {
        "id": 6,
        "tag": '"Solution Complète"',
        "title": '"PV + Isolation + GTB Parc multiséculaire"',
        "location": '"Parc tertiaire Seine-Saint-Denis"',
        "fiches": '"Multi-fiches P6 complètes"',
        "prime": '"67 000 €"',
        "year": '"2025"',
        "image": '"/hero_pv.png"'
    }
]

# Generate JS objects for original
for p in original_projects:
    obj_str = "        {\n"
    for k, v in p.items():
        obj_str += f"            {k}: {v},\n"
    obj_str = obj_str.rstrip(",\n") + "\n        }"
    project_objects.append(obj_str)

current_id = 7
for i, img_path in enumerate(all_images):
    ext = os.path.splitext(img_path)[1]
    new_filename = f"rea_{current_id}{ext}"
    dest_path = os.path.join(dest_dir, new_filename)
    shutil.copy2(img_path, dest_path)
    
    obj_str = f"""        {{
            id: {current_id},
            tag: "Projet Récent",
            title: "Nouvelle Réalisation",
            location: "À définir",
            fiches: "À définir",
            prime: "À définir",
            year: "2025",
            image: "/realisations/{new_filename}"
        }}"""
    project_objects.append(obj_str)
    current_id += 1

projects_array_str = "    const projects = [\n" + ",\n".join(project_objects) + "\n    ];"

# Read actual file and replace
with open(projets_file, "r", encoding="utf-8") as f:
    content = f.read()

# Use regex to replace the entire `const projects = [ ... ];` block
pattern = r"    const projects = \[.*?\];"
new_content = re.sub(pattern, projects_array_str, content, flags=re.DOTALL)

with open(projets_file, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Updated {projets_file} with {len(project_objects)} projects in total.")
