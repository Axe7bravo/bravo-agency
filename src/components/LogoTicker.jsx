import React, { useState } from 'react';
import LogoOne from '../assets/CasabluntaLogo.svg';
import LogoTwo from '../assets/GregraciousLogo.svg';
import LogoThree from '../assets/HiraLogo.svg';
import LogoFour from '../assets/MatsonsLogo.svg';
import LogoFive from '../assets/ScotieLogo.svg';
import LogoSix from '../assets/FatLogo.svg';
import LogoSeven from '../assets/ThinBlackBox.svg';
import LogoEight from '../assets/Seeds.svg';
import LogoNine from '../assets/Sekhametsi.svg';
import LogoTen from '../assets/TrailblazersLogo.png';


const logos = [
    { id: 1, src: LogoOne, name: "Casablunta Apparel" },
    { id: 2, src: LogoTwo, name: "Gregracia Cleaning" },
    { id: 3, src: LogoThree, name: "Hira Housing Platform" },
    { id: 4, src: LogoFour, name: "Matsons Restaurant" },
    { id: 5, src: LogoFive, name: "Scotiae Brick Plant" },
    { id: 6, src: LogoSix, name: "The Fat Chili" },
    { id: 7, src: LogoSeven, name: "Thin Black Box" },
    { id: 8, src: LogoEight, name: "Seeds for you" },
    { id: 9, src: LogoNine, name: "Sekhametsi" },
    { id: 10, src: LogoTen, name: "Trailblazers" },
];

const extendedLogos = [...logos, ...logos, ...logos, ...logos];

const LogoTicker = () => {
    const [selectedLogo, setSelectedLogo] = useState(null);

    return (
        <section className="py-10 bg-linen border-y border-charcoal/10 overflow-hidden w-full relative">
            {/* The Scrolling Strip */}
            <div className="flex overflow-hidden">
                <div className="flex gap-20 animate-[ticker_60s_linear_infinite] hover:[animation-play-state:paused]">
                    {extendedLogos.map((logo, index) => (
                        <div 
                            key={`${logo.id}-${index}`} 
                            className="w-24 h-24 flex items-center justify-center flex-shrink-0 cursor-pointer"
                            onClick={() => setSelectedLogo(logo)}
                        >
                            <img 
                                src={logo.src} 
                                alt={logo.name}
                                className="w-full h-full object-contain opacity-40 hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            {selectedLogo && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 backdrop-blur-sm"
                    onClick={() => setSelectedLogo(null)}
                >
                    <div 
                        className="bg-linen p-8 rounded-2xl shadow-2xl flex flex-col items-center animate-in fade-in zoom-in duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img src={selectedLogo.src} alt={selectedLogo.name} className="w-96 h-96 object-contain" />
                        <h2 className="mt-6 text-2xl font-bold text-charcoal">{selectedLogo.name}</h2>
                        <button 
                            className="mt-6 px-4 py-2 bg-electricCobalt text-white rounded-lg hover:bg-opacity-90 transition"
                            onClick={() => setSelectedLogo(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes ticker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-25%); }
                }
            `}</style>
        </section>
    );
};

export default LogoTicker;