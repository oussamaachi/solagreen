import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight, Zap, Calculator, BarChart3, Sun, Building2, TrendingUp } from 'lucide-react';

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
                        src="/hero_pv.png"
                        alt="Toiture solaire tertiaire"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-hero"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm mb-6">
                            Pour Particuliers & Professionnels du Tertiaire
                        </div>
                        <h1 className="flex flex-col gap-2">
                            <span className="hero-title-1 font-heading text-white text-5xl md:text-6xl lg:text-[3.5rem] leading-none tracking-wide">
                                Produisez votre propre énergie,
                            </span>
                            <span className="hero-title-2 font-heading text-accent text-6xl md:text-8xl lg:text-[7rem] leading-tight">
                                optez pour le solaire.
                            </span>
                        </h1>
                        <p className="hero-subtitle text-white/80 text-lg md:text-xl font-sans mt-8 max-w-2xl leading-relaxed">
                            SOLAGREEN vous accompagne vers l'indépendance énergétique. Experts en Photovoltaïque, Pompes à Chaleur et Isolation, nous prenons en charge votre projet de A à Z.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-10">
                            <Link to="/contact" className="hero-cta inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary-dark font-bold rounded-2xl transition-transform hover:scale-[1.03] active:scale-95 shadow-[0_0_20px_rgba(179,202,3,0.4)]">
                                Demander un audit gratuit <ArrowRight size={20} />
                            </Link>
                            <Link to="/solutions" className="hero-cta inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-2xl transition-all hover:bg-white/20">
                                Découvrir nos solutions <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Bande Chiffres Clés */}
            <section className="bg-primary pt-16 pb-16 w-full border-t border-accent/20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        <div className="flex flex-col items-center text-center">
                            <div className="text-accent font-heading text-5xl md:text-6xl mb-2 flex items-center">
                                -<span className="counter" data-target="70">0</span>
                                <span className="text-3xl font-sans ml-1">%</span>
                            </div>
                            <p className="text-white/70 font-sans text-sm md:text-base">Sur vos factures d'énergie</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="text-accent font-heading text-5xl md:text-6xl mb-2 flex items-center">
                                +<span className="counter" data-target="500">0</span>
                            </div>
                            <p className="text-white/70 font-sans text-sm md:text-base">Projets réalisés</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="text-accent font-heading text-5xl md:text-6xl mb-2 flex items-center">
                                <span className="counter" data-target="100">0</span>
                                <span className="text-3xl font-sans ml-1">%</span>
                            </div>
                            <p className="text-white/70 font-sans text-sm md:text-base">Accompagnement sur-mesure</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="text-accent font-heading text-5xl md:text-6xl mb-2 flex items-center">
                                <span className="counter" data-target="2">0</span>
                            </div>
                            <p className="text-white/70 font-sans text-sm md:text-base leading-tight">Secteurs experts :<br />Particulier & Tertiaire</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Nos Solutions */}
            <section className="bg-bg py-24 w-full">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 relative">
                        <div className="relative">
                            <div className="absolute -bottom-4 left-0 w-16 h-0.5 bg-accent"></div>
                            <h2 className="font-heading text-4xl md:text-5xl text-primary-dark">Nos Solutions</h2>
                            <p className="text-text-light mt-6 font-sans">Des installations performantes pour les particuliers et le tertiaire.</p>
                        </div>
                        <Link to="/solutions" className="hidden md:flex items-center gap-2 text-primary-dark font-bold hover:text-accent-dim transition-colors">
                            Toutes les solutions <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="solutions-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1: Photovoltaïque */}
                        <Link to="/solutions" className="solution-card group block relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-accent/30">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img src="/pv.png" alt="Photovoltaïque" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 right-4 z-20">
                                    <span className="bg-white/90 backdrop-blur text-primary-dark text-xs font-bold px-3 py-1 rounded-full border border-white/50">Particuliers / Tertiaire</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-4 text-accent-dim">
                                    <Sun size={20} />
                                </div>
                                <h3 className="font-heading text-2xl text-primary-dark tracking-wide mb-2 group-hover:text-accent-dim transition-colors">Solaire Photovoltaïque</h3>
                                <p className="text-text-light text-sm mb-4 line-clamp-2">Produisez votre propre électricité, réduisez durablement vos factures et valorisez votre patrimoine.</p>
                            </div>
                        </Link>

                        {/* Card 2: Pompes à Chaleur */}
                        <Link to="/solutions" className="solution-card group block relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-accent/30">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img src="/pac.png" alt="Pompes à chaleur" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 right-4 z-20">
                                    <span className="bg-white/90 backdrop-blur text-primary-dark text-xs font-bold px-3 py-1 rounded-full border border-white/50">Particuliers / Tertiaire</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-4 text-accent-dim">
                                    <Zap size={20} />
                                </div>
                                <h3 className="font-heading text-2xl text-primary-dark tracking-wide mb-2 group-hover:text-accent-dim transition-colors">Pompes à Chaleur (PAC)</h3>
                                <p className="text-text-light text-sm mb-4 line-clamp-2">Solutions PAC Air-Air (Climatisation réversible) et PAC Air-Eau (Hydraulique) pour un confort thermique optimal.</p>
                            </div>
                        </Link>

                        {/* Card 3: Isolation */}
                        <Link to="/isolation" className="solution-card group block relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-accent/30">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img src="/isolation.png" alt="Isolation" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 right-4 z-20">
                                    <span className="bg-white/90 backdrop-blur text-primary-dark text-xs font-bold px-3 py-1 rounded-full border border-white/50">Particuliers / Tertiaire</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="w-10 h-10 rounded-full bg-bg-alt flex items-center justify-center mb-4 text-accent-dim">
                                    <Building2 size={20} />
                                </div>
                                <h3 className="font-heading text-2xl text-primary-dark tracking-wide mb-2 group-hover:text-accent-dim transition-colors">Isolation Thermique</h3>
                                <p className="text-text-light text-sm mb-4 line-clamp-2">Perdez moins d'énergie en isolant vos combles, murs et planchers efficacement.</p>
                            </div>
                        </Link>

                        {/* Card 4: GTB / BACS */}
                        <Link to="/solutions" className="solution-card group block relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-accent/30">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img src="/bacs.png" alt="Bureau GTB BACS" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 right-4 z-20">
                                    <span className="bg-white/90 backdrop-blur text-primary-dark text-xs font-bold px-3 py-1 rounded-full border border-white/50">Tertiaire</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-4 text-accent-dim mt-2">
                                    <BarChart3 size={20} />
                                </div>
                                <h3 className="font-heading text-2xl text-primary-dark tracking-wide mb-2 group-hover:text-accent-dim transition-colors">Décret BACS & GTB</h3>
                                <p className="text-text-light text-sm mb-4 line-clamp-2">Mise en conformité avec pilotage intelligent de vos consommations (Gestion Technique de Bâtiment).</p>
                            </div>
                        </Link>

                        {/* Card 5: Subventions CEE */}
                        <Link to="/cee" className="solution-card group block relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-accent/30">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img src="/cee.png" alt="Primes CEE Montage Dossier" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 right-4 z-20">
                                    <span className="bg-white/90 backdrop-blur text-primary-dark text-xs font-bold px-3 py-1 rounded-full border border-white/50">Particuliers / Tertiaire</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-4 text-accent-dim mt-2">
                                    <TrendingUp size={20} />
                                </div>
                                <h3 className="font-heading text-2xl text-primary-dark tracking-wide mb-2 group-hover:text-accent-dim transition-colors">Montage Dossiers Primes CEE</h3>
                                <p className="text-text-light text-sm mb-4 line-clamp-2">Nous optimisons le financement de vos travaux via le dispositif des Certificats d'Économies d'Énergie.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. Module Accompagnement (Subtil CEE) */}
            <section className="bg-bg pb-24 w-full">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-bg-alt rounded-3xl p-8 md:p-12 relative overflow-hidden border border-gray-200">
                        <h2 className="font-heading text-3xl md:text-4xl text-primary-dark mb-8 tracking-wide flex items-center gap-3">
                            <Zap className="text-accent-dim" />
                            Un accompagnement administratif et financier complet
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 text-sm md:text-base text-primary-dark font-sans">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
                                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-lg shadow-sm">1</div>
                                <h4 className="font-bold mb-3 tracking-tight">Audit / Évaluation</h4>
                                <p className="text-text-light">Nous analysons votre profil et vos besoins énergétiques afin de proposer les solutions les plus adaptées.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
                                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-lg shadow-sm">2</div>
                                <h4 className="font-bold mb-3 tracking-tight">Dossiers et Primes CEE</h4>
                                <p className="text-text-light">Nous prenons en charge les demandes d'aides et primes <strong>avant</strong> l'engagement des travaux.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
                                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-lg shadow-sm">3</div>
                                <h4 className="font-bold mb-3 tracking-tight">Installation clé en main</h4>
                                <p className="text-text-light">L'installation est réalisée par des experts qualifiés, avec des primes déduites et optimisées.</p>
                            </div>
                        </div>

                        <div className="mt-10 flex justify-center">
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition-transform hover:scale-[1.03] hover:shadow-lg">
                                Demander un audit gratuit <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Manifeste */}
            <section className="bg-primary-dark py-32 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-chevron pointer-events-none"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <p className="text-white/60 font-sans text-xl md:text-3xl font-light mb-12">
                        "L'énergie la moins chère est celle que vous produisez et ne consommez pas."
                    </p>
                    <h2 className="text-white font-sans text-2xl md:text-5xl font-light leading-tight">
                        Avec SOLAGREEN, faites rimer urgence climatique avec <span className="text-accent font-serif italic font-bold">économie d'énergie</span>.
                    </h2>
                </div>
            </section>

            {/* 6. CTA Final */}
            <section className="bg-primary pt-24 pb-32 w-full text-center border-t border-white/5 relative">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="font-serif italic text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-10">
                        "Prêt à franchir le cap de la <br />
                        <span className="text-accent">transition énergétique ?</span>"
                    </h2>
                    <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-accent text-primary-dark text-lg font-bold rounded-2xl transition-transform hover:scale-[1.05] shadow-[0_0_30px_rgba(179,202,3,0.3)] hover:shadow-[0_0_40px_rgba(179,202,3,0.5)]">
                        Demander un accompagnement projet
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Accueil;
