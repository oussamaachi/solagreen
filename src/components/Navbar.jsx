import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);

    const closeMenus = () => {
        setMobileMenuOpen(false);
        setSolutionsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!mobileMenuOpen) {
            document.body.style.overflow = '';
            return undefined;
        }

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeMenus();
            }
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [mobileMenuOpen]);

    return (
        <>
            <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 rounded-full ${scrolled ? 'bg-bg/85 backdrop-blur-xl border border-accent/30 py-3 px-6 shadow-lg' : 'bg-transparent py-4 px-6 border-transparent'}`}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link to="/" onClick={closeMenus} className="flex items-center gap-2 group">
                            <img
                                src="/logo.svg"
                                alt="SOLAGREEN"
                                className={`h-8 md:h-10 transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
                            />
                        </Link>
                        <div className={`hidden lg:flex items-center px-3 py-1 rounded-full border text-xs font-medium tracking-wide transition-colors ${scrolled ? 'border-primary/20 text-primary-dark' : 'border-white/30 text-white/90'}`}>
                            Particuliers & Tertiaire
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center gap-6">
                        <Link to="/" onClick={closeMenus} className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-text-light' : 'text-white/80'}`}>Accueil</Link>
                        <Link to="/a-propos" onClick={closeMenus} className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-text-light' : 'text-white/80'}`}>L'Agence P6</Link>

                        <div className="relative group">
                            <button type="button" className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-text-light' : 'text-white/80'} py-2`}>
                                Solutions <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                            </button>

                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 p-2">
                                <Link to="/solutions" onClick={closeMenus} className="block px-4 py-3 hover:bg-bg rounded-xl transition-colors">
                                    <div className="text-primary-dark font-bold text-sm mb-1">Photovoltaïque</div>
                                    <div className="text-text-light text-xs">Indépendance énergétique</div>
                                </Link>
                                <Link to="/isolation" onClick={closeMenus} className="block px-4 py-3 hover:bg-bg rounded-xl transition-colors">
                                    <div className="text-primary-dark font-bold text-sm mb-1">Isolation</div>
                                    <div className="text-text-light text-xs">Thermique & Phonique</div>
                                </Link>
                                <div className="px-4 py-3 bg-bg-alt/50 rounded-xl mt-1">
                                    <div className="text-primary-dark font-bold text-sm mb-2">Pompes à Chaleur (PAC)</div>
                                    <div className="flex flex-col gap-2 ml-2 border-l border-primary/10 pl-3">
                                        <Link to="/solutions" onClick={closeMenus} className="text-text-light hover:text-accent-dim text-xs font-medium transition-colors">PAC Air-Air (Climatisation)</Link>
                                        <Link to="/solutions" onClick={closeMenus} className="text-text-light hover:text-accent-dim text-xs font-medium transition-colors">PAC Air-Eau (Hydraulique)</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link to="/cee" onClick={closeMenus} className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-text-light' : 'text-white/80'}`}>Primes C2E</Link>
                        <Link to="/projets" onClick={closeMenus} className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-text-light' : 'text-white/80'}`}>Cas Pratiques</Link>
                        <Link to="/blog" onClick={closeMenus} className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-text-light' : 'text-white/80'}`}>Actualités</Link>

                        <Link
                            to="/contact"
                            onClick={closeMenus}
                            className="ml-2 px-5 py-2 rounded-full bg-accent text-primary-dark font-bold text-sm transform transition-all hover:scale-[1.03] active:scale-95 shadow-[0_0_15px_rgba(179,202,3,0.3)] hover:shadow-[0_0_25px_rgba(179,202,3,0.5)]"
                        >
                            Audit Gratuit
                        </Link>
                    </nav>

                    <button
                        className={`md:hidden p-2 transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Ouvrir le menu"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </header>

            <div
                className={`fixed inset-0 z-[60] bg-primary-dark/95 backdrop-blur-md transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={closeMenus}
            >
                <div
                    className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-primary border-l border-white/10 p-6 flex flex-col transition-transform duration-300 transform overflow-y-auto ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    onClick={(event) => event.stopPropagation()}
                >
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                        <div className="text-accent text-xs font-bold tracking-widest uppercase">Particuliers & Tertiaire</div>
                        <button onClick={closeMenus} className="text-white p-2" aria-label="Fermer le menu">
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-6">
                        <Link to="/" onClick={closeMenus} className="text-xl font-heading tracking-wide text-white">Accueil</Link>
                        <Link to="/a-propos" onClick={closeMenus} className="text-xl font-heading tracking-wide text-white">L'Agence P6</Link>

                        <div className="flex flex-col gap-3">
                            <button
                                type="button"
                                onClick={() => setSolutionsOpen(!solutionsOpen)}
                                className="flex items-center justify-between text-xl font-heading tracking-wide text-white w-full text-left"
                            >
                                <span>Solutions</span>
                                <ChevronDown size={20} className={`transition-transform duration-300 ${solutionsOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`flex flex-col gap-4 pl-4 border-l border-white/20 overflow-hidden transition-all duration-300 ${solutionsOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                <Link to="/solutions" onClick={closeMenus} className="text-white/80 font-medium">Photovoltaïque</Link>
                                <Link to="/isolation" onClick={closeMenus} className="text-white/80 font-medium">Isolation</Link>
                                <div className="flex flex-col gap-2">
                                    <span className="text-white/80 font-medium">Pompes à Chaleur (PAC)</span>
                                    <div className="flex flex-col gap-2 pl-3 border-l border-accent/30">
                                        <Link to="/solutions" onClick={closeMenus} className="text-white/60 text-sm">Air-Air (Climatisation)</Link>
                                        <Link to="/solutions" onClick={closeMenus} className="text-white/60 text-sm">Air-Eau (Hydraulique)</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link to="/cee" onClick={closeMenus} className="text-xl font-heading tracking-wide text-white">Primes C2E / Dossiers</Link>
                        <Link to="/projets" onClick={closeMenus} className="text-xl font-heading tracking-wide text-white">Cas Pratiques</Link>
                        <Link to="/blog" onClick={closeMenus} className="text-xl font-heading tracking-wide text-white">Actualités</Link>
                    </nav>

                    <div className="mt-auto pt-8">
                        <Link
                            to="/contact"
                            onClick={closeMenus}
                            className="block w-full text-center py-4 rounded-xl bg-accent text-primary-dark font-bold text-lg"
                        >
                            Demander un Audit
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
