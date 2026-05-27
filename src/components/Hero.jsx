import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Hero = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const blobX = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
    const blobY = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

    const handleMouseMove = (e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            className="min-h-screen flex flex-col justify-center items-start px-8 md:px-20 pt-24 bg-linen text-charcoal overflow-hidden relative"
        >
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}
                className="z-10 max-w-4xl"
            >
                <motion.h1
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                    }}
                    className="text-6xl md:text-8xl font-serif font-bold leading-tight mb-6 tracking-tighter"
                >
                    Crafting <span className="text-electricCobalt">Digital</span><br />
                    Masterpieces.
                </motion.h1>
                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="text-xl md:text-2xl text-gray-600 font-sans max-w-2xl mb-10"
                >
                    We merge neo-minimalist aesthetics with cutting-edge technology to elevate your brand presence.
                </motion.p>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.9 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                    }}
                >
                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-electricCobalt text-white px-8 py-4 rounded-full text-lg font-semibold tracking-wide hover:bg-blue-800 transition-colors"
                        >
                            Start a Project
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Interactive Floating Blob */}
            <motion.div
                style={{ x: blobX, y: blobY }}
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute right-0 top-1/4 w-[500px] h-[500px] -z-0 pointer-events-none"
            >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#0020C2', stopOpacity: 0.3 }} />
                            <stop offset="100%" style={{ stopColor: '#0020C2', stopOpacity: 0.1 }} />
                        </linearGradient>
                    </defs>
                    <motion.path
                        fill="url(#gradient)"
                        filter="url(#goo)"
                        d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,40.1,76.8C26.4,84.6,10,87.6,-5.8,87.1C-21.6,86.6,-36.8,82.6,-50.3,74.9C-63.8,67.2,-75.6,55.8,-82.8,42.1C-90,28.4,-92.6,12.4,-91.1,-3.2C-89.6,-18.8,-84,-34,-74.9,-46.8C-65.8,-59.6,-53.2,-70,-39.1,-76.9C-25,-83.8,-9.4,-87.2,4.7,-85.6C18.8,-84,30.6,-83.6,44.7,-76.4Z"
                        animate={{
                            d: [
                                "M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,40.1,76.8C26.4,84.6,10,87.6,-5.8,87.1C-21.6,86.6,-36.8,82.6,-50.3,74.9C-63.8,67.2,-75.6,55.8,-82.8,42.1C-90,28.4,-92.6,12.4,-91.1,-3.2C-89.6,-18.8,-84,-34,-74.9,-46.8C-65.8,-59.6,-53.2,-70,-39.1,-76.9C-25,-83.8,-9.4,-87.2,4.7,-85.6C18.8,-84,30.6,-83.6,44.7,-76.4Z",
                                "M51.1,-85.8C64.5,-76.2,72.8,-59.4,78.5,-42.8C84.2,-26.2,87.3,-9.8,85.2,5.7C83.1,21.2,75.8,35.8,66.2,48.3C56.6,60.8,44.7,71.2,31.2,76.8C17.7,82.4,2.6,83.2,-13.2,81.4C-29,79.6,-45.5,75.2,-58.9,66.1C-72.3,57,-82.6,43.2,-87.4,27.8C-92.2,12.4,-91.5,-4.6,-86.3,-20.1C-81.1,-35.6,-71.4,-49.6,-58.8,-59.5C-46.2,-69.4,-30.7,-75.2,-15.1,-77.8C0.5,-80.4,37.7,-95.4,51.1,-85.8Z",
                                "M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,40.1,76.8C26.4,84.6,10,87.6,-5.8,87.1C-21.6,86.6,-36.8,82.6,-50.3,74.9C-63.8,67.2,-75.6,55.8,-82.8,42.1C-90,28.4,-92.6,12.4,-91.1,-3.2C-89.6,-18.8,-84,-34,-74.9,-46.8C-65.8,-59.6,-53.2,-70,-39.1,-76.9C-25,-83.8,-9.4,-87.2,4.7,-85.6C18.8,-84,30.6,-83.6,44.7,-76.4Z"
                            ]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </svg>
            </motion.div>
        </section>
    );
};

export default Hero;
