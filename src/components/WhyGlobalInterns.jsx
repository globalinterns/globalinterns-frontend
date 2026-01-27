import React from 'react';
import { motion } from 'framer-motion';
import {
    Globe,
    Clock,
    Award,
    Users,
    TrendingUp,
    Briefcase
} from 'lucide-react';

const WhyGlobalInterns = () => {
    const features = [
        {
            icon: Globe,
            title: 'Global exposure, anywhere',
            description:
                'Collaborate with international teams and work on real global projects from home.'
        },
        {
            icon: Clock,
            title: 'Fully remote & flexible',
            description:
                'Learn on your schedule with programs designed for students and working professionals.'
        },
        {
            icon: Award,
            title: 'Verified internship certificate',
            description:
                'Receive an industry-recognized certificate that adds real value to your resume.'
        },
        {
            icon: Users,
            title: '1:1 mentor support',
            description:
                'Get continuous guidance from experienced industry mentors throughout your internship.'
        },
        {
            icon: TrendingUp,
            title: 'Career-first curriculum',
            description:
                'Learn skills aligned with hiring trends and real employer expectations.'
        },
        {
            icon: Briefcase,
            title: 'Job-ready project experience',
            description:
                'Build a strong portfolio by working on hands-on, real-world projects.'
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.12 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    };

    return (
        <section id="why" className="relative py-24 bg-primary-secondary overflow-hidden">
            {/* Soft background accents */}
            <div className="absolute -top-32 -left-32 w-72 h-72 bg-accent-orange/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
                        Why Global Intern
                    </h2>
                    <p className="text-text-secondary text-lg">
                        We focus on real experience, real skills, and real career outcomes —
                        not just certificates.
                    </p>
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -6 }}
                                className="group bg-white/70 backdrop-blur rounded-2xl border border-border p-8 transition-all shadow-sm hover:shadow-lg"
                            >
                                <div className="w-14 h-14 mb-6 rounded-xl bg-accent-orange/10 flex items-center justify-center group-hover:bg-accent-orange transition-colors">
                                    <Icon className="w-7 h-7 text-accent-orange group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-lg font-semibold text-text-primary mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-text-secondary leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyGlobalInterns;
