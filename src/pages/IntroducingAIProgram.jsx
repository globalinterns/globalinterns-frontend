import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Star, Clock, Calendar, CheckCircle, ChevronDown,
    Brain, Code, Bot, Briefcase, Award, TrendingUp, Users,
    BookOpen, Search, ShieldCheck, PenTool
} from 'lucide-react';

const IntroducingAIProgram = () => {
    return (
        <div className="pt-20 font-sans text-gray-900 bg-white">
            <HeroSection />
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-20">
                    <DiscoverSection />
                    <ToolsSection />
                    <ProjectsSection />
                    <SyllabusSection />
                    <CertificationSection />
                    <PricingSection />
                    <AlumniSection />
                    <TestimonialsSection />
                </div>
                <div className="lg:col-span-1">
                    <div className="sticky top-28">
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
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2070&q=80"
                alt="Introducing AI"
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
                        Most Trending Course
                    </span>

                    <div className="flex items-center gap-2 text-sm text-white/70">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                        <span>Powered by Microsoft & IBM</span>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
                    Introducing AI
                </h1>

                {/* Subheading */}
                <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mb-10">
                    Global Interns - Microsoft - IBM. Join our most trending Introducing AI course.
                </p>

                {/* Program facts */}
                <div className="flex flex-wrap gap-x-10 gap-y-4 mb-12 text-sm text-white/70">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-accent-orange" />
                        <span>Duration: 2-3 Months</span>
                    </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                    <button className="inline-flex items-center justify-center rounded-xl bg-accent-orange px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent-orange/20 transition hover:bg-accent-hover hover:shadow-accent-orange/30">
                        Apply Now
                    </button>

                    <button className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
                        Download Brochure
                    </button>
                </div>
            </motion.div>
        </div>
    </section>
);

const DiscoverSection = () => (
    <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Discover the IBM Program</h2>
        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            Wondering what you will receive after completing an IBM-certified course? Here is what awaits you:
        </p>

        <div className="grid gap-6">
            {[
                { title: 'Training Certificate by Global Interns', desc: 'Earn a recognized certificate validating your skills and course completion.', icon: Award },
                { title: 'IBM Course Completion Certificate', desc: 'Receive official IBM certification to boost career opportunities and credibility.', icon: Star },
                { title: 'Internship Certificate by Global Interns', desc: 'Showcase industry experience with a certified internship completion document.', icon: Briefcase },
                { title: 'Hands-on Experience with 2 Live Projects', desc: 'Work on real-world projects to gain practical, job-ready skills.', icon: Code },
                { title: 'Expert-Led Training', desc: 'Learn from experienced professionals providing industry-relevant knowledge and insights.', icon: Users },
                { title: 'Exam Success Toolkit', desc: 'Prepare for IBM exams with test vouchers, LearnKey video courses, and Gmetrix practice tests.', icon: BookOpen },
            ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
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

const ToolsSection = () => (
    <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Tools and Technologies You'll Learn</h2>
        <p className="text-gray-600 mb-6">Learn a wide range of programming languages and tools, from foundational to advanced, to equip you with the skills needed for real-world projects and career success.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
                'Python', 'NumPy', 'OpenCV', 'Pandas',
                'Matplotlib', 'Scikit-learn', 'TensorFlow', 'PyTorch'
            ].map((tool, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center gap-3 hover:border-gray-300 transition-colors aspect-square">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-bold text-lg">
                        {tool[0]}
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">{tool}</span>
                </div>
            ))}
        </div>
    </section>
);

const ProjectsSection = () => (
    <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Build Your Skills with Hands-On Projects</h2>
        <p className="text-gray-600 mb-6">Engage with real-world challenges and enhance your skills through hands-on projects that provide practical experience and boost your confidence.</p>

        <div className="space-y-6">
            <div className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all bg-white">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-gray-900">Mini Project(1)</h3>
                    <p className="text-gray-600 text-sm mb-2">Duration: 1 Week</p>
                    <p className="text-gray-500 text-sm">Implement core concepts in a focused, short-term project.</p>
                </div>
            </div>

            <div className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all bg-white">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-gray-900">Major Project(1)</h3>
                    <p className="text-gray-600 text-sm mb-2">Duration: 3 Weeks</p>
                    <p className="text-gray-500 text-sm">Solve a complex problem with an end-to-end AI solution.</p>
                </div>
            </div>
        </div>
    </section>
);

const SyllabusSection = () => {
    const modules = [
        "Module 1: Introduction to Artificial Intelligence (2 hours)",
        "Module 2: Python for AI (2 hours)",
        "Module 3: Machine Learning Basics (2 hours)",
        "Module 4: Supervised Learning (2 hours)",
        "Module 5: Unsupervised Learning (2 hours)",
        "Module 6: Neural Networks and Deep Learning (2 hours)",
        "Module 7: Natural Language Processing (2 hours)",
        "Module 8: AI Ethics and Bias (2 hours)",
        "Module 9: AI in Practice (2 hours)",
        "Module 10: Future of AI and Final Review (2 hours)"
    ];

    return (
        <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Our Course Modules</h2>
            <p className="text-gray-600 mb-8">Dive into our structured course modules, each designed to provide in-depth knowledge and practical skills for a well-rounded learning experience.</p>

            <div className="border border-gray-200 rounded-xl divide-y divide-gray-200 overflow-hidden bg-white shadow-sm mb-6">
                {modules.map((module, idx) => (
                    <div key={idx} className="p-4 hover:bg-gray-50 transition-colors flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {idx + 1}
                        </span>
                        <span className="font-medium text-gray-800">{module}</span>
                    </div>
                ))}
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                    <h4 className="font-bold text-blue-900">Additional Resources & Evaluation</h4>
                    <p className="text-sm text-blue-700">Access comprehensive syllabus and assessments.</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="bg-white px-3 py-1 rounded text-xs font-bold text-blue-800 border border-blue-200">
                        Powered By IBM AI
                    </div>
                    <button className="text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline">
                        Download Brochure
                    </button>
                </div>
            </div>
        </section>
    );
};

const CertificationSection = () => (
    <section className="bg-gray-900 text-white rounded-2xl p-8 lg:p-12 relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-medium text-amber-300">
                    <Award className="w-4 h-4" />
                    <span>Official Recognition</span>
                </div>
                <h2 className="text-3xl font-bold leading-tight">Certificate Powered By IBM</h2>
                <p className="text-gray-400 text-lg">
                    Validate your skills with a professional certificate from Global Interns and IBM.
                </p>
                <button className="text-white font-medium border-b border-white pb-0.5 hover:text-accent-orange hover:border-accent-orange transition-colors">
                    View Sample Certificate
                </button>
            </div>
            <div className="flex-1 w-full max-w-md">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 shadow-2xl flex items-center justify-center relative">
                    {/* Placeholder for Certificate Image */}
                    <div className="text-center p-8">
                        <Award className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                        <h4 className="font-bold text-xl mb-1">Certificate of Completion</h4>
                        <p className="text-gray-500 text-sm">Global Interns</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const PricingSection = () => (
    <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Select the Best Plan for Your Growth</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Choose the plan that suits your learning needs and start your journey with Global Interns Edtech today.
        </p>

        <div className="max-w-md mx-auto">
            <div className="rounded-xl p-8 border border-accent-orange shadow-xl ring-1 ring-accent-orange bg-white relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-orange text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-sm">
                    Recommended
                </div>

                <div className="mb-8 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">IBM Professional</h3>
                    <p className="text-sm text-gray-500 mb-4">Get Certification from IBM at just</p>
                    <div className="flex items-center justify-center gap-1">
                        <span className="text-4xl font-bold text-gray-900">₹14,285</span>
                    </div>
                </div>

                <ul className="space-y-4 mb-8">
                    {[
                        'Recorded Sessions', 'Hands-on Projects', 'Certifications',
                        'Live Sessions', 'Doubt Clear Sessions', 'Mentor Guidance',
                        'Placement Support', '1:1 Mentoring'
                    ].map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                            <CheckCircle className="w-5 h-5 flex-shrink-0 text-accent-orange" />
                            <span>{feat}</span>
                        </li>
                    ))}
                </ul>

                <button className="w-full py-4 rounded-xl font-bold text-lg transition-all bg-gray-900 text-white hover:bg-black shadow-lg hover:shadow-xl">
                    Enroll Now
                </button>
            </div>
        </div>
    </section>
);

const AlumniSection = () => (
    <section className="text-center pt-8 border-t border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Our Alumni Works At</h3>
        <p className="text-gray-500 text-sm mb-8">Explore the top companies and organizations where our alumni have built successful careers.</p>
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 opacity-60">
            {['Google', 'Microsoft', 'Amazon', 'IBM', 'Nvidia', 'Intel'].map((company, idx) => (
                <span key={idx} className="text-xl font-bold text-gray-800">{company}</span>
            ))}
        </div>
    </section>
);

const TestimonialsSection = () => (
    <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Voices of Success</h2>
        <div className="grid md:grid-cols-2 gap-6">
            {[
                { name: 'Shreya S Sen', role: 'Global Interns Review at Google', review: "It's an amazing experience. I am learning something new other than my subjects. Classes are also conducted in a very efficient way. It's totally worth the money I have paid." },
                { name: 'Farooq Ahmed', role: 'Global Interns Review at Google', review: "Working at Global Interns has been a great learning experience. The company provides a supportive environment where employees are encouraged to learn new skills." },
                { name: 'Babalu Bharti', role: 'Global Interns Review at Google', review: "Global Interns is a great Edutech to enhance your career. The mentors are really good and they teach in very deeply and nicely." },
                { name: 'Pandey Rudra', role: 'Global Interns Review at Google', review: "Global Interns Edu Tech is an excellent platform for skill-based learning. The courses are well-structured, practical, and truly help students grow." }
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
                    <button className="text-accent-orange text-sm font-semibold hover:underline">View Review</button>
                </div>
            ))}
        </div>
    </section>
);

const ApplyForm = () => (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Secure Your Spot</h3>
        <p className="text-gray-500 text-sm mb-6">Application Process: Global Interns</p>

        <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-orange/20 focus:border-accent-orange transition-all outline-none" placeholder="John Doe" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-orange/20 focus:border-accent-orange transition-all outline-none" placeholder="john@example.com" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-orange/20 focus:border-accent-orange transition-all outline-none" placeholder="+91 98765 43210" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Reason for joining</label>
                <textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-orange/20 focus:border-accent-orange transition-all outline-none h-24 resize-none" placeholder="Type your reason..." />
            </div>
            <button className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-xl transition-all mt-2">
                Submit
            </button>
            <p className="text-xs text-center text-gray-400 mt-4">
                By submitting, you agree to our Terms & Privacy Policy.
            </p>
        </form>
    </div>
);

const FinalCTA = () => (
    <section className="bg-gray-50 border-t border-gray-200 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Experience Your Learning Journey at Global Interns Edtech
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                Embark on your learning journey where innovative courses and expert guidance empower you to achieve your professional goals.
            </p>
            <button className="bg-gray-900 hover:bg-black text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                Apply Now & Get Started
            </button>
        </div>
    </section>
);

export default IntroducingAIProgram;
