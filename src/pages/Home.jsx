import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import WhyGlobalInterns from '../components/WhyGlobalInterns';
import WhoCanApply from '../components/WhoCanApply';
import ProgramsOverview from '../components/ProgramsOverview';
import HowItWorks from '../components/HowItWorks';
import Certificate from '../components/Certificate';
import FinalCTA from '../components/FinalCTA';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                // Small delay to ensure rendering
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <>
            <Hero />
            <WhyGlobalInterns />
            <WhoCanApply />
            <ProgramsOverview />
            <HowItWorks />
            <Certificate />
            <FinalCTA />
        </>
    );
};

export default Home;
