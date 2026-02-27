import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock, ChevronRight } from 'lucide-react';

const Article1 = () => {
    return (
        <div className="w-full bg-bg pb-24">
            {/* Hero */}
            <section className="relative h-[50vh] w-full flex items-end bg-primary-dark overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1600&auto=format&fit=crop"
                    alt="CEE P6"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-hero z-10 pointer-events-none" />
                <div className="relative z-20 max-w-4xl mx-auto px-6 pb-12 w-full">
                    <div className="flex items-center gap-2 text-xs font-mono text-accent mb-4 uppercase tracking-widest">
                        <Link to="/blog" className="hover:underline flex items-center gap-1"><ArrowLeft size={14} /> Blog</Link>
                        <ChevronRight size={12} className="text-gray-500" />
                        <span className="text-gray-400">CEE P6</span>
                    </div>
                    <h1 className="font-heading text-3xl md:text-5xl text-white leading-tight mb-4">
                        CEE 6ᵉ période : +27% d'obligations, 8 milliards d'euros — ce que ça change pour votre entreprise
                    </h1>
                    <div className="flex items-center gap-6 text-xs font-mono text-gray-400 uppercase tracking-wide">
                        <span className="flex items-center gap-2"><CalendarDays size={14} /> Janvier 2026</span>
                        <span className="flex items-center gap-2"><Clock size={14} /> 4 min de lecture</span>
                        <span className="bg-accent/20 text-accent px-3 py-1 rounded text-accent-dim">CEE P6</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <article className="max-w-3xl mx-auto px-6 py-16">
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-text-light leading-relaxed mb-8 font-sans">
                        Le <strong>Décret n°2025-1048 du 30 octobre 2025</strong> a officiellement lancé la 6ᵉ période des Certificats d'Économies d'Énergie (CEE), effective depuis le <strong>1er janvier 2026</strong>. Ce texte fondateur transforme en profondeur les règles du jeu pour les obligés et les bénéficiaires, avec une hausse historique des obligations annuelles.
                    </p>

                    <div className="bg-accent/10 border-l-4 border-accent rounded-r-2xl p-6 mb-10">
                        <h2 className="font-heading text-2xl text-primary-dark mb-2">Chiffres clés de la P6</h2>
                        <ul className="font-sans text-text space-y-2 mt-3">
                            <li>📊 <strong>Obligation annuelle :</strong> 3 200 TWhc/an (+27% vs P5)</li>
                            <li>💶 <strong>Valeur totale mobilisée :</strong> ~8 milliards d'euros sur 4 ans</li>
                            <li>📅 <strong>Durée :</strong> 2026 – 2029 (4 ans)</li>
                            <li>🏢 <strong>Focus tertiaire :</strong> 40% des gisements visés dans les bâtiments non-résidentiels</li>
                        </ul>
                    </div>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Qu'est-ce qui change concrètement ?</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-6">
                        La P6 introduit plusieurs évolutions majeures par rapport à la 5ᵉ période (2022–2025). Première nouveauté : le <strong>coefficient bonificateur précarité</strong> est réformé. Désormais, les actions réalisées dans les bâtiments de moins de 1 000 m² et dans certaines zones géographiques prioritaires bénéficient d'un coefficient multiplicateur de 1,5 appliqué aux kWh cumac générés.
                    </p>
                    <p className="font-sans text-text-light leading-relaxed mb-6">
                        Deuxièmement, le mécanisme du <strong>Taux de Retour sur Investissement (TRI) minimum de 3 ans</strong> — introduit par arrêté le 14 janvier 2025 — reste en vigueur et s'applique désormais à toutes les fiches standardisées des secteurs Industrie et Tertiaire. Cette mesure vise à sécuriser l'efficacité économique réelle des travaux financés.
                    </p>
                    <p className="font-sans text-text-light leading-relaxed mb-6">
                        Troisièmement, les <strong>contrôles terrain</strong> sont renforcés : le Pôle National des Certificats d'Économies d'Énergie (PNCEE) dispose d'équipes de verification agrandies, et les sanctions financières en cas de fraude passent de 0,05 €/kWh à <strong>0,08 €/kWh cumac</strong> non-justifié.
                    </p>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Les secteurs tertiaires les plus impactés</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                            <h3 className="font-heading text-xl text-primary-dark mb-3">🏭 Bureaux & commerces</h3>
                            <p className="font-sans text-text-light text-sm leading-relaxed">Les immeubles de bureaux de plus de 2 000 m² entrent dans le viseur prioritaire de la P6 via les fiches GTB (BAT-TH-116) et éclairage LED (BAT-EQ-127, maintenant remplacée). Potentiel : 15 à 40 €/m² en prime CEE.</p>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                            <h3 className="font-heading text-xl text-primary-dark mb-3">🏥 Santé & hôtellerie</h3>
                            <p className="font-sans text-text-light text-sm leading-relaxed">Cliniques, EHPAD et hôtels bénéficient de valorisations spécifiques sur les systèmes CVC (chauffage-ventilation-climatisation) et la récupération de chaleur sur eaux grises. Fiches BAT-TH-163 et BAT-TH-104.</p>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                            <h3 className="font-heading text-xl text-primary-dark mb-3">🏫 Enseignement</h3>
                            <p className="font-sans text-text-light text-sm leading-relaxed">Les collectivités territoriales bénéficient d'un bonus sur les établissements scolaires rénovés. L'isolation des combles et toitures (BAT-EN-101) et le remplacement des chaudières fuel par des PAC sont fortement valorisés.</p>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                            <h3 className="font-heading text-xl text-primary-dark mb-3">🏪 Grande distribution</h3>
                            <p className="font-sans text-text-light text-sm leading-relaxed">Les grandes surfaces alimentaires sont ciblées par les fiches frigorifiques (IND-UT-134) et éclairage LED. L'obligation de solarisation des parkings &gt;10 000 m² (Loi APER) crée un levier d'autoconsommation couplable aux CEE.</p>
                        </div>
                    </div>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Comment maximiser vos primes CEE P6 ?</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        Pour tirer parti de la P6, une <strong>audit énergétique préalable</strong> est désormais quasi-indispensable pour les surfaces &gt; 1 000 m². Il permet d'identifier les fiches standardisées avec les meilleurs retours (kWh cumac/€ investi) et de planifier un programme de travaux pluriannuel cohérent avec vos obligations Décret Tertiaire.
                    </p>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        La stratégie recommandée par SOLAGREEN consiste à <strong>coupler systématiquement</strong> les travaux d'efficacité énergétique avec :
                    </p>
                    <ol className="font-sans text-text-light space-y-3 mb-8 list-decimal list-inside">
                        <li><strong>Une GTB certifiée</strong> (BAT-TH-116) pour piloter et optimiser tous les équipements en temps réel</li>
                        <li><strong>L'isolation thermique</strong> (BAT-EN-101/102/103) pour réduire les besoins à la source</li>
                        <li><strong>Des équipements CVC performants</strong> (PAC, récupération chaleur) une fois l'enveloppe traitée</li>
                        <li><strong>L'éclairage LED avec détection présence</strong> via les nouvelles fiches alternatives à BAT-EQ-127</li>
                    </ol>

                    <div className="bg-primary-dark rounded-2xl p-8 text-white mt-12">
                        <h3 className="font-heading text-2xl text-accent mb-4">Anticipez dès maintenant</h3>
                        <p className="font-sans leading-relaxed text-gray-300 mb-6">
                            SOLAGREEN accompagne les donneurs d'ordre tertiaires dans le montage complet de leurs dossiers CEE P6 : audit, sélection des fiches, coordination avec les obligés, suivi des travaux et déclaration OPERAT. Contactez nos experts pour un premier diagnostic gratuit.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-primary-dark font-bold px-8 py-3 rounded-xl hover:bg-accent-hot transition-colors">
                            Demander un audit <ChevronRight size={18} />
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Article1;
