import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative pt-36 pb-28 bg-primary-bg overflow-hidden">
            {/* Soft background accents */}
            <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-accent-orange/20 rounded-full blur-3xl" />
            <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-blue-300/20 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-center"
                >

                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 leading-tight">
                        Global Internships for a{' '}
                        <span className="relative inline-block">
                            <span className="text-accent-orange">Borderless</span>
                            <span className="absolute left-0 -bottom-2 w-full h-[6px] bg-accent-orange/30 rounded-full" />
                        </span>{' '}
                        Career
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
                        Gain real-world experience through virtual internships with global exposure.
                        Work on live projects, learn industry-ready skills, and build a career without limits.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => scrollToSection('apply')}
                            className="bg-accent-orange hover:bg-accent-hover text-white font-semibold px-9 py-4 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-accent-orange/30"
                        >
                            Apply for Internship
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => scrollToSection('programs')}
                            className="border border-border hover:border-accent-orange bg-white/60 backdrop-blur text-text-primary font-semibold px-9 py-4 rounded-xl transition-all flex items-center gap-2"
                        >
                            Explore Programs
                            <PlayCircle className="w-5 h-5" />
                        </motion.button>
                    </div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto"
                    >
                        {[
                            {
                                value: '50+',
                                label: 'Hiring Partners',
                                sub: 'Top MNCs & Startups'
                            },
                            {
                                value: '10k+',
                                label: 'Careers Launched',
                                sub: 'Certified Graduates'
                            },
                            {
                                value: '100%',
                                label: 'Verified Internships',
                                sub: 'Remote & Flexible'
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="relative group p-6 rounded-2xl bg-white border border-border hover:border-accent-orange/30 shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-orange-600 mb-2">
                                    {item.value}
                                </div>
                                <div className="text-lg font-bold text-text-primary">
                                    {item.label}
                                </div>
                                <div className="text-sm text-text-secondary mt-1 font-medium">
                                    {item.sub}
                                </div>

                                {/* Decor line */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-accent-orange rounded-t-full transition-all group-hover:w-1/2 opacity-0 group-hover:opacity-100" />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
