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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent-orange/10 text-accent-orange text-sm font-medium">
                            Eligibility
                        </span>

                        <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-6">
                            Who Can Apply
                        </h2>

                        <p className="text-lg text-text-secondary leading-relaxed mb-10">
                            Our internships are designed for anyone who wants real-world
                            experience — whether you're just starting out, switching careers,
                            or upskilling for growth.
                        </p>

                        {/* Checklist - Moved to Left */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: { transition: { staggerChildren: 0.1 } }
                            }}
                            className="space-y-4"
                        >
                            {eligibleGroups.map((group, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-8 h-8 rounded-full bg-accent-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-orange transition-colors">
                                        <CheckCircle className="w-5 h-5 text-accent-orange group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="text-text-primary font-medium text-lg">
                                        {group}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-accent-orange/20 to-blue-400/20 blur-3xl rounded-full opacity-60 -z-10" />

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-accent-orange/10 border border-white/20 ring-1 ring-black/5 group">
                            <img
                                src="/who-can-apply.png"
                                alt="Diverse group of Global Interns students"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhoCanApply;
