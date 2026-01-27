import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BookOpen, Briefcase, Award } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: FileText,
            title: 'Apply',
            description: 'Submit your application and tell us about your career goals'
        },
        {
            icon: BookOpen,
            title: 'Learn from Experts',
            description: 'Access curated content and mentorship from industry professionals'
        },
        {
            icon: Briefcase,
            title: 'Work on Projects',
            description: 'Apply your skills on real-world projects that matter'
        },
        {
            icon: Award,
            title: 'Get Certified',
            description: 'Earn your certificate and showcase your achievements'
        }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-primary-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                        How It Works
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Your journey to a global career in four simple steps
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                {/* Step Number */}
                                <div className="text-center mb-6">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-orange/10 rounded-full mb-4">
                                        <Icon className="w-8 h-8 text-accent-orange" />
                                    </div>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-8 h-8 bg-accent-orange text-white rounded-full flex items-center justify-center text-sm font-bold">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-text-secondary leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
