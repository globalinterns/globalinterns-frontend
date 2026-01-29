import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Volume2, VolumeX, Pause, Play } from 'lucide-react';

const Hero = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);
    const audioRef = useRef(null);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    useEffect(() => {
        if (videoRef.current && audioRef.current) {
            if (isPlaying) {
                videoRef.current.play().catch(e => console.log("Video play failed", e));
                audioRef.current.play().catch(e => console.log("Audio play failed", e));
            } else {
                videoRef.current.pause();
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.muted = isMuted;
            // Also mute video to avoid conflict if it has sound, though we rely on mp3
            if (videoRef.current) videoRef.current.muted = true;
        }
    }, [isMuted]);

    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary-bg overflow-hidden">
            {/* Soft background accents */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-orange/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="text-center lg:text-left"
                    >
                        {/* Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 leading-tight">
                            Global Internships for a{' '}
                            <span className="relative inline-block">
                                <span className="text-accent-orange">Borderless</span>
                                <span className="absolute left-0 -bottom-2 w-full h-[6px] bg-accent-orange/30 rounded-full" />
                            </span>{' '}
                            Career
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Gain real-world experience through virtual internships with global exposure.
                            Work on live projects, learn industry-ready skills, and build a career without limits.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => scrollToSection('apply')}
                                className="bg-accent-orange hover:bg-accent-hover text-white font-semibold px-9 py-4 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-accent-orange/30"
                            >
                                Apply for Internship
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => scrollToSection('programs')}
                                className="border border-border hover:border-accent-orange bg-white/60 backdrop-blur text-text-primary font-semibold px-9 py-4 rounded-xl transition-all flex items-center gap-2"
                            >
                                Explore Programs
                                <PlayCircle className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Right Column: Video */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-accent-orange/20 border border-white/20 ring-1 ring-black/5 group">
                            <video
                                ref={videoRef}
                                className="w-full h-auto object-cover rounded-2xl"
                                autoPlay
                                loop
                                muted
                                playsInline
                                poster="/campus-ambassador-hero.png"
                            >
                                <source src="/Video_Generation_Request_Details.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Hidden Audio Element */}
                            <audio ref={audioRef} loop muted>
                                <source src="/hero-music.mp3" type="audio/mpeg" />
                            </audio>

                            {/* Glass overlay effect */}
                            <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10" />

                            {/* Custom Media Controls */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 px-5 py-2.5 rounded-full bg-black/30 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg hover:bg-black/40">

                                <button
                                    onClick={togglePlay}
                                    className="text-white/90 hover:text-white transition-colors"
                                >
                                    {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                                </button>

                                {/* Audio Visualizer (Fake) */}
                                <div className="flex items-end gap-[2px] h-4">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: isPlaying && !isMuted ? [4, 12, 6, 14, 4] : 4 }}
                                            transition={{
                                                duration: 0.5 + Math.random() * 0.5,
                                                repeat: Infinity,
                                                ease: "linear",
                                                delay: i * 0.1
                                            }}
                                            className={`w-1 rounded-full ${isMuted ? 'bg-white/30' : 'bg-accent-orange'}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={toggleMute}
                                    className="text-white/90 hover:text-white transition-colors"
                                >
                                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Decorative blob behind video */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-accent-orange/20 to-blue-400/20 blur-3xl rounded-full opacity-60" />
                    </motion.div>
                </div>

                {/* Stats Section (Full Width Below) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 lg:mt-28 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto"
                >
                    {[
                        {
                            value: '50+',
                            label: 'Hiring Partners',
                            sub: 'Top MNCs & Startups'
                        },
                        {
                            value: '10k+',
                            label: 'Careers Launched',
                            sub: 'Certified Graduates'
                        },
                        {
                            value: '100%',
                            label: 'Verified Internships',
                            sub: 'Remote & Flexible'
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="relative group p-6 rounded-2xl bg-white border border-border hover:border-accent-orange/30 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
                        >
                            <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-orange-600 mb-2">
                                {item.value}
                            </div>
                            <div className="text-lg font-bold text-text-primary">
                                {item.label}
                            </div>
                            <div className="text-sm text-text-secondary mt-1 font-medium">
                                {item.sub}
                            </div>

                            {/* Decor line */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-accent-orange rounded-t-full transition-all group-hover:w-1/2 opacity-0 group-hover:opacity-100" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

