import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Accueil', path: '/' },
        { name: 'Solutions', path: '/solutions' },
        { name: 'Isolation', path: '/isolation' },
        { name: 'Mes aides CEE', path: '/cee', special: true },
        { name: 'Projets', path: '/projets' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 rounded-full ${scrolled ? 'bg-bg/85 backdrop-blur-xl border border-accent/30 py-3 px-6 shadow-lg' : 'bg-transparent py-4 px-6 border-transparent'}`}>
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 group">
                        <img
                            src="/logo.svg"
                            alt="SOLAGREEN"
                            className={`h-8 md:h-10 transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        <Link to="/" className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-text-light' : 'text-white/80'}`}>Accueil</Link>
                        <Link to="/a-propos" className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-text-light' : 'text-white/80'}`}>L'Agence P6</Link>
                        <Link to="/cee" className={`text-sm font-medium transition-colors hover:text-accent font-bold flex items-center gap-1 ${scrolled ? 'text-accent-dim' : 'text-accent'}`}>
                            Calculateur CEE
                            <span className="w-2 h-2 rounded-full bg-accent group-hover:animate-pulse"></span>
                        </Link>
                        <Link to="/isolation" className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-text-light' : 'text-white/80'}`}>Isolation</Link>
                        <Link to="/solutions" className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-text-light' : 'text-white/80'}`}>GTB / PV / PAC</Link>
                        <Link to="/blog" className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-text-light' : 'text-white/80'}`}>Actualités</Link>
                        <Link to="/projets" className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-text-light' : 'text-white/80'}`}>Cas Pratiques</Link>
                        <Link
                            to="/contact"
                            className="ml-4 px-5 py-2 rounded-full bg-accent text-primary-dark font-bold text-sm transform transition-all hover:scale-[1.03] active:scale-95 shadow-[0_0_15px_rgba(179,202,3,0.3)] hover:shadow-[0_0_25px_rgba(179,202,3,0.5)]"
                            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                        >
                            Audit Gratuit
                        </Link>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className={`md:hidden p-2 transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </header>

            {/* Mobile Drawer */}
            <div className={`fixed inset-0 z-[60] bg-primary-dark/95 backdrop-blur-md transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className={`absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-primary border-l border-white/10 p-6 flex flex-col transition-transform duration-300 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-end mb-8">
                        <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
                            <X size={24} />
                        </button>
                    </div>
                    <nav className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-2xl font-heading tracking-wide ${link.special ? 'text-accent' : 'text-white'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="mt-auto">
                        <Link
                            to="/contact"
                            className="block w-full text-center py-4 rounded-xl bg-accent text-primary-dark font-bold text-lg"
                        >
                            Estimer mes aides CEE
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
