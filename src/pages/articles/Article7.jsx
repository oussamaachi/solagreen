import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock, ChevronRight } from 'lucide-react';

const Article7 = () => {
    return (
        <div className="w-full bg-bg pb-24">
            {/* Hero */}
            <section className="relative h-[50vh] w-full flex items-end bg-primary-dark overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1600&auto=format&fit=crop"
                    alt="GTB gestion technique bâtiment"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-hero z-10 pointer-events-none" />
                <div className="relative z-20 max-w-4xl mx-auto px-6 pb-12 w-full">
                    <div className="flex items-center gap-2 text-xs font-mono text-accent mb-4 uppercase tracking-widest">
                        <Link to="/blog" className="hover:underline flex items-center gap-1"><ArrowLeft size={14} /> Blog</Link>
                        <ChevronRight size={12} className="text-gray-500" />
                        <span className="text-gray-400">GTB / BACS</span>
                    </div>
                    <h1 className="font-heading text-3xl md:text-5xl text-white leading-tight mb-4">
                        GTB BAT-TH-116 en 2026 : la fiche CEE la plus stratégique du tertiaire
                    </h1>
                    <div className="flex items-center gap-6 text-xs font-mono text-gray-400 uppercase tracking-wide">
                        <span className="flex items-center gap-2"><CalendarDays size={14} /> Janvier 2026</span>
                        <span className="flex items-center gap-2"><Clock size={14} /> 5 min de lecture</span>
                        <span className="bg-accent/20 text-accent-dim px-3 py-1 rounded">GTB / BACS</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <article className="max-w-3xl mx-auto px-6 py-16">
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-text-light leading-relaxed mb-8 font-sans">
                        La <strong>GTB (Gestion Technique du Bâtiment)</strong> est devenue en 2025-2026 le chantier prioritaire de tout responsable de patrimoine tertiaire. Obligatoire par le Décret BACS pour les systèmes CVC {'>'} 290 kW depuis le 1er janvier 2025, la GTB est également la fiche CEE <strong>BAT-TH-116</strong> — l'une des plus valorisées du dispositif sur la P6 avec des primes pouvant atteindre <strong>40 €/m²</strong>.
                    </p>

                    <div className="bg-accent/10 border-l-4 border-accent rounded-r-2xl p-6 mb-10">
                        <h2 className="font-heading text-2xl text-primary-dark mb-3">BAT-TH-116 en chiffres</h2>
                        <ul className="font-sans text-text-light space-y-2 mt-3">
                            <li>📊 <strong>Prime indicative :</strong> 15 à 40 €/m² de surface contrôlée (selon classe GTB)</li>
                            <li>🏢 <strong>Surface minimale :</strong> pas de seuil (toutes surfaces éligibles)</li>
                            <li>🔋 <strong>Économies typiques :</strong> 20 à 30% de la facture CVC</li>
                            <li>📅 <strong>TRI moyen :</strong> 3 à 6 ans avec primes CEE</li>
                        </ul>
                    </div>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Qu'est-ce qu'une GTB de classe A ou B ?</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        La norme <strong>EN ISO 52120:2022</strong> définit 4 classes de GTB, de D (absence de régulation) à A (pilotage intelligent et prédictif). La fiche CEE BAT-TH-116 exige au minimum une GTB de <strong>classe B</strong> — soit un système capable d'assurer :
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                            <h3 className="font-heading text-lg text-accent-dim mb-2">Classe B (minimum CEE)</h3>
                            <ul className="font-sans text-text-light text-sm space-y-1">
                                <li>✓ Régulation multizone par pièce/zone</li>
                                <li>✓ Programmation horaire avancée</li>
                                <li>✓ Détection d'occupation</li>
                                <li>✓ Reporting des consommations</li>
                                <li>✓ Alertes défauts et dérives</li>
                            </ul>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                            <h3 className="font-heading text-lg text-accent-dim mb-2">Classe A (bonus CEE)</h3>
                            <ul className="font-sans text-text-light text-sm space-y-1">
                                <li>✓ Tout le Classe B +</li>
                                <li>✓ Optimisation algorithmique temps réel</li>
                                <li>✓ Intégration prévisions météo</li>
                                <li>✓ Pilotage solaire/éolien si disponible</li>
                                <li>✓ Flexibilité réseau (effacement demande)</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Les fonctionnalités générateur d'économies</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        Une GTB bien paramétrée génère des économies d'énergie mesurables sur plusieurs postes :
                    </p>
                    <div className="space-y-4 mb-8">
                        {[
                            { poste: 'Chauffage/climatisation', eco: '-25%', detail: 'Arrêt anticipé avant la fin d\'occupation, relance optimisée selon météo, intermittences week-end' },
                            { poste: 'Ventilation (CTA)', eco: '-20%', detail: 'Modulation du débit d\'air selon la qualité de l\'air intérieur (CO2), réduction nocturne' },
                            { poste: 'Éclairage (si intégré)', eco: '-30%', detail: 'Détection présence, gradation selon apport lumière naturelle' },
                            { poste: 'Eau chaude sanitaire', eco: '-10%', detail: 'Programmation des bouclages circulateurs, alerte légionellose' },
                        ].map(({ poste, eco, detail }) => (
                            <div key={poste} className="bg-white border border-gray-100 rounded-xl p-5 flex items-start gap-4 shadow-sm">
                                <div className="bg-accent text-primary-dark font-heading font-bold text-lg px-3 py-2 rounded-lg shrink-0 min-w-[60px] text-center">{eco}</div>
                                <div>
                                    <h4 className="font-heading text-lg text-primary-dark mb-1">{poste}</h4>
                                    <p className="font-sans text-text-light text-sm">{detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Protocoles compatibles : KNX, BACnet, Modbus</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-6">
                        La compatibilité des équipements existants avec la future GTB est un enjeu clé. Les protocoles les plus courants dans le tertiaire sont :
                    </p>
                    <ul className="font-sans text-text-light space-y-2 mb-6 list-disc list-inside">
                        <li><strong>KNX :</strong> standard ouvert ISO 14543, idéal pour les nouvelles installations ou les rénovations lourdes. Très fiable, câblage dédié.</li>
                        <li><strong>BACnet IP :</strong> protocole internet natif, parfait pour l'intégration sur réseaux Ethernet existants. Compatible avec la majorité des équipements CVC récents.</li>
                        <li><strong>Modbus RTU/TCP :</strong> protocole industriel robuste, quasi-universel pour les onduleurs, compteurs, régulateurs de chauffage.</li>
                        <li><strong>DALI-2 :</strong> pour le pilotage de l'éclairage LED en protocole standard ouvert.</li>
                    </ul>

                    <div className="bg-primary-dark rounded-2xl p-8 text-white mt-12">
                        <h3 className="font-heading text-2xl text-accent mb-4">Conformité BACS + Prime CEE : doublez l'impact</h3>
                        <p className="font-sans leading-relaxed text-gray-300 mb-6">
                            SOLAGREEN conçoit et installe des GTB certifiées Classe A/B, conformes au Décret BACS et éligibles à la fiche BAT-TH-116 CEE. Nous gérons le dossier complet de A à Z.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-primary-dark font-bold px-8 py-3 rounded-xl hover:bg-accent-hot transition-colors">
                            Étude GTB gratuite <ChevronRight size={18} />
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Article7;
