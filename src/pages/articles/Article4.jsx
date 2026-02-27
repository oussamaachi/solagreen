import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock, ChevronRight } from 'lucide-react';

const Article4 = () => {
    return (
        <div className="w-full bg-bg pb-24">
            {/* Hero */}
            <section className="relative h-[50vh] w-full flex items-end bg-primary-dark overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1600&auto=format&fit=crop"
                    alt="Pompe à chaleur tertiaire"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-hero z-10 pointer-events-none" />
                <div className="relative z-20 max-w-4xl mx-auto px-6 pb-12 w-full">
                    <div className="flex items-center gap-2 text-xs font-mono text-accent mb-4 uppercase tracking-widest">
                        <Link to="/blog" className="hover:underline flex items-center gap-1"><ArrowLeft size={14} /> Blog</Link>
                        <ChevronRight size={12} className="text-gray-500" />
                        <span className="text-gray-400">CVC / Chauffage</span>
                    </div>
                    <h1 className="font-heading text-3xl md:text-5xl text-white leading-tight mb-4">
                        Nouvelles fiches PAC tertiaire 2026 : BAT-TH-163, BAT-TH-164 et BAT-TH-162
                    </h1>
                    <div className="flex items-center gap-6 text-xs font-mono text-gray-400 uppercase tracking-wide">
                        <span className="flex items-center gap-2"><CalendarDays size={14} /> Janvier 2026</span>
                        <span className="flex items-center gap-2"><Clock size={14} /> 4 min de lecture</span>
                        <span className="bg-accent/20 text-accent-dim px-3 py-1 rounded">CVC / CHAUFFAGE</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <article className="max-w-3xl mx-auto px-6 py-16">
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-text-light leading-relaxed mb-8 font-sans">
                        La 6ᵉ période des CEE marque un tournant majeur pour les systèmes CVC tertiaires. La <strong>BAT-TH-113</strong> (Système de régulation par programmation horaire) est abrogée, et trois nouvelles fiches PAC font leur entrée : <strong>BAT-TH-162, BAT-TH-163 et BAT-TH-164</strong>. Ce sont les fiches les plus attendues par les exploitants de bâtiments tertiaires chauffés au fuel ou au gaz.
                    </p>

                    <div className="bg-red-50 border-l-4 border-red-400 rounded-r-2xl p-6 mb-10">
                        <h2 className="font-heading text-xl text-red-800 mb-2">⚠️ BAT-TH-113 abrogée</h2>
                        <p className="font-sans text-red-700 text-sm">
                            La fiche BAT-TH-113 (programmation horaire du chauffage) est abrogée depuis le 1er janvier 2026 et remplacée par la fiche GTB BAT-TH-116. Les dossiers en cours avec bon de commande antérieur au 31/12/2025 restent valides 6 mois.
                        </p>
                    </div>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">BAT-TH-163 : PAC air/eau haute température</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        La <strong>BAT-TH-163</strong> valorise les pompes à chaleur air/eau pour le chauffage des bâtiments tertiaires, avec une spécificité nouvelle : elle couvre désormais les PAC dites "Haute Température" (jusqu'à 70°C en sortie), compatibles avec les réseaux de radiateurs existants sans opération lourde sur l'hydraulique.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                            <h3 className="font-heading text-lg text-primary-dark mb-2">Exigences techniques</h3>
                            <ul className="font-sans text-text-light text-sm space-y-1">
                                <li>COP ≥ 2,8 à A7/W65 (Eurovent)</li>
                                <li>SCOP ≥ 3,5 en conditions moyennes</li>
                                <li>Puissance : 10 kW à 2 MW</li>
                                <li>Fluide frigorigène R-290 ou R-32 préféré</li>
                            </ul>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                            <h3 className="font-heading text-lg text-primary-dark mb-2">Prime indicative</h3>
                            <ul className="font-sans text-text-light text-sm space-y-1">
                                <li>Bureaux (H1) : ~15 000 €/MWth de PAC</li>
                                <li>Commerce alimentaire (H2) : ~10 000 €/MWth</li>
                                <li>Bonus si couplage avec GTB BAT-TH-116</li>
                                <li>TRI généralement &lt; 5 ans avec CEE</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">BAT-TH-164 : PAC eau/eau et géothermie</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        La <strong>BAT-TH-164</strong> représente l'entrée fracassante de la géothermie tertiaire dans le dispositif CEE. Elle valorise les systèmes de pompe à chaleur eau/eau prélevant l'énergie dans la nappe phréatique (géothermie de surface) ou dans un réseau de sondes verticales.
                    </p>
                    <p className="font-sans text-text-light leading-relaxed mb-6">
                        Ces systèmes atteignent des COP de 4 à 6 et permettent également la production de froid gratuit (free cooling) en été via un simple échangeur. La prime CEE est majorée de <strong>30%</strong> par rapport à la BAT-TH-163 du fait de la performance supérieure en zone climatique défavorable.
                    </p>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">BAT-TH-162 : récupération de chaleur sur CTA</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        La <strong>BAT-TH-162</strong> est une nouveauté qui valorise les centrales de traitement d'air (CTA) double flux avec récupérateur haute efficacité (rendement ≥ 75% selon EN 13053). Cette fiche est particulièrement pertinente pour :
                    </p>
                    <ul className="font-sans text-text-light space-y-2 mb-6 list-disc list-inside">
                        <li>Les restaurants et cuisines professionnelles (forts débits d'air vicié)</li>
                        <li>Les salles de sport et piscines (humidité et aération forcée)</li>
                        <li>Les bâtiments de santé (renouvellement d'air réglementaire élevé)</li>
                        <li>Les datacenters avec free cooling air</li>
                    </ul>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Mémorandum : quelle fiche choisir ?</h2>
                    <div className="space-y-3 mb-10">
                        {[
                            { fiche: 'BAT-TH-163', usage: 'Remplacement chaudière gaz/fuel par PAC air/eau', note: '★★★★☆' },
                            { fiche: 'BAT-TH-164', usage: 'Géothermie ou PAC eau/eau sur nappe', note: '★★★★★' },
                            { fiche: 'BAT-TH-162', usage: 'CTA double-flux avec récup. chaleur', note: '★★★☆☆' },
                            { fiche: 'BAT-TH-116', usage: 'GTB régulation CVC complète', note: '★★★★☆' },
                        ].map(({ fiche, usage, note }) => (
                            <div key={fiche} className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                                <span className="bg-accent/20 text-accent-dim font-mono font-bold px-3 py-2 rounded-lg text-sm shrink-0 min-w-[120px] text-center">{fiche}</span>
                                <span className="font-sans text-text-light text-sm flex-1">{usage}</span>
                                <span className="text-accent-dim font-mono text-sm shrink-0">{note}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-primary-dark rounded-2xl p-8 text-white mt-12">
                        <h3 className="font-heading text-2xl text-accent mb-4">Étudiez le remplacement de votre CVC</h3>
                        <p className="font-sans leading-relaxed text-gray-300 mb-6">
                            SOLAGREEN accompagne les responsables techniques dans le dimensionnement, la sélection de matériel et le montage des dossiers CEE pour toutes les fiches CVC. Réponse sous 48h.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-primary-dark font-bold px-8 py-3 rounded-xl hover:bg-accent-hot transition-colors">
                            Étude CVC gratuite <ChevronRight size={18} />
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Article4;
