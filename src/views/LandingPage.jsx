// src/views/LandingPage/LandingPage.jsx
import React from 'react';
import Hero from '../components/LandingPage/Hero';
import Stats from '../components/LandingPage/Stats';
import FeatureSection from '../components/LandingPage/Features';
import CTA from '../components/LandingPage/CTA';
import Footer from '../components/LandingPage/Footer';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 lg:px-32">
                <header className="flex justify-between items-center py-6">
                    <img src="../../src/assets/wellness-logo.png" alt="Wellness Buddy Logo" className="h-12" />
                </header>
                <Hero />
                <Stats />
                <FeatureSection />
                <CTA />
            </div>
            <Footer />
        </div>
    );
};

export default LandingPage;