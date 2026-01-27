import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyGlobalInterns from './components/WhyGlobalInterns';
import WhoCanApply from './components/WhoCanApply';
import ProgramsOverview from './components/ProgramsOverview';
import HowItWorks from './components/HowItWorks';
import Certificate from './components/Certificate';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-primary-bg">
            <Navbar />
            <Hero />
            <WhyGlobalInterns />
            <WhoCanApply />
            <ProgramsOverview />
            <HowItWorks />
            <Certificate />
            <FinalCTA />
            <Footer />
        </div>
    );
}

export default App;
