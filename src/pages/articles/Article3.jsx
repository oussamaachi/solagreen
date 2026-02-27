import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock, ChevronRight } from 'lucide-react';

const Article3 = () => {
    return (
        <div className="w-full bg-bg pb-24">
            {/* Hero */}
            <section className="relative h-[50vh] w-full flex items-end bg-primary-dark overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
                    alt="Isolation thermique bâtiment tertiaire"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-hero z-10 pointer-events-none" />
                <div className="relative z-20 max-w-4xl mx-auto px-6 pb-12 w-full">
                    <div className="flex items-center gap-2 text-xs font-mono text-accent mb-4 uppercase tracking-widest">
                        <Link to="/blog" className="hover:underline flex items-center gap-1"><ArrowLeft size={14} /> Blog</Link>
                        <ChevronRight size={12} className="text-gray-500" />
                        <span className="text-gray-400">Isolation</span>
                    </div>
                    <h1 className="font-heading text-3xl md:text-5xl text-white leading-tight mb-4">
                        Isolation thermique tertiaire : quelles fiches CEE en 2026 et combien ?
                    </h1>
                    <div className="flex items-center gap-6 text-xs font-mono text-gray-400 uppercase tracking-wide">
                        <span className="flex items-center gap-2"><CalendarDays size={14} /> Février 2026</span>
                        <span className="flex items-center gap-2"><Clock size={14} /> 5 min de lecture</span>
                        <span className="bg-accent/20 text-accent-dim px-3 py-1 rounded">ISOLATION</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <article className="max-w-3xl mx-auto px-6 py-16">
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-text-light leading-relaxed mb-8 font-sans">
                        L'isolation de l'enveloppe du bâtiment reste le levier numéro 1 de performance énergétique. En 2026, les fiches CEE <strong>BAT-EN-101, BAT-EN-102 et BAT-EN-103</strong> ont été révisées pour intégrer de nouvelles exigences de performance et un mécanisme de TRI minimum. Tour d'horizon complet pour les maîtres d'ouvrage tertiaires.
                    </p>

                    <div className="bg-accent/10 border-l-4 border-accent rounded-r-2xl p-6 mb-10">
                        <h2 className="font-heading text-2xl text-primary-dark mb-3">Fiches isolation tertiaire 2026 en bref</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm font-sans">
                                <thead>
                                    <tr className="border-b border-accent/30">
                                        <th className="text-left py-2 pr-4 font-bold text-primary-dark">Fiche</th>
                                        <th className="text-left py-2 pr-4 font-bold text-primary-dark">Usage</th>
                                        <th className="text-left py-2 font-bold text-primary-dark">Prime moy.</th>
                                    </tr>
                                </thead>
                                <tbody className="text-text-light">
                                    <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-mono font-bold">BAT-EN-101</td><td className="py-2 pr-4">Combles & toitures</td><td className="py-2">3–8 €/m²</td></tr>
                                    <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-mono font-bold">BAT-EN-102</td><td className="py-2 pr-4">Murs par l'extérieur (ITE)</td><td className="py-2">5–12 €/m²</td></tr>
                                    <tr><td className="py-2 pr-4 font-mono font-bold">BAT-EN-103</td><td className="py-2 pr-4">Planchers bas</td><td className="py-2">2–5 €/m²</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">BAT-EN-101 : l'isolation des combles et toitures</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        La <strong>BAT-EN-101</strong> est de loin la fiche la plus valorisée en volume. Elle couvre l'isolation des combles perdus, rampants et toitures-terrasses dans les bâtiments tertiaires chauffés. La révision de janvier 2025 a modifié les seuils de résistance thermique minimaux :
                    </p>
                    <ul className="font-sans text-text-light space-y-2 mb-6 list-disc list-inside">
                        <li><strong>Combles perdus :</strong> R ≥ 7 m²·K/W (contre 6 auparavant) → laine minérale 25 cm minimum</li>
                        <li><strong>Toiture-terrasse :</strong> R ≥ 4,5 m²·K/W → sarking polystyrène extrudé ou polyuréthane</li>
                        <li><strong>Rampants :</strong> R ≥ 6 m²·K/W → laine de verre entre chevrons + contre-chevrons</li>
                    </ul>
                    <p className="font-sans text-text-light leading-relaxed mb-6">
                        La prime CEE est calculée sur la base de kWh cumac par m² isolé, en fonction de la zone climatique (H1, H2, H3) et du type d'usage (bureaux, commerces, enseignement…). En zone H1, pour un bureau chauffé au gaz, on peut atteindre jusqu'à <strong>8 €/m² isolé</strong> pour une toiture-terrasse.
                    </p>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">BAT-EN-102 : l'isolation par l'extérieur (ITE)</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        L'ITE (Isolation Thermique par l'Extérieur) est la technique d'isolation des murs la plus valorisée dans le tertiaire, car elle élimine les ponts thermiques et n'empiète pas sur la surface utile intérieure. La <strong>BAT-EN-102</strong> exige depuis 2025 :
                    </p>
                    <ul className="font-sans text-text-light space-y-2 mb-6 list-disc list-inside">
                        <li>Une résistance thermique R ≥ 3,7 m²·K/W (enduit sur polystyrène expansé 14 cm+)</li>
                        <li>Un rapport qualité/performance attesté par un ATec ou DTA en cours de validité</li>
                        <li>Une pose réalisée par un artisan certifié Quali'Enr ou équivalent</li>
                    </ul>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Le TRI minimum de 3 ans : ce que ça change</h2>
                    <p className="font-sans text-text-light leading-relaxed mb-4">
                        Depuis l'arrêté du <strong>14 janvier 2025</strong>, toutes les opérations CEE dans le tertiaire et l'industrie doivent justifier d'un <strong>Taux de Retour sur Investissement (TRI) inférieur à 3 ans</strong>. En pratique, cela signifie que le montant de la prime CEE + les économies d'énergie annuelles générées doivent amortir le surcoût de l'isolation en moins de 3 ans.
                    </p>
                    <p className="font-sans text-text-light leading-relaxed mb-6">
                        Pour l'isolation, ce critère est généralement atteint sans difficulté grâce aux primes élevées de la P6 et aux économies de chauffage significatives. L'enjeu est de bien documenter le calcul avec une méthode reconnue (RT ex, Cometh, ou équivalent).
                    </p>

                    <h2 className="font-heading text-3xl text-primary-dark mt-10 mb-4">Optimiser vos primes : 3 stratégies gagnantes</h2>
                    <div className="grid md:grid-cols-3 gap-4 mb-10">
                        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm text-center">
                            <div className="text-3xl mb-3">📍</div>
                            <h3 className="font-heading text-lg text-primary-dark mb-2">Zone climatique</h3>
                            <p className="font-sans text-text-light text-xs leading-relaxed">Les bâtiments en zone H1 (Nord, Est) bénéficient de coefficients multiplicateurs plus élevés. Anticipez les opérations groupées sur plusieurs sites.</p>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm text-center">
                            <div className="text-3xl mb-3">🔗</div>
                            <h3 className="font-heading text-lg text-primary-dark mb-2">Couplage fiches</h3>
                            <p className="font-sans text-text-light text-xs leading-relaxed">Coupler BAT-EN-101 + BAT-TH-116 (GTB) + une fiche CVC dans un même programme multiplie les kWh cumac valorisés et réduit le périmètre administratif.</p>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm text-center">
                            <div className="text-3xl mb-3">⏰</div>
                            <h3 className="font-heading text-lg text-primary-dark mb-2">Engagement précoce</h3>
                            <p className="font-sans text-text-light text-xs leading-relaxed">Signer le devis avant toute commande d'équipement ou travaux. La date de bon de commande fait foi pour la période d'éligibilité et le montant de la prime.</p>
                        </div>
                    </div>

                    <div className="bg-primary-dark rounded-2xl p-8 text-white mt-12">
                        <h3 className="font-heading text-2xl text-accent mb-4">Calculez votre prime isolation CEE</h3>
                        <p className="font-sans leading-relaxed text-gray-300 mb-6">
                            SOLAGREEN réalise pour vous une étude de faisabilité gratuite : dimensionnement thermique, simulation des primes CEE P6, et montage du dossier complet. Réponse sous 48h.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-primary-dark font-bold px-8 py-3 rounded-xl hover:bg-accent-hot transition-colors">
                            Simulation gratuite <ChevronRight size={18} />
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Article3;
