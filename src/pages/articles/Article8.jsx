import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock, ChevronRight } from 'lucide-react';

const Article8 = () => {
    return (
        <div className="w-full bg-bg pb-24">
            {/* Hero */}
            <section className="relative h-[50vh] w-full flex items-end bg-primary-dark overflow-hidden">
                <img
                    src="/isolation.png"
                    alt="Fonds Chaleur biomasse réseau"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-hero z-10 pointer-events-none" />
                <div className="relative z-20 max-w-4xl mx-auto px-6 pb-12 w-full">
                    <div className="flex items-center gap-2 text-xs font-mono text-accent mb-4 uppercase tracking-widest">
                        <Link to="/blog" className="hover:underline flex items-center gap-1"><ArrowLeft size={14} /> Blog</Link>
                        <ChevronRight size={12} className="text-gray-500" />
                        <span className="text-gray-400">Fonds Chaleur</span>
                    </div>
                    <h1 className="font-heading text-3xl md:text-5xl text-white leading-tight mb-4">
                        Fonds Chaleur 2026 : 520 millions d'euros pour décarboner votre chauffage
                    </h1>
                    <div className="flex items-center gap-6 text-xs font-mono text-gray-400 uppercase tracking-wide">
                        <span className="flex items-center gap-2"><CalendarDays size={14} /> Mars 2026</span>
                        <span className="flex items-center gap-2"><Clock size={14} /> 4 min de lecture</span>
                        <span className="bg-accent/20 text-accent-dim px-3 py-1 rounded">FONDS CHALEUR</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <article className="max-w-3xl mx-auto px-6 py-16">
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-text-light leading-relaxed mb-8 font-sans">
                        Le <strong>Fonds Chaleur</strong>, géré par l'ADEME, est le principal mécanisme de soutien à la chaleur renouvelable en France. Doté de <strong>520 millions d'euros</strong> pour l'année 2026 — budget le plus élevé depuis sa création en 2009 —, il finance des projets de production de chaleur à partir de la biomasse, de la géothermie, du solaire thermique et des réseaux de chaleur.
                    </p>

                    <div className="bg-accent/10 border-l-4 border-accent rounded-r-2xl p-6 mb-10">
                        <h2 className="font-heading text-2xl text-primary-dark mb-3">Fonds Chaleur 2026 en chiffres</h2>
                        <ul className="font-sans text-text-light space-y-2 mt-3">
                            <li>💶 <strong>Budget total :</strong> 520 M€ (+15% vs 2025)</li>
                            <li>🌿 <strong>Biomasse :</strong> 55% du budget (chauffages industriels, réseaux)</li>
                            <li>🌍 <strong>Géothermie :</strong> 25% du budget (AQUAPAC, sondes)</li>
                            <li>☀️ <strong>Solaire thermique :</strong> 12% du budget</li>
                            <li>🏭 <strong>Récupération chaleur fatale :</strong> 8% du budget</li>
                        </ul>
                    </div>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Qui peut bénéficier du Fonds Chaleur ?</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        Le Fonds Chaleur est accessible à un large éventail de bénéficiaires :
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        {[
                            { titre: '🏭 Industriels', desc: 'Entreprises de plus de 250 salariés souhaitant remplacer une chaudière gaz/fuel par une chaudière biomasse ou un système géothermique.' },
                            { titre: '🏢 Collectivités', desc: 'Communes, intercommunalités, syndicats créant ou étendant un réseau de chaleur alimenté par des ENR.' },
                            { titre: '🌾 Agriculture', desc: 'Exploitations agricoles installant des séchoirs ou serres chauffées à la biomasse (plaquettes, granulés).' },
                            { titre: '🏗️ Tertiaire public', desc: 'Hôpitaux, universités, piscines dépassant 12 GWh/an de besoin thermique éligibles aux projets "tertiaire lourd".' },
                        ].map(({ titre, desc }) => (
                            <div key={titre} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                                <h3 className="font-heading text-lg text-primary-dark mb-2">{titre}</h3>
                                <p className="font-sans text-text-light text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Biomasse industrielle : le grand gagnant 2026</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        La <strong>biomasse solide</strong> (plaquettes forestières, granulés bois, déchets de scieries) reste la technologie la plus subventionnée via le Fonds Chaleur. Pour une chaudière biomasse tertiaire ou industrielle de 500 kW à 5 MW, le taux de subvention peut atteindre <strong>45 à 60% du coût éligible</strong>.
                    </p>
                    <p className="font-sans text-text-light leading-relaxed mb-6">
                        Le couplage avec les CEE est autorisé et recommandé : les économies de GES générées par le passage du gaz/fuel à la biomasse peuvent être valorisées via des fiches CEE spécifiques (IND-UT-117 pour l'industrie, BAT-TH-104 pour le tertiaire), permettant de réduire le temps de retour sur investissement à <strong>moins de 5 ans</strong>.
                    </p>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Géothermie : l'essor de 2026</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        La géothermie bénéficie d'un effort particulier en 2026 avec le programme <strong>AQUAPAC</strong> de l'ADEME, dédié aux PAC sur nappe phréatique dans les projets collectifs. Le Fonds Chaleur finance jusqu'à <strong>40% du coût d'installation</strong> pour les systèmes de géothermie de surface (0 à 200 m).
                    </p>
                    <p className="font-sans text-text-light leading-relaxed mb-6">
                        Pour les bâtiments tertiaires chauffés par géothermie, le cumul Fonds Chaleur + CEE BAT-TH-164 (nouvelle fiche P6) est une combinaison particulièrement attractive, permettant des taux de subvention globaux de <strong>55 à 70% du coût total</strong>.
                    </p>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Comment monter un dossier Fonds Chaleur ?</h2>
                    <ol className="font-sans text-text-light space-y-3 mb-8 list-decimal list-inside">
                        <li><strong>Pré-faisabilité :</strong> étude de la ressource (biomasse disponible, aquifère, ensoleillement) et calcul du besoin thermique annuel</li>
                        <li><strong>Dépôt en ligne ADEME :</strong> via le portail « Aides & Financements » — dossier technique + bilan économique</li>
                        <li><strong>Instruction régionale :</strong> les DREAL instruisent les dossiers. Délai : 4 à 8 mois selon la complexité</li>
                        <li><strong>Convention de financement :</strong> signature avant le début des travaux (engagement indispensable)</li>
                        <li><strong>Versement des aides :</strong> en tranches, à l'avancement des travaux et à la réception</li>
                    </ol>

                    <div className="bg-primary-dark rounded-2xl p-8 text-white mt-12">
                        <h3 className="font-heading text-2xl text-accent mb-4">Maximisez vos aides chaleur renouvelable</h3>
                        <p className="font-sans leading-relaxed text-gray-300 mb-6">
                            SOLAGREEN accompagne les industriels et collectivités dans le montage de leurs dossiers Fonds Chaleur, en synergie avec les CEE et autres aides régionales. Expertise prouvée sur plus de 50 projets biomasse et géothermie.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-primary-dark font-bold px-8 py-3 rounded-xl hover:bg-accent-hot transition-colors">
                            Étude Fonds Chaleur <ChevronRight size={18} />
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Article8;
