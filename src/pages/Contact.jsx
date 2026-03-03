import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Mail, Clock, ShieldCheck, AlertCircle, ArrowRight } from 'lucide-react';
import { prefersReducedMotion } from '../utils/motion';

const initialFormData = {
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    sector: '',
    need: '',
    surface: '',
    energyBill: '',
    message: '',
    consent: false,
    website: '',
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9+()\s.-]{6,32}$/;

const validateContactForm = (data) => {
    const errors = {};
    const fullName = data.fullName.trim();
    const email = data.email.trim();
    const phone = data.phone.trim();
    const organization = data.organization.trim();
    const message = data.message.trim();

    if (fullName.length < 2) {
        errors.fullName = 'Le nom complet doit contenir au moins 2 caractères.';
    } else if (fullName.length > 120) {
        errors.fullName = 'Le nom complet est trop long (120 caractères max).';
    }

    if (!emailRegex.test(email)) {
        errors.email = 'Veuillez saisir une adresse email valide.';
    }

    if (phone && !phoneRegex.test(phone)) {
        errors.phone = 'Le numéro de téléphone contient des caractères non autorisés.';
    }

    if (organization.length > 120) {
        errors.organization = 'Le nom de la société est trop long (120 caractères max).';
    }

    if (!data.sector) {
        errors.sector = 'Veuillez sélectionner un secteur.';
    }

    if (!data.need) {
        errors.need = 'Veuillez sélectionner un besoin principal.';
    }

    if (data.surface !== '') {
        const surface = Number(data.surface);
        if (!Number.isFinite(surface) || surface < 0 || surface > 1000000) {
            errors.surface = 'La surface doit être comprise entre 0 et 1 000 000 m².';
        }
    }

    if (data.energyBill !== '') {
        const energyBill = Number(data.energyBill);
        if (!Number.isFinite(energyBill) || energyBill < 0 || energyBill > 1000000000) {
            errors.energyBill = 'La facture annuelle doit être comprise entre 0 et 1 000 000 000 €.';
        }
    }

    if (message.length > 2000) {
        errors.message = 'La description est trop longue (2000 caractères max).';
    }

    if (!data.consent) {
        errors.consent = 'Vous devez accepter la politique de confidentialité.';
    }

    return errors;
};

