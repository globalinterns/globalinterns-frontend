import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Award, TrendingUp, Target, Heart } from 'lucide-react';

const AboutUs = () => {
    return (
        <div className="pt-20 font-sans text-gray-900 bg-white">
            <HeroSection />
            <MissionSection />
            <StatsSection />
            <ValuesSection />
            <TeamSection />
            <CTASection />
        </div>
    );
};

const HeroSection = () => (
    <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-slate-900/90 to-slate-950/90" />
            <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2070&q=80"
                alt="About Global Interns"
                className="h-full w-full object-cover object-center opacity-30"
            />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 text-center">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium text-white mb-8">
                    <span>Bridging the Gap Between Learning & Industry</span>
                </div>
                <h1 className="text-4xl lg:text-7xl font-bold tracking-tight mb-6">
                    We Are <span className="text-accent-orange">Global Interns</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Empowering the next generation of professionals through unrestricted access to global mentorship and world-class career programs.
                </p>
            </motion.div>
        </div>
    </section>
);

const MissionSection = () => (
    <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    To democratize access to premium career opportunities and mentorship. We believe that talent is universal, but opportunities are not. We exist to fix that imbalance.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                    By partnering with industry giants like IBM, Microsoft, and Meta, we bring world-class curriculum directly to students, helping them bridge the gap between academic theory and practical application.
                </p>
            </div>
            <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent-orange/20 to-purple-500/20 rounded-2xl filter blur-xl opacity-70"></div>
                <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1740&q=80"
                    alt="Our Mission"
                    className="relative rounded-2xl shadow-2xl border border-gray-100"
                />
            </div>
        </div>
    </section>
);

const StatsSection = () => (
    <section className="bg-gray-50 border-y border-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                    { label: 'Students Trained', value: '10,000+', icon: Users },
                    { label: 'Countries Reach', value: '25+', icon: Globe },
                    { label: 'Corporate Partners', value: '50+', icon: Award },
                    { label: 'Career Transitions', value: '95%', icon: TrendingUp },
                ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mx-auto mb-4 text-accent-orange">
                            <stat.icon className="w-6 h-6" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                        <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const ValuesSection = () => (
    <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Values</h2>
            <p className="text-gray-600">The principles that guide every decision we make.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {[
                { title: 'Student First', desc: 'Every program, every mentor, every decision is made with the student\'s success as the primary metric.', icon: Heart },
                { title: 'Excellence', desc: 'We don\'t settle for "good enough". We strive for world-class quality in our curriculum and instructional design.', icon: Award },
                { title: 'Impact', desc: 'We focus on tangible outcomes: jobs landed, skills mastered, and careers transformed.', icon: Target },
            ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center text-gray-900 mb-6 mx-auto">
                        <item.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                        {item.desc}
                    </p>
                </div>
            ))}
        </div>
    </section>
);

const TeamSection = () => (
    <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-gray-600">A passionate team of educators, engineers, and creatives.</p>
        </div>
        {/* Placeholder for team members, can be expanded later */}
        <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[3/4]">
                    <img
                        src={`https://source.unsplash.com/random/400x500?portrait&sig=${i}`}
                        alt="Team Member"
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <div className="text-white font-bold text-lg">Team Member {i}</div>
                        <div className="text-white/80 text-sm">Position Title</div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const CTASection = () => (
    <section className="bg-slate-900 py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-gray-400 mb-10 text-lg">Join thousands of students who have transformed their careers with Global Interns.</p>
            <a href="/find-dream-job" className="inline-block bg-accent-orange hover:bg-accent-hover text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-orange-500/20">
                Get Started Today
            </a>
        </div>
    </section>
);


export default AboutUs;
