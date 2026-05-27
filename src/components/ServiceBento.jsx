import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Palette, Code, PenTool, ArrowUpRight } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon, className, delay, image, to }) => (
    <Link to={to} className={`block ${className}`}>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                transition: { duration: 0.3 }
            }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="rounded-2xl shadow-sm transition-all duration-500 flex flex-col justify-between group overflow-hidden relative w-full h-full"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={image}
                    alt={`Service: ${title}`}
                    className="w-full h-full object-cover filter grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-linen/90 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-60" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 flex flex-col justify-between h-full">
                <div className="mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 bg-white/10 backdrop-blur-md text-charcoal group-hover:bg-electricCobalt group-hover:text-white">
                        <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-3 text-charcoal group-hover:text-white transition-colors duration-300 drop-shadow-md">{title}</h3>
                    <p className="font-sans leading-relaxed text-charcoal/80 group-hover:text-white/90 transition-colors duration-300 font-medium">{description}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="text-xs font-bold tracking-[0.2em] uppercase text-white/0 group-hover:text-white transition-colors duration-300"
                    >
                        Explore Service →
                    </motion.span>
                    <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                        <ArrowUpRight className="text-white" />
                    </div>
                </div>
            </div>
        </motion.div>
    </Link>
);

const ServiceBento = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-linen">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-charcoal">Our Expertise</h2>
                    <div className="h-1 w-20 bg-electricCobalt"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
                    <ServiceCard
                        title="Brand Identity"
                        description="Crafting various visual identities that speak volumes. Logo design, typography, and color theory."
                        icon={Palette}
                        className="md:col-span-2"
                        image="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000"
                        delay={0.1}
                        to="/services#identity"
                    />
                    <ServiceCard
                        title="Graphic Design"
                        description="Marketing materials and social media assets."
                        icon={PenTool}
                        className=""
                        image="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000"
                        delay={0.2}
                        to="/services#add-ons"
                    />
                    <ServiceCard
                        title="Web Development"
                        description="High-performance websites built with React, Vite, and modern animations."
                        icon={Code}
                        className="md:col-span-3"
                        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000"
                        delay={0.3}
                        to="/services#digital"
                    />
                </div>
            </div>
        </section>
    );
};

export default ServiceBento;
