import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock, ChevronRight } from 'lucide-react';

const Article9 = () => {
    return (
        <div className="w-full bg-bg pb-24">
            {/* Hero */}
            <section className="relative h-[50vh] w-full flex items-end bg-primary-dark overflow-hidden">
                <img
                    src="/cee.png"
                    alt="Audit énergétique obligatoire entreprise"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-hero z-10 pointer-events-none" />
                <div className="relative z-20 max-w-4xl mx-auto px-6 pb-12 w-full">
                    <div className="flex items-center gap-2 text-xs font-mono text-accent mb-4 uppercase tracking-widest">
                        <Link to="/blog" className="hover:underline flex items-center gap-1"><ArrowLeft size={14} /> Blog</Link>
                        <ChevronRight size={12} className="text-gray-500" />
                        <span className="text-gray-400">Audit Énergétique</span>
                    </div>
                    <h1 className="font-heading text-3xl md:text-5xl text-white leading-tight mb-4">
                        Audit énergétique obligatoire 2026 : êtes-vous concerné par la directive EED ?
                    </h1>
                    <div className="flex items-center gap-6 text-xs font-mono text-gray-400 uppercase tracking-wide">
                        <span className="flex items-center gap-2"><CalendarDays size={14} /> Janvier 2026</span>
                        <span className="flex items-center gap-2"><Clock size={14} /> 5 min de lecture</span>
                        <span className="bg-accent/20 text-accent-dim px-3 py-1 rounded">AUDIT ÉNERGÉTIQUE</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <article className="max-w-3xl mx-auto px-6 py-16">
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-text-light leading-relaxed mb-8 font-sans">
                        La <strong>directive européenne EED (Energy Efficiency Directive 2023/1791)</strong>, transposée en droit français par l'ordonnance du 18 décembre 2024, renforce l'obligation d'audit énergétique pour les grandes entreprises. Depuis le <strong>1er janvier 2026</strong>, les critères d'assujettissement s'élargissent et les sanctions se durcissent. Êtes-vous concerné ?
                    </p>

                    <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-2xl p-6 mb-10">
                        <h2 className="font-heading text-xl text-orange-800 mb-2">⚠️ Risque d'amende</h2>
                        <p className="font-sans text-orange-700 text-sm">
                            En cas de non-réalisation de l'audit dans les délais, l'entreprise s'expose à une amende pouvant aller jusqu'à <strong>2% du chiffre d'affaires annuel mondial</strong> de l'entité assujettie, conformément à la directive EED révisée.
                        </p>
                    </div>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Qui est obligé par l'audit énergétique EED ?</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        L'audit énergétique réglementaire concerne les entreprises qui dépassent au moins l'un de ces deux seuils :
                    </p>
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6 shadow-sm">
                        <table className="w-full text-sm font-sans">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-2 pr-6 font-bold text-primary-dark">Critère</th>
                                    <th className="text-left py-2 font-bold text-primary-dark">Seuil</th>
                                </tr>
                            </thead>
                            <tbody className="text-text-light">
                                <tr className="border-b border-gray-100"><td className="py-2 pr-6">Effectif</td><td className="py-2">≥ 250 salariés</td></tr>
                                <tr className="border-b border-gray-100"><td className="py-2 pr-6">Chiffre d'affaires annuel</td><td className="py-2">&gt; 50 M€</td></tr>
                                <tr><td className="py-2 pr-6">Total bilan</td><td className="py-2">&gt; 43 M€</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="font-sans text-text-light leading-relaxed mb-6">
                        Les <strong>PME</strong> (moins de 250 salariés ET moins de 50 M€ de CA) sont exemptes de l'obligation réglementaire, mais bénéficient d'aides spécifiques pour réaliser un audit volontaire via le dispositif "Diag Décarbon'Action" de l'ADEME.
                    </p>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Contenu obligatoire de l'audit EED</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        L'audit réglementaire doit couvrir l'ensemble des usages énergétiques de l'entreprise et respecter les exigences de la norme <strong>NF EN 16247</strong> :
                    </p>
                    <ul className="font-sans text-text-light space-y-3 mb-6 list-disc list-inside">
                        <li><strong>Inventaire des consommations :</strong> par énergie (gaz, électricité, fioul, etc.), par site et par usage (chauffage, process, éclairage, transport)</li>
                        <li><strong>Analyse des flux énergétiques :</strong> identification des postes les plus consommateurs (&gt; 10% du total)</li>
                        <li><strong>Bilan GES :</strong> émissions de CO₂ associées, par source d'énergie et par scope</li>
                        <li><strong>Préconisations hiérarchisées :</strong> liste de mesures d'efficacité énergétique avec TRI, économies potentielles et coût estimé</li>
                        <li><strong>Plan d'actions :</strong> calendrier de mise en œuvre et indicateurs de suivi</li>
                    </ul>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Audit EED et Décret Tertiaire : comment articuler les deux ?</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        Les entreprises soumises au Décret Tertiaire <strong>ET</strong> à l'audit EED doivent articuler les deux outils :
                    </p>
                    <ul className="font-sans text-text-light space-y-2 mb-8 list-disc list-inside">
                        <li>L'audit EED fournit les données consommations globales → alimentent les déclarations OPERAT</li>
                        <li>Le Plan Pluriannuel d'Investissement (PPI) issu de l'audit définit les travaux → candidats aux CEE P6</li>
                        <li>Les travaux CEE financés → génèrent les économies enregistrées dans OPERAT</li>
                    </ul>
                    <p className="font-sans text-text-light leading-relaxed mb-6">
                        <strong>Un seul audit bien structuré peut alimenter simultanément vos obligations EED, votre trajectoire OPERAT et votre programme CEE.</strong> C'est l'approche intégrée que SOLAGREEN déploie depuis 2022.
                    </p>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Qui réalise l'audit ? Qualifications requises</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        L'audit EED doit être réalisé par un <strong>auditeur qualifié et indépendant</strong>, certifié selon l'un des référentiels suivants :
                    </p>
                    <ul className="font-sans text-text-light space-y-2 mb-6 list-disc list-inside">
                        <li>Qualification OPQIBI n°1905 (Audit énergétique tertiaire et industrie)</li>
                        <li>Certification AFNOR Compétences auditeur NF EN 16247</li>
                        <li>Accréditation COFRAC pour les auditeurs de grande entreprise</li>
                    </ul>

                    <div className="bg-primary-dark rounded-2xl p-8 text-white mt-12">
                        <h3 className="font-heading text-2xl text-accent mb-4">Répondez à vos obligations EED en 60 jours</h3>
                        <p className="font-sans leading-relaxed text-gray-300 mb-6">
                            SOLAGREEN dispose d'auditeurs certifiés OPQIBI disponibles pour vos sites en France métropolitaine. Notre audit intègre d'emblée l'identification des gisements CEE pour maximiser votre retour sur investissement.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-primary-dark font-bold px-8 py-3 rounded-xl hover:bg-accent-hot transition-colors">
                            Planifier mon audit EED <ChevronRight size={18} />
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Article9;
