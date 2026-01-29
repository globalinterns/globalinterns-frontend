import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileCategoryOpen, setMobileCategoryOpen] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    // Grouping the user's list into categories for the dropdown
    const programCategories = [
        {
            title: 'Technology',
            items: [
                { name: 'Artificial Intelligence', path: '/program/artificial-intelligence' },
                { name: 'Machine Learning', path: '/program/machine-learning' },
                { name: 'Data Science', path: '/program/data-science' },
                { name: 'Web Development', path: '/program/web-development' }, // Linked specific page
                { name: 'Android Development', path: '/program/android-development' },
                { name: 'Cyber Security', path: '/program/cyber-security' },
                { name: 'Java', path: '/program/java' },
                { name: 'Python', path: '/program/python' }
            ]
        },
        {
            title: 'Engineering',
            items: [
                { name: 'Embedded System', path: '/program/embedded-systems' },
                { name: 'Internet of Things', path: '/program/internet-of-things' },
                { name: 'Hybrid Electric Vehicle', path: '/program/hybrid-electric-vehicle' },
                { name: 'Robotics', path: '/program/robotics' },
                { name: 'Construction Planning', path: '/program/construction-planning' },
                { name: 'IC Engine Design', path: '/program/ic-engine-design' }
            ]
        },
        {
            title: 'Business',
            items: [
                { name: 'Human Resources', path: '/program/human-resources' },
                { name: 'Finance', path: '/program/finance' },
                { name: 'Sales & Marketing', path: '/program/sales-marketing' },
                { name: 'Digital Marketing', path: '/program/digital-marketing' },
                { name: 'Stock Market', path: '/program/stock-market' }
            ]
        },
        {
            title: 'Life Sciences',
            items: [
                { name: 'Industrial Biotechnology', path: '/program/industrial-biotechnology' },
                { name: 'Psychology', path: '/program/psychology' },
                { name: 'Medical Coding', path: '/program/medical-coding' }
            ]
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (item) => {
        if (item.type === 'dropdown') return; // Do nothing on click for dropdown (handled by hover)

        if (item.type === 'link') {
            navigate(item.path);
            window.scrollTo(0, 0);
        } else if (item.type === 'scroll') {
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

    const handleProgramClick = (path) => {
        if (path && path !== '#') {
            navigate(path);
            window.scrollTo(0, 0);
        }
        setHoveredItem(null);
    };

    const navItems = [
        { label: 'Career Starter', id: 'career-starter', type: 'dropdown' },
        { label: 'Go Global', path: '/global', type: 'link' },
        { label: 'Find Your Dream Job', path: '/find-dream-job', type: 'link' },
        { label: 'How It Works', id: 'how-it-works', type: 'scroll' },
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
                        {navItems.map((item, index) => {
                            if (item.label === 'Find Your Dream Job') {
                                return (
                                    <div key={index} className="relative py-6 flex items-center">
                                        <button
                                            onClick={() => handleNavClick(item)}
                                            className="relative group overflow-hidden px-5 py-2 rounded-full bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 hover:border-orange-300 hover:-translate-y-0.5"
                                        >
                                            <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="absolute top-0 left-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />

                                            <span className="relative flex items-center gap-2 text-sm font-bold text-accent-orange tracking-wide">
                                                <Sparkles className="w-4 h-4 animate-pulse" />
                                                {item.label}
                                                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                                </span>
                                            </span>
                                        </button>
                                    </div>
                                );
                            }

                            return (
                                <div
                                    key={index}
                                    onMouseEnter={() => item.type === 'dropdown' && setHoveredItem(item.label)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    className="relative py-6"
                                >
                                    <button
                                        onClick={() => handleNavClick(item)}
                                        className="flex items-center gap-1 text-text-secondary font-medium transition-colors hover:text-text-primary group"
                                    >
                                        {item.label}
                                        {item.type === 'dropdown' && (
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform duration-200 ${hoveredItem === item.label ? 'rotate-180' : ''}`}
                                            />
                                        )}
                                        <span className={`absolute left-0 bottom-5 h-[2px] transition-all group-hover:w-full ${(item.path === location.pathname || (item.label === 'Career Starter' && location.pathname.includes('/program/'))) ? 'w-full bg-accent-orange' : 'w-0 bg-accent-orange'}`} />
                                    </button>

                                    {/* Dropdown Menu */}
                                    <AnimatePresence>
                                        {item.type === 'dropdown' && hoveredItem === item.label && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute left-1/2 -translate-x-1/2 top-full mt-0 
                                            w-[900px] bg-white/95 backdrop-blur-xl border border-border rounded-3xl shadow-xl p-8 
                                            grid grid-cols-4 gap-8 z-50 origin-top"
                                            >
                                                {programCategories.map((category, idx) => (
                                                    <div key={idx} className="space-y-4">
                                                        <h3 className="text-sm font-bold text-accent-orange uppercase tracking-wider border-b border-border pb-2">
                                                            {category.title}
                                                        </h3>
                                                        <ul className="space-y-3">
                                                            {category.items.map((subItem, subIdx) => (
                                                                <li key={subIdx}>
                                                                    <button
                                                                        onClick={() => handleProgramClick(subItem.path)}
                                                                        className={`text-sm text-text-secondary hover:text-text-primary hover:font-medium transition-all text-left block w-full
                                                                    ${location.pathname === subItem.path ? 'text-accent-orange font-medium' : ''}`}
                                                                    >
                                                                        {subItem.name}
                                                                    </button>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-3">


                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.open('https://forms.gle/x2pA6hG49zrpp84K8', '_blank')}
                            className="bg-accent-orange hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-xl shadow-md shadow-accent-orange/30 transition-all hidden sm:block"
                        >
                            Apply Now
                        </motion.button>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-border shadow-2xl overflow-hidden absolute top-full left-0 right-0 max-h-[85vh] overflow-y-auto"
                    >
                        <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
                            {navItems.map((item, index) => (
                                <div key={index} className="border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                                    {item.type === 'dropdown' ? (
                                        <div className="space-y-2">
                                            <button
                                                onClick={() => setMobileCategoryOpen(mobileCategoryOpen === item.label ? '' : item.label)}
                                                className="flex items-center justify-between w-full text-lg font-medium text-text-primary py-2"
                                            >
                                                {item.label}
                                                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileCategoryOpen === item.label ? 'rotate-180' : ''}`} />
                                            </button>

                                            <AnimatePresence>
                                                {mobileCategoryOpen === item.label && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="space-y-6 pl-4 pb-4"
                                                    >
                                                        {programCategories.map((cat, i) => (
                                                            <div key={i} className="space-y-3">
                                                                <div className="text-xs font-bold text-accent-orange uppercase tracking-wider">
                                                                    {cat.title}
                                                                </div>
                                                                <div className="grid grid-cols-1 gap-2 border-l-2 border-gray-100 pl-3">
                                                                    {cat.items.map((sub, j) => (
                                                                        <button
                                                                            key={j}
                                                                            onClick={() => handleProgramClick(sub.path)}
                                                                            className="text-sm text-text-secondary hover:text-text-primary text-left py-1"
                                                                        >
                                                                            {sub.name}
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => handleNavClick(item)}
                                            className="block w-full text-left text-lg font-medium text-text-primary py-2 hover:text-accent-orange transition-colors"
                                        >
                                            {item.label}
                                        </button>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 pb-8 flex flex-col gap-4">

                                <button
                                    onClick={() => window.open('https://forms.gle/x2pA6hG49zrpp84K8', '_blank')}
                                    className="w-full bg-accent-orange text-white font-bold py-4 rounded-xl shadow-lg shadow-accent-orange/20"
                                >
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;