import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import TrailblazersImage from '../assets/branding/TrailblazersBrandingMockup.png';
import NutriDockterImage from '../assets/branding/NutriDokter_web.jpg';
import GasDeliveryImage from '../assets/branding/GasDelivery.png';
import TheFatChiliImage from '../assets/branding/ResizeLabel.png';
import CasabluntaImage from '../assets/branding/CasabluntaWeb.png';
import TBSocialImage from '../assets/branding/SocialTB.png';
import TBSocialAsset from '../assets/branding/TBSocialAsset.jpg';

export const projects = [
    {
        id: 1,
        title: "Trailblazers Podcast",
        category: "Branding",
        type: "Client Project",
        image: TrailblazersImage,
        height: "h-[400px]",
        description: "We brought the Trailblazers podcast identity to life through bespoke product mockups. These studio-ready visualizations provide a clear, professional preview of how their new branding integrates into their physical production environment."
    },
    {
        id: 2,
        title: "Casablunta",
        category: "Web",
        type: "Client Project",
        image: CasabluntaImage,
        height: "h-[500px]",
        description: "We translated the premium identity of Casablunta Apparel into a high-performance e-commerce platform. Our focus was on creating a fast, secure, and seamless shopping experience that mirrors the quality of the brand itself."
    },
    {
        id: 3,
        title: "NutriDokter",
        category: "Packaging",
        type: "Client Project",
        image: NutriDockterImage,
        height: "h-[350px]",
        description: "Working from their initial concepts, we refined NutriDokter’s vision into a production-ready packaging suite. Bravo Design focused on digitizing their hand-drawn assets to ensure a seamless transition from concept to high-quality print."
    },
    {
        id: 4,
        title: "Trailblazers Podcast",
        category: "Social Media",
        type: "Client Project",
        image: TBSocialImage,
        height: "h-[450px]",
        description: "To amplify the Trailblazers podcast, we developed a cohesive suite of social media assets designed to drive awareness. By aligning every visual with their core brand identity, we helped the podcast forge a stronger, more resonant connection with their growing audience."
    },
    {
        id: 5,
        title: "The Fat Chili Co",
        category: "Packaging",
        type: "Client Project",
        image: TheFatChiliImage,
        height: "h-[400px]",
        description: "For The Fat Chili Co., we stripped back the noise to deliver a minimalist packaging design that prioritizes both shelf-appeal and utility. The result is a clean, intentional aesthetic that functions as effectively as it looks."
    },
    {
        id: 6,
        title: "MK Global Distributors",
        category: "Marketing",
        type: "Client Project",
        image: GasDeliveryImage,
        height: "h-[500px]",
        description: "To help Mk Global Distributors capture local market attention, we designed a promotional flyer that effectively communicates the convenience of their gas delivery service. We balanced bold, eye-catching design with clear information, ensuring the service benefits are front and center."
    },
    {
        id: 7,
        title: "Trailblazers Podcast",
        category: "Social Media",
        type: "Client Project",
        image: TBSocialAsset,
        height: "h-[500px]",
        description: "To help the Trailblazers podcast forge a deeper bond with their listeners, we designed a social media post that captures the brand’s motivational spirit. By balancing an engaging visual aesthetic with a clear, resonant message, we created content that invites the audience to connect with the brand’s core mission."
    },
];

const categories = ["All", "Branding", "Web", "Social Media", "Packaging", "Marketing"];

const Work = () => {
    const [filter, setFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    const activeProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setSelectedProject(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <motion.section
            className="py-32 px-6 md:px-12 bg-linen min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-charcoal">Selected Work</h1>
                    <div className="h-1 w-24 bg-electricCobalt mb-8"></div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-8 items-center border-b border-charcoal/10 pb-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className="relative pb-2 text-sm md:text-base font-sans font-medium text-charcoal/60 hover:text-charcoal transition-colors outline-none"
                            >
                                {cat}
                                {filter === cat && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-electricCobalt"
                                    />
                                )}
                                {filter === cat ? <span className="text-charcoal font-semibold">{cat === filter ? "" : ""}</span> : null}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
                >
                    <AnimatePresence>
                        {activeProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => setSelectedProject(project)}
                                className={`break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer ${project.height}`}
                            >
                                <img
                                    src={project.image}
                                    alt={`Portfolio: ${project.title} - ${project.category} Branding & Design`}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                                <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
                                                {project.category}
                                            </span>
                                            {project.type === "Brand Study" && (
                                                <span className="px-2 py-0.5 bg-linen text-charcoal text-[10px] font-bold tracking-widest uppercase rounded-full">
                                                    Brand Study
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-3xl text-white font-serif font-bold flex items-center justify-between">
                                            {project.title}
                                            <ArrowUpRight className="text-electricCobalt" />
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Deep Dive Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-linen rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl relative flex flex-col md:flex-row"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-white/50 backdrop-blur-md rounded-full text-charcoal hover:bg-electricCobalt hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {/* Image Section */}
                            <div className="md:w-1/2 h-64 md:h-auto relative">
                                <img
                                    src={selectedProject.image}
                                    alt={`Deep dive: ${selectedProject.title} project details`}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="md:w-1/2 p-10 flex flex-col justify-center overflow-y-auto">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-electricCobalt text-sm font-bold tracking-widest uppercase">
                                        {selectedProject.category}
                                    </span>
                                    <span className="px-3 py-1 bg-charcoal text-linen text-[10px] font-bold tracking-[0.2em] uppercase rounded-full">
                                        {selectedProject.type}
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
                                    {selectedProject.title}
                                </h2>
                                <div className="mb-8">
                                    <span className="text-xs font-bold text-charcoal/30 uppercase tracking-widest block mb-2">
                                        {selectedProject.type === "Brand Study" ? "Design Objective" : "The Challenge"}
                                    </span>
                                    <p className="text-lg text-charcoal/80 leading-relaxed font-sans">
                                        {selectedProject.description || "A design challenge that pushed boundaries and redefined the user experience through minimalism and motion."}
                                    </p>
                                </div>
                             
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
};

export default Work;
