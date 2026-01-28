import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (item) => {
        if (item.type === 'link') {
            navigate(item.path);
            window.scrollTo(0, 0);
        } else {
            if (location.pathname === '/') {
                const element = document.getElementById(item.id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                navigate('/', { state: { scrollTo: item.id } });
            }
        }
    };

    const navItems = [
        { label: 'Programs', id: 'programs', type: 'scroll' },
        { label: 'How It Works', id: 'how-it-works', type: 'scroll' },
        { label: 'Certificate', id: 'certificate', type: 'scroll' },
        { label: 'Campus Ambassador', path: '/campus-ambassador', type: 'link' },
    ];

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
                    ? 'bg-white/80 backdrop-blur-lg border-b border-border shadow-sm'
                    : 'bg-transparent'}
      `}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0 cursor-pointer" onClick={() => { navigate('/'); window.scrollTo(0, 0); }}>
                        <img
                            src="/global-interns-logo.png"
                            alt="Global Interns"
                            className="h-12 w-auto"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-10">
                        {navItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleNavClick(item)}
                                className="relative text-text-secondary font-medium transition-colors hover:text-text-primary group"
                            >
                                {item.label}
                                <span className={`absolute left-0 -bottom-1 h-[2px] transition-all group-hover:w-full ${location.pathname === item.path ? 'w-full bg-accent-orange' : 'w-0 bg-accent-orange'}`} />
                            </button>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-3">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleNavClick({ id: 'apply', type: 'scroll' })}
                            className="bg-accent-orange hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-xl shadow-md shadow-accent-orange/30 transition-all"
                        >
                            Apply Now
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
