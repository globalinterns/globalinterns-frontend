import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Star, Clock, Calendar, CheckCircle, ChevronDown,
    Globe, Search, Share2, TrendingUp, Users, Smartphone,
    Award, BarChart2, Briefcase, Mail, PenTool, Hash
} from 'lucide-react';

const DigitalMarketingProgram = () => {
    return (
        <div className="pt-20 font-sans text-gray-900 bg-white">
            <HeroSection />
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-20">
                    <OverviewSection />
                    <StatsSection />
                    <ToolsSection />
                    <ProjectsSection />
                    <SyllabusSection />
                    <CertificationSection />
                    <PricingSection />
                    <AlumniSection />
                </div>
                <div className="lg:col-span-1">
                    <div className="sticky top-28" id="apply-form">
                        <ApplyForm />
                    </div>
                </div>
            </div>
            <FinalCTA />
        </div>
    );
};

// ================= SECTIONS =================

const HeroSection = () => (
    <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* Background image */}
        <div className="absolute inset-0">
            <img
                src="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=2070&q=80"
                alt="Digital Marketing"
                className="h-full w-full object-cover object-center"
            />
            {/* Premium overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-950/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="max-w-3xl"
            >
                {/* Top meta */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur">
                        Digital Growth Program
                    </span>

                    <div className="flex items-center gap-2 text-sm text-white/70">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                        <span>Rated 4.8 by learners</span>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
                    Advanced Digital <br className="hidden lg:block" /> Marketing
                </h1>

                {/* Subheading */}
                <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mb-10">
                    Dominate the digital landscape. Master SEO, Social Media, Google Ads,
                    and Content Strategy to drive traffic, engagement, and conversions for any business.
                </p>

                {/* Program facts */}
                <div className="flex flex-wrap gap-x-10 gap-y-4 mb-12 text-sm text-white/70">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-accent-orange" />
                        <span>Next batch starts 15 Jun</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-accent-orange" />
                        <span>Duration: 8 weeks</span>
                    </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                    <button
                        onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="inline-flex items-center justify-center rounded-xl bg-accent-orange px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent-orange/20 transition hover:bg-accent-hover hover:shadow-accent-orange/30"
                    >
                        Apply Now
                    </button>

                    <button
                        onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
                    >
                        Download Brochure
                    </button>
                </div>
            </motion.div>
        </div>
    </section>
);


const OverviewSection = () => (
    <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Overview</h2>
        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            This comprehensive course covers the 360-degree spectrum of digital marketing.
            From ranking websites on Google to running viral social media campaigns and
            analyzing performance with data, you will learn practical skills to grow any brand online.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
            {[
                'Search Engine Optimization (SEO)',
                'Social Media Marketing (SMM)',
                'Pay-Per-Click Advertising (PPC)',
                'Content Marketing & Strategy',
                'Email Marketing & Automation',
                'Web Analytics & Reporting'
            ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                </div>
            ))}
        </div>
    </section>
);

const ApplyForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        college: '',
        programOfInterest: 'Digital Marketing',
        reason: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbxtwkZEOkWx-eAoVh_KKITiDYsrM6xNAxPgdY_8A8zE7XsR-ghe4cLHwcy6KOktt-HhtA/exec', {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();

            if (result.result === 'success') {
                setStatus('success');
                setFormData({ fullName: '', email: '', phone: '', college: '', programOfInterest: 'Digital Marketing', reason: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                throw new Error(result.error || result.message || 'Submission failed on server');
            }

        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            setErrorMessage(error.message);
        }
    };

    return (
        <div id="apply-form" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Secure Your Spot</h3>
            <p className="text-gray-500 text-sm mb-6">Applications closing soon for next batch.</p>

            {status === 'success' ? (
                <div className="bg-green-50 text-green-700 p-4 rounded-lg text-center">
                    <p className="font-bold">Application submitted successfully!</p>
                    <p className="text-sm mt-1">We will get back to you shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-orange/20 focus:border-accent-orange transition-all outline-none"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-orange/20 focus:border-accent-orange transition-all outline-none"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-orange/20 focus:border-accent-orange transition-all outline-none"
                            placeholder="+91 98765 43210"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">College / University</label>
                        <input
                            type="text"
                            name="college"
                            value={formData.college}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-orange/20 focus:border-accent-orange transition-all outline-none"
                            placeholder="University Name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Reason for joining</label>
                        <textarea
                            name="reason"
                            value={formData.reason}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-orange/20 focus:border-accent-orange transition-all outline-none h-24 resize-none"
                            placeholder="Type your reason..."
                        />
                    </div>

                    {status === 'error' && (
                        <p className="text-red-600 text-sm text-center">
                            {errorMessage || 'Something went wrong. Please try again.'}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-xl transition-all mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {status === 'submitting' ? 'Submitting...' : 'Submit'}
                    </button>
                    <p className="text-xs text-center text-gray-400 mt-4">
                        By submitting, you agree to our Terms & Privacy Policy.
                    </p>
                </form>
            )}
        </div>
    );
};

const StatsSection = () => (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
            { label: 'Avg. Starting Salary', value: '₹4-7 LPA', icon: Briefcase },
            { label: 'Digital Ad Spend', value: '$600B+', icon: TrendingUp },
            { label: 'Freelance Scope', value: 'Excellent', icon: Globe },
        ].map((stat, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 text-accent-orange">
                    <stat.icon className="w-5 h-5" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
        ))}
    </section>
);

const ToolsSection = () => (
    <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Tools & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
                'Google Analytics', 'Google Ads', 'Facebook Ads', 'WordPress', 'SEMrush',
                'Mailchimp', 'Canva', 'Hootsuite', 'Ahrefs', 'HubSpot'
            ].map((tool, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center gap-3 hover:border-gray-300 transition-colors aspect-square">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-bold text-xs">
                        {tool[0]}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{tool}</span>
                </div>
            ))}
        </div>
    </section>
);

