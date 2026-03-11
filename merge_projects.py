import re

file_path = r"c:\Users\omaac\OneDrive\Desktop\AGENCE\SOLAGREEN\src\pages\Projets.jsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

new_projects_array = """    const projects = [
        {
            id: 1,
            title: "Installation Solaire Résidentielle",
            tag: "Solaire Résidentiel",
            images: [
                "/realisations/rea_1.jpg",
                "/realisations/rea_2.jpg",
                "/realisations/rea_3.jpg",
                "/realisations/rea_4.jpg",
                "/realisations/rea_5.jpg",
                "/realisations/rea_6.jpg"
            ]
        },
        {
            id: 2,
            title: "Panneaux Photovoltaïques Maison",
            tag: "Solaire Résidentiel",
            images: [
                "/realisations/rea_7.jpg",
                "/realisations/rea_8.jpg",
                "/realisations/rea_9.jpg"
            ]
        },
        {
            id: 3,
            title: "Installation Enphase & Panneaux",
            tag: "Équipement Solaire",
            images: [
                "/realisations/rea_10.jpg",
                "/realisations/rea_11.jpg",
                "/realisations/rea_12.jpg",
                "/realisations/rea_13.jpg"
            ]
        },
        {
            id: 4,
            title: "Carport Solaire",
            tag: "Structure & Solaire",
            images: [
                "/realisations/rea_14.jpg",
                "/realisations/rea_15.jpg",
                "/realisations/rea_16.jpg",
                "/realisations/rea_17.jpg",
                "/realisations/rea_18.jpg",
                "/realisations/rea_19.jpg",
                "/realisations/rea_20.jpg",
                "/realisations/rea_21.jpg",
                "/realisations/rea_22.jpg"
            ]
        },
        {
            id: 5,
            title: "Rénovation Bâtiment Tertiaire",
            tag: "Bâtiment Commercial",
            images: [
                "/realisations/rea_23.jpeg",
                "/realisations/rea_24.jpeg",
                "/realisations/rea_25.jpeg",
                "/realisations/rea_26.jpeg",
                "/realisations/rea_27.jpeg",
                "/realisations/rea_28.jpeg",
                "/realisations/rea_29.jpeg"
            ]
        },
        {
            id: 6,
            title: "Toiture Terrasse Industrielle",
            tag: "Tertiaire & Industriel",
            images: [
                "/realisations/rea_30.jpeg",
                "/realisations/rea_31.jpeg",
                "/realisations/rea_32.jpeg",
                "/realisations/rea_33.jpeg",
                "/realisations/rea_34.jpeg",
                "/realisations/rea_35.jpeg",
                "/realisations/rea_36.jpeg",
                "/realisations/rea_37.jpeg",
                "/realisations/rea_44.jpeg",
                "/realisations/rea_45.jpeg",
                "/realisations/rea_46.jpeg",
                "/realisations/rea_47.jpeg",
                "/realisations/rea_48.jpeg",
                "/realisations/rea_49.jpeg",
                "/realisations/rea_50.jpeg",
                "/realisations/rea_51.jpeg",
                "/realisations/rea_52.jpeg",
                "/realisations/rea_53.jpeg",
                "/realisations/rea_54.jpeg",
                "/realisations/rea_55.jpeg",
                "/realisations/rea_56.jpeg",
                "/realisations/rea_57.jpeg",
                "/realisations/rea_58.jpeg",
                "/realisations/rea_59.jpeg",
                "/realisations/rea_60.jpeg",
                "/realisations/rea_61.jpeg",
                "/realisations/rea_62.jpeg"
            ]
        },
        {
            id: 7,
            title: "Centre Logistique ID Market",
            tag: "Isolation & Toiture",
            images: [
                 "/realisations/rea_63.jpeg",
                 "/realisations/rea_64.jpeg",
                 "/realisations/rea_65.jpeg",
                 "/realisations/rea_66.jpeg",
                 "/realisations/rea_67.jpeg",
                 "/realisations/rea_68.jpeg",
                 "/realisations/rea_69.jpeg",
                 "/realisations/rea_38.jpeg",
                 "/realisations/rea_39.jpeg",
                 "/realisations/rea_40.jpeg",
                 "/realisations/rea_41.jpeg",
                 "/realisations/rea_42.jpeg",
                 "/realisations/rea_43.jpeg"
            ]
        }
    ];"""

pattern = re.compile(r"const projects = \[.*?\];", re.DOTALL)
new_content = pattern.sub(new_projects_array, content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Successfully replaced projects array in {file_path}")
