import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Work from './components/Work';
import Footer from './components/Footer';
import Contact from './components/Contact';

import { PrivacyPolicy, TermsAndConditions, RefundPolicy } from './components/Legal';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Bravo Agency | Strategic Brand & Digital Design South Africa</title>
        <meta name="description" content="High-end identity and web design services for South African SMEs. We merge neo-minimalist aesthetics with cutting-edge technology to elevate your brand presence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Helmet>
      <div className="min-h-screen bg-linen text-charcoal font-sans selection:bg-electricCobalt selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
