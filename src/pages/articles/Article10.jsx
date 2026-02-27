import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock, ChevronRight } from 'lucide-react';

const Article10 = () => {
    return (
        <div className="w-full bg-bg pb-24">
            {/* Hero */}
            <section className="relative h-[50vh] w-full flex items-end bg-primary-dark overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1518005068251-37900150dfca?q=80&w=1600&auto=format&fit=crop"
                    alt="Recharge véhicules électriques IRVE tertiaire"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-hero z-10 pointer-events-none" />
                <div className="relative z-20 max-w-4xl mx-auto px-6 pb-12 w-full">
                    <div className="flex items-center gap-2 text-xs font-mono text-accent mb-4 uppercase tracking-widest">
                        <Link to="/blog" className="hover:underline flex items-center gap-1"><ArrowLeft size={14} /> Blog</Link>
                        <ChevronRight size={12} className="text-gray-500" />
                        <span className="text-gray-400">IRVE / Mobilité</span>
                    </div>
                    <h1 className="font-heading text-3xl md:text-5xl text-white leading-tight mb-4">
                        IRVE obligatoires en 2026 : bornes de recharge, CEE et aides ADVENIR pour vos parkings
                    </h1>
                    <div className="flex items-center gap-6 text-xs font-mono text-gray-400 uppercase tracking-wide">
                        <span className="flex items-center gap-2"><CalendarDays size={14} /> Février 2026</span>
                        <span className="flex items-center gap-2"><Clock size={14} /> 5 min de lecture</span>
                        <span className="bg-accent/20 text-accent-dim px-3 py-1 rounded">IRVE / MOBILITÉ</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <article className="max-w-3xl mx-auto px-6 py-16">
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-text-light leading-relaxed mb-8 font-sans">
                        La mobilité électrique s'impose comme un nouveau chantier d'efficacité énergétique tertiaire. La <strong>Loi LOM</strong> et la <strong>Loi Climat</strong> ont rendu obligatoire l'installation d'Infrastructures de Recharge pour Véhicules Électriques (IRVE) dans les parkings d'entreprise. En 2026, les délais arrivent à échéance — et des aides considérables restent disponibles.
                    </p>

                    <div className="bg-accent/10 border-l-4 border-accent rounded-r-2xl p-6 mb-10">
                        <h2 className="font-heading text-2xl text-primary-dark mb-3">Obligations IRVE tertiaire 2026</h2>
                        <ul className="font-sans text-text-light space-y-2 mt-3">
                            <li>🚗 <strong>Bâtiments existants {'>'} 20 places :</strong> pré-équipement ou 10% de bornes depuis jan. 2025</li>
                            <li>⚡ <strong>Bâtiments neufs {'>'} 10 places :</strong> 100% des places pré-équipées (gaines, fourreaux)</li>
                            <li>🏢 <strong>Rénovations lourdes {'>'} 15% du bâtiment :</strong> 20% des places équipées en bornes</li>
                            <li>💶 <strong>Aide ADVENIR :</strong> jusqu'à 2 100 €/borne pour les parkings employeurs</li>
                        </ul>
                    </div>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Qui est concerné exactement ?</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        Les <strong>bâtiments tertiaires existants</strong> dont le parking dispose de plus de 20 emplacements doivent, depuis le 1er janvier 2025, avoir réalisé l'une des actions suivantes :
                    </p>
                    <ul className="font-sans text-text-light space-y-3 mb-6 list-disc list-inside">
                        <li>Installer des bornes de recharge sur au moins <strong>10% des places</strong>, ou</li>
                        <li>Réaliser le <strong>pré-équipement électrique</strong> (gaines, fourreaux, tableau électrique dimensionné) pour 50% des places</li>
                    </ul>
                    <p className="font-sans text-text-light leading-relaxed mb-6">
                        Pour les bâtiments en <strong>rénovation lourde</strong> après 2025 (permis de construire déposé après le 1er janvier 2025), le taux monte à <strong>20% de places équipées</strong> en bornes opérationnelles.
                    </p>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Les aides disponibles en 2026</h2>
                    <div className="space-y-4 mb-10">
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="font-heading text-xl text-primary-dark">Programme ADVENIR</h3>
                                <span className="bg-accent/20 text-accent-dim font-mono text-sm px-3 py-1 rounded-lg">Jusqu'à 2 100 €/borne</span>
                            </div>
                            <p className="font-sans text-text-light text-sm leading-relaxed">
                                Cofinancé par EDF et l'État, ADVENIR subventionne l'achat et l'installation de bornes de recharge AC (7 à 22 kW) dans les parkings employeurs. La prime est versée directement à l'installateur agréé IRVE et déduite de la facture client.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="font-heading text-xl text-primary-dark">CEE BAT-EQ-130</h3>
                                <span className="bg-accent/20 text-accent-dim font-mono text-sm px-3 py-1 rounded-lg">Nouveauté P6</span>
                            </div>
                            <p className="font-sans text-text-light text-sm leading-relaxed">
                                Nouvelle fiche CEE en cours de finalisation pour la P6 (attendue T2 2026) : valorise les systèmes de smart charging dans les parkings tertiaires, notamment lorsque la recharge est pilotée par la GTB du bâtiment et couplée à une production solaire.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="font-heading text-xl text-primary-dark">Aide régionales</h3>
                                <span className="bg-accent/20 text-accent-dim font-mono text-sm px-3 py-1 rounded-lg">Variable</span>
                            </div>
                            <p className="font-sans text-text-light text-sm leading-relaxed">
                                Certaines régions (Île-de-France, Auvergne-Rhône-Alpes, Occitanie) ont mis en place des aides complémentaires pour les PME. En IDF, la Région peut cofinancer jusqu'à 30% du coût total de l'installation IRVE.
                            </p>
                        </div>
                    </div>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Smart charging : la recharge intelligente pliée dans la GTB</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        La simple installation de bornes n'est plus suffisante pour les entreprises qui veulent optimiser leur facture électrique. Le <strong>smart charging</strong> (recharge intelligente) consiste à piloter les bornes via la GTB du bâtiment pour :
                    </p>
                    <ul className="font-sans text-text-light space-y-2 mb-6 list-disc list-inside">
                        <li>Recharger préférentiellement sur les plages de production solaire</li>
                        <li>Éviter les dépassements de puissance souscrite (effacer la demande IRVE en heure de pointe)</li>
                        <li>Gérer la file d'attente de recharge et éviter la saturation du réseau basse tension</li>
                        <li>Favoriser l'effacement réseau et participer aux marchés de flexibilité (RTE)</li>
                    </ul>
                    <p className="font-sans text-text-light leading-relaxed mb-6">
                        Une installation de <strong>20 bornes 22 kW</strong> couplée à une GTB et à une installation solaire de 100 kWc peut réduire la facture électrique IRVE de <strong>40 à 55%</strong> par rapport à une recharge non pilotée, tout en accélérant l'amortissement de l'installation.
                    </p>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Étapes d'un projet IRVE tertiaire réussi</h2>
                    <ol className="font-sans text-text-light space-y-3 mb-8 list-decimal list-inside">
                        <li><strong>Diagnostic électrique :</strong> vérification de la puissance disponible au TGBT, calcul des renforcements nécessaires</li>
                        <li><strong>Dimensionnement :</strong> nombre de bornes, puissance par borne (7, 11 ou 22 kW), gestion dynamique de la charge</li>
                        <li><strong>Choix du gestionnaire de charge (CPO) :</strong> backoffice de pilotage, facturation, supervision</li>
                        <li><strong>Montage des aides :</strong> ADVENIR, CEE BAT-EQ-130, aides régionales, amortissement fiscal</li>
                        <li><strong>Installation par un IRVE qualifié :</strong> certification IRVE obligatoire pour accéder aux aides ADVENIR</li>
                    </ol>

                    <div className="bg-primary-dark rounded-2xl p-8 text-white mt-12">
                        <h3 className="font-heading text-2xl text-accent mb-4">Votre projet IRVE clé en main</h3>
                        <p className="font-sans leading-relaxed text-gray-300 mb-6">
                            SOLAGREEN pilote vos projets IRVE de A à Z : diagnostic, dimensionnement, coordination avec l'installateur, montage ADVENIR + CEE, et intégration dans votre GTB existante. Devis en 5 jours.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-primary-dark font-bold px-8 py-3 rounded-xl hover:bg-accent-hot transition-colors">
                            Projet IRVE <ChevronRight size={18} />
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Article10;
