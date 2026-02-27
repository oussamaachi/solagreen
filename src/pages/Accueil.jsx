import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight, Zap, Calculator, BarChart3, Sun, Lightbulb, Building2, TrendingUp, AlertTriangle } from 'lucide-react';
import CeeBadge from '../components/CeeBadge';

const Accueil = () => {
    const comp = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Hero Animations
            gsap.fromTo('.hero-title-1', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 });
            gsap.fromTo('.hero-title-2', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.4 });
            gsap.fromTo('.hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.6 });
            gsap.fromTo('.hero-cta', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.8, stagger: 0.1 });

            // CountUp Animations
            gsap.utils.toArray('.counter').forEach(counter => {
                const target = parseFloat(counter.getAttribute('data-target'));
                const isFloat = target % 1 !== 0;

                gsap.to(counter, {
                    scrollTrigger: {
                        trigger: counter,
                        start: 'top 85%',
                    },
                    innerHTML: target,
                    duration: 2,
                    ease: 'power3.out',
                    snap: { innerHTML: isFloat ? 0.1 : 1 },
                    onUpdate: function () {
                        counter.innerHTML = isFloat ? Number(this.targets()[0].innerHTML).toFixed(1) : Math.round(this.targets()[0].innerHTML);
                    }
                });
            });

            // Stagger Cards
            gsap.fromTo('.solution-card',
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: '.solutions-grid',
                        start: 'top 80%',
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out'
                }
            );

        }, comp);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={comp} className="w-full relative">
            {/* 1. Hero */}
            <section className="relative h-[100dvh] w-full flex items-center pt-20 overflow-hidden">
                {/* Unsplash Image: solar panels rooftop modern building */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop"
                        alt="Toiture solaire tertiaire"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-hero"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <div className="max-w-4xl">
                        <h1 className="flex flex-col gap-2">
                            <span className="hero-title-1 font-heading text-white text-5xl md:text-6xl lg:text-[3.5rem] leading-none tracking-wide">
                                Vos travaux d'efficacité énergétique,
                            </span>
                            <span className="hero-title-2 font-serif italic text-accent text-6xl md:text-8xl lg:text-[7rem] leading-tight">
                                financés par les CEE.
                            </span>
                        </h1>
                        <p className="hero-subtitle text-white/80 text-lg md:text-xl font-sans mt-8 max-w-2xl leading-relaxed">
                            SOLAGREEN monte vos dossiers CEE, optimise vos primes et installe vos solutions — solaire, LED, isolation — de A à Z.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-10">
                            <Link to="/contact" className="hero-cta inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary-dark font-bold rounded-2xl transition-transform hover:scale-[1.03] active:scale-95 shadow-[0_0_20px_rgba(179,202,3,0.4)]">
                                Estimer mes aides CEE <ArrowRight size={20} />
                            </Link>
                            <Link to="/solutions" className="hero-cta inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-2xl transition-all hover:bg-white/20">
                                Nos solutions <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Bandeau CEE Urgence */}
            <section className="bg-accent text-primary-dark w-full py-8 border-y-4 border-primary-dark">
                <div className="max-w-7xl mx-auto px-6 font-mono text-sm md:text-base">
                    <div className="flex items-center gap-3 font-bold text-lg md:text-xl mb-4 text-primary-dark">
                        <span className="animate-pulse">🔔</span>
                        LA 6ᵉ PÉRIODE CEE EST EN VIGUEUR DEPUIS LE 1ᵉʳ JANVIER 2026
                    </div>
                    <div className="w-full h-px bg-primary-dark/20 my-4"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-6">
                        <div className="flex items-start gap-2">
                            <span className="text-primary-dark mt-1">→</span>
                            <p><strong>+27% d'obligation</strong> d'économies d'énergie pour les fournisseurs : des primes plus généreuses pour vos travaux tertiaires.</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-primary-dark mt-1">→</span>
                            <p>Plus de <strong>8 milliards €</strong> mobilisés en 2026 (vs 6 Md€ en 2025).</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-primary-dark mt-1">→</span>
                            <p><strong>5 250 TWh cumac</strong> d'objectif total sur 2026–2030.</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-primary-dark mt-1">✓</span>
                            <p className="italic text-primary-dark/80">Décret n°2025-1048 du 30 oct. 2025 — Entrée en vigueur : 1er jan. 2026</p>
                        </div>
                    </div>
                    <Link to="/cee" className="inline-flex items-center gap-2 bg-primary-dark text-accent px-6 py-2.5 rounded-xl font-bold transition-transform hover:scale-[1.02]">
                        Calculer ma prime CEE 2026 <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            {/* 3. Bande Chiffres Clés */}
            <section className="bg-primary pt-16 pb-16 w-full">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        <div className="flex flex-col items-center text-center">
                            <div className="text-accent font-heading text-5xl md:text-6xl mb-2 flex items-center">
                                <span className="counter" data-target="8">0</span>
                                <span className="text-3xl font-sans ml-1">Md€</span>
                            </div>
                            <p className="text-white/70 font-sans text-sm md:text-base">Enveloppe CEE annuelle 2026</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="text-accent font-heading text-5xl md:text-6xl mb-2 flex items-center">
                                +<span className="counter" data-target="27">0</span>
                                <span className="text-3xl font-sans ml-1">%</span>
                            </div>
                            <p className="text-white/70 font-sans text-sm md:text-base">Hausse obligations P6</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="text-accent font-heading text-5xl md:text-6xl mb-2 flex items-center">
                                <span className="counter" data-target="57">0</span>
                            </div>
                            <p className="text-white/70 font-sans text-sm md:text-base">Fiches tertiaires éligibles actives</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="text-accent font-heading text-5xl md:text-6xl mb-2 flex items-center">
                                <span className="counter" data-target="3">0</span>
                            </div>
                            <p className="text-white/70 font-sans text-sm md:text-base leading-tight">Règle d'or :<br />demander AVANT les travaux</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Nos Solutions */}
            <section className="bg-bg py-24 w-full">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 relative">
                        <div className="relative">
                            <div className="absolute -bottom-4 left-0 w-16 h-0.5 bg-accent"></div>
                            <h2 className="font-heading text-4xl md:text-5xl text-primary-dark">Nos Solutions</h2>
                        </div>
                        <Link to="/solutions" className="hidden md:flex items-center gap-2 text-primary-dark font-bold hover:text-accent-dim transition-colors">
                            Voir toutes les solutions <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="solutions-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <Link to="/solutions" className="solution-card group block relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img src="https://images.unsplash.com/photo-1592833159057-6cb5d8b76c08?q=80&w=800&auto=format&fit=crop" alt="Photovoltaïque" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 right-4 z-20">
                                    <CeeBadge />
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="w-10 h-10 rounded-full bg-bg-alt flex items-center justify-center mb-4 text-accent-dim">
                                    <Sun size={20} />
                                </div>
                                <h3 className="font-heading text-2xl text-primary-dark tracking-wide mb-2 group-hover:text-accent-dim transition-colors">Solaire photovoltaïque</h3>
                                <p className="text-text-light text-sm mb-4 line-clamp-2">Valorisation fiche BAT-EN-109, autoconsommation et conformité Loi Climat.</p>
                            </div>
                        </Link>

                        {/* Card 2 */}
                        <Link to="/isolation" className="solution-card group block relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop" alt="Isolation" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 right-4 z-20">
                                    <CeeBadge />
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="w-10 h-10 rounded-full bg-bg-alt flex items-center justify-center mb-4 text-accent-dim">
                                    <Building2 size={20} />
                                </div>
                                <h3 className="font-heading text-2xl text-primary-dark tracking-wide mb-2 group-hover:text-accent-dim transition-colors">Isolation thermique</h3>
                                <p className="text-text-light text-sm mb-4 line-clamp-2">Isolation combles, murs et planchers financée jusqu'à 35% par les CEE P6.</p>
                            </div>
                        </Link>

                        {/* Card 3 */}
                        <Link to="/solutions" className="solution-card group block relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" alt="Éclairage LED" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 right-4 z-20">
                                    <CeeBadge />
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="w-10 h-10 rounded-full bg-bg-alt flex items-center justify-center mb-4 text-accent-dim">
                                    <Lightbulb size={20} />
                                </div>
                                <h3 className="font-heading text-2xl text-primary-dark tracking-wide mb-2 group-hover:text-accent-dim transition-colors">Éclairage LED & CVC</h3>
                                <p className="text-text-light text-sm mb-4 line-clamp-2">Optimisation avec fiches alternatives actives P6 suite à la suppression de la BAT-EQ-127.</p>
                            </div>
                        </Link>

                        {/* Card 4 */}
                        <Link to="/solutions" className="solution-card group block relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="p-6 h-full flex flex-col justify-center border border-accent/20">
                                <div className="absolute top-4 right-4 z-20">
                                    <CeeBadge />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-4 text-accent-dim mt-2">
                                    <BarChart3 size={20} />
                                </div>
                                <h3 className="font-heading text-2xl text-primary-dark tracking-wide mb-2 group-hover:text-accent-dim transition-colors">Audit & Optimisation</h3>
                                <p className="text-text-light text-sm mb-4">Identification de tous vos gisements CEE avec les fiches actives 2026.</p>
                            </div>
                        </Link>

                        {/* Card 5 */}
                        <Link to="/solutions" className="solution-card group block relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="p-6 h-full flex flex-col justify-center border border-accent/20">
                                <div className="absolute top-4 right-4 z-20">
                                    <CeeBadge />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-4 text-accent-dim mt-2">
                                    <TrendingUp size={20} />
                                </div>
                                <h3 className="font-heading text-2xl text-primary-dark tracking-wide mb-2 group-hover:text-accent-dim transition-colors">Décret Tertiaire & OPERAT</h3>
                                <p className="text-text-light text-sm mb-4">Mise en conformité BACS et GTB avec dossiers de subventions CEE dédiés.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 5. Module CEE Simplifié */}
            <section className="bg-bg pb-24 w-full">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-bg-alt rounded-3xl p-8 md:p-12 relative overflow-hidden border border-gray-200">
                        <h2 className="font-heading text-3xl md:text-4xl text-primary-dark mb-8 tracking-wide uppercase flex items-center gap-3">
                            <Zap className="text-accent-dim" />
                            Comment ça marche — Les CEE en 3 étapes
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 font-mono text-sm md:text-base text-primary-dark">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
                                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-lg shadow-sm">1</div>
                                <h4 className="font-bold mb-3 uppercase tracking-tight">Évaluation</h4>
                                <p className="text-text-light">SOLAGREEN évalue vos travaux éligibles via notre audit énergétique spécialisé P6.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
                                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-lg shadow-sm">2</div>
                                <h4 className="font-bold mb-3 uppercase tracking-tight">Dossier CEE</h4>
                                <p className="text-text-light">Nous déposons le dossier CEE de A à Z <strong>AVANT</strong> le début de tout engagement ou signature.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
                                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-lg shadow-sm">3</div>
                                <h4 className="font-bold mb-3 uppercase tracking-tight">Prime</h4>
                                <p className="text-text-light">Vous recevez votre prime directement déduite de votre facture ou encaissable.</p>
                            </div>
                        </div>

                        <div className="mt-10 bg-white/60 border border-primary-dark/10 rounded-2xl p-6 flex gap-4 text-primary-dark items-start font-mono text-sm">
                            <AlertTriangle className="text-accent-dim shrink-0 mt-0.5" />
                            <div>
                                <strong className="block mb-1 text-base uppercase">Règle absolue : Inscription avant devis</strong>
                                La demande doit être faite AVANT la signature du devis et le début des travaux. Sans cette étape, vous perdez définitivement votre droit à la prime.
                            </div>
                        </div>

                        <div className="mt-10 flex justify-center">
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition-transform hover:scale-[1.03] hover:shadow-lg">
                                Démarrer maintenant — c'est gratuit <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Manifeste */}
            <section className="bg-primary-dark py-32 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-chevron pointer-events-none"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <p className="text-white/60 font-sans text-xl md:text-3xl font-light mb-12">
                        "La plupart des entreprises ignorent qu'elles peuvent se faire financer."
                    </p>
                    <h2 className="text-white font-sans text-2xl md:text-5xl font-light leading-tight">
                        Chez SOLAGREEN, nous transformons vos obligations réglementaires en <span className="text-accent font-serif italic font-bold">primes</span>.
                    </h2>
                </div>
            </section>

            {/* 7. Urgence Réglementaire */}
            <section className="bg-primary pt-24 pb-16 w-full">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-primary-dark rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
                        {/* Decorative background gradient */}
                        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-accent pointer-events-none opacity-20"></div>

                        <h2 className="font-heading text-3xl md:text-4xl text-white mb-10 tracking-wide uppercase">
                            Réglementation 2026 — Ce qui vous concerne
                        </h2>

                        <ul className="space-y-4 font-mono text-sm md:text-base text-gray-300 relative z-10">
                            <li className="flex gap-4 items-start border-b border-white/10 pb-4">
                                <span className="text-accent text-xl leading-none font-bold">✓</span>
                                <div>
                                    <strong className="text-white block mb-1">CEE P6 : +27% d'obligations</strong>
                                    Plus de primes disponibles grâce à la 6e période en vigueur depuis janvier 2026.
                                </div>
                            </li>
                            <li className="flex gap-4 items-start border-b border-white/10 pb-4">
                                <span className="text-accent text-xl leading-none font-bold">✓</span>
                                <div>
                                    <strong className="text-white block mb-1">Décret tertiaire</strong>
                                    Obligation de -40% de consommation d'ici 2030 pour les bâtiments {'>'} 1 000 m². Déclaration OPERAT imminente.
                                </div>
                            </li>
                            <li className="flex gap-4 items-start border-b border-white/10 pb-4">
                                <span className="text-accent text-xl leading-none font-bold">✓</span>
                                <div>
                                    <strong className="text-white block mb-1">Loi Climat & Résilience</strong>
                                    Solarisation obligatoire des toitures {'>'} 500 m² (depuis jan. 2025). Ombrières de parking obligatoires.
                                </div>
                            </li>
                            <li className="flex gap-4 items-start border-b border-white/10 pb-4">
                                <span className="text-accent text-xl leading-none font-bold">✓</span>
                                <div>
                                    <strong className="text-white block mb-1">Décret BACS</strong>
                                    Système GTB obligatoire pour les bâtiments {'>'} 290 kW (depuis jan. 2025).
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="text-red-500 text-xl leading-none font-bold">⚠️</span>
                                <div>
                                    <strong className="text-white block mb-1">BAT-EQ-127 (LED) supprimée</strong>
                                    Fiche annulée en fév. 2026. Agissez MAINTENANT avec SOLAGREEN pour trouver les fiches alternatives.
                                </div>
                            </li>
                        </ul>

                        <div className="mt-10 relative z-10">
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-primary-dark px-8 py-3 rounded-xl font-bold transition-transform hover:scale-[1.03]">
                                Vérifier ma situation réglementaire <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. CTA Final */}
            <section className="bg-primary-dark py-32 w-full text-center border-t border-white/5 relative">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="font-serif italic text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-10">
                        "Vos travaux peuvent être partiellement financés.<br />
                        <span className="text-accent">Combien pouvez-vous obtenir ?</span>"
                    </h2>
                    <Link to="/cee" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-accent text-primary-dark text-lg font-bold rounded-2xl transition-transform hover:scale-[1.05] shadow-[0_0_30px_rgba(179,202,3,0.3)] hover:shadow-[0_0_40px_rgba(179,202,3,0.5)]">
                        <Calculator size={24} /> Accéder au Simulateur CEE
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Accueil;
