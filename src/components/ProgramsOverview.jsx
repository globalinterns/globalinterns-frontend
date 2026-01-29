import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, ArrowRight, Code, Cpu, LineChart, Microscope, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProgramsOverview = () => {
    const navigate = useNavigate();

    const programs = [
        {
            icon: Sparkles,
            title: 'Career Starter Programs',
            description:
                'Ideal for students and fresh graduates to build strong foundations, gain real-world experience, and confidently start their professional journey.',
            accent: 'from-green-500 to-emerald-500',
            softBg: 'bg-green-500/10',
            text: 'text-green-600'
        },
        {
            icon: Rocket,
            title: 'Advanced Skill Programs',
            description:
                'Designed for working professionals and career switchers to master in-demand skills and accelerate career growth.',
            accent: 'from-blue-500 to-indigo-500',
            softBg: 'bg-blue-500/10',
            text: 'text-blue-600'
        }
    ];

    const domains = [
        {
            category: 'Technology',
            icon: Code,
            accent: 'text-blue-600',
            bg: 'bg-blue-500/10',
            items: [
                'Artificial Intelligence',
                'Machine Learning',
                'Data Science',
                'Web Development',
                'Android Development',
                'Cyber Security',
                'Java',
                'Python'
            ]
        },
        {
            category: 'Engineering',
            icon: Cpu,
            accent: 'text-orange-600',
            bg: 'bg-orange-500/10',
            items: [
                'Embedded System',
                'Internet of Things',
                'Hybrid Electric Vehicle',
                'Robotics',
                'Construction Planning',
                'IC Engine Design'
            ]
        },
        {
            category: 'Business',
            icon: LineChart,
            accent: 'text-green-600',
            bg: 'bg-green-500/10',
            items: [
                'Human Resources',
                'Finance',
                'Sales & Marketing',
                'Digital Marketing',
                'Stock Market'
            ]
        },
        {
            category: 'Life Sciences',
            icon: Microscope,
            accent: 'text-purple-600',
            bg: 'bg-purple-500/10',
            items: [
                'Industrial Biotechnology',
                'Psychology',
                'Medical Coding'
            ]
        }
    ];

    const handleItemClick = (item) => {
        if (item === 'Web Development') {
            navigate('/program/web-development');
            window.scrollTo(0, 0);
        } else if (item === 'Artificial Intelligence') {
            navigate('/program/artificial-intelligence');
            window.scrollTo(0, 0);
        } else if (item === 'Machine Learning') {
            navigate('/program/machine-learning');
            window.scrollTo(0, 0);
        }
    };

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="programs" className="relative py-24 bg-primary-secondary overflow-hidden">
            {/* Background accents */}
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent-orange/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent-orange/10 text-accent-orange text-sm font-medium">
                        Our Programs
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
                        Programs Designed for Every Career Stage
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Choose a learning path tailored to your experience level and career goals.
                    </p>
                </motion.div>

                {/* Program Level Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
                    {programs.map((program, index) => {
                        const Icon = program.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="group relative bg-white/70 backdrop-blur border border-border rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all"
                            >
                                <div
                                    className={`absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-gradient-to-r ${program.accent}`}
                                />
                                <div
                                    className={`w-16 h-16 rounded-2xl ${program.softBg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}
                                >
                                    <Icon className={`w-8 h-8 ${program.text}`} />
                                </div>
                                <h3 className="text-2xl font-bold text-text-primary mb-4">
                                    {program.title}
                                </h3>
                                <p className="text-text-secondary leading-relaxed mb-8">
                                    {program.description}
                                </p>
                                <button
                                    onClick={() => scrollToSection('apply')}
                                    className="inline-flex items-center gap-2 font-semibold text-accent-orange group-hover:gap-3 transition-all"
                                >
                                    Explore Programs
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </motion.div>
                        );
                    })}
                </div>

                {/* All Domains List */}
                <div className="relative">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-text-primary">Explore All Domains</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {domains.map((domain, index) => {
                            const Icon = domain.icon;
                            return (
                                <motion.div
                                    key={domain.category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white/50 backdrop-blur border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className={`p-2 rounded-lg ${domain.bg}`}>
                                            <Icon className={`w-5 h-5 ${domain.accent}`} />
                                        </div>
                                        <h4 className="font-bold text-lg text-text-primary">{domain.category}</h4>
                                    </div>

                                    <ul className="space-y-3">
                                        {domain.items.map((item) => (
                                            <li key={item}>
                                                <button
                                                    onClick={() => handleItemClick(item)}
                                                    className={`w-full flex items-center gap-2 text-sm text-text-secondary hover:text-accent-orange transition-colors text-left group
                                                        ${(item === 'Web Development' || item === 'Artificial Intelligence' || item === 'Machine Learning') ? 'cursor-pointer hover:font-medium' : 'cursor-default'}
                                                    `}
                                                >
                                                    <CheckCircle2 className="w-4 h-4 text-gray-300 group-hover:text-accent-orange transition-colors" />
                                                    {item}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramsOverview;
