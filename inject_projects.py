import re

projets_file = r"c:\Users\omaac\OneDrive\Desktop\AGENCE\SOLAGREEN\src\pages\Projets.jsx"
entries_file = r"c:\Users\omaac\OneDrive\Desktop\AGENCE\SOLAGREEN\_new_entries.txt"

# Read the new entries (only real projects from client images)
with open(entries_file, "r", encoding="utf-8") as f:
    new_entries = f.read()

# Re-number IDs starting from 1 instead of 7
import re as re2
counter = [0]
def renumber(match):
    counter[0] += 1
    return f"id: {counter[0]}"

new_entries = re2.sub(r'id: \d+', renumber, new_entries)

# Build the full new array with ONLY real projects
full_array = "    const projects = [\n" + new_entries + "\n    ];"

# Read the current file
with open(projets_file, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the projects array
pattern = r'    const projects = \[.*?\];'
new_content = re.sub(pattern, full_array, content, flags=re.DOTALL)

if new_content == content:
    print("ERROR: Regex did not match!")
else:
    print("SUCCESS: Replaced projects array (fictitious projects removed)")

with open(projets_file, "w", encoding="utf-8") as f:
    f.write(new_content)

# Verify
count = new_content.count('"Chantier Réalisé"')
print(f"Number of real project entries: {count}")
# Make sure no fictitious projects remain
for fake in ["Centrale PV 150 kWc", "Mise en conformité BACS", "ITE + Toiture-terrasse", "GTB Couplée", "Isolation combles", "PV + Isolation + GTB Parc"]:
    if fake in new_content:
        print(f"WARNING: Fictitious project still present: {fake}")
    else:
        print(f"OK: '{fake}' removed")
