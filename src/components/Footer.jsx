import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Facebook, X, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const location = useLocation();

    // Hide footer on contact page to avoid redundancy
    if (location.pathname === '/contact') return null;

    const socialLinks = [
        { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/bravodesignsagency/' },
        { name: 'Facebook', icon: Facebook, href: 'https://web.facebook.com/Bravodesignsagency' },
        { name: 'X', icon: X, href: 'https://x.com/BravoDesign_A' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <footer className="bg-linen py-20 px-8 md:px-20">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[200px] auto-rows-auto mb-12"
            >
                {/* Large CTA Card */}
                <motion.div
                    variants={itemVariants}
                    className="md:col-span-2 md:row-span-2 bg-charcoal text-white p-10 rounded-2xl flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300"
                >
                    <div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight">
                            Let's Collaborate
                        </h2>
                        <p className="text-lg opacity-80 max-w-md">
                            Ready to bring your vision to life? Let's create something extraordinary together.
                        </p>
                    </div>
                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-electricCobalt text-white px-8 py-4 rounded-full text-lg font-semibold self-start flex items-center gap-2 hover:bg-blue-800 transition-colors"
                        >
                            Get in Touch
                            <ArrowUpRight size={20} />
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Social Links Card */}
                <motion.div
                    variants={itemVariants}
                    className="bg-white p-8 rounded-2xl flex flex-col justify-between"
                >
                    <h3 className="text-xl font-serif font-bold mb-4">Follow Us</h3>
                    <div className="flex flex-col gap-3">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                className="flex items-center gap-3 text-charcoal hover:text-electricCobalt transition-colors group"
                            >
                                <div className="w-10 h-10 bg-linen rounded-lg flex items-center justify-center group-hover:bg-electricCobalt group-hover:text-white transition-colors">
                                    <social.icon size={20} />
                                </div>
                                <span className="font-medium">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Info Card */}
                <motion.div
                    variants={itemVariants}
                    className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl flex flex-col justify-between"
                >
                    <h3 className="text-xl font-serif font-bold mb-4">Contact</h3>
                    <div className="space-y-2">
                        <p className="text-gray-600">hello@bravodesignagency.co.za</p>
                        <p className="text-gray-600">+27 (0) 63 388 8387</p>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="border-t border-charcoal/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
            >
                <p className="text-gray-600 text-sm">
                    © {new Date().getFullYear()} Bravo Design Agency. All rights reserved.
                </p>

                <div className="flex flex-wrap justify-center gap-6 text-xs font-bold tracking-widest uppercase text-charcoal/40">
                    <Link to="/privacy" className="hover:text-electricCobalt transition-colors">Privacy</Link>
                    <Link to="/terms" className="hover:text-electricCobalt transition-colors">Terms</Link>
                    <Link to="/refund-policy" className="hover:text-electricCobalt transition-colors">Refund Policy</Link>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
