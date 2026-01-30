import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Trophy, Users, TrendingUp, Gift, Plus, Minus } from 'lucide-react';

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
                <span className="font-semibold text-text-primary pr-4">
                    {question}
                </span>
                <div className="flex-shrink-0">
                    {isOpen ? (
                        <Minus className="w-5 h-5 text-accent-orange" />
                    ) : (
                        <Plus className="w-5 h-5 text-accent-orange" />
                    )}
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-5 text-text-secondary leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


const CampusAmbassador = () => {
    const perks = [
        {
            icon: Trophy,
            title: 'Performance-Based Stipend',
            description: 'Earn incentives and rewards as you achieve growth milestones.'
        },
        {
            icon: Gift,
            title: 'Exclusive Swag & Goodies',
            description: 'Official merchandise, certificates, and surprise rewards.'
        },
        {
            icon: Users,
            title: 'Industry Networking',
            description: 'Connect with founders, mentors, and professionals globally.'
        },
        {
            icon: TrendingUp,
            title: 'Career Acceleration',
            description: 'Top performers receive PPO & long-term career opportunities.'
        }
    ];

    return (
        <div className="pt-20">
            {/* ================= PREMIUM HERO ================= */}
            <section className="relative min-h-[640px] flex items-center overflow-hidden bg-white">
                {/* Background image */}
                <div className="absolute inset-0">
                    <img
                        src="/campus-ambassador-hero-right.png"
                        alt="Campus Ambassador Program"
                        className="w-full h-full object-cover"
                    />
                    {/* Soft premium overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r 
      from-white/95 via-white/85 to-white/40" />
                </div>

                {/* Content */}
                <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-28">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="max-w-2xl"
                    >
                        {/* Eyebrow */}
                        <p className="text-sm font-semibold tracking-wide text-accent-orange mb-6">
                            GLOBAL INTERNS · CAMPUS LEADERSHIP PROGRAM
                        </p>

                        {/* Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight mb-6">
                            Campus Ambassador Program
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10">
                            Represent Global Interns at your campus.
                            Build leadership experience, grow your professional network,
                            and create meaningful impact within your student community.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-accent-orange text-white font-semibold px-10 py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
                            >
                                Apply Now
                            </motion.button>

                            <motion.button
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="border border-border bg-white text-text-primary font-semibold px-10 py-4 rounded-xl hover:bg-gray-50 transition-all"
                            >
                                Download Brochure
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* ================= WHAT IS CA ================= */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left - Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                                What is a <span className="text-accent-orange">Campus Ambassador?</span>
                            </h2>
                            <p className="text-text-secondary text-lg leading-relaxed mb-4">
                                A Campus Ambassador is a student who represents <span className="font-semibold text-accent-orange">Global Interns</span> in their college and acts as a bridge between us and the campus community.
                            </p>
                            <p className="text-text-secondary text-lg leading-relaxed mb-4">
                                In this role, you'll share posters, videos, and updates, introduce your classmates to new opportunities, and guide them whenever needed.
                            </p>
                            <p className="text-text-secondary text-lg leading-relaxed">
                                It's like being the face of <span className="font-semibold text-accent-orange">Global Interns</span> in your college — helping others while also gaining skills, rewards, and real-world experience.
                            </p>
                        </motion.div>

                        {/* Right - Animated Stats Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-accent-orange/10 to-accent-orange/5 rounded-3xl p-8 border border-accent-orange/20">
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { number: '500+', label: 'Active Ambassadors', delay: 0.1 },
                                        { number: '100+', label: 'Partner Colleges', delay: 0.2 },
                                        { number: '10K+', label: 'Students Reached', delay: 0.3 },
                                        { number: '₹50K+', label: 'Rewards Distributed', delay: 0.4 }
                                    ].map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: stat.delay, duration: 0.5 }}
                                            className="bg-white rounded-2xl p-6 shadow-sm border border-border text-center hover:shadow-md transition-shadow"
                                        >
                                            <div className="text-3xl md:text-4xl font-bold text-accent-orange mb-2">
                                                {stat.number}
                                            </div>
                                            <div className="text-sm text-text-secondary font-medium">
                                                {stat.label}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Decorative element */}
                                <div className="mt-8 text-center">
                                    <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-border">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-semibold text-text-primary">Join Our Growing Community</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= PERKS & INCENTIVES ================= */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-accent-orange mb-3">
                            Perks & Incentives
                        </h2>
                        <p className="text-text-secondary text-lg">
                            Unlock exclusive benefits and rewards as a Campus Ambassador
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                emoji: '🎁',
                                title: 'Exclusive Global Interns Merchandise',
                                subtitle: 'Referral rewards included',
                                delay: 0.1
                            },
                            {
                                emoji: '🎓',
                                title: 'Official Internship',
                                subtitle: 'Certificate & Offer Letter',
                                delay: 0.2
                            },
                            {
                                emoji: '💵',
                                title: 'Stipend',
                                subtitle: 'Up to ₹25,000',
                                delay: 0.3
                            },
                            {
                                emoji: '🎓',
                                title: 'Free Crash Courses',
                                subtitle: 'Power BI, Tableau, Product Mgmt',
                                delay: 0.4
                            },
                            {
                                emoji: '💼',
                                title: 'Lifetime job assistance',
                                subtitle: 'For your career',
                                delay: 0.5
                            },
                            {
                                emoji: '⏰',
                                title: 'Fully flexible',
                                subtitle: 'no Fixed hours, work from anywhere',
                                delay: 0.6
                            }
                        ].map((perk, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: perk.delay, duration: 0.5 }}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-4xl flex-shrink-0">
                                        {perk.emoji}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-text-primary mb-1">
                                            {perk.title}
                                        </h3>
                                        <p className="text-sm text-text-secondary">
                                            {perk.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= WHAT WE DO ================= */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
                            What We Do
                        </h2>
                        <p className="text-text-secondary text-lg max-w-3xl mx-auto">
                            Visionary leaders committed to transforming education and empowering the next generation of global professionals.
                        </p>
                    </div>

                    {/* Two Column Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Career Starter Programs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all"
                        >
                            <h3 className="text-2xl font-bold text-text-primary mb-4">
                                Career Starter Programs
                            </h3>
                            <p className="text-text-secondary mb-6 leading-relaxed">
                                Ideal for students and fresh graduates to build strong foundations, gain real-world experience, and confidently start their professional journey.
                            </p>

                            <div className="space-y-3">
                                {[
                                    'Real-world project experience',
                                    'Industry-recognized certificates',
                                    'Portfolio-worthy work samples'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-accent-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2 h-2 rounded-full bg-accent-orange" />
                                        </div>
                                        <span className="text-text-secondary">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Mentorship Programs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all"
                        >
                            <h3 className="text-2xl font-bold text-text-primary mb-4">
                                Mentorship Programs
                            </h3>
                            <p className="text-text-secondary mb-6 leading-relaxed">
                                Accelerate your professional growth by learning directly from experienced mentors across industries. Get personalized feedback, career roadmap planning, and guidance on making smart career decisions.
                            </p>

                            <div className="space-y-3">
                                {[
                                    'Industry-relevant projects',
                                    'Portfolio-worthy capstone',
                                    'Guided project development'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-accent-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2 h-2 rounded-full bg-accent-orange" />
                                        </div>
                                        <span className="text-text-secondary">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= RESPONSIBILITIES ================= */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                    {/* Left */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-8">
                            Your Role & Impact
                        </h2>

                        <div className="space-y-6">
                            {[
                                'Promote Global Interns programs on your campus.',
                                'Organize workshops, events, and tech sessions.',
                                'Build a strong student tech community.',
                                'Act as a bridge between students and industry.'
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <CheckCircle className="w-6 h-6 text-accent-orange mt-1" />
                                    <p className="text-lg text-text-secondary">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right CTA Card */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-accent-orange/20 blur-[120px] rounded-full" />
                        <div className="relative bg-white/80 backdrop-blur border border-border rounded-3xl p-10 shadow-xl">
                            <h3 className="text-2xl font-extrabold text-text-primary mb-4">
                                Ready to Lead?
                            </h3>
                            <p className="text-text-secondary mb-8">
                                Stand out from your peers and start building your future today.
                            </p>
                            <button className="w-full bg-accent-orange text-white font-bold py-4 rounded-xl hover:bg-accent-hover transition">
                                Start Your Journey
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= A DAY IN THE LIFE ================= */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-accent-orange mb-3">
                            A Day in the Life
                        </h2>
                        <p className="text-text-secondary text-lg">
                            Experience the daily journey of a Global Interns Ambassador
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-orange/20 hidden md:block" />

                        <div className="space-y-6">
                            {[
                                {
                                    icon: '📢',
                                    title: 'Spread the word',
                                    description: 'Share Global Interns brochures, posters, and reels in your college',
                                    delay: 0.1
                                },
                                {
                                    icon: '📍',
                                    title: 'Educate & Inspire',
                                    description: 'Introduce friends to the Career Launchpad Program.',
                                    delay: 0.2
                                },
                                {
                                    icon: '🔗',
                                    title: 'Invite & connect',
                                    description: 'Send invites to students via WhatsApp link.',
                                    delay: 0.3
                                },
                                {
                                    icon: '📋',
                                    title: 'Collect & contribute',
                                    description: 'Gather leads & feedback with Global Interns support.',
                                    delay: 0.4
                                },
                                {
                                    icon: '🤝',
                                    title: 'Collaborate & Create',
                                    description: 'Work with Global Interns on events & campaigns.',
                                    delay: 0.5
                                },
                                {
                                    icon: '🚩',
                                    title: 'Lead the Way',
                                    description: 'Be the go-to contact for Global Interns on your campus.',
                                    delay: 0.6
                                }
                            ].map((activity, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: activity.delay, duration: 0.5 }}
                                    className="relative"
                                >
                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all md:ml-20">
                                        {/* Timeline Dot */}
                                        <div className="hidden md:block absolute -left-[4.5rem] top-6 w-4 h-4 bg-accent-orange rounded-full border-4 border-white shadow-md" />

                                        {/* Connector to card */}
                                        <div className="hidden md:block absolute -left-16 top-8 w-12 h-0.5 bg-accent-orange/20" />

                                        <div className="flex items-start gap-4">
                                            <div className="text-3xl flex-shrink-0 bg-accent-orange/10 w-12 h-12 rounded-lg flex items-center justify-center">
                                                {activity.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-text-primary mb-1">
                                                    {activity.title}
                                                </h3>
                                                <p className="text-sm text-text-secondary">
                                                    {activity.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHAT AMBASSADORS SAY ================= */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-accent-orange mb-3">
                            What Ambassadors Say
                        </h2>
                        <p className="text-text-secondary text-lg">
                            Hear from our community of student leaders across India
                        </p>
                    </div>

                    {/* Auto-scrolling Carousel */}
                    <div className="relative">
                        <div className="overflow-hidden">
                            <motion.div
                                className="flex gap-6"
                                animate={{
                                    x: [0, -2400]
                                }}
                                transition={{
                                    x: {
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        duration: 40,
                                        ease: "linear"
                                    }
                                }}
                            >
                                {/* First set of testimonials */}
                                {[
                                    {
                                        name: 'Ananya Sharma',
                                        college: 'DU Tech, Bangalore',
                                        initials: 'AS',
                                        testimonial: 'Being a Campus Ambassador gave me so much confidence. I got to talk to students across my college, learned leadership, and even earned while studying.',
                                        rating: 5
                                    },
                                    {
                                        name: 'Rohit Verma',
                                        college: 'Mechanical Engg, Pune',
                                        initials: 'RV',
                                        testimonial: 'This was my first proper internship experience. The stipend, the certificate, and the flexible hours made it perfect for me as a student.',
                                        rating: 5
                                    },
                                    {
                                        name: 'Priya Patel',
                                        college: 'NMIMS, Mumbai',
                                        initials: 'PP',
                                        testimonial: 'I loved how supportive the Global Interns team was. They gave us all the resources we needed, and I could work at my own pace.',
                                        rating: 5
                                    },
                                    {
                                        name: 'Arjun Reddy',
                                        college: 'IIT Hyderabad',
                                        initials: 'AR',
                                        testimonial: 'The networking opportunities were incredible. I connected with industry professionals and fellow ambassadors from different colleges.',
                                        rating: 5
                                    },
                                    {
                                        name: 'Sneha Gupta',
                                        college: 'Delhi University',
                                        initials: 'SG',
                                        testimonial: 'Being an ambassador helped me develop my communication and marketing skills. The experience looks great on my resume.',
                                        rating: 5
                                    },
                                    {
                                        name: 'Karan Singh',
                                        college: 'VIT Vellore',
                                        initials: 'KS',
                                        testimonial: 'The flexibility to work from anywhere was perfect for my schedule. I could balance my studies and responsibilities easily.',
                                        rating: 5
                                    },
                                    {
                                        name: 'Aisha Khan',
                                        college: 'Jamia Millia, Delhi',
                                        initials: 'AK',
                                        testimonial: 'I earned my first stipend through this program! The rewards system is transparent and the team is very supportive.',
                                        rating: 5
                                    },
                                    {
                                        name: 'Vikram Joshi',
                                        college: 'BITS Pilani',
                                        initials: 'VJ',
                                        testimonial: 'The free courses and mentorship were game-changers for me. I learned skills that directly helped in my placements.',
                                        rating: 5
                                    },
                                    {
                                        name: 'Divya Nair',
                                        college: 'Christ University, Bangalore',
                                        initials: 'DN',
                                        testimonial: 'I built my personal brand while representing Global Interns. The experience taught me event management.',
                                        rating: 5
                                    },
                                    {
                                        name: 'Rahul Mehta',
                                        college: 'NIT Trichy',
                                        initials: 'RM',
                                        testimonial: 'The official certificate and offer letter added real value to my profile. Recruiters were impressed.',
                                        rating: 5
                                    },
                                    {
                                        name: 'Ishita Desai',
                                        college: 'Symbiosis, Pune',
                                        initials: 'ID',
                                        testimonial: 'I organized multiple workshops on campus and helped hundreds of students discover opportunities.',
                                        rating: 5
                                    },
                                    {
                                        name: 'Aman Kapoor',
                                        college: 'Manipal University',
                                        initials: 'AK',
                                        testimonial: 'The merchandise was awesome! But more importantly, I gained leadership experience that helped me secure a PPO.',
                                        rating: 5
                                    }
                                ].map((testimonial, index) => (
                                    <div
                                        key={`first-${index}`}
                                        className="flex-shrink-0 w-[380px] bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
                                    >
                                        {/* Header with Avatar */}
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center flex-shrink-0">
                                                <span className="text-accent-orange font-bold text-sm">
                                                    {testimonial.initials}
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-text-primary">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-xs text-text-secondary">
                                                    {testimonial.college}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Testimonial Text */}
                                        <p className="text-sm text-text-secondary leading-relaxed mb-4">
                                            "{testimonial.testimonial}"
                                        </p>

                                        {/* Star Rating */}
                                        <div className="flex gap-1">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <span key={i} className="text-yellow-400 text-sm">★</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                {/* Duplicate set for seamless loop */}
                                {[
                                    {
                                        name: 'Ananya Sharma',
                                        college: 'DU Tech, Bangalore',
                                        initials: 'AS',
                                        testimonial: 'Being a Campus Ambassador gave me so much confidence. I got to talk to students across my college, learned leadership, and even earned while studying.',
                                        rating: 5
                                    },
                                    {
                                        name: 'Rohit Verma',
                                        college: 'Mechanical Engg, Pune',
                                        initials: 'RV',
                                        testimonial: 'This was my first proper internship experience. The stipend, the certificate, and the flexible hours made it perfect for me as a student.',
                                        rating: 5
                                    },
                                    {
                                        name: 'Priya Patel',
                                        college: 'NMIMS, Mumbai',
                                        initials: 'PP',
                                        testimonial: 'I loved how supportive the Global Interns team was. They gave us all the resources we needed, and I could work at my own pace.',
                                        rating: 5
                                    },
                                    {
                                        name: 'Arjun Reddy',
                                        college: 'IIT Hyderabad',
                                        initials: 'AR',
                                        testimonial: 'The networking opportunities were incredible. I connected with industry professionals and fellow ambassadors from different colleges.',
                                        rating: 5
                                    },
                                    {
                                        name: 'Sneha Gupta',
                                        college: 'Delhi University',
                                        initials: 'SG',
                                        testimonial: 'Being an ambassador helped me develop my communication and marketing skills. The experience looks great on my resume.',
                                        rating: 5
                                    },
                                    {
                                        name: 'Karan Singh',
                                        college: 'VIT Vellore',
                                        initials: 'KS',
                                        testimonial: 'The flexibility to work from anywhere was perfect for my schedule. I could balance my studies and responsibilities easily.',
                                        rating: 5
                                    },
                                    {
                                        name: 'Aisha Khan',
                                        college: 'Jamia Millia, Delhi',
                                        initials: 'AK',
                                        testimonial: 'I earned my first stipend through this program! The rewards system is transparent and the team is very supportive.',
                                        rating: 5
                                    },
                                    {
                                        name: 'Vikram Joshi',
                                        college: 'BITS Pilani',
                                        initials: 'VJ',
                                        testimonial: 'The free courses and mentorship were game-changers for me. I learned skills that directly helped in my placements.',
                                        rating: 5
                                    },
                                    {
                                        name: 'Divya Nair',
                                        college: 'Christ University, Bangalore',
                                        initials: 'DN',
                                        testimonial: 'I built my personal brand while representing Global Interns. The experience taught me event management.',
                                        rating: 5
                                    },
                                    {
                                        name: 'Rahul Mehta',
                                        college: 'NIT Trichy',
                                        initials: 'RM',
                                        testimonial: 'The official certificate and offer letter added real value to my profile. Recruiters were impressed.',
                                        rating: 5
                                    },
                                    {
                                        name: 'Ishita Desai',
                                        college: 'Symbiosis, Pune',
                                        initials: 'ID',
                                        testimonial: 'I organized multiple workshops on campus and helped hundreds of students discover opportunities.',
                                        rating: 5
                                    },
                                    {
                                        name: 'Aman Kapoor',
                                        college: 'Manipal University',
                                        initials: 'AK',
                                        testimonial: 'The merchandise was awesome! But more importantly, I gained leadership experience that helped me secure a PPO.',
                                        rating: 5
                                    }
                                ].map((testimonial, index) => (
                                    <div
                                        key={`second-${index}`}
                                        className="flex-shrink-0 w-[380px] bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
                                    >
                                        {/* Header with Avatar */}
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center flex-shrink-0">
                                                <span className="text-accent-orange font-bold text-sm">
                                                    {testimonial.initials}
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-text-primary">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-xs text-text-secondary">
                                                    {testimonial.college}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Testimonial Text */}
                                        <p className="text-sm text-text-secondary leading-relaxed mb-4">
                                            "{testimonial.testimonial}"
                                        </p>

                                        {/* Star Rating */}
                                        <div className="flex gap-1">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <span key={i} className="text-yellow-400 text-sm">★</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Gradient Overlays */}
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* ================= APPLICATION PROCESS ================= */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-accent-orange mb-3">
                            Application Process
                        </h2>
                        <p className="text-text-secondary text-lg">
                            Four simple steps to become an Ambassador
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {[
                            {
                                number: '1',
                                icon: '📝',
                                title: 'Register',
                                description: 'Fill the application form',
                                delay: 0.1
                            },
                            {
                                number: '2',
                                icon: '👥',
                                title: 'Shortlist',
                                description: 'Eligibility & profile screening',
                                delay: 0.2
                            },
                            {
                                number: '3',
                                icon: '🎬',
                                title: 'Selection',
                                description: "You're an official Ambassador 🎉",
                                delay: 0.3
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: step.delay, duration: 0.5 }}
                                className="relative"
                            >
                                {/* Connector Line */}
                                {index < 2 && (
                                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-accent-orange/30" />
                                )}

                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 text-center relative">
                                    {/* Number Badge */}
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-accent-orange rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                        {step.number}
                                    </div>

                                    <div className="text-4xl mb-4 mt-4">
                                        {step.icon}
                                    </div>

                                    <h3 className="text-xl font-bold text-text-primary mb-2">
                                        {step.title}
                                    </h3>

                                    <p className="text-sm text-text-secondary">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Apply Now Button */}
                    <div className="text-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-accent-orange text-white font-bold px-12 py-4 rounded-lg shadow-lg hover:bg-accent-hover transition-colors"
                        >
                            Apply Now
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-accent-orange mb-3">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="space-y-4">
                        {[
                            {
                                question: 'Who can become a Campus Ambassador?',
                                answer: 'Any college student (undergraduate or postgraduate) who is passionate about helping fellow students, has good communication skills, and wants to gain leadership experience can apply to become a Campus Ambassador.'
                            },
                            {
                                question: 'Is this a paid opportunity?',
                                answer: 'Yes! Campus Ambassadors can earn a stipend of up to ₹25,000 based on their performance and the number of students they successfully refer to Global Interns programs. You also receive exclusive merchandise, certificates, and other rewards.'
                            },
                            {
                                question: 'How much time do I need to give?',
                                answer: 'This is a fully flexible role! You can work from anywhere and set your own schedule. Most ambassadors dedicate 5-10 hours per week, but you can adjust based on your availability and academic commitments.'
                            },
                            {
                                question: 'Will I get a certificate or an internship letter?',
                                answer: 'Absolutely! All Campus Ambassadors receive an official internship certificate and offer letter from Global Interns, which you can add to your resume and LinkedIn profile to boost your professional credentials.'
                            },
                            {
                                question: 'How do I apply?',
                                answer: 'Simply click the "Apply Now" button on this page and fill out the application form. Our team will review your application and get back to you within 3-5 business days with the next steps.'
                            },
                            {
                                question: 'What are my main responsibilities?',
                                answer: 'Your main responsibilities include promoting Global Interns programs on your campus, organizing workshops or info sessions, sharing content on social media, referring students, and acting as a bridge between students and our team.'
                            },
                            {
                                question: 'Do I need any prior experience?',
                                answer: 'No prior experience is required! We provide complete training, marketing materials, and ongoing support. All you need is enthusiasm, good communication skills, and a willingness to learn and lead.'
                            },
                            {
                                question: 'Can I do this along with my studies?',
                                answer: 'Yes, definitely! The Campus Ambassador role is designed to be flexible and student-friendly. You can balance it easily with your classes, exams, and other commitments since there are no fixed working hours.'
                            }
                        ].map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="py-20 bg-gradient-to-r from-accent-orange to-[#FF8A5B]">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                            Ready to earn, learn, and lead? Become a Global Interns Campus Ambassador
                        </h2>
                        <p className="text-white/90 text-lg mb-8">
                            Join thousands of students who are already making an impact
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-accent-orange font-bold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
                        >
                            Apply Now
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CampusAmbassador;
