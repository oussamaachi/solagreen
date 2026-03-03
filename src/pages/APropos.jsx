import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { prefersReducedMotion } from '../utils/motion';

const APropos = () => {
    const comp = useRef(null);

    useLayoutEffect(() => {
        const reduceMotion = prefersReducedMotion();

        let ctx = gsap.context(() => {
            if (reduceMotion) return;
            gsap.from('.fade-up', { y: 50, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.2 });
        }, comp);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={comp} className="w-full">
            {/* 1. Hero */}
            <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden bg-primary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-hero pointer-events-none z-0"></div>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent z-10 animate-[pulse_2s_ease-in-out_infinite]"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center fade-up">
                    <h1 className="font-heading text-5xl md:text-7xl text-white tracking-widest uppercase">
                        Qui sommes-nous ?
                    </h1>
                </div>
            </section>

            {/* 2. Notre Identité */}
            <section className="py-24 bg-bg w-full">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div className="fade-up">
                        <h2 className="font-heading text-3xl md:text-4xl text-primary-dark mb-6">Expertise Énergétique & Ingénierie Financière</h2>
                        <div className="font-sans text-text space-y-4">
                            <p>
                                Fondée sur une double expertise — l'ingénierie des bâtiments tertiaires et la maîtrise des leviers financiers —, SOLAGREEN se positionne comme l'acteur central de votre transition énergétique.
                            </p>
                            <p>
                                Dans un contexte réglementaire qui s'accélère (Décret Tertiaire, Loi Climat, P6 des CEE), nous ne nous contentons pas de préconiser des travaux. Nous les concevons, les installons, et surtout, <strong>nous les finançons</strong>.
                            </p>
                        </div>
                    </div>
                    <div className="fade-up relative">
                        <div className="absolute inset-y-0 -left-6 w-1 bg-accent/30 hidden md:block"></div>
                        <p className="font-serif italic text-3xl md:text-4xl text-accent font-bold leading-tight pl-6 md:pl-8">
                            "Nous ne vendons pas que des solutions énergétiques. Nous maximisons vos aides CEE pour les rendre accessibles."
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Le Contexte Marché (Données Réelles 2026) */}
            <section className="py-24 bg-bg-alt border-y border-gray-200">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="font-heading text-3xl md:text-4xl text-primary-dark mb-10 text-center">Marché ENR & CEE — L'Urgence d'Agir</h2>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 font-mono text-sm md:text-base text-primary-dark leading-relaxed">
                        <div className="text-gray-400 mb-6 uppercase tracking-wider text-xs font-bold border-b border-gray-200 pb-2">
                            Données officielles jan.–fév. 2026
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-end border-b border-gray-100 border-dashed pb-2">
                                <span>Parc solaire PV France fin 2025</span>
                                <span className="font-bold text-accent-dim">27,9 GW installés</span>
                            </div>
                            <div className="flex justify-between items-end border-b border-gray-100 border-dashed pb-2">
                                <span>Croissance parc 2025</span>
                                <span className="font-bold">+24% vs 2024</span>
                            </div>
                            <div className="flex justify-between items-end border-b border-gray-100 border-dashed pb-2">
                                <span>CEE P6 — Objectif annuel</span>
                                <span className="font-bold text-accent-dim text-lg">1 050 TWh cumac/an</span>
                            </div>
                            <div className="flex justify-between items-end border-b border-gray-100 border-dashed pb-2">
                                <span>CEE P6 — Enveloppe financière 2026</span>
                                <span className="font-bold">&gt; 8 milliards €</span>
                            </div>
                            <div className="flex justify-between items-end border-b border-gray-100 border-dashed pb-2">
                                <span>Bâtiments tertiaires : consommation</span>
                                <span className="font-bold">~250 TWh/an (France)</span>
                            </div>
                            <div className="flex justify-between items-end border-b border-gray-100 border-dashed pb-2">
                                <span>Fiches CEE tertiaire disponibles</span>
                                <span className="font-bold">57 FOST actives</span>
                            </div>
                            <div className="flex justify-between items-end">
                                <span>Conformité décret tertiaire 2025</span>
                                <span className="font-bold text-red-500">{'< 40% des assujettis'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Notre Valeur Ajoutée CEE */}
            <section className="py-24 bg-bg w-full">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 fade-up">
                        <h2 className="font-heading text-4xl md:text-5xl text-primary-dark mb-4">Notre Méthode CEE</h2>
                        <p className="text-text-light font-sans max-w-2xl mx-auto text-lg">
                            De l'audit initial au versement sur compte, nous sécurisons l'intégralité du processus de prime.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 fade-up">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-accent transition-colors">
                            <div className="text-4xl mb-4">🔍</div>
                            <h3 className="font-heading text-2xl text-primary-dark mb-3">Audit CEE gratuit</h3>
                            <p className="text-text-light text-sm">
                                Étude technique et identification exhaustive de <strong>toutes</strong> vos fiches d'opérations standardisées éligibles, en priorisant les meilleures valorisations P6.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-accent transition-colors">
                            <div className="text-4xl mb-4">📋</div>
                            <h3 className="font-heading text-2xl text-primary-dark mb-3">Montage dossier</h3>
                            <p className="text-text-light text-sm">
                                Aide Heuristique, notes de dimensionnement, attestations sur l'honneur. Nous gérons 100% de la complexité administrative AVANT le lancement des travaux.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-accent transition-colors">
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="font-heading text-2xl text-primary-dark mb-3">Optimisation</h3>
                            <p className="text-text-light text-sm">
                                Veille permanente sur les cours du kWh cumac. Nous mettons en concurrence les principaux obligés pour vous garantir la <strong>prime la plus élevée du marché</strong>.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-accent transition-colors">
                            <div className="text-4xl mb-4">✅</div>
                            <h3 className="font-heading text-2xl text-primary-dark mb-3">Suivi de A à Z</h3>
                            <p className="text-text-light text-sm">
                                Coordination des installateurs RGE certifiés, réception des travaux conformes aux normes d'inspection P6, jusqu'au versement effectif de la prime.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Infos Légales */}
            <section className="bg-primary-dark w-full py-8 text-center text-white/50 border-t border-white/5">
                <p className="font-mono text-xs tracking-wider">
                    SOLAGREEN — INGÉNIERIE & EFFICACITÉ ÉNERGÉTIQUE — SIREN : 825 395 726
                </p>
            </section>
        </div>
    );
};

export default APropos;
