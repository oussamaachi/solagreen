import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Camera, X, ChevronLeft, ChevronRight, Leaf } from 'lucide-react';
import { prefersReducedMotion } from '../utils/motion';

const Projets = () => {
    const comp = useRef(null);
    const [lightbox, setLightbox] = useState({ open: false, projectIndex: null, imageIndex: 0 });

        const projects = [
        {
            id: 1,
            title: "Installation Solaire Résidentielle",
            tag: "Solaire Résidentiel",
            images: [
                "/realisations/rea_1.jpg",
                "/realisations/rea_2.jpg",
                "/realisations/rea_3.jpg",
                "/realisations/rea_4.jpg",
                "/realisations/rea_5.jpg",
                "/realisations/rea_6.jpg"
            ]
        },
        {
            id: 2,
            title: "Panneaux Photovoltaïques Maison",
            tag: "Solaire Résidentiel",
            images: [
                "/realisations/rea_7.jpg",
                "/realisations/rea_8.jpg",
                "/realisations/rea_9.jpg"
            ]
        },
        {
            id: 3,
            title: "Installation Enphase & Panneaux",
            tag: "Équipement Solaire",
            images: [
                "/realisations/rea_10.jpg",
                "/realisations/rea_11.jpg",
                "/realisations/rea_12.jpg",
                "/realisations/rea_13.jpg"
            ]
        },
        {
            id: 4,
            title: "Carport Solaire",
            tag: "Structure & Solaire",
            images: [
                "/realisations/rea_14.jpg",
                "/realisations/rea_15.jpg",
                "/realisations/rea_16.jpg",
                "/realisations/rea_17.jpg",
                "/realisations/rea_18.jpg",
                "/realisations/rea_19.jpg",
                "/realisations/rea_20.jpg",
                "/realisations/rea_21.jpg",
                "/realisations/rea_22.jpg"
            ]
        },
        {
            id: 5,
            title: "Rénovation Bâtiment Tertiaire",
            tag: "Bâtiment Commercial",
            images: [
                "/realisations/rea_23.jpeg",
                "/realisations/rea_24.jpeg",
                "/realisations/rea_25.jpeg",
                "/realisations/rea_26.jpeg",
                "/realisations/rea_27.jpeg",
                "/realisations/rea_28.jpeg",
                "/realisations/rea_29.jpeg"
            ]
        },
        {
            id: 6,
            title: "Toiture Terrasse Industrielle",
            tag: "Tertiaire & Industriel",
            images: [
                "/realisations/rea_30.jpeg",
                "/realisations/rea_31.jpeg",
                "/realisations/rea_32.jpeg",
                "/realisations/rea_33.jpeg",
                "/realisations/rea_34.jpeg",
                "/realisations/rea_35.jpeg",
                "/realisations/rea_36.jpeg",
                "/realisations/rea_37.jpeg",
                "/realisations/rea_44.jpeg",
                "/realisations/rea_45.jpeg",
                "/realisations/rea_46.jpeg",
                "/realisations/rea_47.jpeg",
                "/realisations/rea_48.jpeg",
                "/realisations/rea_49.jpeg",
                "/realisations/rea_50.jpeg",
                "/realisations/rea_51.jpeg",
                "/realisations/rea_52.jpeg",
                "/realisations/rea_53.jpeg",
                "/realisations/rea_54.jpeg",
                "/realisations/rea_55.jpeg",
                "/realisations/rea_56.jpeg",
                "/realisations/rea_57.jpeg",
                "/realisations/rea_58.jpeg",
                "/realisations/rea_59.jpeg",
                "/realisations/rea_60.jpeg",
                "/realisations/rea_61.jpeg",
                "/realisations/rea_62.jpeg"
            ]
        },
        {
            id: 7,
            title: "Centre Logistique ID Market",
            tag: "Isolation & Toiture",
            images: [
                 "/realisations/rea_63.jpeg",
                 "/realisations/rea_64.jpeg",
                 "/realisations/rea_65.jpeg",
                 "/realisations/rea_66.jpeg",
                 "/realisations/rea_67.jpeg",
                 "/realisations/rea_68.jpeg",
                 "/realisations/rea_69.jpeg",
                 "/realisations/rea_38.jpeg",
                 "/realisations/rea_39.jpeg",
                 "/realisations/rea_40.jpeg",
                 "/realisations/rea_41.jpeg",
                 "/realisations/rea_42.jpeg",
                 "/realisations/rea_43.jpeg"
            ]
        }
    ];

    const openLightbox = (projectIndex, imageIndex = 0) => {
        setLightbox({ open: true, projectIndex, imageIndex });
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightbox({ open: false, projectIndex: null, imageIndex: 0 });
        document.body.style.overflow = '';
    };

    const navigateLightbox = (direction) => {
        const project = projects[lightbox.projectIndex];
        const total = project.images.length;
        const newIndex = (lightbox.imageIndex + direction + total) % total;
        setLightbox(prev => ({ ...prev, imageIndex: newIndex }));
    };

    useLayoutEffect(() => {
        const reduceMotion = prefersReducedMotion();
        let ctx = gsap.context(() => {
            if (reduceMotion) return;
            gsap.fromTo('.project-card',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: 'power3.out',
                    clearProps: 'transform,opacity'
                }
            );
        }, comp);
        return () => ctx.revert();
    }, []);

    // Handle keyboard navigation in lightbox
    React.useEffect(() => {
        const handleKey = (e) => {
            if (!lightbox.open) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigateLightbox(-1);
            if (e.key === 'ArrowRight') navigateLightbox(1);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    });

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
                    <p className="font-serif italic text-accent text-2xl md:text-3xl">Découvrez nos chantiers réalisés.</p>
                </div>
            </section>

            {/* Grid Projets */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, pIndex) => (
                        <div
                            key={project.id}
                            className="project-card bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full transform hover:-translate-y-2 cursor-pointer"
                            onClick={() => openLightbox(pIndex)}
                        >
                            {/* Cover Image */}
                            <div className="h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary-dark/30 group-hover:bg-primary-dark/10 transition-colors z-10"></div>
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Photo count badge */}
                                <div className="absolute top-4 right-4 z-20 font-mono text-xs font-bold bg-primary-dark/80 backdrop-blur text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                                    <Camera size={14} />
                                    {project.images.length} photo{project.images.length > 1 ? 's' : ''}
                                </div>
                            </div>

                            {/* Card Info */}
                            <div className="p-6 flex flex-col flex-1">
                                <div className="font-mono text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2">
                                    <span className="bg-bg-alt px-2 py-1 rounded">{project.tag}</span>
                                </div>
                                <h3 className="font-heading text-xl text-primary-dark leading-tight mb-3 group-hover:text-accent-dim transition-colors">
                                    {project.title}
                                </h3>

                                {/* Thumbnail Gallery Preview (show up to 4) */}
                                {project.images.length > 1 && (
                                    <div className="mt-auto pt-4 border-t border-gray-100">
                                        <div className="flex gap-2">
                                            {project.images.slice(0, 4).map((img, idx) => (
                                                <div key={idx} className="w-12 h-12 rounded-lg overflow-hidden border border-gray-200 flex-shrink-0">
                                                    <img src={img} alt="" loading="lazy" className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                            {project.images.length > 4 && (
                                                <div className="w-12 h-12 rounded-lg bg-primary-dark/90 flex items-center justify-center flex-shrink-0">
                                                    <span className="text-white text-xs font-bold">+{project.images.length - 4}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
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

            {/* Lightbox Modal */}
            {lightbox.open && lightbox.projectIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    onClick={closeLightbox}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>

                    {/* Content */}
                    <div className="relative z-10 max-w-5xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
                        {/* Close button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
                        >
                            <X size={32} />
                        </button>

                        {/* Project title */}
                        <div className="text-center mb-4">
                            <h2 className="text-white font-heading text-2xl tracking-wide">
                                {projects[lightbox.projectIndex].title}
                            </h2>
                            <p className="text-white/60 text-sm font-mono mt-1">
                                {lightbox.imageIndex + 1} / {projects[lightbox.projectIndex].images.length}
                            </p>
                        </div>

                        {/* Main image */}
                        <div className="relative flex items-center justify-center">
                            {projects[lightbox.projectIndex].images.length > 1 && (
                                <button
                                    onClick={() => navigateLightbox(-1)}
                                    className="absolute left-2 z-20 bg-white/10 hover:bg-white/25 text-white rounded-full p-3 transition-colors backdrop-blur-sm"
                                >
                                    <ChevronLeft size={28} />
                                </button>
                            )}

                            <img
                                src={projects[lightbox.projectIndex].images[lightbox.imageIndex]}
                                alt={`${projects[lightbox.projectIndex].title} - Photo ${lightbox.imageIndex + 1}`}
                                className="max-h-[70vh] w-auto mx-auto rounded-xl shadow-2xl object-contain"
                            />

                            {projects[lightbox.projectIndex].images.length > 1 && (
                                <button
                                    onClick={() => navigateLightbox(1)}
                                    className="absolute right-2 z-20 bg-white/10 hover:bg-white/25 text-white rounded-full p-3 transition-colors backdrop-blur-sm"
                                >
                                    <ChevronRight size={28} />
                                </button>
                            )}
                        </div>

                        {/* Thumbnails strip */}
                        {projects[lightbox.projectIndex].images.length > 1 && (
                            <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2 px-4">
                                {projects[lightbox.projectIndex].images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setLightbox(prev => ({ ...prev, imageIndex: idx }))}
                                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                                            idx === lightbox.imageIndex
                                                ? 'border-accent scale-110 shadow-lg'
                                                : 'border-white/20 opacity-60 hover:opacity-100'
                                        }`}
                                    >
                                        <img src={img} alt="" className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projets;
