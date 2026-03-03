import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight, Clock, CalendarDays } from 'lucide-react';
import CeeBadge from '../components/CeeBadge';
import { prefersReducedMotion } from '../utils/motion';

const Blog = () => {
    const comp = useRef(null);
    const [newsletter, setNewsletter] = useState({ email: '', consent: false, website: '' });
    const [newsletterErrors, setNewsletterErrors] = useState({});
    const [newsletterState, setNewsletterState] = useState('idle');
    const [newsletterMessage, setNewsletterMessage] = useState('');

    const articles = [
        {
            id: 1,
            slug: 'article-1',
            tag: "CEE P6",
            title: "CEE 6ᵉ période : +27% d'obligations, 8 milliards d'euros — ce que ça change pour votre entreprise",
            desc: "Décret n°2025-1048 du 30 octobre 2025 : la P6 est en vigueur depuis le 1er janvier 2026. L'enveloppe annuelle explose. Quelles sont les nouvelles conditions d'éligibilité pour les bâtiments tertiaires ?",
            date: "Janvier 2026",
            readTime: "4 min",
            image: "/cee.png",
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
            image: "/hero_pv.png",
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
            image: "/audit.png",
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
            image: "/hvac.png",
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
            image: "/pv.png",
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
            image: "/hvac.png",
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
            image: "/pv.png",
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
            image: "/hero_pv.png",
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
            image: "/pac.png",
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
            image: "/pac.png",
            vedette: false
        }
    ];

    const vedette = articles.find(a => a.vedette);
    const others = articles.filter(a => !a.vedette);

    useLayoutEffect(() => {
        const reduceMotion = prefersReducedMotion();
        let ctx = gsap.context(() => {
            if (reduceMotion) return;
            gsap.fromTo('.article-card',
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
            );
        }, comp);
        return () => ctx.revert();
    }, []);

    const updateNewsletterField = (event) => {
        const { name, value, type, checked } = event.target;
        const nextValue = type === 'checkbox' ? checked : value;
        setNewsletter((prev) => ({ ...prev, [name]: nextValue }));

        setNewsletterErrors((prev) => {
            if (!prev[name]) return prev;
            const next = { ...prev };
            delete next[name];
            return next;
        });

        if (newsletterState !== 'idle') {
            setNewsletterState('idle');
            setNewsletterMessage('');
        }
    };

    const validateNewsletter = () => {
        const errors = {};
        const email = newsletter.email.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            errors.email = 'Veuillez saisir une adresse email valide.';
        }
        if (!newsletter.consent) {
            errors.consent = "Vous devez accepter de recevoir nos alertes réglementaires.";
        }
        return errors;
    };

    const handleNewsletterSubmit = async (event) => {
        event.preventDefault();
        const errors = validateNewsletter();
        if (Object.keys(errors).length > 0) {
            setNewsletterErrors(errors);
            setNewsletterState('error');
            setNewsletterMessage('Merci de corriger les champs signalés.');
            return;
        }

        setNewsletterErrors({});
        setNewsletterState('loading');
        setNewsletterMessage('');

        try {
            const controller = new AbortController();
            const timeoutId = window.setTimeout(() => controller.abort(), 10000);

            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: newsletter.email.trim(),
                    consent: newsletter.consent,
                    website: newsletter.website,
                }),
                signal: controller.signal,
            });

            window.clearTimeout(timeoutId);
            const responseData = await response.json().catch(() => ({}));

            if (response.status === 202 && responseData.ok) {
                setNewsletterState('success');
                setNewsletterMessage("Inscription confirmée. Vous recevrez nos prochaines alertes.");
                setNewsletter({ email: '', consent: false, website: '' });
                return;
            }

            if (response.status === 400 && responseData.fieldErrors) {
                setNewsletterErrors(responseData.fieldErrors);
                setNewsletterState('error');
                setNewsletterMessage('Certains champs sont invalides.');
                return;
            }

            if (response.status === 429) {
                setNewsletterState('error');
                setNewsletterMessage('Trop de tentatives. Merci de réessayer dans quelques minutes.');
                return;
            }

            throw new Error('unexpected_response');
        } catch {
            setNewsletterState('error');
            setNewsletterMessage("Service temporairement indisponible. Vérifiez votre connexion et réessayez.");
        }
    };

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
                            <img src={vedette.image} alt={vedette.title} loading="lazy" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
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
                                    <img src={a.image} alt={a.title} loading="lazy" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
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
                    <form className="mt-8 relative z-10 max-w-md mx-auto" noValidate onSubmit={handleNewsletterSubmit}>
                        <label htmlFor="newsletter-email" className="sr-only">Email professionnel</label>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <input
                                id="newsletter-email"
                                name="email"
                                type="email"
                                value={newsletter.email}
                                onChange={updateNewsletterField}
                                placeholder="Votre email professionnel"
                                className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400 px-6 py-3 rounded-xl focus:outline-none focus:border-accent w-full"
                                aria-invalid={Boolean(newsletterErrors.email)}
                                aria-describedby={newsletterErrors.email ? 'newsletter-email-error' : undefined}
                            />
                            <button
                                type="submit"
                                disabled={newsletterState === 'loading'}
                                className="bg-accent text-primary-dark font-bold px-8 py-3 rounded-xl whitespace-nowrap hover:scale-[1.03] transition-transform shadow-lg disabled:opacity-60 disabled:hover:scale-100"
                            >
                                {newsletterState === 'loading' ? 'Envoi...' : "S'inscrire"}
                            </button>
                        </div>

                        {newsletterErrors.email && <p id="newsletter-email-error" className="mt-2 text-left text-xs text-red-300">{newsletterErrors.email}</p>}

                        <div className="mt-4 text-left">
                            <label htmlFor="newsletter-consent" className="inline-flex items-center gap-2 text-xs text-white/80">
                                <input
                                    id="newsletter-consent"
                                    name="consent"
                                    type="checkbox"
                                    checked={newsletter.consent}
                                    onChange={updateNewsletterField}
                                    className="h-4 w-4 rounded border-white/40 bg-white/5 text-accent focus:ring-accent"
                                />
                                J'accepte de recevoir les alertes réglementaires SOLAGREEN.
                            </label>
                            {newsletterErrors.consent && <p className="mt-2 text-xs text-red-300">{newsletterErrors.consent}</p>}
                        </div>

                        <div className="hidden" aria-hidden="true">
                            <label htmlFor="newsletter-website">Site web</label>
                            <input
                                id="newsletter-website"
                                name="website"
                                type="text"
                                value={newsletter.website}
                                onChange={updateNewsletterField}
                                tabIndex="-1"
                                autoComplete="off"
                            />
                        </div>

                        {newsletterState === 'success' && (
                            <p role="status" className="mt-4 rounded-lg border border-green-300/30 bg-green-400/15 px-4 py-3 text-sm text-green-100">
                                {newsletterMessage}
                            </p>
                        )}
                        {newsletterState === 'error' && newsletterMessage && (
                            <p role="alert" className="mt-4 rounded-lg border border-red-300/30 bg-red-400/15 px-4 py-3 text-sm text-red-100">
                                {newsletterMessage}
                            </p>
                        )}
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Blog;
