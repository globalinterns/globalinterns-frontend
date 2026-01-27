import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section id="apply" className="py-20 bg-primary-secondary">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                        Start Your Global Career Journey Today
                    </h2>

                    <p className="text-lg text-text-secondary mb-10 leading-relaxed max-w-2xl mx-auto">
                        Join thousands of students and professionals who are building their careers
                        through virtual internships with global impact.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="bg-accent-orange hover:bg-accent-hover text-white font-semibold px-10 py-4 rounded-lg transition-all inline-flex items-center gap-2 shadow-sm hover:shadow-md"
                    >
                        Apply for Internship
                        <ArrowRight className="w-5 h-5" />
                    </button>

                    <p className="text-sm text-text-secondary mt-6">
                        No application fee • Flexible start dates • 100% online
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
