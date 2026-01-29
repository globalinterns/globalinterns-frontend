import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, FileText, CheckCircle, XCircle, Loader2, ArrowRight, Award, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ResumeCheck = () => {
    const [file, setFile] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState(null);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    // Mock Programs for recommendation
    const recommendedPrograms = [
        {
            title: 'Full Stack Web Development',
            description: 'Master the MERN stack and build production-ready applications.',
            path: '/program/web-development',
            match: '98% Match'
        },
        {
            title: 'Data Science & Analytics',
            description: 'Learn to analyze data and build predictive models.',
            path: '/program/data-science',
            match: '85% Match'
        },
        {
            title: 'Artificial Intelligence',
            description: 'Deep dive into AI algorithms and neural networks.',
            path: '/program/artificial-intelligence',
            match: '92% Match'
        }
    ];

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            analyzeResume(e.target.files[0]);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
            analyzeResume(e.dataTransfer.files[0]);
        }
    };

    const analyzeResume = (file) => {
        setIsAnalyzing(true);
        setResult(null);

        // Simulate analysis delay
        setTimeout(() => {
            setIsAnalyzing(false);
            // Mock Result
            setResult({
                score: 68,
                status: 'Average',
                strengths: ['Clear contact info', 'Good education section'],
                weaknesses: ['Missing industry keywords', 'Lack of quantifiable results', 'Formatting issues'],
                summary: "Your resume is a good start, but it may get filtered out by modern ATS systems due to a lack of specific technical keywords and measurable achievements. Upgrading your skills can significantly boost your score."
            });
        }, 3000);
    };

    const getScoreColor = (score) => {
        if (score >= 80) return 'text-green-500';
        if (score >= 60) return 'text-yellow-500';
        return 'text-red-500';
    };

    return (
        <div className="pt-20 min-h-screen bg-primary-bg font-sans">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-gray-900 to-black text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
                            Is Your Resume <span className="text-accent-orange">ATS Ready?</span>
                        </h1>
                        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                            Get a free, instant ATS score and detailed feedback. Find out if your resume is blocking your dream job and get personalized course recommendations to fix it.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-16 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Panel: Upload / Status */}
                    <div className="lg:col-span-5 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
                        >
                            {!file ? (
                                <div
                                    className="border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center cursor-pointer hover:border-accent-orange hover:bg-orange-50/50 transition-all group"
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={handleDrop}
                                    onClick={() => fileInputRef.current.click()}
                                >
                                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <UploadCloud className="w-8 h-8 text-accent-orange" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Upload your Resume</h3>
                                    <p className="text-gray-500 text-sm mb-6">Drag & drop or click to browse (PDF, DOCX)</p>
                                    <button className="bg-accent-orange text-white px-6 py-2 rounded-lg font-semibold shadow-lg shadow-accent-orange/20">
                                        Select File
                                    </button>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        className="hidden"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                    />
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <FileText className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 truncate px-4">{file.name}</h3>
                                    <p className="text-sm text-gray-500 mb-6">{(file.size / 1024 / 1024).toFixed(2)} MB</p>

                                    {isAnalyzing ? (
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-center gap-2 text-accent-orange font-semibold">
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Analyzing Keywords...
                                            </div>
                                            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: "100%" }}
                                                    transition={{ duration: 3 }}
                                                    className="bg-accent-orange h-full rounded-full"
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => { setFile(null); setResult(null); }}
                                            className="text-sm text-gray-500 hover:text-red-500 underline"
                                        >
                                            Upload a different file
                                        </button>
                                    )}
                                </div>
                            )}
                        </motion.div>

                        {/* Result Score Card */}
                        <AnimatePresence>
                            {result && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 text-center"
                                >
                                    <h3 className="text-lg font-semibold text-gray-500 mb-4 uppercase tracking-wide">Your ATS Score</h3>
                                    <div className="relative w-40 h-40 mx-auto mb-6 flex items-center justify-center">
                                        <svg className="w-full h-full transform -rotate-90">
                                            <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-gray-100" />
                                            <motion.circle
                                                cx="80" cy="80" r="70"
                                                stroke="currentColor"
                                                strokeWidth="10"
                                                fill="transparent"
                                                className={getScoreColor(result.score)}
                                                strokeDasharray="440"
                                                initial={{ strokeDashoffset: 440 }}
                                                animate={{ strokeDashoffset: 440 - (440 * result.score) / 100 }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                                            <span className={`text-4xl font-bold ${getScoreColor(result.score)}`}>{result.score}</span>
                                            <span className="text-xs text-gray-400">out of 100</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed mb-4">{result.summary}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Right Panel: Analysis & Recommendations */}
                    <div className="lg:col-span-7 space-y-8">
                        {result ? (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-8"
                            >
                                {/* Feedback Details */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-l-4 border-l-green-500 border-gray-100">
                                        <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-4">
                                            <CheckCircle className="w-5 h-5 text-green-500" /> Strengths
                                        </h4>
                                        <ul className="space-y-2">
                                            {result.strengths.map((item, idx) => (
                                                <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-l-4 border-l-red-500 border-gray-100">
                                        <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-4">
                                            <XCircle className="w-5 h-5 text-red-500" /> Improvements Needed
                                        </h4>
                                        <ul className="space-y-2">
                                            {result.weaknesses.map((item, idx) => (
                                                <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Recommendations */}
                                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900">Recommended Programs</h3>
                                            <p className="text-gray-500">Boost your ATS score with these industry-recognized certifications</p>
                                        </div>
                                        <Award className="w-10 h-10 text-accent-orange hidden sm:block" />
                                    </div>

                                    <div className="space-y-4">
                                        {recommendedPrograms.map((program, idx) => (
                                            <div key={idx} className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-accent-orange/30 hover:shadow-lg transition-all group">
                                                <div className="flex-1 text-center sm:text-left">
                                                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                                                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-accent-orange transition-colors">{program.title}</h4>
                                                        <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-bold">{program.match}</span>
                                                    </div>
                                                    <p className="text-sm text-gray-600">{program.description}</p>
                                                </div>
                                                <button
                                                    onClick={() => navigate(program.path)}
                                                    className="flex items-center gap-2 text-sm font-bold text-accent-orange hover:text-orange-700 transition-colors whitespace-nowrap"
                                                >
                                                    View Program <ArrowRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </motion.div>
                        ) : (
                            // Empty State / Placeholder for right side
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center p-12 bg-white/50 rounded-3xl border border-dashed border-gray-300 min-h-[400px]"
                            >
                                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                                    <TrendingUp className="w-10 h-10 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-400 mb-2">Waiting for Analysis</h3>
                                <p className="text-gray-400 max-w-sm">Upload your resume to see your ATS score and get personalized career recommendations.</p>
                            </motion.div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ResumeCheck;
