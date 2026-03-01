import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Leaf } from 'lucide-react';

const Projets = () => {
    const comp = useRef(null);

    const projects = [
        {
            id: 1,
            tag: "Solaire PV + CEE",
            title: "Centrale PV 150 kWc — Centre commercial",
            location: "Île-de-France (Conformité Loi Climat)",
            fiches: "BAT-EN-109",
            prime: "18 500 €",
            year: "2024",
            image: "/pv.png"
        },
        {
            id: 2,
            tag: "Audit + GTB BACS",
            title: "Mise en conformité BACS",
            location: "Groupe tertiaire Grand Paris",
            fiches: "BAT-TH-116",
            prime: "22 000 €",
            year: "2025",
            image: "/bacs.png"
        },
        {
            id: 3,
            tag: "Isolation Globale",
            title: "ITE + Toiture-terrasse complexe hôtelier",
            location: "Hauts-de-Seine",
            fiches: "BAT-EN-101 / BAT-EN-102",
            prime: "33 000 €",
            year: "2024",
            image: "/isolation.png"
        },
        {
            id: 4,
            tag: "Pilotage Energétique",
            title: "GTB Couplée Chauffage/Éclairage",
            location: "Campus industriel Essonne",
            fiches: "BAT-TH-116",
            prime: "15 000 €",
            year: "2025",
            image: "/pac.png"
        },
        {
            id: 5,
            tag: "Rénovation Enveloppe",
            title: "Isolation combles et planchers 2500 m²",
            location: "Bureaux — Val d'Oise",
            fiches: "BAT-EN-101 / BAT-EN-103",
            prime: "28 000 €",
            year: "2025",
            image: "/hvac.png"
        },
        {
            id: 6,
            tag: "Solution Complète",
            title: "PV + Isolation + GTB Parc multiséculaire",
            location: "Parc tertiaire Seine-Saint-Denis",
            fiches: "Multi-fiches P6 complètes",
            prime: "67 000 €",
            year: "2025",
            image: "/hero_pv.png"
        }
    ];

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.project-card', {
                y: 60,
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
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mt-10">
                    <h1 className="font-heading text-4xl md:text-6xl text-white tracking-widest uppercase mb-4">
                        Nos Réalisations
                    </h1>
                    <p className="font-serif italic text-accent text-2xl md:text-3xl">Et leurs primes CEE associées.</p>
                </div>
            </section>

            {/* Grid Projets */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p) => (
                        <div key={p.id} className="project-card bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full transform hover:-translate-y-2">
                            <div className="h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary-dark/30 group-hover:bg-primary-dark/10 transition-colors z-10"></div>
                                <img src={p.image} alt={p.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 z-20 font-mono text-xs font-bold bg-primary-dark/80 backdrop-blur text-white px-3 py-1 rounded">
                                    {p.year}
                                </div>
                                <div className="absolute bottom-4 right-4 z-20">
                                    <span className="font-mono text-sm font-bold bg-accent text-primary-dark px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1">
                                        Prime: {p.prime}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <div className="font-mono text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2">
                                    <span className="bg-bg-alt px-2 py-1 rounded">{p.tag}</span>
                                </div>
                                <h3 className="font-heading text-2xl text-primary-dark leading-tight mb-2 group-hover:text-accent-dim transition-colors">{p.title}</h3>
                                <p className="text-sm font-sans text-text-light mb-4 flex items-center gap-2">
                                    <Leaf size={14} className="text-accent" /> {p.location}
                                </p>

                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    <div className="flex justify-between items-center text-xs font-mono">
                                        <span className="text-gray-400">Fiches mobilisées :</span>
                                        <span className="font-bold text-primary-dark">{p.fiches}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary-dark text-accent text-lg font-bold rounded-2xl transition-transform hover:scale-[1.03] shadow-lg">
                        Projet similaire ? Demandez votre estimation gratuite
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Projets;
