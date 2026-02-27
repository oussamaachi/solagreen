import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock, ChevronRight } from 'lucide-react';

const Article5 = () => {
    return (
        <div className="w-full bg-bg pb-24">
            {/* Hero */}
            <section className="relative h-[50vh] w-full flex items-end bg-primary-dark overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop"
                    alt="Décret tertiaire OPERAT"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-hero z-10 pointer-events-none" />
                <div className="relative z-20 max-w-4xl mx-auto px-6 pb-12 w-full">
                    <div className="flex items-center gap-2 text-xs font-mono text-accent mb-4 uppercase tracking-widest">
                        <Link to="/blog" className="hover:underline flex items-center gap-1"><ArrowLeft size={14} /> Blog</Link>
                        <ChevronRight size={12} className="text-gray-500" />
                        <span className="text-gray-400">Décret Tertiaire</span>
                    </div>
                    <h1 className="font-heading text-3xl md:text-5xl text-white leading-tight mb-4">
                        Décret tertiaire 2025–2026 : CEE et OPERAT sont-ils compatibles ?
                    </h1>
                    <div className="flex items-center gap-6 text-xs font-mono text-gray-400 uppercase tracking-wide">
                        <span className="flex items-center gap-2"><CalendarDays size={14} /> Février 2026</span>
                        <span className="flex items-center gap-2"><Clock size={14} /> 6 min de lecture</span>
                        <span className="bg-accent/20 text-accent-dim px-3 py-1 rounded">DÉCRET TERTIAIRE</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <article className="max-w-3xl mx-auto px-6 py-16">
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-text-light leading-relaxed mb-8 font-sans">
                        Décret BACS, OPERAT, CEE P6 : les obligations réglementaires s'empilent sur les gestionnaires de patrimoine immobilier tertiaire. Bonne nouvelle : ces dispositifs sont non seulement cumulables, mais <strong>synergiques</strong>. Voici comment piloter votre stratégie pour valider simultanément vos obligations légales et maximiser vos primes CEE.
                    </p>

                    <div className="bg-accent/10 border-l-4 border-accent rounded-r-2xl p-6 mb-10">
                        <h2 className="font-heading text-2xl text-primary-dark mb-3">Les 3 obligations majeures du tertiaire 2026</h2>
                        <div className="grid md:grid-cols-3 gap-4 mt-4">
                            <div>
                                <h3 className="font-heading text-lg text-primary-dark mb-1">Décret Tertiaire</h3>
                                <p className="font-sans text-text-light text-sm">-40% de conso d'énergie en 2030 vs 2010. Déclaration OPERAT annuelle obligatoire pour tout bâtiment &gt; 1 000 m².</p>
                            </div>
                            <div>
                                <h3 className="font-heading text-lg text-primary-dark mb-1">Décret BACS</h3>
                                <p className="font-sans text-text-light text-sm">GTB obligatoire pour les systèmes CVC &gt; 290 kW à partir du 1er janvier 2025. Échéance 2027 pour les systèmes &gt; 70 kW.</p>
                            </div>
                            <div>
                                <h3 className="font-heading text-lg text-primary-dark mb-1">CEE P6</h3>
                                <p className="font-sans text-text-light text-sm">Financement des travaux d'efficacité énergétique via primes des obligés. 3 200 TWhc/an d'obligation sur 2026-2029.</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">OPERAT : l'outil de déclaration du Décret Tertiaire</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        La plateforme <strong>OPERAT</strong> (Observatoire de la Performance Energétique, de la Rénovation et des Actions du Tertiaire) est gérée par l'ADEME. Chaque assujetti au Décret Tertiaire doit y renseigner annuellement ses consommations d'énergie, en kWh/m²/an, par source d'énergie.
                    </p>
                    <p className="font-sans text-text-light leading-relaxed mb-6">
                        L'échéance annuelle est fixée au <strong>30 septembre</strong> pour les données de l'année N-1. En 2025, la date limite du 30 septembre 2025 concernait les données 2024. En 2026, ce sera les données 2025 qui devront être déclarées avant le 30 septembre 2026.
                    </p>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Comment les CEE s'intègrent dans OPERAT ?</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        Une idée reçue très répandue : "si j'ai des primes CEE, je dois les déduire de mon bilan OPERAT". C'est faux. Les CEE et le Décret Tertiaire fonctionnent sur des bases différentes :
                    </p>
                    <ul className="font-sans text-text-light space-y-3 mb-6 list-disc list-inside">
                        <li>Les <strong>CEE financement des travaux</strong> → réduisent le coût de l'investissement</li>
                        <li>Le <strong>résultat énergétique des travaux</strong> → se traduit en kWh économisés déclarés dans OPERAT</li>
                        <li>OPERAT mesure la <strong>consommation réelle</strong>, pas les économies théoriques</li>
                        <li>Les travaux CEE accélèrent l'atteinte des objectifs OPERAT (-40% en 2030)</li>
                    </ul>
                    <p className="font-sans text-text-light leading-relaxed mb-6">
                        En résumé : <strong>les CEE financent les travaux, et les travaux améliorent votre score OPERAT</strong>. Les deux sont complémentaires. Il n'y a aucune obligation de déduire quoi que ce soit.
                    </p>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Décret BACS : une obligation… et une opportunité CEE</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        Le <strong>Décret BACS</strong> (Building Automation and Control Systems) impose l'installation d'une GTB pour les systèmes de CVC dépassant certains seuils :
                    </p>
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6 shadow-sm">
                        <h3 className="font-heading text-xl text-primary-dark mb-3">Seuils d'obligation BACS</h3>
                        <table className="w-full text-sm font-sans">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-2 pr-6 font-bold text-primary-dark">Puissance CVC</th>
                                    <th className="text-left py-2 font-bold text-primary-dark">Échéance</th>
                                </tr>
                            </thead>
                            <tbody className="text-text-light">
                                <tr className="border-b border-gray-100"><td className="py-2 pr-6">Bâtiments neufs &gt; 290 kW</td><td className="py-2">Depuis janvier 2025</td></tr>
                                <tr className="border-b border-gray-100"><td className="py-2 pr-6">Bâtiments existants &gt; 290 kW</td><td className="py-2">1er janvier 2025</td></tr>
                                <tr><td className="py-2 pr-6">Bâtiments existants &gt; 70 kW</td><td className="py-2">1er janvier 2027</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="font-sans text-text-light leading-relaxed mb-6">
                        La GTB requise par le BACS est la même que celle valorisée par la fiche CEE <strong>BAT-TH-116</strong>. Autrement dit, l'investissement rendu obligatoire par la loi peut être <strong>partiellement financé par des primes CEE</strong>. C'est le cas de figure idéal d'une synergie réglementaire.
                    </p>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Audit énergétique obligatoire : une étape clé</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        Depuis le 1er janvier 2026, l'<strong>audit énergétique obligatoire</strong> s'applique aux entreprises non-PME réalisant plus de 250 salariés ou plus de 50 M€ de chiffre d'affaires (directive EED transposée). Cet audit doit être réalisé tous les 4 ans par un auditeur certifié.
                    </p>
                    <p className="font-sans text-text-light leading-relaxed mb-6">
                        Cet audit est une opportunité : il identifie les gisements d'économies d'énergie et les fiches CEE mobilisables, constituant de fait la feuille de route pour votre programme de travaux CEE et votre trajectoire OPERAT.
                    </p>

                    <div className="bg-primary-dark rounded-2xl p-8 text-white mt-12">
                        <h3 className="font-heading text-2xl text-accent mb-4">Pilotez vos 3 obligations avec une seule stratégie</h3>
                        <p className="font-sans leading-relaxed text-gray-300 mb-6">
                            SOLAGREEN structure pour vous un programme pluriannuel qui répond simultanément au Décret Tertiaire, au Décret BACS et aux CEE P6. Un interlocuteur unique, une vision globale.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-primary-dark font-bold px-8 py-3 rounded-xl hover:bg-accent-hot transition-colors">
                            Stratégie multi-obligations <ChevronRight size={18} />
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Article5;
