import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight, Clock, CalendarDays } from 'lucide-react';
import CeeBadge from '../components/CeeBadge';

const Blog = () => {
    const comp = useRef(null);

    const articles = [
        {
            id: 1,
            slug: 'article-1',
            tag: "CEE P6",
            title: "CEE 6ᵉ période : +27% d'obligations, 8 milliards d'euros — ce que ça change pour votre entreprise",
            desc: "Décret n°2025-1048 du 30 octobre 2025 : la P6 est en vigueur depuis le 1er janvier 2026. L'enveloppe annuelle explose. Quelles sont les nouvelles conditions d'éligibilité pour les bâtiments tertiaires ?",
            date: "Janvier 2026",
            readTime: "4 min",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
            vedette: true
        },
        {
            id: 2,
            slug: 'article-2',
            tag: "ÉCLAIRAGE LED",
            title: "BAT-EQ-127 supprimée le 24 février 2026 : que faire pour votre éclairage LED ?",
            desc: "Arrêté du 23 février 2026. La fiche fétiche du tertiaire disparaît. Retour sur les fiches alternatives actives comme la BAT-EQ-111 ou le couplage GTB pour sauver vos financements.",
            date: "Février 2026",
            readTime: "3 min",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
            vedette: false
        },
        {
            id: 3,
            slug: 'article-3',
            tag: "ISOLATION",
            title: "Isolation thermique tertiaire : quelles fiches CEE en 2026 et combien ?",
            desc: "Analyse des fiches BAT-EN-101 (Top 1), BAT-EN-102 et BAT-EN-103 révisées en janvier 2025. Comment le TRI minimum de 3 ans modifie la donne et comment optimiser vos primes.",
            date: "Février 2026",
            readTime: "5 min",
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
            vedette: false
        },
        {
            id: 4,
            slug: 'article-4',
            tag: "CVC / CHAUFFAGE",
            title: "Nouvelles fiches PAC tertiaire 2026 : BAT-TH-163, BAT-TH-164 et BAT-TH-162",
            desc: "La BAT-TH-113 est abrogée en 2026. Décryptage des nouvelles fiches PAC (air/eau, eau/eau) et de l'avènement très attendu de la géothermie tertiaire via la BAT-TH-162.",
            date: "Janvier 2026",
            readTime: "4 min",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
            vedette: false
        },
        {
            id: 5,
            slug: 'article-5',
            tag: "DÉCRET TERTIAIRE",
            title: "Décret tertiaire 2025–2026 : CEE et OPERAT sont-ils compatibles ?",
            desc: "Échéance OPERAT du 30 septembre 2026. Comment déduire les travaux financés par CEE de votre bilan énergétique et répondre simultanément au Décret BACS obligatoire > 290 kW.",
            date: "Février 2026",
            readTime: "6 min",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
            vedette: false
        },
        {
            id: 6,
            slug: 'article-6',
            tag: "SOLAIRE PV",
            title: "Solaire photovoltaïque 2026 : la France à 27,9 GW — vos obligations et vos aides",
            desc: "Loi Climat, solarisation obligatoire sur parkings > 400 places dès juillet 2026, ombrières. Pourquoi le couplage CEE (BAT-EN-109) et l'autoconsommation sont le duo financier gagnant.",
            date: "Mars 2026",
            readTime: "4 min",
            image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop",
            vedette: false
        },
        {
            id: 7,
            slug: 'article-7',
            tag: "GTB / BACS",
            title: "GTB BAT-TH-116 en 2026 : la fiche CEE la plus stratégique du tertiaire",
            desc: "Obligatoire par le Décret BACS pour les systèmes CVC > 290 kW, la GTB est aussi valorisée par la fiche CEE BAT-TH-116. Primes jusqu'à 40 €/m², économies de 20 à 30% sur la facture CVC.",
            date: "Janvier 2026",
            readTime: "5 min",
            image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800&auto=format&fit=crop",
            vedette: false
        },
        {
            id: 8,
            slug: 'article-8',
            tag: "FONDS CHALEUR",
            title: "Fonds Chaleur 2026 : 520 millions d'euros pour décarboner votre chauffage",
            desc: "Budget record de l'ADEME pour la chaleur renouvelable. Biomasse, géothermie, solaire thermique : qui peut en bénéficier et comment cumuler avec les CEE P6 pour des taux de subvention jusqu'à 60% ?",
            date: "Mars 2026",
            readTime: "4 min",
            image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
            vedette: false
        },
        {
            id: 9,
            slug: 'article-9',
            tag: "AUDIT ÉNERGÉTIQUE",
            title: "Audit énergétique obligatoire 2026 : êtes-vous concerné par la directive EED ?",
            desc: "La directive EED révisée, transposée en droit français en décembre 2024, élargit l'obligation d'audit énergétique. Seuils, contenu réglementaire, sanctions et articulation avec OPERAT et les CEE.",
            date: "Janvier 2026",
            readTime: "5 min",
            image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=800&auto=format&fit=crop",
            vedette: false
        },
        {
            id: 10,
            slug: 'article-10',
            tag: "IRVE / MOBILITÉ",
            title: "IRVE obligatoires en 2026 : bornes de recharge, CEE et aides ADVENIR pour vos parkings",
            desc: "La Loi LOM et la Loi Climat imposent des bornes de recharge dans les parkings d'entreprise. Tout savoir sur les seuils, les aides ADVENIR (jusqu'à 2 100 €/borne), la fiche CEE P6 et le smart charging.",
            date: "Février 2026",
            readTime: "5 min",
            image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?q=80&w=800&auto=format&fit=crop",
            vedette: false
        }
    ];

    const vedette = articles.find(a => a.vedette);
    const others = articles.filter(a => !a.vedette);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.article-card',
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
            );
        }, comp);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={comp} className="w-full bg-bg pb-24">
            {/* Hero */}
            <section className="relative h-[35vh] w-full flex items-center justify-center bg-primary">
                <div className="absolute inset-0 bg-gradient-hero pointer-events-none z-0"></div>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent z-10"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mt-10">
                    <h1 className="font-heading text-4xl md:text-6xl text-white tracking-widest uppercase mb-4">
                        Actualités CEE &amp; Réglementation
                    </h1>
                    <p className="font-sans text-gray-400 text-lg max-w-2xl mx-auto">
                        Veille réglementaire expertisée — P6, décrets, fiches CEE, Fonds Chaleur, BACS, solaire et mobilité électrique.
                    </p>
                </div>
            </section>

            {/* Article Vedette */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <Link to={`/blog/${vedette.slug}`} className="block">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col md:flex-row group article-card">
                        <div className="w-full md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                            <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-primary-dark/10 transition-colors z-10 pointer-events-none"></div>
                            <img src={vedette.image} alt={vedette.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute top-4 left-4 z-20">
                                <CeeBadge />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-4 text-xs font-mono font-bold text-gray-500 mb-6 uppercase tracking-widest">
                                <span className="text-accent-dim bg-accent/10 px-3 py-1 rounded">{vedette.tag}</span>
                                <span className="flex items-center gap-1"><CalendarDays size={14} /> {vedette.date}</span>
                                <span className="flex items-center gap-1"><Clock size={14} /> {vedette.readTime}</span>
                            </div>
                            <h2 className="font-heading text-3xl md:text-4xl text-primary-dark leading-tight mb-4 group-hover:text-accent-dim transition-colors">{vedette.title}</h2>
                            <p className="text-text-light font-sans mb-8 text-lg">{vedette.desc}</p>
                            <div className="mt-auto">
                                <span className="inline-flex items-center gap-2 font-bold text-primary-dark uppercase text-sm tracking-wide group-hover:text-accent-dim transition-colors">
                                    Lire l'article complet <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>

            {/* Grille Articles */}
            <section className="max-w-7xl mx-auto px-6 pb-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {others.map((a) => (
                        <Link key={a.id} to={`/blog/${a.slug}`} className="block">
                            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group article-card transform hover:-translate-y-2 h-full">
                                <div className="h-48 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-primary-dark/10 transition-colors z-10 pointer-events-none"></div>
                                    <img src={a.image} alt={a.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="p-6 md:p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-4 text-[10px] font-mono font-bold text-gray-500 mb-4 uppercase tracking-widest">
                                        <span className="text-accent-dim bg-accent/10 px-2 py-1 rounded">{a.tag}</span>
                                        <span className="flex items-center gap-1"><CalendarDays size={12} /> {a.date}</span>
                                        <span className="flex items-center gap-1"><Clock size={12} /> {a.readTime}</span>
                                    </div>
                                    <h3 className="font-heading text-xl text-primary-dark leading-tight mb-3 group-hover:text-accent-dim transition-colors">{a.title}</h3>
                                    <p className="text-text-light font-sans text-sm mb-6 line-clamp-3">{a.desc}</p>
                                    <div className="mt-auto pt-4 border-t border-gray-100">
                                        <span className="inline-flex items-center gap-2 font-bold text-primary-dark uppercase text-xs tracking-wide group-hover:text-accent-dim transition-colors">
                                            Lire l'article <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Newsletter Alert */}
            <section className="max-w-5xl mx-auto px-6 border-t border-gray-200 mt-10 pt-16 article-card">
                <div className="bg-primary-dark rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-chevron opacity-10 pointer-events-none z-0"></div>
                    <p className="font-heading text-2xl md:text-3xl text-white relative z-10 max-w-2xl mx-auto leading-relaxed">
                        "Recevez chaque mois nos alertes réglementaires CEE — P6, nouvelles fiches, arrêtés."
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center relative z-10 max-w-md mx-auto">
                        <input type="email" placeholder="Votre email professionnel" className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400 px-6 py-3 rounded-xl focus:outline-none focus:border-accent w-full" />
                        <button className="bg-accent text-primary-dark font-bold px-8 py-3 rounded-xl whitespace-nowrap hover:scale-[1.03] transition-transform shadow-lg">S'inscrire</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
