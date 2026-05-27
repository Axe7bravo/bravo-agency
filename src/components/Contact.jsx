import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const InputGroup = ({ label, name, value, onChange, type = "text", placeholder, options }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="relative mb-12 group">
            <label className="block text-sm font-bold tracking-widest uppercase text-charcoal/60 mb-2 transition-colors group-hover:text-electricCobalt">
                {label}
            </label>

            {type === "textarea" ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full bg-transparent border-b border-charcoal/20 py-4 text-xl md:text-2xl font-serif text-charcoal placeholder:text-charcoal/20 focus:outline-none resize-none transition-border duration-300"
                    rows={1}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onInput={(e) => {
                        e.target.style.height = 'auto';
                        e.target.style.height = e.target.scrollHeight + 'px';
                    }}
                />
            ) : type === "select" ? (
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="w-full bg-transparent border-b border-charcoal/20 py-4 text-xl md:text-2xl font-serif text-charcoal focus:outline-none transition-border duration-300 appearance-none rounded-none"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                >
                    <option value="" disabled>Select an option</option>
                    {options.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full bg-transparent border-b border-charcoal/20 py-4 text-xl md:text-2xl font-serif text-charcoal placeholder:text-charcoal/20 focus:outline-none transition-border duration-300"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            )}

            {/* Animated Underline */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isFocused ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-electricCobalt origin-left"
            />
        </div>
    );
};

const Contact = () => {
    const [searchParams] = useSearchParams();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        projectType: '',
        budget: '',
        message: ''
    });

    // Handle URL parameters for pre-filling
    useEffect(() => {
        const serviceParam = searchParams.get('service');
        if (serviceParam) {
            const mapping = {
                'identity': 'Identity Package',
                'digital': 'Digital Package',
                'full-suite': 'Full Suite Transformation',
                'iconography': 'Add-on: Custom Iconography Set',
                'motion': 'Add-on: Motion Branding Clip',
                'packaging': 'Add-on: Packaging Design',
                'maintenance': 'Add-on: Monthly Website Maintenance',
                'social-motion': 'Add-on: Social Media Motion Post',
                'additional-page': 'Add-on: Additional Web Page',
                'starter': 'Retainer: Starter',
                'growth': 'Retainer: Growth',
                'premium': 'Retainer: Premium'
            };

            const selectedService = mapping[serviceParam];
            if (selectedService) {
                setFormData(prev => ({
                    ...prev,
                    projectType: selectedService
                }));
            }
        }
    }, [searchParams]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        try {
            await addDoc(collection(db, "inquiries"), {
                ...formData,
                timestamp: new Date()
            });
            // Simulate a slight delay for better UX if the network is too fast
            setTimeout(() => {
                setIsSending(false);
                setIsSubmitted(true);
            }, 800);
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Something went wrong. Please try again.");
            setIsSending(false);
        }
    };

    return (
        <motion.section
            className="py-32 px-6 md:px-12 bg-linen min-h-screen flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-4xl mx-auto w-full">
                <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="mb-20">
                                <h1 className="text-5xl md:text-7xl font-serif font-bold text-charcoal mb-6 leading-tight">
                                    Tell us about your <br />
                                    <span className="text-electricCobalt">project.</span>
                                </h1>
                                <p className="text-xl text-charcoal/60 font-sans max-w-2xl mb-12">
                                    We'd love to help you build something amazing.
                                </p>

                                {/* Minimum Engagement Note */}
                                <div className="mb-12 border-l-2 border-electricCobalt pl-6 py-2 bg-white/30 backdrop-blur-sm rounded-r-xl">
                                    <p className="text-sm text-charcoal/60 leading-relaxed font-sans">
                                        <span className="font-bold text-charcoal/40 uppercase tracking-widest text-[10px] block mb-1">Agency Note</span>
                                        While we specialize in comprehensive brand transformations, we accept select standalone projects starting from a minimum engagement of R3,500.
                                    </p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                                    <InputGroup
                                        label="Full Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Jane Doe"
                                    />
                                    <InputGroup
                                        label="Email Address"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="jane@example.com"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                                    <InputGroup
                                        label="Project Type"
                                        name="projectType"
                                        type="select"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        placeholder="Select a type"
                                        options={[
                                            "Identity Package",
                                            "Digital Package",
                                            "Full Suite Transformation",
                                            "Retainer: Starter",
                                            "Retainer: Growth",
                                            "Retainer: Premium",
                                            "Add-on: Custom Iconography Set",
                                            "Add-on: Motion Branding Clip",
                                            "Add-on: Packaging Design",
                                            "Add-on: Monthly Website Maintenance",
                                            "Add-on: Social Media Motion Post",
                                            "Add-on: Additional Web Page",
                                            "Other"
                                        ]}
                                    />
                                    <InputGroup
                                        label="Estimated Budget"
                                        name="budget"
                                        type="select"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        placeholder="Select a range"
                                        options={["R3.5k - R7.5k", "R7.5k - R15k", "R15k - R40k", "R40k - R100k", "R100k+"]}
                                    />
                                </div>

                                <InputGroup
                                    label="Message"
                                    name="message"
                                    type="textarea"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your goals..."
                                />

                                <div className="mt-12">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        type="submit"
                                        disabled={isSending}
                                        className="bg-electricCobalt text-white px-10 py-5 rounded-full text-lg font-semibold tracking-wide hover:bg-blue-900 transition-all shadow-lg hover:shadow-electricCobalt/30 flex items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSending ? (
                                            <>
                                                Sending...
                                                <Loader2 className="animate-spin" />
                                            </>
                                        ) : (
                                            <>
                                                Submit Inquiry
                                                <ArrowRight />
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            </form>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center justify-center text-center py-20"
                        >
                            <div className="w-24 h-24 bg-electricCobalt text-white rounded-full flex items-center justify-center mb-8 shadow-2xl">
                                <Check size={48} />
                            </div>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6">
                                Thank you!
                            </h2>
                            <p className="text-xl text-charcoal/60 font-sans max-w-xl">
                                We've received your inquiry and will be in touch within 24 hours to discuss the next steps.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.section>
    );
};

export default Contact;
