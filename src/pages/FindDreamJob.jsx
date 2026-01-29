import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, FileText, CheckCircle, Briefcase, Building2, TrendingUp, ChevronRight, AlertCircle, BookOpen, Star, RefreshCw, ArrowRight, User, Mail, GraduationCap, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FindDreamJob = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [analysisProgress, setAnalysisProgress] = useState(0);

    // Form States
    const [resumeMethod, setResumeMethod] = useState(null); // 'upload' | 'scratch'
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        phone: '',
        education: '',
        skills: '',
        experience: '',
        internships: '',
        projects: ''
    });
    const [preferences, setPreferences] = useState({
        companyType: '',
        role: '',
        salary: ''
    });

    // Mock Data for Recommendations
    const recommendations = {
        'Data Analyst': {
            score: 62,
            fit: 'Medium',
            profileStrength: 'Needs Improvement',
            salaryFit: '₹4–6 LPA realistic',
            courses: [
                { name: 'Data Science Program', path: '/program/data-science', icon: '📊' },
                { name: 'Python Programming', path: '/program/python', icon: '🐍' },
                { name: 'Machine Learning', path: '/program/machine-learning', icon: '🤖' }
            ],
            missingSkills: ['Advanced Excel', 'SQL', 'Power BI']
        },
        'Software Engineer': {
            score: 65,
            fit: 'High',
            profileStrength: 'Good',
            salaryFit: '₹5–8 LPA realistic',
            courses: [
                { name: 'Web Development', path: '/program/web-development', icon: '💻' },
                { name: 'Java Programming', path: '/program/java', icon: '☕' },
                { name: 'Data Structures', path: '/program/python', icon: '🧩' }
            ],
            missingSkills: ['System Design', 'React/Node.js', 'Cloud Basics']
        },
        // Default fallback
        'default': {
            score: 58,
            fit: 'Low',
            profileStrength: 'Beginner',
            salaryFit: '₹3-4 LPA realistic',
            courses: [
                { name: 'Full Stack Web Dev', path: '/program/web-development', icon: '🌐' },
                { name: 'Professional Communication', path: '/program/sales-marketing', icon: '📢' }
            ],
            missingSkills: ['Industry Projects', 'Technical Expertise', 'Soft Skills']
        }
    };

    const handlePreferenceSubmit = () => {
        setStep(3);
        // Simulate Analysis
        let progress = 0;
        const interval = setInterval(() => {
            progress += 1;
            setAnalysisProgress(progress);
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => setStep(4), 500);
            }
        }, 30);
    };

    const getRecommendation = () => {
        return recommendations[preferences.role] || recommendations['default'];
    };

    const recommendationData = getRecommendation();

    return (
        <div className="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto">

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                        Find your dream job in <span className="text-accent-orange">minutes</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Check your profile. Know your job fit. Get a clear learning path.
                    </p>
                </motion.div>

                {/* Progress Indicators */}
                {step < 5 && (
                    <div className="flex justify-center mb-10">
                        <div className="flex items-center space-x-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className={`flex items-center ${i !== 4 ? 'after:content-[""] after:h-[2px] after:w-12 after:bg-gray-200 after:ml-4' : ''}`}>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= i
                                        ? 'bg-accent-orange text-white shadow-lg shadow-accent-orange/30'
                                        : 'bg-white text-gray-400 border border-gray-200'
                                        }`}>
                                        {step > i ? <CheckCircle size={20} /> : i}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Main Content Area */}
                <AnimatePresence mode='wait'>

                    {/* Step 1: Resume Option */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">How would you like to start?</h2>

                            {/* Hidden File Input */}
                            <input
                                type="file"
                                id="resume-upload"
                                className="hidden"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                        setLoading(true);
                                        // Simulate upload
                                        let progress = 0;
                                        const interval = setInterval(() => {
                                            progress += 5;
                                            if (progress >= 100) {
                                                clearInterval(interval);
                                                setLoading(false);
                                                setResumeMethod('upload');
                                                setStep(2);
                                            }
                                        }, 100);
                                    }
                                }}
                            />

                            {loading ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 mx-auto mb-4 relative">
                                        <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                                        <div className="absolute inset-0 border-4 border-accent-orange rounded-full border-t-transparent animate-spin"></div>
                                        <FileText className="absolute inset-0 m-auto text-accent-orange" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Uploading Resume...</h3>
                                    <p className="text-gray-500">Please wait while we process your file.</p>
                                </div>
                            ) : (
                                <div className="grid md:grid-cols-2 gap-6">
                                    <button
                                        onClick={() => document.getElementById('resume-upload').click()}
                                        className="group relative p-8 rounded-2xl border-2 border-dashed border-gray-200 hover:border-accent-orange hover:bg-orange-50/50 transition-all text-center"
                                    >
                                        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                            <Upload size={32} />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Upload Existing Resume</h3>
                                        <p className="text-gray-500 text-sm">We'll scan your PDF/DOC to extract your profile instantly.</p>
                                    </button>

                                    <button
                                        onClick={() => { setResumeMethod('scratch'); setStep(1.5); }}
                                        className="group relative p-8 rounded-2xl border-2 border-dashed border-gray-200 hover:border-accent-orange hover:bg-orange-50/50 transition-all text-center"
                                    >
                                        <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                            <FileText size={32} />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Build from Scratch</h3>
                                        <p className="text-gray-500 text-sm">Don't have a resume? No worries, we'll build one together. Here we will build a resume in this option.</p>
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    )}


                    {/* Step 1.5: Resume Builder */}
                    {step === 1.5 && (
                        <motion.div
                            key="step1.5"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Build Your Profile</h2>

                            <div className="grid lg:grid-cols-2 gap-8">
                                {/* Form */}
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                                            <input
                                                type="text"
                                                className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent-orange outline-none"
                                                placeholder="John Doe"
                                                value={userDetails.name}
                                                onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                                            <input
                                                type="text"
                                                className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent-orange outline-none"
                                                placeholder="+91 9876543210"
                                                value={userDetails.phone}
                                                onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                                        <input
                                            type="email"
                                            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent-orange outline-none"
                                            placeholder="john@example.com"
                                            value={userDetails.email}
                                            onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Highest Education</label>
                                        <input
                                            type="text"
                                            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent-orange outline-none"
                                            placeholder="B.Tech Computer Science"
                                            value={userDetails.education}
                                            onChange={(e) => setUserDetails({ ...userDetails, education: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Top Skills (comma separated)</label>
                                        <input
                                            type="text"
                                            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent-orange outline-none"
                                            placeholder="React, Node.js, Python, Design"
                                            value={userDetails.skills}
                                            onChange={(e) => setUserDetails({ ...userDetails, skills: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Experience Level</label>
                                        <select
                                            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent-orange outline-none text-gray-600 bg-white"
                                            value={userDetails.experience}
                                            onChange={(e) => setUserDetails({ ...userDetails, experience: e.target.value })}
                                        >
                                            <option value="">Select Experience</option>
                                            <option value="Fresher">Fresher (Student)</option>
                                            <option value="0-1 Years">0-1 Years</option>
                                            <option value="1-3 Years">1-3 Years</option>
                                            <option value="3+ Years">3+ Years</option>
                                        </select>
                                        {userDetails.experience === 'Fresher' && (
                                            <div className="space-y-4 mt-4 animate-fadeIn">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Internships (if any)</label>
                                                    <textarea
                                                        className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent-orange outline-none h-24 resize-none"
                                                        placeholder="Briefly describe your internship role and company..."
                                                        value={userDetails.internships}
                                                        onChange={(e) => setUserDetails({ ...userDetails, internships: e.target.value })}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Academic Projects</label>
                                                    <textarea
                                                        className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent-orange outline-none h-24 resize-none"
                                                        placeholder="Describe your major projects, technologies used, and outcomes..."
                                                        value={userDetails.projects}
                                                        onChange={(e) => setUserDetails({ ...userDetails, projects: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        onClick={() => setStep(2)}
                                        className="w-full mt-4 bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg"
                                    >
                                        Confirm & Continue <ChevronRight size={20} />
                                    </button>
                                </div>

                                {/* Preview - Default Template */}
                                <div className="hidden lg:block bg-gray-100 rounded-2xl p-6 relative overflow-hidden">
                                    <div className="absolute top-3 right-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Default Template Preview</div>

                                    {/* Resume Document Page */}
                                    <div className="bg-white shadow-2xl w-full h-full min-h-[500px] p-8 mx-auto origin-top transition-all md:scale-95 text-gray-800 text-sm">

                                        {/* Header */}
                                        <div className="border-b-2 border-gray-800/10 pb-6 mb-6">
                                            <h1 className="text-3xl font-bold text-gray-900 mb-2 font-serif capitalize">{userDetails.name || 'Your Name'}</h1>
                                            <div className="flex flex-wrap gap-4 text-gray-500 text-xs">
                                                <div className="flex items-center gap-1"><Mail size={12} /> {userDetails.email || 'email@example.com'}</div>
                                                <div className="flex items-center gap-1"><Phone size={12} /> {userDetails.phone || '+91 99999 99999'}</div>
                                            </div>
                                        </div>

                                        {/* Education */}
                                        <div className="mb-6">
                                            <h3 className="text-gray-900 font-bold uppercase tracking-wider text-xs border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
                                                <GraduationCap size={14} className="text-accent-orange" /> Education
                                            </h3>
                                            <div className="font-semibold">{userDetails.education || 'Degree Name / University'}</div>
                                            <div className="text-gray-500 text-xs mt-1">2022 - Present</div>
                                        </div>

                                        {/* Skills */}
                                        <div className="mb-6">
                                            <h3 className="text-gray-900 font-bold uppercase tracking-wider text-xs border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
                                                <CheckCircle size={14} className="text-accent-orange" /> Skills
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {userDetails.skills ? userDetails.skills.split(',').map((s, i) => (
                                                    <span key={i} className="px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-700">{s.trim()}</span>
                                                )) : (
                                                    <>
                                                        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-400">Skill 1</span>
                                                        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-400">Skill 2</span>
                                                        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-400">Skill 3</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        {/* Experience Mock */}
                                        <div className="mb-6">
                                            <h3 className="text-gray-900 font-bold uppercase tracking-wider text-xs border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
                                                <Briefcase size={14} className="text-accent-orange" /> Experience
                                            </h3>
                                            <div>
                                                {userDetails.experience === 'Fresher' ? (
                                                    <div className="space-y-6">
                                                        {/* Internships for Fresher */}
                                                        <div>
                                                            <div className="font-semibold text-gray-800 mb-1">Internships</div>
                                                            <p className="text-gray-500 text-xs whitespace-pre-line">
                                                                {userDetails.internships || '• Web Development Intern at XYZ Company\n• Built responsive UI using React.js'}
                                                            </p>
                                                        </div>

                                                        {/* Projects for Fresher */}
                                                        <div>
                                                            <div className="font-semibold text-gray-800 mb-1 flex items-center gap-2">
                                                                <BookOpen size={12} className="text-accent-orange" /> Projects
                                                            </div>
                                                            <p className="text-gray-500 text-xs whitespace-pre-line">
                                                                {userDetails.projects || '• E-commerce Website: MERN Stack based app with payment gateway.\n• AI Chatbot: Python-based NLP bot for customer service.'}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <div className="font-semibold">{userDetails.experience || 'Professional Experience'}</div>
                                                        <p className="text-gray-500 text-xs mt-2 line-clamp-3">
                                                            {userDetails.experience
                                                                ? 'Experienced professional with a proven track record. Demonstrated ability to deliver high-quality results.'
                                                                : 'Select experience level to see details.'}
                                                        </p>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 2: Preferences */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Tell us your career goals</h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Target Company Type</label>
                                    <div className="grid grid-cols-3 gap-4">
                                        {['MNCs', 'Startups', 'SMEs'].map((type) => (
                                            <button
                                                key={type}
                                                onClick={() => setPreferences({ ...preferences, companyType: type })}
                                                className={`py-3 px-4 rounded-xl border font-medium transition-all ${preferences.companyType === type
                                                    ? 'bg-accent-orange text-white border-accent-orange shadow-lg shadow-accent-orange/20'
                                                    : 'bg-white border-gray-200 text-gray-600 hover:border-accent-orange/50'
                                                    }`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Target Job Role</label>
                                    <select
                                        value={preferences.role}
                                        onChange={(e) => setPreferences({ ...preferences, role: e.target.value })}
                                        className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none bg-white font-medium"
                                    >
                                        <option value="">Select a role...</option>
                                        <option value="Data Analyst">Data Analyst</option>
                                        <option value="Software Engineer">Software Engineer</option>
                                        <option value="HR Executive">HR Executive</option>
                                        <option value="Marketing Analyst">Marketing Analyst</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Expected Salary Range</label>
                                    <div className="grid grid-cols-3 gap-4">
                                        {['₹3–5 LPA', '₹5–8 LPA', '₹8–12 LPA'].map((range) => (
                                            <button
                                                key={range}
                                                onClick={() => setPreferences({ ...preferences, salary: range })}
                                                className={`py-3 px-4 rounded-xl border font-medium transition-all ${preferences.salary === range
                                                    ? 'bg-accent-orange text-white border-accent-orange shadow-lg shadow-accent-orange/20'
                                                    : 'bg-white border-gray-200 text-gray-600 hover:border-accent-orange/50'
                                                    }`}
                                            >
                                                {range}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    disabled={!preferences.role || !preferences.companyType || !preferences.salary}
                                    onClick={handlePreferenceSubmit}
                                    className="w-full mt-8 bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                                >
                                    Analyze Profile <ChevronRight size={20} />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 3: Analysis Simulation */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-12 border border-gray-100 dark:border-gray-700 text-center"
                        >
                            <div className="relative w-32 h-32 mx-auto mb-8">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle
                                        cx="64"
                                        cy="64"
                                        r="60"
                                        stroke="currentColor"
                                        strokeWidth="8"
                                        fill="transparent"
                                        className="text-gray-200"
                                    />
                                    <circle
                                        cx="64"
                                        cy="64"
                                        r="60"
                                        stroke="currentColor"
                                        strokeWidth="8"
                                        fill="transparent"
                                        strokeDasharray={377}
                                        strokeDashoffset={377 - (377 * analysisProgress) / 100}
                                        className="text-accent-orange transition-all duration-300"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-accent-orange">
                                    {analysisProgress}%
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold mb-6">Analyzing your profile...</h2>

                            <div className="space-y-4 max-w-sm mx-auto text-left">
                                <div className={`flex items-center gap-3 transition-opacity ${analysisProgress > 20 ? 'opacity-100' : 'opacity-30'}`}>
                                    <CheckCircle className="text-green-500" size={20} />
                                    <span>ATS Resume Scoring</span>
                                </div>
                                <div className={`flex items-center gap-3 transition-opacity ${analysisProgress > 50 ? 'opacity-100' : 'opacity-30'}`}>
                                    <CheckCircle className="text-green-500" size={20} />
                                    <span>Skill Gap Identification</span>
                                </div>
                                <div className={`flex items-center gap-3 transition-opacity ${analysisProgress > 80 ? 'opacity-100' : 'opacity-30'}`}>
                                    <CheckCircle className="text-green-500" size={20} />
                                    <span>Role-Fit Percentage Calculation</span>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 4: Results & Recommendations */}
                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden"
                        >
                            {/* Header Gradient */}
                            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8">
                                <h2 className="text-3xl font-bold mb-2">Career Readiness Report 📊</h2>
                                <p className="opacity-80">Here is how you fit for the role of <span className="text-accent-orange font-bold">{preferences.role}</span></p>
                            </div>

                            <div className="p-8">
                                {/* Score Cards */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                                    <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 text-center">
                                        <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">ATS Score</div>
                                        <div className="text-3xl font-black text-accent-orange">{recommendationData.score} <span className="text-base text-gray-400 font-normal">/ 100</span></div>
                                    </div>
                                    <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                                        <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Role Fit</div>
                                        <div className="text-xl font-bold text-blue-600">{recommendationData.fit}</div>
                                    </div>
                                    <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100 text-center">
                                        <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Profile Strength</div>
                                        <div className="text-xl font-bold text-purple-600">{recommendationData.profileStrength}</div>
                                    </div>
                                    <div className="p-4 bg-green-50 rounded-2xl border border-green-100 text-center">
                                        <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Realistic Salary</div>
                                        <div className="text-xl font-bold text-green-600">{recommendationData.salaryFit}</div>
                                    </div>
                                </div>

                                {/* Smart Recommendations */}
                                <div className="mb-10">
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                        <Star className="text-yellow-400 fill-yellow-400" />
                                        Recommended Learning Path
                                    </h3>
                                    <div className="bg-yellow-50/50 border border-yellow-100 rounded-2xl p-6 mb-6">
                                        <p className="text-gray-700">
                                            To become a <span className="font-bold">{preferences.role}</span> at a <span className="font-bold">{preferences.companyType}</span>, you currently <span className="text-red-500 font-bold">MISS</span> the following critical skills:
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {recommendationData.missingSkills.map((skill, i) => (
                                                <span key={i} className="px-3 py-1 bg-white border border-red-200 text-red-600 rounded-full text-sm font-semibold">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-6">
                                        {recommendationData.courses.map((course, idx) => (
                                            <div key={idx} className="bg-white border hover:border-accent-orange/50 transition-all rounded-xl p-5 shadow-sm hover:shadow-md cursor-pointer group" onClick={() => navigate(course.path)}>
                                                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">{course.icon}</div>
                                                <h4 className="font-bold text-lg mb-2 group-hover:text-accent-orange transition-colors">{course.name}</h4>
                                                <div className="flex items-center text-accent-orange text-sm font-semibold">
                                                    View Program <ChevronRight size={16} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Section - Step 7 */}
                                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-center text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange/20 blur-[80px] rounded-full pointer-events-none"></div>

                                    <h3 className="text-2xl font-bold mb-2 relative z-10">Improve your ATS score from {recommendationData.score} → 85+</h3>
                                    <p className="text-gray-400 mb-8 relative z-10">Become job-ready for your target role in 12 weeks.</p>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                                        <button
                                            onClick={() => navigate(recommendationData.courses[0].path)}
                                            className="bg-accent-orange hover:bg-accent-hover text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-accent-orange/30 transition-all transform hover:-translate-y-1"
                                        >
                                            Enroll in Recommended Program
                                        </button>
                                        <button className="bg-white/10 hover:bg-white/20 backdrop-blur text-white font-bold py-4 px-8 rounded-xl border border-white/10 transition-all">
                                            Talk to Career Mentor
                                        </button>
                                    </div>

                                    <div className="mt-6 text-sm text-gray-400 flex items-center justify-center gap-2 cursor-pointer hover:text-white transition-colors">
                                        <RefreshCw size={14} />
                                        <span>Re-check Profile After Learning</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </div>
    );
};

export default FindDreamJob;
