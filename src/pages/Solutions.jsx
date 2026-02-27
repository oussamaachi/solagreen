import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, AlertTriangle, CalendarDays, CheckCircle2, Zap, Building2 } from 'lucide-react';
import CeeBadge from '../components/CeeBadge';

const Solutions = () => {
    const comp = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.fade-up', {
                scrollTrigger: {
                    trigger: '.fade-up',
                    start: 'top 85%'
                },
                y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.2
            });

            // Shuffler Mock Anim
            gsap.to('.shuffler-badge', {
                y: -5,
                stagger: { each: 0.2, yoyo: true, repeat: -1 },
                duration: 0.6,
                ease: 'sine.inOut'
            });

        }, comp);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={comp} className="w-full">
            {/* Hero */}
            <section className="relative h-[50vh] w-full flex flex-col items-center justify-center overflow-hidden bg-primary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-hero pointer-events-none z-0"></div>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent z-10 animate-[pulse_2s_ease-in-out_infinite]"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center fade-up mt-10">
                    <h1 className="font-heading text-5xl md:text-7xl text-white tracking-widest uppercase mb-4">
                        Nos Solutions
                    </h1>
                    <p className="font-mono text-xl text-accent"><span className="animate-pulse">●</span> Toutes Éligibles CEE P6</p>
                </div>
            </section>

            {/* Alerte Critique LED */}
            <section className="bg-bg pt-16 w-full">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-accent rounded-2xl p-6 md:p-8 flex gap-6 items-start fade-up shadow-lg">
                        <AlertTriangle className="text-primary-dark w-10 h-10 mt-1 shrink-0" />
                        <div className="font-mono text-sm md:text-base text-primary-dark">
                            <h3 className="font-bold text-lg md:text-xl uppercase mb-2 tracking-tight">ALERTE RÉGLEMENTAIRE — 24 FÉVRIER 2026</h3>
                            <p className="font-bold mb-3">La fiche BAT-EQ-127 (luminaires à modules LED tertiaire) a été SUPPRIMÉE par arrêté du 23 février 2026 (JO du 24 fév. 2026).</p>
                            <p className="mb-4">Les travaux LED relevant de cette fiche ne sont PLUS éligibles aux CEE aux mêmes conditions.</p>
                            <p className="bg-white/40 p-3 rounded-lg border border-primary-dark/10 inline-block font-sans">
                                <strong>→ La réponse SOLAGREEN :</strong> Nous identifions pour vous les fiches alternatives encore actives (comme BAT-EQ-111 ou le couplage GTB BAT-TH-116) pour sécuriser vos financements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solaire PV */}
            <section className="py-24 bg-bg w-full overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center fade-up">
                        <div className="w-full lg:w-1/2">
                            <div className="mb-4"><CeeBadge /></div>
                            <h2 className="font-heading text-4xl md:text-5xl text-primary-dark mb-6 tracking-wide">Photovoltaïque Tertiaire</h2>
                            <p className="text-text-light font-sans text-lg mb-8 leading-relaxed">
                                Transformez vos toitures et parkings en générateurs de revenus tout en répondant aux obligations de la Loi Climat.
                            </p>

                            <div className="bg-primary-dark text-white p-6 rounded-2xl font-mono text-sm mb-8 relative border border-white/10">
                                <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-accent pointer-events-none opacity-20"></div>
                                <h4 className="text-accent font-bold mb-4 uppercase tracking-wider relative z-10 line-clamp-1 pb-2 border-b border-white/10">VALORISATION CEE — SOLAIRE PV (P6 2026)</h4>
                                <div className="space-y-3 relative z-10">
                                    <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/5 pb-2">
                                        <span className="text-gray-400">Fiche applicable</span>
                                        <span className="font-bold">BAT-EN-109 (autoconsommation)</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/5 pb-2">
                                        <span className="text-gray-400">Éligibilité</span>
                                        <span className="font-bold">Bâtiments tertiaires tous secteurs</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/5 pb-2">
                                        <span className="text-accent underline decoration-red-500 decoration-2">Condition principale</span>
                                        <span className="font-bold">Demande CEE AVANT installation ⚠️</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/5 pb-2">
                                        <span className="text-gray-400">Cumul possible</span>
                                        <span className="font-bold text-accent-dim">CEE + aides ADEME + Bpifrance</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/5 pb-2">
                                        <span className="text-gray-400">Loi Climat 2025</span>
                                        <span className="font-bold">Solarisation obligatoire &gt; 500 m²</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <span className="shuffler-badge px-4 py-2 bg-white rounded-full text-sm font-bold shadow-sm border border-gray-100 flex items-center gap-2 block"><CheckCircle2 className="text-accent" size={16} /> Dimensionnement PV</span>
                                <span className="shuffler-badge px-4 py-2 bg-white rounded-full text-sm font-bold shadow-sm border border-gray-100 flex items-center gap-2 block"><Zap className="text-accent" size={16} /> Valorisation CEE</span>
                                <span className="shuffler-badge px-4 py-2 bg-white rounded-full text-sm font-bold shadow-sm border border-gray-100 flex items-center gap-2 block"><Building2 className="text-accent" size={16} /> Loi APER</span>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 relative h-[500px]">
                            <div className="absolute inset-0 bg-accent rounded-3xl transform translate-x-4 translate-y-4 opacity-20"></div>
                            <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop" alt="Panneaux Solaires Tertiaires" className="w-full h-full object-cover rounded-3xl relative z-10 shadow-xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Audit & Optimisation */}
            <section className="py-24 bg-bg-alt w-full overflow-hidden border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-center fade-up">
                        <div className="w-full lg:w-1/2">
                            <div className="mb-4"><CeeBadge /></div>
                            <h2 className="font-heading text-4xl md:text-5xl text-primary-dark mb-6 tracking-wide">Audit & Pilotage GTB</h2>
                            <p className="text-text-light font-sans text-lg mb-8 leading-relaxed">
                                Réduisez drastiquement vos consommations pour répondre au Décret Tertiaire, financé par les aides dédiées à la Gestion Technique du Bâtiment.
                            </p>

                            <div className="bg-white p-6 rounded-2xl font-mono text-sm mb-8 border border-gray-200 shadow-sm relative">
                                <h4 className="text-primary font-bold mb-4 uppercase tracking-wider line-clamp-1 pb-2 border-b border-gray-100">VALORISATION CEE — AUDIT & PILOTAGE (P6)</h4>
                                <div className="space-y-3 relative z-10">
                                    <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-100 border-dashed pb-2">
                                        <span className="text-gray-500">Fiche GTB (BAT-TH-116)</span>
                                        <span className="font-bold text-accent-dim">Révisée jan. 2025</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-100 border-dashed pb-2">
                                        <span className="text-gray-500">Contrat Perf. (BAT-SE-001)</span>
                                        <span className="font-bold text-accent-dim">Bonifié P6</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-100 border-dashed pb-2">
                                        <span className="text-gray-500">Décret BACS</span>
                                        <span className="font-bold">Obligatoire &gt; 290 kW (depuis 2025)</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-100 border-dashed pb-2">
                                        <span className="text-gray-500">Déclaration OPERAT 2024</span>
                                        <span className="font-bold text-red-500">Échéance 30 sept. 2025</span>
                                    </div>
                                </div>
                            </div>

                            {/* Typewriter Terminal */}
                            <div className="bg-[#1A1A1A] rounded-xl p-5 font-mono text-xs text-green-400 overflow-hidden shadow-lg border border-white/10">
                                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10 text-gray-400">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="ml-2">solagreen_audit.sh</span>
                                    <span className="ml-auto text-accent flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span> Audit en cours</span>
                                </div>
                                <div className="space-y-2">
                                    <p>{'>'} Audit bâtiment tertiaire 2500m²...</p>
                                    <p>{'>'} BAT-TH-116 GTB : <span className="text-accent">éligible ✓</span> — prime estimée : <span className="font-bold">14 500 €</span></p>
                                    <p>{'>'} BAT-EN-101 Isolation : <span className="text-accent">éligible ✓</span></p>
                                    <p>{'>'} BAT-SE-001 CPES : <span className="text-accent">éligible ✓</span></p>
                                    <p className="border-t border-green-900 pt-2 mt-2">{'>'} Dossier P6 prêt à déposer AVANT démarrage travaux ✓</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 relative h-[500px]">
                            <div className="absolute inset-0 bg-accent rounded-3xl transform -translate-x-4 translate-y-4 opacity-20"></div>
                            <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop" alt="Audit Energétique Tertiaire" className="w-full h-full object-cover rounded-3xl relative z-10 shadow-xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Éclairage LED & CVC */}
            <section className="py-24 bg-bg w-full overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center fade-up">
                        <div className="w-full lg:w-1/2">
                            <div className="mb-4"><CeeBadge /></div>
                            <h2 className="font-heading text-4xl md:text-5xl text-primary-dark mb-6 tracking-wide">CVC & Éclairage</h2>
                            <p className="text-text-light font-sans text-lg mb-8 leading-relaxed">
                                Des solutions de confort thermique et visuel intégrant les derniers chamboulements réglementaires de la 6e période.
                            </p>

                            <div className="bg-primary pt-1 text-white rounded-2xl font-mono text-sm mb-8 overflow-hidden">
                                <div className="bg-red-600/20 px-6 py-4 border-b border-red-500/30 flex justify-between items-center">
                                    <strong className="text-red-400">ÉCLAIRAGE LED (fév. 2026)</strong>
                                </div>
                                <div className="p-6 space-y-3 bg-primary-dark border-t border-white/5">
                                    <div className="flex items-start gap-3">
                                        <span className="text-red-500 font-bold">❌</span>
                                        <div><span className="font-bold">BAT-EQ-127</span> <span className="text-gray-400 text-xs">(Luminaires LED tertiaire)</span><br />SUPPRIMÉE le 24/02/2026. Non finançable.</div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-accent font-bold">✅</span>
                                        <div><span className="font-bold">BAT-TH-116</span> <span className="text-gray-400 text-xs">(GTB couplage éclairage)</span><br />Alternative active P6 fortement recommandée.</div>
                                    </div>
                                </div>

                                <div className="bg-accent/20 px-6 py-4 border-y border-accent/20 flex justify-between items-center mt-2">
                                    <strong className="text-accent-dim">CVC (CHAUFFAGE & CLIMATISATION)</strong>
                                </div>
                                <div className="p-6 space-y-3 bg-primary-dark">
                                    <div className="flex items-start gap-3">
                                        <span className="text-accent font-bold">✅</span>
                                        <div><span className="font-bold">BAT-TH-163 / 164</span> <span className="text-gray-400 text-xs">(PAC air/eau et eau/eau)</span><br />Nouvelles fiches exclusives 2026 (remplacent TH-113).</div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-accent font-bold">✅</span>
                                        <div><span className="font-bold">BAT-TH-162</span> <span className="text-gray-400 text-xs">(Géothermie tertiaire)</span><br />Nouvelle fiche 2026 très avantageuse.</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4">
                                <CalendarDays className="text-accent w-8 h-8" />
                                <div className="flex-1">
                                    <h4 className="font-bold text-primary-dark text-sm">Scheduler Installateurs</h4>
                                    <div className="w-full bg-gray-100 h-2 rounded-full mt-2 overflow-hidden">
                                        <div className="bg-accent w-3/4 h-full rounded-full"></div>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-1">Intervention moyenne sous 4 semaines post-validation dossier CEE.</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 relative h-[500px]">
                            <div className="absolute inset-0 bg-accent rounded-3xl transform translate-x-4 translate-y-4 opacity-20"></div>
                            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop" alt="HVAC System P6" className="w-full h-full object-cover rounded-3xl relative z-10 shadow-xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Décret Tertiaire Timeline */}
            <section className="bg-primary-dark py-24 w-full">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="font-heading text-3xl md:text-5xl text-white mb-16 tracking-wide uppercase">Calendrier Réglementaire</h2>

                    <div className="relative border-l-2 border-accent/30 ml-4 md:ml-10 space-y-12 text-left font-mono">
                        <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary-dark border-2 border-accent"></div>
                            <div className="text-accent font-bold mb-1">jan. 2025</div>
                            <div className="text-white font-sans font-bold text-lg mb-1">Décret BACS</div>
                            <div className="text-gray-400 font-sans text-sm">Obligation d'équiper les bâtiments &gt; 290 kW d'une GTB.</div>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent text-primary-dark flex items-center justify-center text-[10px] font-bold shadow-[0_0_10px_#B3CA03]">★</div>
                            <div className="text-accent font-bold mb-1">1er jan. 2026</div>
                            <div className="text-white font-sans font-bold text-lg mb-1">CEE 6e période P6</div>
                            <div className="text-gray-400 font-sans text-sm">+27% d'obligations. Nouvelles fiches. Entrée en vigueur.</div>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-red-500 border-2 border-red-900"></div>
                            <div className="text-red-400 font-bold mb-1">24 fév. 2026</div>
                            <div className="text-white font-sans font-bold text-lg mb-1">Fin LED BAT-EQ-127</div>
                            <div className="text-gray-400 font-sans text-sm">Suppression historique de la fiche d'éclairage majeure.</div>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-gray-500"></div>
                            <div className="text-gray-400 font-bold mb-1">30 sept. 2025</div>
                            <div className="text-white font-sans font-bold text-lg mb-1">Déclaration OPERAT</div>
                            <div className="text-gray-400 font-sans text-sm">Saisie des données de consommation 2024.</div>
                        </div>
                        <div className="relative pl-8 pb-4">
                            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-gray-500"></div>
                            <div className="text-gray-400 font-bold mb-1">2030</div>
                            <div className="text-white font-sans font-bold text-lg mb-1">Objectif Décret Tertiaire</div>
                            <div className="text-gray-400 font-sans text-sm">-40% de consommation énergétique finale requise (1ère vérification en 2031).</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
