import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight, Info, ChevronDown } from 'lucide-react';
import CeeBadge from '../components/CeeBadge';

const Isolation = () => {
    const comp = useRef(null);

    useLayoutEffect(() => {
        const details = comp.current ? comp.current.querySelectorAll('details') : [];
        const onDetailClick = (event) => {
            const targetDetail = event.currentTarget;
            details.forEach((detail) => {
                if (detail !== targetDetail) {
                    detail.removeAttribute('open');
                }
            });
        };

        let ctx = gsap.context(() => {
            gsap.from('.dashboard', { y: 60, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 });

            // Simple accordion behavior
            details.forEach((detail) => {
                detail.addEventListener('click', onDetailClick);
            });
        }, comp);
        return () => {
            ctx.revert();
            details.forEach((detail) => {
                detail.removeEventListener('click', onDetailClick);
            });
        };
    }, []);

    return (
        <div ref={comp} className="w-full bg-bg pb-24">
            {/* Hero */}
            <section className="relative h-[50vh] w-full flex flex-col items-center justify-center overflow-hidden bg-primary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-hero pointer-events-none z-0"></div>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent z-10 animate-[pulse_2s_ease-in-out_infinite]"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mt-10">
                    <h1 className="font-heading text-5xl md:text-7xl text-white tracking-widest uppercase mb-4">
                        Isolation Thermique
                    </h1>
                    <CeeBadge />
                </div>
            </section>

            {/* Dashboard CEE Isolation (Section Vedette) */}
            <section className="max-w-5xl mx-auto px-6 -mt-20 relative z-20 dashboard">
                <div className="bg-accent rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

                    <h2 className="font-heading text-3xl md:text-4xl text-primary-dark mb-8 tracking-wide uppercase border-b border-primary-dark/20 pb-4">
                        💰 Primes CEE Isolation — P6 (Exemple)
                    </h2>

                    <div className="font-mono text-sm md:text-base text-primary-dark space-y-2 relative z-10">
                        <p className="font-bold mb-6 text-primary-dark/80 bg-white/20 inline-block px-4 py-1 rounded w-full md:w-auto">Bâtiment tertiaire bureaux — 3 000 m² — Île-de-France (Zone H1)</p>

                        <div className="flex justify-between items-end border-b border-primary-dark/10 border-dashed pb-2 hover:bg-white/10 p-2 rounded transition-colors">
                            <span>Isolation combles/toiture (BAT-EN-101)</span>
                            <span className="font-bold">~8 000 €</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-primary-dark/10 border-dashed pb-2 hover:bg-white/10 p-2 rounded transition-colors">
                            <span>Isolation murs extérieurs (BAT-EN-102)</span>
                            <span className="font-bold">~12 000 €</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-primary-dark/10 border-dashed pb-2 hover:bg-white/10 p-2 rounded transition-colors">
                            <span>Isolation plancher (BAT-EN-103)</span>
                            <span className="font-bold">~5 000 €</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-primary-dark/10 border-dashed pb-2 hover:bg-white/10 p-2 rounded transition-colors text-primary-dark/70">
                            <span>Système GTB additionnel conseillé (BAT-TH-116)</span>
                            <span className="font-bold">~8 000 €</span>
                        </div>

                        <div className="bg-primary-dark text-accent p-6 rounded-2xl mt-8">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                <span className="text-xl uppercase font-bold tracking-wider text-white">Prime CEE totale estimée</span>
                                <span className="text-4xl font-bold bg-accent text-primary-dark px-4 py-2 rounded-xl">~33 000 €</span>
                            </div>
                            <div className="h-px bg-white/20 w-full my-4"></div>
                            <div className="flex justify-between text-white/70">
                                <span>Investissement initial total</span>
                                <span>~100 000 €</span>
                            </div>
                            <div className="flex justify-between text-white">
                                <span className="font-bold">Reste à charge réel après CEE</span>
                                <span className="font-bold">~67 000 € (33% CEE)</span>
                            </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur border border-red-500/20 text-red-700 p-4 rounded-xl mt-6 flex gap-3 text-sm font-sans items-start">
                            <Info className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
                            <div>
                                <strong className="block mb-1">Condition impérative P6 : Demande AVANT le début des travaux</strong>
                                Dans la réglementation de la 6e période, aucun devis ne doit être signé et aucun acompte versé avant la création du dossier CEE. SOLAGREEN sécurise administrativement cette étape pour vous.
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 relative z-10 flex justify-center md:justify-end">
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-primary-dark text-accent px-8 py-4 rounded-xl font-bold transition-transform hover:scale-[1.03] shadow-lg">
                            Obtenir mon estimation pour mon bâtiment <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Fiches CEE Actives Isolation */}
            <section className="max-w-7xl mx-auto px-6 mt-24">
                <h2 className="font-heading text-4xl text-primary-dark mb-10 text-center">Fiches Isolation Tertiaire — Actives P6 (2026)</h2>

                <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                    <div className="bg-primary-dark rounded-3xl p-8 text-white h-fit font-mono text-sm leading-relaxed border border-white/5">
                        <h4 className="text-accent font-bold mb-6 font-sans text-lg border-b border-white/10 pb-4">Top 5 CEE Tertiaire</h4>
                        <ol className="space-y-4 list-decimal pl-4">
                            <li><strong className="text-white">BAT-EN-101</strong> — Isolation combles/toiture</li>
                            <li><strong className="text-white">BAT-TH-102</strong> — Chaudière perf.</li>
                            <li><strong className="text-white">BAT-EQ-111</strong> — LED alternative</li>
                            <li><strong className="text-white">BAT-TH-116</strong> — GTB</li>
                            <li><strong className="text-white">BAT-EQ-124</strong> — Fermeture frigo</li>
                        </ol>

                        <div className="mt-8 pt-6 border-t border-white/10 text-gray-400 text-xs space-y-3">
                            <p>Source officielle: Statistiques opérations EDF Entreprises (validé 2026).</p>
                            <p className="text-accent-dim">Contrôles P6 renforcés : accréditation NF EN ISO/CEI 17020 requise sur les chantiers isolation tertiaire.</p>
                            <p>Validité CEE P6: 12 ans max.</p>
                        </div>
                    </div>

                    <div className="bg-bg-alt rounded-3xl p-8 font-mono text-sm shadow-inner border border-gray-200">
                        <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
                            <span className="font-bold text-gray-500 w-24">FICHE</span>
                            <span className="font-bold text-gray-500 flex-1">OPÉRATION</span>
                            <span className="font-bold text-gray-500 w-32 text-right">STATUT P6</span>
                        </div>

                        <div className="space-y-3">
                            <div className="flex flex-col sm:flex-row items-baseline gap-2 pb-3 border-b border-gray-300 border-dashed">
                                <span className="font-bold text-primary-dark bg-white px-2 py-1 rounded w-32 text-center border border-gray-200">BAT-EN-101</span>
                                <span className="flex-1 font-sans">Isolation des combles ou toitures</span>
                                <span className="text-accent-dim font-bold mt-2 sm:mt-0 text-right w-full sm:w-auto">Révisée jan. 2025</span>
                            </div>
                            <div className="flex flex-col sm:flex-row items-baseline gap-2 pb-3 border-b border-gray-300 border-dashed">
                                <span className="font-bold text-primary-dark bg-white px-2 py-1 rounded w-32 text-center border border-gray-200">BAT-EN-102</span>
                                <span className="flex-1 font-sans">Isolation des murs (ITE / ITI)</span>
                                <span className="text-accent-dim font-bold mt-2 sm:mt-0 text-right w-full sm:w-auto">Révisée jan. 2025</span>
                            </div>
                            <div className="flex flex-col sm:flex-row items-baseline gap-2 pb-3 border-b border-gray-300 border-dashed">
                                <span className="font-bold text-primary-dark bg-white px-2 py-1 rounded w-32 text-center border border-gray-200">BAT-EN-103</span>
                                <span className="flex-1 font-sans">Isolation d'un plancher ba</span>
                                <span className="text-accent-dim font-bold mt-2 sm:mt-0 text-right w-full sm:w-auto">Révisée jan. 2025</span>
                            </div>
                            <div className="flex flex-col sm:flex-row items-baseline gap-2 pb-3 border-b border-gray-300 border-dashed">
                                <span className="font-bold text-primary-dark bg-white px-2 py-1 rounded w-32 text-center border border-gray-200">BAT-EN-104</span>
                                <span className="flex-1 font-sans">Remplacement menuiseries vitrées</span>
                                <span className="text-accent-dim font-bold mt-2 sm:mt-0 text-right w-full sm:w-auto">Active P6</span>
                            </div>
                            <div className="flex flex-col sm:flex-row items-baseline gap-2 pb-3 border-b border-gray-300 border-dashed">
                                <span className="font-bold text-primary-dark bg-white px-2 py-1 rounded w-32 text-center border border-gray-200">BAT-EN-109</span>
                                <span className="flex-1 font-sans">Rénovation globale complexe</span>
                                <span className="text-accent-dim font-bold mt-2 sm:mt-0 text-right w-full sm:w-auto">Active P6</span>
                            </div>
                        </div>

                        <div className="mt-8 relative h-48 rounded-2xl overflow-hidden shadow-inner group cursor-pointer border border-gray-200">
                            <div className="absolute inset-0 bg-primary-dark/80 group-hover:bg-primary-dark/60 transition-colors z-10 flex flex-col items-center justify-center p-6 text-center">
                                <h4 className="font-heading text-2xl text-accent mb-2">Simulation Interactive SVG Bientôt Disponible</h4>
                                <p className="font-sans text-white/80 text-sm">Cliquez sur un bâtiment tertiaire pour visualiser l'impact CEE P6 par zone d'isolation.</p>
                            </div>
                            <img src="/isolation.png" alt="Construction" className="w-full h-full object-cover filter grayscale" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Catalogue Isolation — Accordéon GSAP */}
            <section className="max-w-4xl mx-auto px-6 mt-24">
                <h3 className="font-heading text-3xl text-primary-dark mb-8 uppercase tracking-wide text-center">Travaux Éligibles</h3>

                <div className="space-y-4">
                    <details className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden group">
                        <summary className="p-6 font-heading text-2xl text-primary-dark cursor-pointer flex justify-between items-center group-hover:bg-gray-50 transition-colors list-none">
                            <div className="flex items-center gap-4">
                                <span>🏠 Combles & Toitures</span>
                                <span className="font-mono text-xs font-bold px-2 py-1 bg-gray-100 rounded text-gray-500">BAT-EN-101</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CeeBadge />
                                <ChevronDown className="group-open:rotate-180 transition-transform text-primary-dark" />
                            </div>
                        </summary>
                        <div className="p-6 pt-0 border-t border-gray-100 text-text-light font-sans mt-2">
                            <p className="mb-4">L'isolation des combles et toitures représente le gisement CEE le plus volumineux en France, car 30% des déperditions thermiques s'effectuent par le toit.</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Isolation de combles perdus</li>
                                <li>Isolation de rampants de toiture</li>
                                <li>Isolation sous étanchéité (toitures terrasses) — fiche revalorisée.</li>
                            </ul>
                        </div>
                    </details>

                    <details className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden group">
                        <summary className="p-6 font-heading text-2xl text-primary-dark cursor-pointer flex justify-between items-center group-hover:bg-gray-50 transition-colors list-none">
                            <div className="flex items-center gap-4">
                                <span>🧱 Murs Externe/Interne</span>
                                <span className="font-mono text-xs font-bold px-2 py-1 bg-gray-100 rounded text-gray-500">BAT-EN-102</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CeeBadge />
                                <ChevronDown className="group-open:rotate-180 transition-transform text-primary-dark" />
                            </div>
                        </summary>
                        <div className="p-6 pt-0 border-t border-gray-100 text-text-light font-sans mt-2">
                            <p className="mb-4">Solution idéale pour combiner efficacité énergétique et rénovation esthétique (ravalement) des façades.</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Isolation Thermique par l'Extérieur (ITE) : la plus efficace.</li>
                                <li>Isolation Thermique par l'Intérieur (ITI) : préserve la façade.</li>
                                <li>Pose de bardage isolant ventilé.</li>
                            </ul>
                        </div>
                    </details>

                    <details className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden group">
                        <summary className="p-6 font-heading text-2xl text-primary-dark cursor-pointer flex justify-between items-center group-hover:bg-gray-50 transition-colors list-none">
                            <div className="flex items-center gap-4">
                                <span>🏗️ Planchers Bas</span>
                                <span className="font-mono text-xs font-bold px-2 py-1 bg-gray-100 rounded text-gray-500">BAT-EN-103</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CeeBadge />
                                <ChevronDown className="group-open:rotate-180 transition-transform text-primary-dark" />
                            </div>
                        </summary>
                        <div className="p-6 pt-0 border-t border-gray-100 text-text-light font-sans mt-2">
                            <p>L'isolation du plancher bas limite les déperditions vers les espaces non chauffés (garages, caves, vides sanitaires). Opération très technique sujette à de fréquents contrôles P6, nécessitant notre expertise stricte.</p>
                        </div>
                    </details>
                </div>
            </section>
        </div>
    );
};

export default Isolation;
