import React from 'react';
import Hero from './Hero';
import ServiceBento from './ServiceBento';
import LogoTicker from './LogoTicker';
import { projects } from './Work';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const Home = () => {
    // Take top 3 projects for preview
    const recentWork = projects.slice(0, 3);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <LogoTicker />

            <ServiceBento />

            {/* Work Preview Section */}
            <section className="py-24 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-charcoal">Selected Work</h2>
                            <div className="h-1 w-20 bg-electricCobalt"></div>
                        </div>
                        <Link
                            to="/work"
                            className="text-electricCobalt font-semibold flex items-center gap-2 hover:gap-4 transition-all group"
                        >
                            View All Work <ArrowRight className="group-hover:text-electricCobalt/80" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {recentWork.map((project, index) => (
                            <Link to="/work" key={project.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    whileHover={{ y: -10 }}
                                    className="group cursor-pointer"
                                >
                                    <div className="relative overflow-hidden rounded-2xl h-[300px] mb-6">
                                        <img
                                            src={project.image}
                                            alt={`Project Preview: ${project.title} - ${project.category}`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                            <ArrowUpRight className="text-white" size={20} />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold tracking-widest text-electricCobalt uppercase mb-2 block">{project.category}</span>
                                        <h3 className="text-2xl font-serif font-bold text-charcoal group-hover:text-electricCobalt transition-colors">{project.title}</h3>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link
                            to="/work"
                            className="bg-electricCobalt text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2"
                        >
                            View All Work <ArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
