import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="relative bg-primary-dark text-white rounded-t-[3rem] mt-20 pt-16 pb-6 overflow-hidden">
            {/* Background SVG Chevron Noise */}
            <div className="absolute inset-0 bg-chevron pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Col 1 */}
                    <div className="flex flex-col gap-4">
                        <Link to="/" className="inline-block">
                            <img src="/logo.svg" alt="SOLAGREEN" className="h-10 brightness-0 invert" />
                        </Link>
                        <p className="font-serif italic text-accent text-xl mt-2 leading-tight">
                            "L'efficacité énergétique, financée par les CEE."
                        </p>
                        <p className="font-mono text-sm text-gray-400 mt-4">
                            SIREN : 825 395 726
                        </p>
                    </div>

                    {/* Col 2 */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-heading tracking-wider text-lg text-white/50 uppercase mb-2">Expertise</h4>
                        <Link to="/solutions" className="hover:text-accent transition-colors">Solaire photovoltaïque</Link>
                        <Link to="/solutions" className="hover:text-accent transition-colors">Audit & Optimisation</Link>
                        <Link to="/solutions" className="hover:text-accent transition-colors">Éclairage LED & CVC</Link>
                        <Link to="/isolation" className="hover:text-accent transition-colors">Isolation Thermique</Link>
                        <Link to="/cee" className="text-accent font-medium hover:text-white transition-colors mt-2">Mes aides CEE P6</Link>
                    </div>

                    {/* Col 3 */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-heading tracking-wider text-lg text-white/50 uppercase mb-2">Entreprise</h4>
                        <Link to="/projets" className="hover:text-accent transition-colors">Nos Réalisations</Link>
                        <Link to="/a-propos" className="hover:text-accent transition-colors">À Propos</Link>
                        <Link to="/blog" className="hover:text-accent transition-colors">Actualités & Réglementation</Link>
                        <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
                    </div>

                    {/* Col 4 */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-heading tracking-wider text-lg text-white/50 uppercase mb-2">Simulateur CEE</h4>
                        <p className="text-sm text-gray-300">
                            Découvrez combien de primes CEE vous pouvez obtenir pour vos travaux de rénovation énergétique tertiaire.
                        </p>
                        <Link
                            to="/contact"
                            className="mt-2 inline-flex justify-center items-center px-6 py-3 rounded-xl bg-accent text-primary-dark font-bold transform transition-transform hover:scale-[1.03]"
                            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                        >
                            Estimer vos CEE gratuitement
                        </Link>
                    </div>
                </div>

                {/* Status Bar */}
                <div className="border-t border-white/10 pt-6 mt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-gray-400">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full text-accent-dim">
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                                CEE P6 en vigueur
                            </span>
                            <span className="hidden md:inline">SOLAGREEN</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <span>SIREN 825 395 726</span>
                            <span>© 2026</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
