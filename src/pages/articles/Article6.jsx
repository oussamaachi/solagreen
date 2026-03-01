import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock, ChevronRight } from 'lucide-react';

const Article6 = () => {
    return (
        <div className="w-full bg-bg pb-24">
            {/* Hero */}
            <section className="relative h-[50vh] w-full flex items-end bg-primary-dark overflow-hidden">
                <img
                    src="/bacs.png"
                    alt="Solaire photovoltaïque toiture"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-hero z-10 pointer-events-none" />
                <div className="relative z-20 max-w-4xl mx-auto px-6 pb-12 w-full">
                    <div className="flex items-center gap-2 text-xs font-mono text-accent mb-4 uppercase tracking-widest">
                        <Link to="/blog" className="hover:underline flex items-center gap-1"><ArrowLeft size={14} /> Blog</Link>
                        <ChevronRight size={12} className="text-gray-500" />
                        <span className="text-gray-400">Solaire PV</span>
                    </div>
                    <h1 className="font-heading text-3xl md:text-5xl text-white leading-tight mb-4">
                        Solaire photovoltaïque 2026 : la France à 27,9 GW — vos obligations et vos aides
                    </h1>
                    <div className="flex items-center gap-6 text-xs font-mono text-gray-400 uppercase tracking-wide">
                        <span className="flex items-center gap-2"><CalendarDays size={14} /> Mars 2026</span>
                        <span className="flex items-center gap-2"><Clock size={14} /> 4 min de lecture</span>
                        <span className="bg-accent/20 text-accent-dim px-3 py-1 rounded">SOLAIRE PV</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <article className="max-w-3xl mx-auto px-6 py-16">
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-text-light leading-relaxed mb-8 font-sans">
                        Avec <strong>27,9 GW de capacité installée</strong> à fin 2025 (source : RTE), la France a franchi un cap symbolique dans sa transition énergétique solaire. Mais la croissance ne repose plus seulement sur les initiatives volontaires : la <strong>Loi Climat & Résilience</strong>, la <strong>Loi APER</strong> et la <strong>Loi Industrie Verte</strong> imposent désormais une solarisation progressive et obligatoire des bâtiments et parkings tertiaires.
                    </p>

                    <div className="bg-accent/10 border-l-4 border-accent rounded-r-2xl p-6 mb-10">
                        <h2 className="font-heading text-2xl text-primary-dark mb-3">Le cadre réglementaire solaire cumulé en 2026</h2>
                        <ul className="font-sans text-text-light space-y-2 mt-3">
                            <li>🏢 <strong>Loi Climat 2021 :</strong> solarisation obligatoire des bâtiments tertiaires {'>'} 500 m² dès 2028</li>
                            <li>🅿️ <strong>Loi APER 2023 :</strong> ombrières photovoltaïques sur parkings {'>'} 1 500 m² (80 places) dès 2026</li>
                            <li>🏭 <strong>Loi Industrie Verte 2023 :</strong> obligation étendue aux bâtiments industriels et entrepôts {'>'} 500 m²</li>
                            <li>💶 <strong>CEE BAT-EN-109 :</strong> aide jusqu'à 1 500 €/kWc installé pour autoconsommation collective</li>
                        </ul>
                    </div>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Qui doit s'équiper de panneaux solaires en 2026 ?</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        Depuis le décret d'application de la <strong>Loi APER</strong> publié en juillet 2024, les propriétaires ou exploitants de parkings extérieurs de plus de <strong>80 places (environ 1 500 m²)</strong> sont soumis à une obligation d'équipement en ombrières photovoltaïques. Les délais d'application sont échelonnés :
                    </p>
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6 shadow-sm">
                        <table className="w-full text-sm font-sans">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-2 pr-6 font-bold text-primary-dark">Taille du parking</th>
                                    <th className="text-left py-2 font-bold text-primary-dark">Échéance</th>
                                </tr>
                            </thead>
                            <tbody className="text-text-light">
                                <tr className="border-b border-gray-100"><td className="py-2 pr-6">&gt; 400 places</td><td className="py-2">1er juillet 2026</td></tr>
                                <tr className="border-b border-gray-100"><td className="py-2 pr-6">80 à 400 places</td><td className="py-2">1er juillet 2028</td></tr>
                                <tr><td className="py-2 pr-6">Bâtiments commerciaux {'>'} 500 m²</td><td className="py-2">2028 (Loi Climat)</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">La fiche CEE BAT-EN-109 : autoconsommation tertiaire</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        La <strong>BAT-EN-109</strong> finance le déploiement de systèmes photovoltaïques en autoconsommation sur les bâtiments tertiaires. Elle couvre :
                    </p>
                    <ul className="font-sans text-text-light space-y-2 mb-6 list-disc list-inside">
                        <li>Les installations en toiture ou sur ombrières de parkings</li>
                        <li>Les systèmes avec ou sans stockage par batterie</li>
                        <li>Les installations de 3 kWc à 500 kWc par site</li>
                        <li>La prime est calculée en €/kWc installé selon la puissance et la zone ensoleillée</li>
                    </ul>
                    <p className="font-sans text-text-light leading-relaxed mb-6">
                        En Île-de-France, la prime CEE BAT-EN-109 représente environ <strong>800 à 1 200 €/kWc</strong>. Combinée aux aides ADEME (appels d'offres CRE) et aux économies d'autoconsommation, le TRI d'une installation tertiaire tombe à <strong>5–8 ans</strong> selon la puissance installée.
                    </p>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Le duo gagnant : autoconsommation + GTB</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-6">
                        L'enjeu du photovoltaïque tertiaire en 2026 n'est plus seulement d'installer des panneaux, mais d'en maximiser le taux d'autoconsommation. Une GTB pilotée (BAT-TH-116) permet de décaler automatiquement les charges flexibles — climatisation, recharge de véhicules électriques, éclairage — sur les plages solaires de midi, augmentant le taux d'autoconsommation de <strong>30 à 60%</strong>.
                    </p>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Ombrières : rentabilité et contraintes techniques</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        Les ombrières photovoltaïques sont plus complexes et coûteuses que les installations en toiture (120 à 200 €/m² de parking couvert), mais bénéficient d'avantages spécifiques :
                    </p>
                    <ul className="font-sans text-text-light space-y-2 mb-6 list-disc list-inside">
                        <li>Meilleur rendement (pas d'ombre de toiture, orientation optimisable)</li>
                        <li>Confort des usagers (protection pluie et soleil)</li>
                        <li>Possibilité d'intégrer des bornes de recharge IRVE en dessous</li>
                        <li>Prime CEE BAT-EN-109 + aide ADEME cumulables</li>
                    </ul>

                    <div className="bg-primary-dark rounded-2xl p-8 text-white mt-12">
                        <h3 className="font-heading text-2xl text-accent mb-4">Votre étude solaire en 15 jours</h3>
                        <p className="font-sans leading-relaxed text-gray-300 mb-6">
                            SOLAGREEN réalise l'étude complète de faisabilité solaire pour votre site : dimensionnement, simulation de production, calcul de TRI, montage des aides CEE et ADEME. Résultat en moins de 15 jours.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-primary-dark font-bold px-8 py-3 rounded-xl hover:bg-accent-hot transition-colors">
                            Étude solaire <ChevronRight size={18} />
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Article6;