const ProjectsSection = () => (
    <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">What You Will Create</h2>
        <div className="space-y-6">
            {[
                { title: 'SEO Audit & Optimization', type: 'Mini Project', desc: 'Perform a comprehensive technical and on-page SEO audit for a live website to improve rankings.', icon: Search },
                { title: 'Social Media Ad Campaign', type: 'Major Project', desc: 'Design and execute a paid ad campaign on Facebook/Instagram targeting specific demographics.', icon: Share2 },
                { title: 'Full Digital Marketing Plan', type: 'Capstone Project', desc: 'Create a complete digital marketing strategy including content calendar, budget, and KPIs for a brand.', icon: Globe },
            ].map((project, idx) => (
                <div key={idx} className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all bg-white">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <project.icon className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <h3 className="font-bold text-lg text-gray-900">{project.title}</h3>
                            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full font-medium">{project.type}</span>
                        </div>
                        <p className="text-gray-600">{project.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const SyllabusSection = () => {
    const modules = [
        "Introduction to Digital Marketing & Branding",
        "Search Engine Optimization (On-Page, Off-Page, Technical)",
        "Social Media Marketing (Instagram, LinkedIn, Twitter)",
        "Pay-Per-Click (PPC) Advertising with Google Ads",
        "Social Media Advertising (Meta Ads Manager)",
        "Content Marketing & Copywriting Fundamentals",
        "Email Marketing Strategies & Automation",
        "Affiliate & Influencer Marketing",
        "Web Analytics (Google Analytics 4)",
        "Freelancing & Agency Business Basics"
    ];

    return (
        <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Detailed Curriculum</h2>
            <div className="border border-gray-200 rounded-xl divide-y divide-gray-200 overflow-hidden bg-white">
                {modules.map((module, idx) => (
                    <SyllabusItem key={idx} number={idx + 1} title={module} />
                ))}
            </div>
        </section>
    );
};

const SyllabusItem = ({ number, title }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="group">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
            >
                <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-sm font-bold group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                        {number}
                    </span>
                    <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">{title}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-gray-50/50"
                    >
                        <div className="p-5 pl-16 text-sm text-gray-600">
                            Topics covered include deep dive into {title.toLowerCase()} concepts, practical exercises, and code reviews.
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const CertificationSection = () => (
    <section className="bg-gray-900 text-white rounded-2xl p-8 lg:p-12 relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-medium text-amber-300">
                    <Award className="w-4 h-4" />
                    <span>Industry Recognized</span>
                </div>
                <h2 className="text-3xl font-bold leading-tight">Earn Your Certificate of Completion</h2>
                <p className="text-gray-400 text-lg">
                    Validate your skills with a professional certificate from Global Interns.
                    Add it to your LinkedIn profile and resume to stand out to recruiters.
                </p>
                <button className="text-white font-medium border-b border-white pb-0.5 hover:text-accent-orange hover:border-accent-orange transition-colors">
                    View Sample Certificate
                </button>
            </div>
            <div className="flex-1 w-full max-w-md">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 shadow-2xl flex items-center justify-center relative">
                    <div className="text-center p-8">
                        <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4 border border-gray-700">
                            <Award className="w-8 h-8 text-amber-500" />
                        </div>
                        <div className="h-4 w-3/4 bg-gray-700 rounded mb-3 mx-auto" />
                        <div className="h-3 w-1/2 bg-gray-700 rounded mx-auto" />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const PricingSection = () => (
    <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Tuition Fees</h2>
        <div className="grid md:grid-cols-3 gap-6">
            <PricingCard title="Self Paced" price="₹4,999" features={['Recorded Lectures', 'Assignments', 'Course Certificate', '6 Months Access']} />
            <PricingCard title="Mentor Led" price="₹8,999" features={['Everything in Self Paced', 'Live Doubt Sessions', 'Internship Certificate', 'Project Review', '1 Year Access', 'Career Support']} recommended />
            <PricingCard title="Professional" price="₹12,999" features={['1-on-1 Mentorship', 'Live Campaign Setup', 'Unlimited Mock Interviews', 'Lifetime Access', 'Premium Projects']} />
        </div>
    </section>
);

const PricingCard = ({ title, price, features, recommended }) => (
    <div className={`rounded-xl p-6 border flex flex-col h-full ${recommended ? 'border-accent-orange shadow-lg ring-1 ring-accent-orange bg-white relative' : 'border-gray-200 bg-white'}`}>
        {recommended && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                Most Popular
            </div>
        )}
        <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
            <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-gray-900">{price}</span>
                <span className="text-sm text-gray-500">/one-time</span>
            </div>
        </div>
        <ul className="space-y-3 mb-8 flex-1">
            {features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 ${recommended ? 'text-accent-orange' : 'text-gray-400'}`} />
                    <span>{feat}</span>
                </li>
            ))}
        </ul>
        <button className={`w-full py-3 rounded-lg font-semibold transition-all ${recommended ? 'bg-accent-orange text-white hover:bg-orange-600 shadow-md' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
            Enroll Now
        </button>
    </div>
);

const AlumniSection = () => (
    <section className="text-center pt-8 border-t border-gray-100">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Our Alumni Work At</p>
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos using text for cleanliness if SVGs unavailable */}
            {['Zomato', 'Swiggy', 'Flipkart', 'Amazon', 'Byjus', 'Nykaa'].map((company, idx) => (
                <span key={idx} className="text-xl font-bold text-gray-800">{company}</span>
            ))}
        </div>
    </section>
);

const FinalCTA = () => (
    <section className="bg-gray-50 border-t border-gray-200 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Ready to Grow Digitally?
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                Join our Digital Marketing program and become a marketing expert in the digital age.
            </p>
            <button className="bg-gray-900 hover:bg-black text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                Apply Now & Get Started
            </button>
        </div>
    </section>
);

export default DigitalMarketingProgram;
