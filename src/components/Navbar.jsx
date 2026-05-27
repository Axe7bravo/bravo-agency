import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    // Transform scroll position to navbar background opacity
    const navbarBg = useTransform(
        scrollY,
        [0, 100],
        ['rgba(250, 249, 246, 0)', 'rgba(250, 249, 246, 0.9)']
    );

    const navbarBorder = useTransform(
        scrollY,
        [0, 100],
        ['rgba(26, 26, 26, 0)', 'rgba(26, 26, 26, 0.1)']
    );

    const navLinks = [
        { name: 'Services', path: '/services' },
        { name: 'Work', path: '/work' },
    ];

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <motion.nav
                style={{
                    backgroundColor: navbarBg,
                    borderBottomColor: navbarBorder,
                }}
                className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300"
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl font-serif font-bold text-charcoal hover:text-electricCobalt transition-colors"
                        >
                            Bravo
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="hidden md:flex items-center gap-8"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-charcoal hover:text-electricCobalt transition-colors font-medium relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electricCobalt transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-electricCobalt text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-800 transition-colors shadow-lg hover:shadow-electricCobalt/30"
                            >
                                Start a Project
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        onClick={toggleMobileMenu}
                        className="md:hidden text-charcoal p-2"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{
                    opacity: mobileMenuOpen ? 1 : 0,
                    x: mobileMenuOpen ? 0 : '100%',
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="fixed inset-0 z-40 bg-linen md:hidden flex items-center justify-center translate-x-full" /* Ensure default hidden */
            >
                <div className="flex flex-col items-center justify-center gap-8">
                    <Link
                        to="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-3xl font-serif font-bold text-charcoal hover:text-electricCobalt transition-colors mb-4"
                    >
                        Home
                    </Link>
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-3xl font-serif font-bold text-charcoal hover:text-electricCobalt transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-electricCobalt text-white px-8 py-4 rounded-full text-lg font-semibold mt-4 shadow-xl"
                        >
                            Start a Project
                        </motion.button>
                    </Link>
                </div>
            </motion.div>
        </>
    );
};

export default Navbar;
