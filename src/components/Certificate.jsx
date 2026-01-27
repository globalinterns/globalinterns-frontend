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
                        <div className="bg-primary-bg border-2 border-border rounded-xl p-8 shadow-lg">
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-orange/10 rounded-full mb-6">
                                    <Award className="w-10 h-10 text-accent-orange" />
                                </div>

                                <h3 className="text-2xl font-bold text-text-primary mb-2">
                                    Certificate of Completion
                                </h3>

                                <div className="h-px bg-border my-6"></div>

                                <p className="text-text-secondary mb-4">
                                    This certifies that
                                </p>

                                <p className="text-xl font-semibold text-text-primary mb-4">
                                    [Your Name]
                                </p>

                                <p className="text-text-secondary mb-6">
                                    has successfully completed the internship program at
                                </p>

                                <p className="text-2xl font-bold mb-6">
                                    GLOBAL <span className="text-accent-orange">INTERNS</span>
                                </p>

                                <div className="flex justify-center gap-8 pt-6 border-t border-border">
                                    <div className="text-center">
                                        <div className="h-px bg-text-primary w-24 mb-2"></div>
                                        <p className="text-sm text-text-secondary">Signature</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="h-px bg-text-primary w-24 mb-2"></div>
                                        <p className="text-sm text-text-secondary">Date</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Certificate;
