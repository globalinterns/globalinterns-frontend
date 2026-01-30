import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Star, Clock, Calendar, CheckCircle, ChevronDown,
    Users, Globe, MessageSquare, Video, Award, TrendingUp, Lightbulb,
    BookOpen, Shield, Layers, Code, Briefcase, Zap, Target, Coffee
} from 'lucide-react';

const GlobalMentorshipProgram = () => {
    return (
        <div className="pt-20 font-sans text-gray-900 bg-white">
            <HeroSection />
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-20">
                    <DiscoverSection />
                    <BenefitsSection />
                    <HowItWorksSection />
                    <PricingSection />
                    <MentorsSection />
                    <TestimonialsSection />
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2070&q=80"
                alt="Global Mentorship"
                className="h-full w-full object-cover object-center"
            />
            {/* Premium overlay with Purple tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/80 via-slate-900/90 to-slate-950/60" />
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
                        Global Mentorship Program
                    </span>

                    <div className="flex items-center gap-2 text-sm text-white/70">
                        <Globe className="w-4 h-4 text-amber-400" />
                        <span>Connect Worldwide</span>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
                    Accelerate Your Career with Global Mentors
                </h1>

                {/* Subheading */}
                <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mb-10">
                    Get personalized guidance, career advice, and industry insights from experienced professionals working at top global companies.
                </p>

                {/* Program facts */}
                <div className="flex flex-wrap gap-x-10 gap-y-4 mb-12 text-sm text-white/70">
                    <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-accent-orange" />
                        <span>Duration: Ongoing</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded-md border border-green-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            LIVE
                        </span>
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

const DiscoverSection = () => (
    <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Mentorship?</h2>
        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            Mentorship is the cheat code to career success. Bridge the gap between where you are and where you want to be with guidance from those who have already walked the path.
        </p>

        <div className="grid gap-6">
            {[
                { title: '1-on-1 Guidance', desc: 'Get personalized advice tailored to your specific career goals and challenges.', icon: Users },
                { title: 'Global Network', desc: 'Connect with mentors from diverse backgrounds and top tech hubs worldwide.', icon: Globe },
                { title: 'Mock Interviews', desc: 'Practice with real industry questions and get constructive feedback to ace your interviews.', icon: MessageSquare },
                { title: 'Resume Review', desc: 'Get your resume critiqued by hiring managers to maximize your chances of shortlisting.', icon: Briefcase },
                { title: 'Skill Roadmap', desc: 'Build a customized learning path to master the skills that are actually in demand.', icon: Lightbulb },
                { title: 'Career Growth', desc: 'Navigate promotions, salary negotiations, and career pivots with confidence.', icon: TrendingUp },
            ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const BenefitsSection = () => (
    <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">What You Get</h2>
        <p className="text-gray-600 mb-6">A holistic mentorship experience designed to accelerate your professional development.</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
                'Weekly Calls', 'Chat Support', 'Career Planning', 'Code Reviews',
                'Networking', 'Job Referrals', 'Soft Skills', 'Leadership Tips'
            ].map((tool, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center gap-3 hover:border-gray-300 transition-colors aspect-square">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-bold text-xs text-center">
                        {tool[0]}
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">{tool}</span>
                </div>
            ))}
        </div>
    </section>
);

const HowItWorksSection = () => (
    <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">How It Works</h2>
        <div className="space-y-6">
            <div className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all bg-white relative">
                <div className="absolute top-6 left-6 w-0.5 h-full bg-gray-100 -z-10 hidden md:block" />
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 z-10">
                    <span className="font-bold text-lg">1</span>
                </div>
                <div>
                    <h3 className="font-bold text-lg text-gray-900">Apply & Match</h3>
                    <p className="text-gray-600 text-sm mt-1">Fill out the application form with your goals. We'll match you with a mentor who aligns with your aspirations.</p>
                </div>
            </div>

            <div className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all bg-white relative">
                <div className="absolute top-6 left-6 w-0.5 h-full bg-gray-100 -z-10 hidden md:block" />
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 z-10">
                    <span className="font-bold text-lg">2</span>
                </div>
                <div>
                    <h3 className="font-bold text-lg text-gray-900">Initial Consultation</h3>
                    <p className="text-gray-600 text-sm mt-1">Schedule your first call to discuss your career roadmap and set clear, achievable milestones.</p>
                </div>
            </div>

            <div className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all bg-white">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 z-10">
                    <span className="font-bold text-lg">3</span>
                </div>
                <div>
                    <h3 className="font-bold text-lg text-gray-900">Grow & Achieve</h3>
                    <p className="text-gray-600 text-sm mt-1">Navigate your career with ongoing support, regular check-ins, and actionable feedback.</p>
                </div>
            </div>
        </div>
    </section>
);

const PricingSection = () => (
    <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Flexible Mentorship Plans</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Invest in yourself. Choose a plan that fits your current career stage and needs.
        </p>

        <div className="max-w-md mx-auto">
            <div className="rounded-xl p-8 border border-accent-orange shadow-xl ring-1 ring-accent-orange bg-white relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-orange text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-sm">
                    Recommended
                </div>

                <div className="mb-8 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Pro Mentorship</h3>
                    <p className="text-sm text-gray-500 mb-4">Comprehensive Career Support</p>
                    <div className="flex items-center justify-center gap-1">
                        <span className="text-4xl font-bold text-gray-900">₹15,000</span>
                        <span className="text-gray-500 self-end mb-1">/ month</span>
                    </div>
                </div>

                <ul className="space-y-4 mb-8">
                    {[
                        '2 Video Calls per Month', 'Unlimited Chat Support', 'Resume & Profile Review',
                        'Mock Interview Session', 'Personalized Roadmap', 'Quarterly Progress Report'
                    ].map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                            <CheckCircle className="w-5 h-5 flex-shrink-0 text-accent-orange" />
                            <span>{feat}</span>
                        </li>
                    ))}
                </ul>

                <button className="w-full py-4 rounded-xl font-bold text-lg transition-all bg-gray-900 text-white hover:bg-black shadow-lg hover:shadow-xl">
                    Get Matched Now
                </button>
            </div>
        </div>
    </section>
);

const MentorsSection = () => (
    <section className="text-center pt-8 border-t border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Our Mentors Work At</h3>
        <p className="text-gray-500 text-sm mb-8">Learn from the best in the industry.</p>
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 opacity-60">
            {['Google', 'Amazon', 'Meta', 'Netflix', 'Microsoft', 'Uber', 'Airbnb'].map((company, idx) => (
                <span key={idx} className="text-xl font-bold text-gray-800">{company}</span>
            ))}
        </div>
    </section>
);

const TestimonialsSection = () => (
    <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Mentee Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
            {[
                { name: 'Riya Malhotra', role: 'Software Engineer', review: "My mentor helped me transition from a service-based company to a product-based one. The mock interviews were a game-changer." },
                { name: 'David Chen', role: 'Data Scientist', review: "Having someone to guide me through my projects and review my code accelerated my learning 10x. Highly recommended!" },
            ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">
                            {item.name[0]}
                        </div>
                        <div>
                            <div className="font-bold text-gray-900">{item.name}</div>
                            <div className="text-xs text-gray-500">{item.role}</div>
                        </div>
                    </div>
                    <p className="text-gray-600 italic text-sm mb-4">"{item.review}"</p>
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
        programOfInterest: 'Global Mentor Global Mentorship Program',
        reason: ''
    });
    const [status, setStatus] = useState('idle');
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
                setFormData({ fullName: '', email: '', phone: '', college: '', programOfInterest: 'Global Mentorship Program', reason: '' });
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
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Find Your Mentor</h3>
            <p className="text-gray-500 text-sm mb-6">Tell us about your goals, and we'll match you with the right expert.</p>

            {status === 'success' ? (
                <div className="bg-green-50 text-green-700 p-4 rounded-lg text-center">
                    <p className="font-bold">Application submitted successfully!</p>
                    <p className="text-sm mt-1">We will be in touch shortly.</p>
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
                        <label className="block text-sm font-medium text-gray-700 mb-1">Current Role / College</label>
                        <input
                            type="text"
                            name="college"
                            value={formData.college}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-orange/20 focus:border-accent-orange transition-all outline-none"
                            placeholder="Student / Software Engineer"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">What are your mentorship goals?</label>
                        <textarea
                            name="reason"
                            value={formData.reason}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-orange/20 focus:border-accent-orange transition-all outline-none h-24 resize-none"
                            placeholder="E.g., I want to switch to Data Science..."
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
                        {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
                    </button>
                    <p className="text-xs text-center text-gray-400 mt-4">
                        By submitting, you agree to our Terms & Privacy Policy.
                    </p>
                </form>
            )}
        </div>
    );
};

const FinalCTA = () => (
    <section className="bg-gray-50 border-t border-gray-200 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Don't Walk Alone on Your Career Path
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                Join our Global Mentorship Program and get the guidance you need to succeed.
            </p>
            <button className="bg-gray-900 hover:bg-black text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                Apply Now & Get Matched
            </button>
        </div>
    </section>
);

export default GlobalMentorshipProgram;
