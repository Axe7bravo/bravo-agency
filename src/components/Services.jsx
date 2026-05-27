import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, ArrowRight, Lightbulb, PenTool, Layers, Rocket, Plus } from 'lucide-react';
import AddonModal, { ADD_ONS_DATA } from './AddonModal';

const PricingCard = ({ tier, price, description, features, delay, recommended, pricePrefix, priceSuffix }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className={`relative p-8 rounded-3xl flex flex-col h-full ${recommended
            ? 'bg-electricCobalt text-white shadow-xl scale-105 z-10'
            : 'bg-white text-charcoal shadow-sm hover:shadow-md'
            } transition-all duration-300`}
    >
        {recommended && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-charcoal text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide">
                MOST POPULAR
            </div>
        )}

        <div className="mb-8">
            <h3 className={`text-xl font-serif font-bold mb-2 ${recommended ? 'text-white' : 'text-charcoal'}`}>
                {tier}
            </h3>
            <div className="flex items-baseline gap-1 mb-4 flex-wrap">
                {pricePrefix && <span className={`text-sm ${recommended ? 'text-white/80' : 'text-charcoal/60'} mr-1`}>{pricePrefix}</span>}
                <span className="text-sm opacity-80">R</span>
                <span className="text-4xl font-bold">{price}</span>
                {priceSuffix && <span className={`text-sm ${recommended ? 'text-white/80' : 'text-charcoal/60'} ml-1`}>{priceSuffix}</span>}
            </div>
            <p className={`text-sm leading-relaxed ${recommended ? 'opacity-90' : 'opacity-70'}`}>
                {description}
            </p>
        </div>

        <ul className="space-y-4 mb-8 flex-grow">
            {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                    <Check size={18} className={recommended ? 'text-white' : 'text-electricCobalt'} />
                    <span className={recommended ? 'opacity-90' : 'opacity-70'}>{feature}</span>
                </li>
            ))}
        </ul>

        <Link to={`/contact?service=${tier.toLowerCase().replace(' ', '-')}`} className="w-full">
            <button className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-transform active:scale-95 ${recommended
                ? 'bg-white text-electricCobalt hover:bg-gray-100'
                : 'bg-charcoal text-white hover:bg-gray-800'
                }`}>
                Get Started <ArrowRight size={18} />
            </button>
        </Link>
    </motion.div>
);

const AddOnItem = ({ name, price, delay, onOpen }) => {
    const addonData = ADD_ONS_DATA.find(a => a.name === name);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            whileHover={{ backgroundColor: '#FAF9F6', scale: 1.02, x: 10, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
            onClick={() => onOpen(addonData)}
            className="flex items-center group p-4 rounded-xl transition-all duration-300 cursor-pointer"
        >
            <div className="w-8 h-8 rounded-lg bg-linen flex items-center justify-center mr-4 group-hover:bg-electricCobalt group-hover:text-white transition-colors">
                <Plus size={16} />
            </div>
            <span className="text-lg md:text-xl font-serif font-bold text-charcoal">{name}</span>
            <div className="flex-grow mx-4 border-b border-dotted border-charcoal/20 group-hover:border-electricCobalt/40 transition-colors" />
            <span className="text-charcoal/60 font-mono text-sm group-hover:text-electricCobalt transition-colors">starting at R{price}</span>
        </motion.div>
    );
};

const ProcessStep = ({ number, title, description, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        className="relative flex flex-col items-center text-center p-6"
    >
        <div className="w-16 h-16 rounded-full bg-white border border-charcoal/5 flex items-center justify-center mb-6 shadow-sm group hover:border-electricCobalt transition-colors duration-500">
            <Icon className="text-electricCobalt" size={24} />
            <div className="absolute -top-2 -right-2 bg-charcoal text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center tracking-tighter">
                {number}
            </div>
        </div>
        <h4 className="text-sm font-bold tracking-[0.3em] uppercase mb-4 text-charcoal">{title}</h4>
        <p className="text-sm text-charcoal/50 leading-relaxed max-w-xs">{description}</p>
    </motion.div>
);

const Services = () => {
    const { hash } = useLocation();
    const [selectedAddOn, setSelectedAddOn] = React.useState(null);

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [hash]);

    return (
        <motion.section
            className="py-32 px-6 md:px-12 bg-linen min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-sm font-bold tracking-[0.5em] text-electricCobalt uppercase mb-4">Investment</h2>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-charcoal mb-8 leading-tight">
                        Transparent <span className="italic">Pricing.</span>
                    </h1>
                    <p className="text-xl text-charcoal/60 font-sans max-w-2xl mx-auto">
                        High-end strategic design, simplified for exponential growth.
                    </p>
                </div>

                {/* Pricing Tiers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
                    <div id="identity">
                        <PricingCard
                            tier="Identity"
                            price="6,500"
                            description="Essential brand foundations for startups and growing businesses ready to establish a professional visual identity."
                            features={[
                                "Logo Design System",
                                "Color Palette & Typography",
                                "Brand Guidelines Mini-Book",
                                "Social Media Profile Assets",
                                "3 Revisions"
                            ]}
                            delay={0.1}
                        />
                    </div>

                    <div id="digital">
                        <PricingCard
                            tier="Digital"
                            price="18,500"
                            recommended={true}
                            description="A professional digital presence for businesses ready to scale their credibility online."
                            features={[
                                "Everything in Identity",
                                "5-Page Custom Website",
                                "CMS Integration",
                                "Basic On-Page SEO Setup",
                                "Mobile Responsive Design",
                                "2 Weeks Support"
                            ]}
                            delay={0.2}
                        />
                    </div>

                    <div id="full-suite">
                        <PricingCard
                            tier="Full Suite"
                            price="45,000"
                            description="A complete brand and digital ecosystem for ambitious businesses ready to dominate their space."
                            features={[
                                "Everything in Digital",
                                "E-commerce Functionality",
                                "Custom Motion Graphics",
                                "Social Media Content Kit",
                                "Email Marketing Setup",
                                "Priority Support"
                            ]}
                            delay={0.3}
                        />
                    </div>
                </div>

                {/* Minimum Engagement Note */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 max-w-2xl mx-auto border-l-2 border-electricCobalt pl-6 py-2"
                >
                    <p className="text-sm text-charcoal/60 leading-relaxed italic">
                        While we specialize in comprehensive brand transformations, we accept select standalone projects starting from a minimum engagement of R3,500.
                    </p>
                </motion.div>

                {/* SME Subtext */}
                <div className="text-center mb-40">
                    <p className="text-sm font-sans text-charcoal/40 italic">
                        Flexible payment plans available for registered South African Small Businesses (SMEs).
                    </p>
                </div>

                {/* Monthly Content Retainers Section */}
                <div className="mb-40" id="retainers">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-electricCobalt mb-4">Monthly Retainers</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-charcoal tracking-tight mb-6">
                            Consistent Content <span className="italic">Systems.</span>
                        </h3>
                        <p className="text-lg text-charcoal/60 font-sans max-w-2xl mx-auto">
                            High-quality visual content for brands that want to stay active, professional and consistent online.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        <div id="retainer-starter">
                            <PricingCard
                                tier="Starter"
                                price="3,500"
                                pricePrefix="From "
                                priceSuffix=" / month"
                                description="Structured content support for small businesses building consistency online."
                                features={[
                                    "6–8 social media posts",
                                    "Template-assisted designs",
                                    "Brand-aligned visuals",
                                    "Optional motion add-ons",
                                    "1 revision round"
                                ]}
                                delay={0.1}
                            />
                        </div>

                        <div id="retainer-growth">
                            <PricingCard
                                tier="Growth"
                                price="7,500"
                                pricePrefix="From "
                                priceSuffix=" / month"
                                recommended={true}
                                description="Custom content creation for brands ready to grow their online presence."
                                features={[
                                    "12–15 custom posts",
                                    "Branded content direction",
                                    "1–2 motion graphics",
                                    "Priority turnaround",
                                    "2 revision rounds"
                                ]}
                                delay={0.2}
                            />
                        </div>

                        <div id="retainer-premium">
                            <PricingCard
                                tier="Premium"
                                price="12,000+"
                                pricePrefix="From "
                                priceSuffix=" / month"
                                description="High-volume, motion-enhanced content systems for brands operating at scale."
                                features={[
                                    "20–30 custom posts",
                                    "Motion-enhanced content",
                                    "Content planning support",
                                    "Priority support",
                                    "Fast turnaround workflow"
                                ]}
                                delay={0.3}
                            />
                        </div>
                    </div>
                </div>

                {/* Add-ons Section */}
                <div className="mb-40" id="add-ons">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-charcoal">
                            Strategic Add-ons
                        </h2>
                        <div className="hidden md:block h-[1px] flex-grow mx-8 bg-charcoal/10" />
                        <p className="text-sm font-bold tracking-[0.2em] uppercase text-charcoal/40">ENHANCEMENTS & EXTENSIONS</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-2">
                        <AddOnItem name="Custom Iconography Set" price="800" delay={0.1} onOpen={setSelectedAddOn} />
                        <AddOnItem name="Motion Branding Clip" price="1,500" delay={0.2} onOpen={setSelectedAddOn} />
                        <AddOnItem name="Social Media Motion Post" price="800" delay={0.3} onOpen={setSelectedAddOn} />
                        <AddOnItem name="Additional Web Page" price="600" delay={0.4} onOpen={setSelectedAddOn} />
                        <AddOnItem name="Packaging Design" price="2,500" delay={0.5} onOpen={setSelectedAddOn} />
                        <AddOnItem name="Monthly Website Maintenance" price="500" delay={0.6} onOpen={setSelectedAddOn} />
                    </div>
                </div>

                {/* Process Section */}
                <div className="py-20 bg-white rounded-[2rem] border border-charcoal/5 shadow-sm overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-10 opacity-[0.03] select-none pointer-events-none">
                        <Rocket className="w-64 h-64 text-charcoal" />
                    </div>

                    <div className="text-center mb-20 px-8">
                        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-electricCobalt mb-4">Workflow</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-charcoal tracking-tight">
                            Our Process
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[2.4rem] left-20 right-20 h-px bg-charcoal/5 -z-0" />

                        <ProcessStep
                            number="01"
                            title="Strategy"
                            icon={Lightbulb}
                            description="Deep discovery to uncover your brand soul and competitive edge."
                            delay={0.1}
                        />
                        <ProcessStep
                            number="02"
                            title="Concept"
                            icon={PenTool}
                            description="Translating strategy into visual artifacts and brand narratives."
                            delay={0.2}
                        />
                        <ProcessStep
                            number="03"
                            title="Refinement"
                            icon={Layers}
                            description="Polishing the chosen direction until every pixel performs."
                            delay={0.3}
                        />
                        <ProcessStep
                            number="04"
                            title="Launch"
                            icon={Rocket}
                            description="Deploying your brand to the world with full technical support."
                            delay={0.4}
                        />
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {selectedAddOn && (
                    <AddonModal
                        addon={selectedAddOn}
                        onClose={() => setSelectedAddOn(null)}
                    />
                )}
            </AnimatePresence>
        </motion.section>
    );
};

export default Services;
