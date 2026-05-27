import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ADD_ONS_DATA = [
    {
        name: "Custom Iconography Set",
        price: "800",
        why: "Unique visual language that sets you apart from cookie-cutter competitors. Custom icons ensure your brand's personality shines through in every interaction.",
        deliverables: [
            "12-15 Custom Vector Icons",
            "SVG, PNG, and AI Formats",
            "Brand-aligned Icon Style Guide",
            "Usage Rights for Digital & Print"
        ]
    },
    {
        name: "Social Media Motion Post",
        price: "800",
        why: "Animated social content designed to increase engagement and add movement to your brand presence online.",
        deliverables: [
            "5–15 Second Motion Graphic",
            "Social-Ready Formats (4:5, 9:16)",
            "Typography & Transition Animation",
            "1 Revision Round"
        ]
    },
    {
        name: "Packaging Design",
        price: "2,500",
        why: "Transform your product's physical experience with high-end structural and graphic design. We ensure your brand feels premium from the shelf to the unboxing.",
        deliverables: [
            "Dieline Design & Layout",
            "Label & Wrapper Variations",
            "Production-ready Print Files",
            "Material & Finish Consulting"
        ]
    },
    {
        name: "Motion Branding Clip",
        price: "1,500",
        why: "High-end brand animations designed to capture attention instantly. Enhance your presentations, digital platforms, and social touchpoints with custom motion design.",
        deliverables: [
            "15-30 Second Brand Intro",
            "Social-ready Formats (4:5, 9:16)",
            "Sound Design Integration",
            "2 Revision Rounds"
        ]
    },
    {
        name: "Additional Web Page",
        price: "600",
        why: "Extend your digital experience with additional custom-designed pages tailored to your business needs.",
        deliverables: [
            "Custom Responsive Layout",
            "Brand-Consistent Design",
            "CMS Integration Support",
            "Basic On-Page Optimization"
        ]
    },
    {
        name: "Monthly Website Maintenance",
        price: "500",
        why: "Keep your digital presence secure, fast, and up-to-date while you focus on scaling. We handle the technical heavy lifting so you don't have to.",
        deliverables: [
            "Security Updates & Backups",
            "Content Performance Tuning",
            "Minor Content Updates",
            "Uptime Monitoring"
        ]
    }
];

const AddonModal = ({ addon, onClose }) => {
    if (!addon) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-charcoal/40 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-linen w-full max-w-xl overflow-hidden relative border border-charcoal/5 shadow-2xl"
                onClick={e => e.stopPropagation()}
                style={{ borderRadius: '0px' }} // Neo-minimalist sharp corners
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-charcoal/40 hover:text-charcoal transition-colors p-2"
                >
                    <X size={24} />
                </button>

                <div className="p-10 md:p-14">
                    <div className="mb-10">
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-electricCobalt mb-2 block">Strategic Add-on</span>
                        <h2 className="text-4xl font-serif font-bold text-charcoal">{addon.name}</h2>
                    </div>

                    <div className="space-y-8 mb-12">
                        <div>
                            <h4 className="text-[10px] font-bold tracking-widest uppercase text-charcoal/40 mb-3 italic">The 'Why'</h4>
                            <p className="text-charcoal/80 font-sans leading-relaxed">{addon.why}</p>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-bold tracking-widest uppercase text-charcoal/40 mb-3 italic">Deliverables</h4>
                            <ul className="grid grid-cols-1 gap-3">
                                {addon.deliverables.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-charcoal/70">
                                        <div className="mt-1.5 w-1.5 h-1.5 bg-electricCobalt shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-4 border-t border-charcoal/5">
                            <div className="flex items-baseline gap-2">
                                <span className="text-[10px] font-bold tracking-widest uppercase text-charcoal/40">Starting from</span>
                                <span className="text-2xl font-bold text-charcoal font-sans">R{addon.price}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <Link
                            to={`/contact?service=${addon.name.includes('Icon') ? 'iconography' :
                                    addon.name.includes('Clip') ? 'motion' :
                                        addon.name.includes('Packaging') ? 'packaging' :
                                            addon.name.includes('Maintenance') ? 'maintenance' :
                                                addon.name.includes('Social') ? 'social-motion' :
                                                    addon.name.includes('Page') ? 'additional-page' : 'other'
                                }`}
                            className="flex-grow"
                        >
                            <button className="w-full bg-charcoal text-white py-4 px-8 font-bold text-sm tracking-widest uppercase hover:bg-electricCobalt transition-colors duration-300">
                                Request this Add-on
                            </button>
                        </Link>
                        <button
                            onClick={onClose}
                            className="py-4 px-8 border border-charcoal/10 font-bold text-sm tracking-widest uppercase text-charcoal/40 hover:text-charcoal hover:border-charcoal transition-all duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AddonModal;
