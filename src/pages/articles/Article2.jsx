import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock, ChevronRight } from 'lucide-react';

const Article2 = () => {
    return (
        <div className="w-full bg-bg pb-24">
            {/* Hero */}
            <section className="relative h-[50vh] w-full flex items-end bg-primary-dark overflow-hidden">
                <img
                    src="/pv.png"
                    alt="Éclairage LED bureau"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-hero z-10 pointer-events-none" />
                <div className="relative z-20 max-w-4xl mx-auto px-6 pb-12 w-full">
                    <div className="flex items-center gap-2 text-xs font-mono text-accent mb-4 uppercase tracking-widest">
                        <Link to="/blog" className="hover:underline flex items-center gap-1"><ArrowLeft size={14} /> Blog</Link>
                        <ChevronRight size={12} className="text-gray-500" />
                        <span className="text-gray-400">Éclairage LED</span>
                    </div>
                    <h1 className="font-heading text-3xl md:text-5xl text-white leading-tight mb-4">
                        BAT-EQ-127 supprimée le 24 février 2026 : que faire pour votre éclairage LED ?
                    </h1>
                    <div className="flex items-center gap-6 text-xs font-mono text-gray-400 uppercase tracking-wide">
                        <span className="flex items-center gap-2"><CalendarDays size={14} /> Février 2026</span>
                        <span className="flex items-center gap-2"><Clock size={14} /> 3 min de lecture</span>
                        <span className="bg-accent/20 text-accent-dim px-3 py-1 rounded">ÉCLAIRAGE LED</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <article className="max-w-3xl mx-auto px-6 py-16">
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-text-light leading-relaxed mb-8 font-sans">
                        L'<strong>arrêté du 23 février 2026</strong> a entériné la suppression de la fiche CEE <strong>BAT-EQ-127</strong> (Rénovation d'éclairage tertiaire aux LED) à compter du 24 février 2026. Pour les milliers de sites tertiaires qui la mobilisaient chaque année, la question est immédiate : comment continuer à financer la rénovation LED de son parc ?
                    </p>

                    <div className="bg-red-50 border-l-4 border-red-400 rounded-r-2xl p-6 mb-10">
                        <h2 className="font-heading text-xl text-red-800 mb-2">⚠️ Attention : délai de dépôt</h2>
                        <p className="font-sans text-red-700 text-sm">
                            Les dossiers déposés avec un <strong>bon de commande signé avant le 24 février 2026</strong> restent valides et doivent être déposés dans un délai de 6 mois. Passé ce délai, aucune dérogation ne sera accordée par le PNCEE.
                        </p>
                    </div>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Pourquoi BAT-EQ-127 a-t-elle été supprimée ?</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-6">
                        La fiche BAT-EQ-127, dans sa version originale, permettait de valoriser le remplacement de luminaires fluorescents T8 et T5 par des LED dans les bâtiments tertiaires. Son succès massif (plus de 180 TWh cumac valorisés sur la P5) a conduit le ministère à revoir le dispositif, jugé trop permissif et peu orienté vers des gains réels de performance.
                    </p>
                    <p className="font-sans text-text-light leading-relaxed mb-6">
                        La révision s'inscrit dans une logique de qualité : favoriser non plus le simple remplacement d'ampoules, mais une <strong>rénovation complète de l'installation</strong> incluant la détection de présence, l'éclairage naturel et le pilotage intelligent.
                    </p>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Les fiches alternatives disponibles en 2026</h2>
                    <div className="space-y-4 mb-10">
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex items-start gap-4">
                            <span className="bg-accent/20 text-accent-dim font-mono font-bold px-3 py-2 rounded-xl text-sm shrink-0">BAT-EQ-111</span>
                            <div>
                                <h3 className="font-heading text-lg text-primary-dark mb-1">Luminaires à modules LED avec détecteurs de présence</h3>
                                <p className="font-sans text-text-light text-sm leading-relaxed">Valorise les luminaires LED intégrant une détection de présence et/ou de lumière du jour. Rendement maintenu ≥ 90 lm/W. Valorisation : ~25 kWh cumac/m². Idéal pour les open-spaces et couloirs.</p>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex items-start gap-4">
                            <span className="bg-accent/20 text-accent-dim font-mono font-bold px-3 py-2 rounded-xl text-sm shrink-0">BAT-TH-116</span>
                            <div>
                                <h3 className="font-heading text-lg text-primary-dark mb-1">GTB avec pilotage éclairage intégré</h3>
                                <p className="font-sans text-text-light text-sm leading-relaxed">La GTB (Gestion Technique du Bâtiment) de classe A ou B selon EN ISO 52120 peut inclure le pilotage de l'éclairage. Plus valorisante si couplée à la CVC, avec primes pouvant atteindre 40 €/m².</p>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex items-start gap-4">
                            <span className="bg-accent/20 text-accent-dim font-mono font-bold px-3 py-2 rounded-xl text-sm shrink-0">BAT-EQ-133 (NEW)</span>
                            <div>
                                <h3 className="font-heading text-lg text-primary-dark mb-1">Système de gestion d'éclairage DALI (P6)</h3>
                                <p className="font-sans text-text-light text-sm leading-relaxed">Nouvelle fiche P6 (en consultation publique, Q2 2026) : valorise les systèmes d'éclairage pilotés en protocole DALI-2 avec télécommande centralisée et reporting de consommation. Particulièrement adaptée aux entrepôts logistiques et zones de production.</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Stratégie recommandée pour les maîtres d'ouvrage</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        Face à cette évolution, SOLAGREEN recommande une approche en deux temps :
                    </p>
                    <ol className="font-sans text-text-light space-y-4 mb-8 list-decimal list-inside">
                        <li>
                            <strong>Audit lumineux DIALUX ou RELUX :</strong> cartographier les zones à fort potentiel (puissance installée élevée, taux d'occupation variable, zones sous-éclairées ou sur-éclairées).
                        </li>
                        <li>
                            <strong>Sélection de la fiche adaptée :</strong> BAT-EQ-111 pour les rénovations partielles, BAT-TH-116 si une GTB est envisagée en parallèle sur la CVC, BAT-EQ-133 pour les entrepôts.
                        </li>
                        <li>
                            <strong>Montage dossier avec obligé :</strong> obtenir une offre ferme avec valorisation en €/kWh cumac avant engagement des travaux.
                        </li>
                    </ol>

                    <div className="bg-primary-dark rounded-2xl p-8 text-white mt-12">
                        <h3 className="font-heading text-2xl text-accent mb-4">Vos travaux LED peuvent encore être financés</h3>
                        <p className="font-sans leading-relaxed text-gray-300 mb-6">
                            La disparition de BAT-EQ-127 n'est pas une fin de droit. Nos experts CEE identifient pour vous la fiche la plus avantageuse selon votre bâtiment. Contactez-nous pour un audit éclairage gratuit.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-primary-dark font-bold px-8 py-3 rounded-xl hover:bg-accent-hot transition-colors">
                            Audit gratuit <ChevronRight size={18} />
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Article2;
