import hashlib
import os
import glob
import sys

# Fix Windows encoding
sys.stdout.reconfigure(encoding='utf-8')

rea_dir = r"c:\Users\omaac\OneDrive\Desktop\AGENCE\SOLAGREEN\public\realisations"
src_dir = r"c:\Users\omaac\OneDrive\Desktop\AGENCE\SOLAGREEN\NEW DOC"

# 1. Check for duplicate files by hash
print("=" * 60)
print("DUPLICATE CHECK: Comparing file hashes")
print("=" * 60)

hashes = {}
dupes = []
for f in sorted(glob.glob(os.path.join(rea_dir, "*"))):
    with open(f, "rb") as fh:
        h = hashlib.md5(fh.read()).hexdigest()
    name = os.path.basename(f)
    if h in hashes:
        dupes.append((name, hashes[h]))
        print(f"  DUPLICATE: {name} == {hashes[h]}")
    else:
        hashes[h] = name

if not dupes:
    print(f"  [OK] All 69 images are unique (no duplicates)")
else:
    print(f"  [WARNING] {len(dupes)} duplicate(s) found")

# 2. Map each rea file back to its original source
print("\n" + "=" * 60)
print("SOURCE MAPPING: Tracing each image to its origin")
print("=" * 60)

all_sources = []
for ext in ["*.jpg", "*.jpeg", "*.png"]:
    all_sources.extend(sorted(glob.glob(os.path.join(src_dir, ext))))
extracted_dir = os.path.join(src_dir, "extracted")
if os.path.exists(extracted_dir):
    for ext in ["*.jpg", "*.jpeg", "*.png"]:
        all_sources.extend(sorted(glob.glob(os.path.join(extracted_dir, ext))))

project_groups = {
    "Projet 1 (Toiture Fev 2025)": list(range(1, 7)),
    "Projet 2 (Mars 2025)": list(range(7, 10)),
    "Projet 3 (Avril 2025)": list(range(10, 14)),
    "Projet 4 (Juin 2025 S1)": list(range(14, 17)),
    "Projet 5 (Juin 2025 S2)": [17],
    "Projet 6 (Juin 2025 S3)": list(range(18, 20)),
    "Projet 7 (Juin 2025 S4)": list(range(20, 23)),
    "Projet 8 (Nov 2025 A)": list(range(23, 30)),
    "Projet 9 (Nov 2025 B)": list(range(30, 38)),
    "Projet 10 (Fev 2026 A)": list(range(38, 44)),
    "Projet 11 (Oct 2025)": list(range(44, 63)),
    "Projet 12 (Fev 2026 B)": list(range(63, 70)),
}

mixed_projects = []
for proj_name, indices in project_groups.items():
    print(f"\n{proj_name}:")
    sources_in_group = set()
    for i in indices:
        src_idx = i - 1
        if src_idx < len(all_sources):
            src = os.path.basename(all_sources[src_idx])
            if src.startswith("image_viber_"):
                date_part = src.split("_")[2]
                sources_in_group.add(f"Viber {date_part}")
            else:
                pdf_date = src.split("_")[0]
                sources_in_group.add(f"PDF {pdf_date}")
            print(f"  rea_{i} <- {src}")
    
    if len(sources_in_group) == 1:
        print(f"  [OK] All from SAME source: {list(sources_in_group)[0]}")
    else:
        print(f"  [WARNING] MIXED SOURCES: {sources_in_group}")
        mixed_projects.append(proj_name)

# 3. Cross-project check
print("\n" + "=" * 60)
print("CROSS-PROJECT CHECK")
print("=" * 60)

all_used = []
for proj_name, indices in project_groups.items():
    for i in indices:
        src_idx = i - 1
        if src_idx < len(all_sources):
            all_used.append((os.path.basename(all_sources[src_idx]), proj_name))

seen = {}
cross_issues = False
for src, proj in all_used:
    if src in seen and seen[src] != proj:
        print(f"  [WARNING] {src} used in both {seen[src]} AND {proj}")
        cross_issues = True
    seen[src] = proj

if not cross_issues:
    print("  [OK] No cross-project duplicates found")

# Summary
print("\n" + "=" * 60)
print("SUMMARY")
print("=" * 60)
print(f"  Total images: {len(all_used)}")
print(f"  Unique images: {len(hashes)}")
print(f"  Duplicate images: {len(dupes)}")
print(f"  Mixed-source projects: {len(mixed_projects)}")
if mixed_projects:
    for mp in mixed_projects:
        print(f"    - {mp}")
