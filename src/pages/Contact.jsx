import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Mail, Clock, ShieldCheck, AlertCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
    const comp = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.fade-in', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }, comp);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={comp} className="w-full bg-bg pb-24">
            {/* Hero */}
            <section className="relative h-[40vh] w-full flex items-center justify-center bg-primary">
                <div className="absolute inset-0 bg-gradient-hero pointer-events-none z-0"></div>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent z-10"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mt-10 fade-in">
                    <h1 className="font-heading text-4xl md:text-6xl text-white tracking-widest uppercase mb-4">
                        Estimer vos Aides CEE
                    </h1>
                    <p className="font-serif italic text-accent text-2xl md:text-3xl">Gratuitement & Sans engagement.</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-[60%_40%] gap-12 lg:gap-20">

                    {/* Form */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 fade-in">
                        <div className="font-mono text-xs text-primary-dark/50 uppercase tracking-widest mb-8 border-b border-gray-100 pb-2">Formulaire d'audit P6</div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary-dark mb-1 block">Nom complet *</label>
                                    <input type="text" className="w-full bg-bg-alt border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary-dark mb-1 block">Email professionnel *</label>
                                    <input type="email" className="w-full bg-bg-alt border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary-dark mb-1 block">Téléphone</label>
                                    <input type="tel" className="w-full bg-bg-alt border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary-dark mb-1 block">Société / Organisation</label>
                                    <input type="text" className="w-full bg-bg-alt border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary-dark mb-1 block">Secteur d'activité *</label>
                                <select className="w-full bg-bg-alt border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-primary-dark" required>
                                    <option value="">Sélectionnez un secteur...</option>
                                    <option value="bureau">Bureau / Tertiaire</option>
                                    <option value="commerce">Commerce</option>
                                    <option value="industrie">Industrie Légère</option>
                                    <option value="hotellerie">Hôtellerie</option>
                                    <option value="sante">Santé</option>
                                    <option value="collectivite">Collectivité</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary-dark mb-1 block">Besoin principal (P6 2026) *</label>
                                <select className="w-full bg-bg-alt border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-primary-dark" required>
                                    <option value="">Sélectionnez un besoin...</option>
                                    <option value="audit_cee">Valorisation CEE (audit + montage dossier)</option>
                                    <option value="pv">Installation Solaire PV + CEE</option>
                                    <option value="audit_operat">Audit énergétique + conformité OPERAT</option>
                                    <option value="isolation">Isolation thermique + CEE</option>
                                    <option value="bacs">Conformité Décret BACS + GTB</option>
                                    <option value="complet">Solution complète multi-expertise + optimisation CEE</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary-dark mb-1 block text-gray-500">Surface bâtiment (m²) <span className="text-xs font-normal">— Optionnel</span></label>
                                    <input type="number" className="w-full bg-bg-alt border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary-dark mb-1 block text-gray-500">Facture énergie annuelle (€) <span className="text-xs font-normal">— Optionnel</span></label>
                                    <input type="number" className="w-full bg-bg-alt border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary-dark mb-1 block">Description détaillée du projet</label>
                                <textarea rows="4" className="w-full bg-bg-alt border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"></textarea>
                            </div>

                            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-gray-100">
                                <label className="flex items-center gap-3 cursor-pointer text-sm text-gray-600">
                                    <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-accent focus:ring-accent" required />
                                    J'accepte la politique de confidentialité
                                </label>

                                <button type="button" className="w-full sm:w-auto px-8 py-4 bg-accent text-primary-dark font-bold text-lg rounded-xl transition-transform hover:scale-[1.03] shadow-lg flex items-center justify-center gap-2">
                                    Estimer mes CEE gratuitement <ArrowRight size={20} />
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Info Box */}
                    <div className="flex flex-col gap-6 fade-in">
                        <div className="bg-primary-dark p-8 rounded-3xl text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                            <div className="font-mono text-sm text-accent flex items-center gap-2 mb-6">
                                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></span>
                                Disponible — Montage CEE gratuit
                            </div>

                            <ul className="space-y-6 font-sans text-white/80">
                                <li className="flex gap-4 items-center">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex flex-shrink-0 items-center justify-center text-accent">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <strong className="block text-white text-sm mb-1">Email direct</strong>
                                        contact@solagreen.fr
                                    </div>
                                </li>
                                <li className="flex gap-4 items-center">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex flex-shrink-0 items-center justify-center text-accent">
                                        <Clock size={18} />
                                    </div>
                                    <div>
                                        <strong className="block text-white text-sm mb-1">Heures d'ouverture</strong>
                                        Lundi – Vendredi : 9h – 18h
                                    </div>
                                </li>
                                <li className="flex gap-4 items-center">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex flex-shrink-0 items-center justify-center text-accent">
                                        <ShieldCheck size={18} />
                                    </div>
                                    <div>
                                        <strong className="block text-white text-sm mb-1">Engagement Qualité</strong>
                                        Estimation de vos primes sous 48h
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-bg-alt border border-red-500/20 rounded-3xl p-8 shadow-inner">
                            <AlertCircle className="text-red-600 mb-4 w-8 h-8" />
                            <h3 className="font-bold text-primary-dark text-lg mb-2">Important — Règle de l'antériorité</h3>
                            <p className="text-sm font-sans text-gray-600 italic">
                                "Nous déposons votre dossier CEE <strong>AVANT</strong> la signature de tout devis d'installation — c'est une condition réglementaire impérative de la 6e période pour obtenir votre prime."
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