const Contact = () => {
    const comp = useRef(null);
    const [formData, setFormData] = useState(initialFormData);
    const [fieldErrors, setFieldErrors] = useState({});
    const [submitState, setSubmitState] = useState('idle');
    const [submitMessage, setSubmitMessage] = useState('');
    const [requestId, setRequestId] = useState('');

    useLayoutEffect(() => {
        const reduceMotion = prefersReducedMotion();
        let ctx = gsap.context(() => {
            if (reduceMotion) return;
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

    const updateField = (event) => {
        const { name, value, type, checked } = event.target;
        const nextValue = type === 'checkbox' ? checked : value;

        setFormData((prev) => ({ ...prev, [name]: nextValue }));
        setFieldErrors((prev) => {
            if (!prev[name]) return prev;
            const next = { ...prev };
            delete next[name];
            return next;
        });

        if (submitState !== 'idle') {
            setSubmitState('idle');
            setSubmitMessage('');
            setRequestId('');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validationErrors = validateContactForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setFieldErrors(validationErrors);
            setSubmitState('error');
            setSubmitMessage('Merci de corriger les champs signalés.');
            return;
        }

        setFieldErrors({});
        setSubmitState('loading');
        setSubmitMessage('');
        setRequestId('');

        const payload = {
            fullName: formData.fullName.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            organization: formData.organization.trim(),
            sector: formData.sector,
            need: formData.need,
            surface: formData.surface === '' ? null : Number(formData.surface),
            energyBill: formData.energyBill === '' ? null : Number(formData.energyBill),
            message: formData.message.trim(),
            consent: formData.consent,
            website: formData.website,
        };

        try {
            const controller = new AbortController();
            const timeoutId = window.setTimeout(() => controller.abort(), 10000);

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                signal: controller.signal,
            });

            window.clearTimeout(timeoutId);

            const responseData = await response.json().catch(() => ({}));

            if (response.status === 202 && responseData.ok) {
                setSubmitState('success');
                setSubmitMessage('Demande envoyée. Notre équipe vous recontacte sous 48h.');
                setRequestId(responseData.requestId || '');
                setFormData(initialFormData);
                return;
            }

            if (response.status === 400 && responseData.fieldErrors) {
                setFieldErrors(responseData.fieldErrors);
                setSubmitState('error');
                setSubmitMessage('Certains champs sont invalides.');
                return;
            }

            if (response.status === 429) {
                setSubmitState('error');
                setSubmitMessage('Trop de tentatives. Merci de réessayer dans quelques minutes.');
                return;
            }

            throw new Error('unexpected_response');
        } catch {
            setSubmitState('error');
            setSubmitMessage("Service temporairement indisponible. Vérifiez votre connexion et réessayez.");
        }
    };

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

                        <form className="space-y-6" noValidate onSubmit={handleSubmit}>
                            {submitState === 'success' && (
                                <div role="status" className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                                    <p>{submitMessage}</p>
                                    {requestId && <p className="mt-1 font-mono text-xs">Référence: {requestId}</p>}
                                </div>
                            )}

                            {submitState === 'error' && submitMessage && (
                                <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                                    {submitMessage}
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="fullName" className="text-sm font-bold text-primary-dark mb-1 block">Nom complet *</label>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        value={formData.fullName}
                                        onChange={updateField}
                                        className="w-full bg-bg-alt border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                                        required
                                        aria-invalid={Boolean(fieldErrors.fullName)}
                                        aria-describedby={fieldErrors.fullName ? 'fullName-error' : undefined}
                                    />
                                    {fieldErrors.fullName && <p id="fullName-error" className="text-xs text-red-600">{fieldErrors.fullName}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-primary-dark mb-1 block">Email professionnel *</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={updateField}
                                        className="w-full bg-bg-alt border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                                        required
                                        aria-invalid={Boolean(fieldErrors.email)}
                                        aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                                    />
                                    {fieldErrors.email && <p id="email-error" className="text-xs text-red-600">{fieldErrors.email}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-bold text-primary-dark mb-1 block">Téléphone</label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={updateField}
                                        className="w-full bg-bg-alt border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                                        aria-invalid={Boolean(fieldErrors.phone)}
                                        aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
                                    />
                                    {fieldErrors.phone && <p id="phone-error" className="text-xs text-red-600">{fieldErrors.phone}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="organization" className="text-sm font-bold text-primary-dark mb-1 block">Société / Organisation</label>
                                    <input
                                        id="organization"
                                        name="organization"
                                        type="text"
                                        value={formData.organization}
                                        onChange={updateField}
                                        className="w-full bg-bg-alt border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                                        aria-invalid={Boolean(fieldErrors.organization)}
                                        aria-describedby={fieldErrors.organization ? 'organization-error' : undefined}
                                    />
                                    {fieldErrors.organization && <p id="organization-error" className="text-xs text-red-600">{fieldErrors.organization}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="sector" className="text-sm font-bold text-primary-dark mb-1 block">Secteur d'activité *</label>
                                <select
                                    id="sector"
                                    name="sector"
                                    value={formData.sector}
                                    onChange={updateField}
                                    className="w-full bg-bg-alt border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-primary-dark"
                                    required
                                    aria-invalid={Boolean(fieldErrors.sector)}
                                    aria-describedby={fieldErrors.sector ? 'sector-error' : undefined}
                                >
                                    <option value="">Sélectionnez un secteur...</option>
                                    <option value="bureau">Bureau / Tertiaire</option>
                                    <option value="commerce">Commerce</option>
                                    <option value="industrie">Industrie Légère</option>
                                    <option value="hotellerie">Hôtellerie</option>
                                    <option value="sante">Santé</option>
                                    <option value="collectivite">Collectivité</option>
                                </select>
                                {fieldErrors.sector && <p id="sector-error" className="text-xs text-red-600">{fieldErrors.sector}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="need" className="text-sm font-bold text-primary-dark mb-1 block">Besoin principal (P6 2026) *</label>
                                <select
                                    id="need"
                                    name="need"
                                    value={formData.need}
                                    onChange={updateField}
                                    className="w-full bg-bg-alt border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-primary-dark"
                                    required
                                    aria-invalid={Boolean(fieldErrors.need)}
                                    aria-describedby={fieldErrors.need ? 'need-error' : undefined}
                                >
                                    <option value="">Sélectionnez un besoin...</option>
                                    <option value="audit_cee">Valorisation CEE (audit + montage dossier)</option>
                                    <option value="pv">Installation Solaire PV + CEE</option>
                                    <option value="audit_operat">Audit énergétique + conformité OPERAT</option>
                                    <option value="isolation">Isolation thermique + CEE</option>
                                    <option value="bacs">Conformité Décret BACS + GTB</option>
                                    <option value="complet">Solution complète multi-expertise + optimisation CEE</option>
                                </select>
                                {fieldErrors.need && <p id="need-error" className="text-xs text-red-600">{fieldErrors.need}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="surface" className="text-sm font-bold text-primary-dark mb-1 block text-gray-500">Surface bâtiment (m²) <span className="text-xs font-normal">— Optionnel</span></label>
                                    <input
                                        id="surface"
                                        name="surface"
                                        type="number"
                                        value={formData.surface}
                                        onChange={updateField}
                                        min="0"
                                        className="w-full bg-bg-alt border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                                        aria-invalid={Boolean(fieldErrors.surface)}
                                        aria-describedby={fieldErrors.surface ? 'surface-error' : undefined}
                                    />
                                    {fieldErrors.surface && <p id="surface-error" className="text-xs text-red-600">{fieldErrors.surface}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="energyBill" className="text-sm font-bold text-primary-dark mb-1 block text-gray-500">Facture énergie annuelle (€) <span className="text-xs font-normal">— Optionnel</span></label>
                                    <input
                                        id="energyBill"
                                        name="energyBill"
                                        type="number"
                                        value={formData.energyBill}
                                        onChange={updateField}
                                        min="0"
                                        className="w-full bg-bg-alt border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                                        aria-invalid={Boolean(fieldErrors.energyBill)}
                                        aria-describedby={fieldErrors.energyBill ? 'energyBill-error' : undefined}
                                    />
                                    {fieldErrors.energyBill && <p id="energyBill-error" className="text-xs text-red-600">{fieldErrors.energyBill}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-primary-dark mb-1 block">Description détaillée du projet</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={updateField}
                                    className="w-full bg-bg-alt border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                                    aria-invalid={Boolean(fieldErrors.message)}
                                    aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                                ></textarea>
                                {fieldErrors.message && <p id="message-error" className="text-xs text-red-600">{fieldErrors.message}</p>}
                            </div>

                            <div className="hidden" aria-hidden="true">
                                <label htmlFor="website">Site web</label>
                                <input
                                    id="website"
                                    name="website"
                                    type="text"
                                    value={formData.website}
                                    onChange={updateField}
                                    tabIndex="-1"
                                    autoComplete="off"
                                />
                            </div>

                            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-gray-100">
                                <div className="w-full">
                                    <label htmlFor="consent" className="flex items-center gap-3 cursor-pointer text-sm text-gray-600">
                                        <input
                                            id="consent"
                                            name="consent"
                                            type="checkbox"
                                            checked={formData.consent}
                                            onChange={updateField}
                                            className="w-5 h-5 rounded border-gray-300 text-accent focus:ring-accent"
                                            required
                                        />
                                        J'accepte la politique de confidentialité
                                    </label>
                                    {fieldErrors.consent && <p className="mt-2 text-xs text-red-600">{fieldErrors.consent}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitState === 'loading'}
                                    className="w-full sm:w-auto px-8 py-4 bg-accent text-primary-dark font-bold text-lg rounded-xl transition-transform hover:scale-[1.03] shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:hover:scale-100"
                                >
                                    {submitState === 'loading' ? 'Envoi en cours...' : 'Estimer mes CEE gratuitement'} <ArrowRight size={20} />
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
