import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ChevronRight, Calculator, RefreshCw, AlertTriangle, ShieldAlert } from 'lucide-react';
import { prefersReducedMotion } from '../utils/motion';

const CEE = () => {
    const comp = useRef(null);
    const calcTimeoutRef = useRef(null);
    const resultAnimTimeoutRef = useRef(null);

    // --- Calculator State ---
    const [step, setStep] = useState(1);
    const [travauxType, setTravauxType] = useState('');
    const [surface, setSurface] = useState(2500);
    const [facture, setFacture] = useState(50000);
    const [zone, setZone] = useState('');
    const [secteur, setSecteur] = useState('');
    const [isCalculating, setIsCalculating] = useState(false);
    const [results, setResults] = useState(null);

    // --- Animation Setup ---
    useLayoutEffect(() => {
        const reduceMotion = prefersReducedMotion();

        let ctx = gsap.context(() => {
            if (reduceMotion) return;
            gsap.from('.anim-up', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out'
            });

            // Timeline Animation (ScrollTrigger)
            gsap.from('.timeline-step', {
                scrollTrigger: {
                    trigger: '.timeline-container',
                    start: 'top 80%',
                },
                x: -50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: 'power2.out'
            });

        }, comp);
        return () => {
            ctx.revert();
            if (calcTimeoutRef.current) {
                clearTimeout(calcTimeoutRef.current);
            }
            if (resultAnimTimeoutRef.current) {
                clearTimeout(resultAnimTimeoutRef.current);
            }
        };
    }, []);

    // --- Calculator Logic ---
    const handleCalculate = () => {
        if (isCalculating || !travauxType || !zone || !secteur) {
            return;
        }

        setIsCalculating(true);

        if (calcTimeoutRef.current) {
            clearTimeout(calcTimeoutRef.current);
        }
        if (resultAnimTimeoutRef.current) {
            clearTimeout(resultAnimTimeoutRef.current);
        }

        // Simulate calculation time
        calcTimeoutRef.current = setTimeout(() => {
            const calculCEE = {
                solaire: { primeCEEratio: 0.12, economiesRatio: 0.35, roi: "7-12" },
                led: { primeCEEratio: 0.08, economiesRatio: 0.15, roi: "2-4" },
                hvca: { primeCEEratio: 0.15, economiesRatio: 0.20, roi: "3-6" },
                isolation: { primeCEEratio: 0.18, economiesRatio: 0.25, roi: "5-10" },
                gtb: { primeCEEratio: 0.15, economiesRatio: 0.20, roi: "3-6" },
                multi: { primeCEEratio: 0.22, economiesRatio: 0.45, roi: "4-8" },
            };

            const ratios = calculCEE[travauxType];
            if (!ratios) {
                setIsCalculating(false);
                return;
            }

            let primeRaw = facture * ratios.primeCEEratio * (surface / 1000); // simplified formula

            // Zone multipliers
            if (zone === 'H1') primeRaw *= 1.2;
            else if (zone === 'H3') primeRaw *= 0.85;

            // Format results
            setResults({
                prime: Math.round(primeRaw),
                economies: Math.round(facture * ratios.economiesRatio),
                reduction: Math.round(ratios.economiesRatio * 100),
                co2: Math.round((facture / 150) * ratios.economiesRatio), // fake CO2 formula
                roi: ratios.roi,
                aidesCompl: Math.round(primeRaw * 0.4) // fake ademe complementary
            });
            setIsCalculating(false);
            setStep(6); // Go to results

            // Animate results
            resultAnimTimeoutRef.current = setTimeout(() => {
                gsap.from('.result-row', { x: -20, opacity: 0, stagger: 0.1, duration: 0.5 });
            }, 100);

        }, 1500);
    };

    const resetCalculator = () => {
        if (isCalculating) return;
        setStep(1);
        setTravauxType('');
        setZone('');
        setSecteur('');
        setResults(null);
    };

    const canGoNext = (currentStep) => {
        if (isCalculating) return false;
        if (currentStep === 1) return Boolean(travauxType);
        if (currentStep === 4) return Boolean(zone);
        return true;
    };

    const goNextStep = () => {
        if (!canGoNext(step)) return;
        setStep((prev) => Math.min(prev + 1, 6));
    };

    const goPrevStep = () => {
        if (isCalculating) return;
        setStep((prev) => Math.max(prev - 1, 1));
    };

    return (
        <div ref={comp} className="w-full bg-bg pb-32">
            {/* Hero */}
            <section className="relative h-[60vh] w-full flex items-center justify-center bg-primary-dark overflow-hidden">
                <div className="absolute inset-0 bg-gradient-hero pointer-events-none z-0"></div>
                {/* Giant Chevrons Wireframe */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                    <svg width="80vw" height="80vh" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M10,0 L50,40 L10,80 M50,0 L90,40 L50,80" fill="none" stroke="#B3CA03" strokeWidth="2" />
                    </svg>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-accent z-10 shadow-[0_0_15px_#B3CA03]"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mt-10 anim-up">
                    <h1 className="font-heading text-6xl md:text-8xl text-white tracking-widest uppercase mb-4">
                        Vos Aides CEE 2026
                    </h1>
                    <p className="font-serif italic text-accent text-3xl md:text-5xl mt-6">Optimisées. Montées. Versées.</p>
                </div>
            </section>

            {/* Dashboard CEE P6 */}
            <section className="max-w-6xl mx-auto px-6 -mt-16 relative z-20 anim-up mb-24">
                <div className="bg-accent rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(179,202,3,0.2)] text-primary-dark border-4 border-primary-dark">
                    <div className="bg-primary-dark text-white inline-block px-4 py-1.5 rounded-lg font-mono text-sm font-bold tracking-widest mb-6">
                        <span className="w-2 h-2 inline-block rounded-full bg-red-500 animate-pulse mr-2"></span>
                        6ᵉ PÉRIODE CEE — P6 — EN VIGUEUR DEPUIS LE 1ᵉʳ JANVIER 2026
                    </div>

                    <div className="font-mono text-sm border-t-2 border-primary-dark border-dashed pt-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                        <div className="flex justify-between items-end border-b border-primary-dark/20 pb-2 col-span-1 md:col-span-2">
                            <span className="text-primary-dark/70 font-bold uppercase">Cadre Légal</span>
                            <span className="font-bold bg-white/40 px-3 py-1 rounded">Décret n°2025-1048 du 30 octobre 2025</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-primary-dark/20 pb-2">
                            <span className="text-primary-dark/70">Objectif national annuel</span>
                            <span className="font-bold text-lg">1 050 TWh cumac/an</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-primary-dark/20 pb-2">
                            <span className="text-primary-dark/70">Objectif total 2026–2030</span>
                            <span className="font-bold">5 250 TWh cumac</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-primary-dark/20 pb-2">
                            <span className="text-primary-dark/70">Hausse vs P5 (2022-2025)</span>
                            <span className="font-bold bg-white/40 px-2 rounded">+35,5%</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-primary-dark/20 pb-2">
                            <span className="text-primary-dark/70">Enveloppe financière 2026</span>
                            <span className="font-bold text-xl">{'>'} 8 milliards €</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-primary-dark/20 pb-2">
                            <span className="text-primary-dark/70">Pénalité obligés non-conformes</span>
                            <span className="font-bold">30 €/MWhc (× 2 vs P5)</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-primary-dark/20 pb-2">
                            <span className="text-primary-dark/70">Contrôleurs dédiés (anti-fraude)</span>
                            <span className="font-bold">54 agents (vs 25)</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-primary-dark/20 pb-2">
                            <span className="text-primary-dark/70">Validité des CEE émis</span>
                            <span className="font-bold bg-white/40 px-2 rounded text-red-700">12 ans max</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-primary-dark/20 pb-2">
                            <span className="text-primary-dark/70">Plateforme gestion</span>
                            <span className="font-bold">Emmy+ (P6)</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explication Visuelle (Timeline) */}
            <section className="py-16 bg-white w-full border-y border-gray-200 anim-up">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="font-heading text-4xl text-primary-dark mb-16 text-center tracking-wide">La Valorisation CEE en 4 Étapes</h2>

                    <div className="timeline-container relative max-w-4xl mx-auto">
                        <div className="hidden md:block absolute left-12 top-0 bottom-0 w-1 bg-gray-100"></div>

                        <div className="timeline-step relative md:pl-32 mb-12 flex flex-col md:flex-row gap-6 items-start">
                            <div className="hidden md:flex absolute left-0 w-24 justify-center items-center h-16">
                                <div className="w-16 h-16 rounded-full bg-bg-alt border-4 border-white shadow-md flex items-center justify-center z-10 font-heading text-2xl text-accent-dim">1</div>
                            </div>
                            <div className="md:hidden w-12 h-12 rounded-full bg-bg-alt flex items-center justify-center font-heading text-xl text-accent-dim mb-4">1</div>
                            <div className="bg-bg-alt p-6 md:p-8 rounded-3xl flex-1 border border-gray-100 shadow-sm relative w-full">
                                <div className="hidden md:block absolute top-8 -left-4 w-4 h-4 bg-bg-alt border border-gray-100 border-r-0 border-b-0 transform rotate-45"></div>
                                <h3 className="font-heading text-2xl text-primary-dark mb-3 uppercase tracking-wide">Audit & Évaluation</h3>
                                <p className="font-sans text-text-light">SOLAGREEN étudie votre projet et identifie <strong>tous les gisements d'économies d'énergie</strong> (Isolation, GTB, Chauffage) en sélectionnant les fiches standardisées les plus rémunératrices de la P6.</p>
                            </div>
                        </div>

                        <div className="timeline-step relative md:pl-32 mb-12 flex flex-col md:flex-row gap-6 items-start">
                            <div className="hidden md:flex absolute left-0 w-24 justify-center items-center h-16">
                                <div className="w-16 h-16 rounded-full bg-primary-dark border-4 border-white shadow-md flex items-center justify-center z-10 font-heading text-2xl text-accent">2</div>
                            </div>
                            <div className="md:hidden w-12 h-12 rounded-full bg-primary-dark flex items-center justify-center font-heading text-xl text-accent mb-4">2</div>
                            <div className="bg-primary-dark p-6 md:p-8 rounded-3xl flex-1 border border-gray-800 shadow-xl relative w-full">
                                <div className="hidden md:block absolute top-8 -left-4 w-4 h-4 bg-primary-dark border border-gray-800 border-r-0 border-b-0 transform rotate-45"></div>
                                <div className="absolute top-4 right-6 text-red-500 animate-pulse"><AlertTriangle /></div>
                                <h3 className="font-heading text-2xl text-white mb-3 uppercase tracking-wide">Dépôt du Dossier CEE</h3>
                                <p className="font-sans text-gray-300">Nous constituons et déposons votre dossier administratif sur la plateforme Emmy+ <strong>AVANT DE COMMENCER LES TRAVAUX</strong>. C'est la condition sine qua non de l'obtention de la prime. Tout devis signé avant nous annule vos droits.</p>
                            </div>
                        </div>

                        <div className="timeline-step relative md:pl-32 mb-12 flex flex-col md:flex-row gap-6 items-start">
                            <div className="hidden md:flex absolute left-0 w-24 justify-center items-center h-16">
                                <div className="w-16 h-16 rounded-full bg-bg-alt border-4 border-white shadow-md flex items-center justify-center z-10 font-heading text-2xl text-accent-dim">3</div>
                            </div>
                            <div className="md:hidden w-12 h-12 rounded-full bg-bg-alt flex items-center justify-center font-heading text-xl text-accent-dim mb-4">3</div>
                            <div className="bg-bg-alt p-6 md:p-8 rounded-3xl flex-1 border border-gray-100 shadow-sm relative w-full">
                                <div className="hidden md:block absolute top-8 -left-4 w-4 h-4 bg-bg-alt border border-gray-100 border-r-0 border-b-0 transform rotate-45"></div>
                                <h3 className="font-heading text-2xl text-primary-dark mb-3 uppercase tracking-wide">Réalisation des Travaux</h3>
                                <p className="font-sans text-text-light">L'installation est effectuée par nos équipes partenaires certifiées <strong>RGE (Reconnu Garant de l'Environnement)</strong>. Les inspections P6 (COFRAC) sont supervisées par nos soins.</p>
                            </div>
                        </div>

                        <div className="timeline-step relative md:pl-32 flex flex-col md:flex-row gap-6 items-start">
                            <div className="hidden md:flex absolute left-0 w-24 justify-center items-center h-16">
                                <div className="w-16 h-16 rounded-full bg-accent border-4 border-white shadow-md flex items-center justify-center z-10 font-heading text-2xl text-primary-dark">4</div>
                            </div>
                            <div className="md:hidden w-12 h-12 rounded-full bg-accent flex items-center justify-center font-heading text-xl text-primary-dark mb-4">4</div>
                            <div className="bg-accent/20 p-6 md:p-8 rounded-3xl flex-1 border border-accent/40 shadow-sm relative w-full">
                                <div className="hidden md:block absolute top-8 -left-4 w-4 h-4 bg-[#F2F6D9] border border-accent/40 border-r-0 border-b-0 transform rotate-45"></div>
                                <h3 className="font-heading text-2xl text-primary-dark mb-3 uppercase tracking-wide">Clôture & Versement de la Prime</h3>
                                <p className="font-sans text-text-light">Après validation formelle par le Pôle National des CEE (PNCEE), la prime est versée. Elle couvre une part substantielle de l'investissement (jusqu'à 40% sur l'isolation).</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Règles Clés P6 à Connaître */}
            <section className="py-20 w-full anim-up">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-primary-dark rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden border border-white/10 shadow-2xl">
                        <div className="absolute top-0 right-0 w-full h-1 bg-red-500"></div>

                        <h2 className="font-heading text-3xl md:text-5xl text-white mb-10 tracking-wide uppercase flex items-center gap-4">
                            <ShieldAlert className="text-red-500 w-10 h-10" />
                            5 RÈGLES IMPÉRATIVES POUR NE PAS PERDRE VOS CEE
                        </h2>

                        <div className="font-mono text-sm md:text-base text-gray-300 space-y-6">

                            <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-8 items-start border-b border-white/5 pb-6 hover:bg-white/5 p-4 -my-4 rounded transition-colors">
                                <strong className="text-white text-lg tracking-tight">1. AVANT LES TRAVAUX</strong>
                                <div>La demande CEE doit être déposée et enregistrée AVANT la signature du devis ou le démarrage de tout chantier. Dans le cas contraire, votre droit à la prime est définitivement annulé.</div>
                            </div>

                            <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-8 items-start border-b border-white/5 pb-6 hover:bg-white/5 p-4 -my-4 rounded transition-colors">
                                <strong className="text-white text-lg tracking-tight">2. PROFESSIONNEL RGE</strong>
                                <div>L'installateur réalisant les travaux doit obligatoirement être certifié RGE (Reconnu Garant de l'Environnement) sur le domaine spécifique des travaux à la date d'engagement.</div>
                            </div>

                            <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-8 items-start border-b border-white/5 pb-6 hover:bg-white/5 p-4 -my-4 rounded transition-colors">
                                <strong className="text-accent text-lg tracking-tight">3. TRI MINIMUM ≥ 3 ANS</strong>
                                <div>Nouveauté P6 : Les opérations dont le retour sur investissement (après aide CEE) est inférieur à 3 ans ne sont plus éligibles. Les opérations "trop rentables" ont été sorties du dispositif.</div>
                            </div>

                            <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-8 items-start border-b border-white/5 pb-6 hover:bg-white/5 p-4 -my-4 rounded transition-colors">
                                <strong className="text-white text-lg tracking-tight">4. TRAÇABILITÉ (Emmy+)</strong>
                                <div>Les documents justificatifs demandés en P6 sont plus exhaustifs et rigoureux. SOLAGREEN prend en charge la constitution intégrale du dossier pour éviter les rejets du PNCEE.</div>
                            </div>

                            <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-8 items-start border-b border-white/5 pb-2 hover:bg-white/5 p-4 -my-4 rounded transition-colors">
                                <strong className="text-white text-lg tracking-tight">5. CUMUL À OPTIMISER</strong>
                                <div>Les CEE sont cumulables avec d'autres dispositifs : aides de l'ADEME, du Fonds Chaleur, Tremplin pour la transition (TPE/PME), ou subventions Bpifrance. Nous maximisons le financement global.</div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 🔢 Simulateur CEE Premium (React State Multi-Étapes) */}
            <section className="max-w-5xl mx-auto px-6 py-16 anim-up">
                <h2 className="font-heading text-4xl md:text-5xl text-primary-dark mb-10 text-center tracking-wide uppercase">
                    Simulateur CEE P6 (Tertiaire)
                </h2>

                <div className="bg-bg-alt rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-200">

                    {/* Progress Bar */}
                    <div className="flex gap-2 mb-10 opacity-60">
                        {[1, 2, 3, 4, 5, 6].map((idx) => (
                            <div key={idx} className={`h-2 flex-1 rounded-full ${step >= idx ? 'bg-primary-dark' : 'bg-gray-300'} transition-colors duration-300`}></div>
                        ))}
                    </div>

                    <div className="min-h-[350px]" aria-busy={isCalculating}>
                        {/* Step 1 */}
                        {step === 1 && (
                            <div className="space-y-6">
                                <h3 className="font-heading text-2xl text-primary-dark mb-6">Étape 1 — Sélectionnez le type de travaux</h3>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {[
                                        { id: 'solaire', label: '☀️ Solaire PV', cls: travauxType === 'solaire' ? 'bg-primary-dark text-white' : 'bg-white text-primary-dark' },
                                        { id: 'led', label: '💡 Eclairage LED', cls: travauxType === 'led' ? 'bg-primary-dark text-white' : 'bg-white text-primary-dark' },
                                        { id: 'hvca', label: '❄️ CVC / PAC', cls: travauxType === 'hvca' ? 'bg-primary-dark text-white' : 'bg-white text-primary-dark' },
                                        { id: 'isolation', label: '🧱 Isolation', cls: travauxType === 'isolation' ? 'bg-primary-dark text-white' : 'bg-white text-primary-dark' },
                                        { id: 'gtb', label: '🏢 Pilotage GTB/BACS', cls: travauxType === 'gtb' ? 'bg-primary-dark text-white' : 'bg-white text-primary-dark' },
                                        { id: 'multi', label: '🔄 Projet Multitravaux', cls: travauxType === 'multi' ? 'bg-accent text-primary-dark border border-accent' : 'bg-white text-primary-dark' }
                                    ].map(t => (
                                        <button key={t.id} type="button" onClick={() => setTravauxType(t.id)} className={`p-4 rounded-xl border border-gray-200 font-bold font-sans transition-all hover:-translate-y-1 ${t.cls}`}>
                                            {t.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 2 */}
                        {step === 2 && (
                            <div className="space-y-6">
                                <h3 className="font-heading text-2xl text-primary-dark mb-6">Étape 2 — Surface du bâtiment (m²)</h3>
                                <div className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col items-center gap-8">
                                    <div className="font-mono text-4xl text-accent-dim font-bold bg-bg-alt px-6 py-3 rounded-xl">
                                        {surface.toLocaleString('fr-FR')} m²
                                    </div>
                                    <input
                                        type="range" min="200" max="15000" step="100"
                                        value={surface} onChange={(e) => setSurface(Number(e.target.value))}
                                        className="w-full max-w-lg accent-primary-dark"
                                    />
                                    <div className="w-full max-w-lg flex justify-between font-mono text-xs text-gray-400">
                                        <span>200 m²</span>
                                        <span>{'>'} 15 000 m²</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 3 */}
                        {step === 3 && (
                            <div className="space-y-6">
                                <h3 className="font-heading text-2xl text-primary-dark mb-6">Étape 3 — Facture d'énergie annuelle (€)</h3>
                                <div className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col items-center gap-8">
                                    <div className="font-mono text-4xl text-accent-dim font-bold bg-bg-alt px-6 py-3 rounded-xl">
                                        {facture.toLocaleString('fr-FR')} €/an
                                    </div>
                                    <input
                                        type="range" min="5000" max="500000" step="5000"
                                        value={facture} onChange={(e) => setFacture(Number(e.target.value))}
                                        className="w-full max-w-lg accent-primary-dark"
                                    />
                                    <div className="w-full max-w-lg flex justify-between font-mono text-xs text-gray-400">
                                        <span>5 000 €</span>
                                        <span>{'>'} 500 000 €</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 4 */}
                        {step === 4 && (
                            <div className="space-y-6">
                                <h3 className="font-heading text-2xl text-primary-dark mb-2">Étape 4 — Zone climatique</h3>
                                <p className="font-sans text-sm text-gray-500 mb-6 italic">La zone climatique définit le coefficient de kWh cumac applicable. Les zones plus froides ont des coefficients plus rentables.</p>
                                <div className="grid sm:grid-cols-3 gap-4">
                                    {[
                                        { id: 'H1', label: 'Zone H1 — Nord' },
                                        { id: 'H2', label: 'Zone H2 — Centre/Ouest' },
                                        { id: 'H3', label: 'Zone H3 — Méditerranée' }
                                    ].map(z => (
                                        <button key={z.id} type="button" onClick={() => setZone(z.id)} className={`p-4 rounded-xl border font-bold font-sans transition-all hover:-translate-y-1 flex flex-col items-center gap-2 ${zone === z.id ? 'bg-primary-dark text-white border-primary-dark' : 'bg-white text-primary-dark border-gray-200'}`}>
                                            <span className="text-xl">{z.id}</span>
                                            <span className="text-sm font-normal">{z.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 5 */}
                        {step === 5 && (
                            <div className="space-y-6">
                                <h3 className="font-heading text-2xl text-primary-dark mb-6">Étape 5 — Secteur d'activité</h3>
                                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {['Bureaux', 'Commerce', 'Hôtellerie', 'Santé / Ehpad', 'Industrie Légère', 'Logistique'].map(s => (
                                        <button key={s} type="button" onClick={() => setSecteur(s)} className={`p-4 rounded-xl border font-bold font-sans transition-all hover:-translate-y-1 ${secteur === s ? 'bg-primary-dark text-white border-primary-dark' : 'bg-white text-primary-dark border-gray-200'}`}>
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 6 / Loading -> Results */}
                        {step === 6 && (
                            <div>
                                {isCalculating ? (
                                    <div className="h-[300px] flex flex-col items-center justify-center">
                                        <RefreshCw className="w-12 h-12 text-accent animate-spin mb-4" />
                                        <p className="font-mono font-bold text-primary-dark animate-pulse">Consultation des barèmes P6 (Emmy)...</p>
                                    </div>
                                ) : results && (
                                    <div className="bg-primary-dark text-white p-8 rounded-3xl relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-full h-1 bg-accent"></div>
                                        <h3 className="font-heading text-3xl text-accent mb-8 uppercase text-center border-b border-white/10 pb-4">Résultats d'Estimation</h3>

                                        <div className="font-mono text-sm md:text-base space-y-4">
                                            <div className="result-row flex justify-between items-center bg-white/5 p-4 rounded-xl">
                                                <span className="text-white/80">💰 Prime CEE estimée P6</span>
                                                <span className="text-2xl font-bold text-accent">~{results.prime.toLocaleString('fr-FR')} €</span>
                                            </div>

                                            <div className="result-row flex justify-between items-center border-b border-white/10 pb-2 pt-4">
                                                <span className="text-white/60">Économies sur facture énerg.</span>
                                                <span className="font-bold">~{results.economies.toLocaleString('fr-FR')} €/an</span>
                                            </div>

                                            <div className="result-row flex justify-between items-center border-b border-white/10 pb-2">
                                                <span className="text-white/60">Réduction de la consommation</span>
                                                <span className="font-bold">~{results.reduction} %</span>
                                            </div>

                                            <div className="result-row flex justify-between items-center border-b border-white/10 pb-2">
                                                <span className="text-white/60">Empreinte carbone évitée</span>
                                                <span className="font-bold text-green-400">~{results.co2} tCO₂/an</span>
                                            </div>

                                            <div className="result-row flex justify-between items-center border-b border-white/10 pb-2">
                                                <span className="text-white/60">Retour sur Investissement (TRI)</span>
                                                <span className="font-bold">{results.roi} ans</span>
                                            </div>

                                            <div className="result-row flex justify-between items-center border-b border-white/10 pb-2">
                                                <span className="text-white/60 flex items-center gap-2">Aides cumulables estimées <AlertTriangle size={14} className="text-accent" /></span>
                                                <span className="font-bold">~{results.aidesCompl.toLocaleString('fr-FR')} €</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 text-center bg-white/10 p-4 rounded-xl">
                                            <p className="font-sans text-sm text-gray-300 italic mb-4">
                                                ⚠️ Estimation indicative basée sur les barèmes CEE P6 de référence au 2 mars 2026. Un audit sur site et une validation documentaire restent obligatoires pour figer la prime contractuellement.
                                            </p>
                                            <Link to="/contact" className="inline-block px-8 py-3 bg-accent text-primary-dark font-bold font-sans rounded-xl hover:scale-[1.05] transition-transform">
                                                SOLAGREEN monte votre dossier gratuitement
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                    </div>

                    {/* Controls */}
                    <div className="mt-8 flex justify-between items-center border-t border-gray-200 pt-6">
                        {step > 1 && step < 6 && (
                            <button
                                type="button"
                                onClick={goPrevStep}
                                className="font-bold text-gray-500 hover:text-primary-dark font-sans px-4 py-2"
                                disabled={isCalculating}
                            >
                                Retour
                            </button>
                        )}

                        {step === 6 && !isCalculating && (
                            <button
                                type="button"
                                onClick={resetCalculator}
                                className="font-bold text-gray-500 hover:text-primary-dark font-sans px-4 py-2 flex items-center gap-2"
                            >
                                <RefreshCw size={16} /> Refaire une simulation
                            </button>
                        )}

                        {step < 5 && (
                            <button
                                type="button"
                                onClick={goNextStep}
                                disabled={!canGoNext(step)}
                                className="ml-auto flex items-center gap-2 bg-primary-dark text-white font-bold font-sans px-8 py-3 rounded-xl disabled:opacity-50 transition-colors"
                            >
                                Suivant <ChevronRight size={18} />
                            </button>
                        )}

                        {step === 5 && (
                            <button
                                type="button"
                                onClick={handleCalculate}
                                disabled={!secteur || isCalculating}
                                className="ml-auto flex items-center gap-2 bg-accent text-primary-dark font-bold font-sans px-8 py-3 rounded-xl disabled:opacity-50 transition-transform hover:scale-[1.03]"
                            >
                                <Calculator size={20} /> Lancer le Calcul <ChevronRight size={18} />
                            </button>
                        )}
                    </div>

                </div>
            </section>

        </div>
    );
};

export default CEE;
