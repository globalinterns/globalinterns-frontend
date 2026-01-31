import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Briefcase } from 'lucide-react';

const Certificate = () => {
    const benefits = [
        'Industry-recognized certificate',
        'Resume & LinkedIn value',
        'Portfolio-ready projects'
    ];

    return (
        <section id="certificate" className="py-20 bg-primary-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                            Earn Your Professional Certificate
                        </h2>
                        <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                            Complete your internship and receive a certificate that validates
                            your skills and commitment to professional growth.
                        </p>

                        <div className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle className="w-6 h-6 text-accent-orange flex-shrink-0" />
                                    <span className="text-text-primary font-medium">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Certificate Mock */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                            <img
                                src="/certificate-mockup.png"
                                alt="Global Interns Certificate of Internship"
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Certificate;
