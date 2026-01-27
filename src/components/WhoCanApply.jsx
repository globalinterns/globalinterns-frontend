import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const WhoCanApply = () => {
    const eligibleGroups = [
        'Students & fresh graduates',
        'Career switchers',
        'Working professionals',
        'International students',
        'No prior experience required'
    ];

    const itemVariants = {
        hidden: { opacity: 0, x: -24 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.45, ease: 'easeOut' }
        }
    };

    return (
        <section id="who-can-apply" className="relative py-24 bg-primary-bg overflow-hidden">
            {/* Soft background accents */}
            <div className="absolute -top-32 -left-32 w-72 h-72 bg-accent-orange/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent-orange/10 text-accent-orange text-sm font-medium">
                            Eligibility
                        </span>

                        <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-6">
                            Who Can Apply
                        </h2>

                        <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
                            Our internships are designed for anyone who wants real-world
                            experience — whether you're just starting out, switching careers,
                            or upskilling for growth.
                        </p>
                    </motion.div>

                    {/* Right Checklist Card */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.12 } }
                        }}
                        className="bg-white/70 backdrop-blur border border-border rounded-2xl p-8 shadow-sm"
                    >
                        <div className="space-y-5">
                            {eligibleGroups.map((group, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ x: 6 }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-primary-secondary hover:bg-primary-secondary/70 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                                        <CheckCircle className="w-5 h-5 text-accent-orange" />
                                    </div>
                                    <span className="text-text-primary font-medium text-base">
                                        {group}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhoCanApply;
