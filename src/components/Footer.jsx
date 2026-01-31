import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Helper for navigation
    const handleNavClick = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Top Section: Logo, Address, Newsletter */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

                    {/* Brand & Addresses (Left - spans 7 cols) */}
                    <div className="lg:col-span-7 space-y-10">
                        {/* Logo */}
                        <div>
                            <img
                                src="/global-interns-logo.png"
                                alt="Global Interns"
                                className="h-10 w-auto mb-6"
                            />
                            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                                Empowering the next generation of professionals through
                                world-class virtual internships and mentorships.
                            </p>
                        </div>

                        {/* Addresses */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-accent-orange" />
                                    <span>HQ</span>
                                </h4>
                                <p className="text-sm text-gray-500 leading-relaxed font-light">
                                    Site No -3, HustleHub, 19th Main Rd,<br />
                                    Sector 4, HSR Layout, Bengaluru,<br />
                                    Karnataka - 560102
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-accent-orange" />
                                    <span>BO</span>
                                </h4>
                                <p className="text-sm text-gray-500 leading-relaxed font-light">
                                    2nd Floor, GS Tower, 112, Udyog Vihar<br />
                                    Phase 1, Udyog Vihar, Sector 20,<br />
                                    Gurugram, Haryana - 122016
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter (Right - spans 5 cols) */}
                    <div className="lg:col-span-5">
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 h-full">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Community Exclusive</h3>
                            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                                Subscribe to our newsletter for exclusive updates on the latest releases and special offers.
                            </p>
                            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label htmlFor="email" className="sr-only">Email Id</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email Id"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent-orange/20 focus:border-accent-orange outline-none transition-all text-sm bg-white"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-accent-orange text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition-colors text-sm flex items-center justify-center gap-2"
                                >
                                    Sign Up <ArrowRight className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-100">

                    {/* Column 1: Company */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-6">Company</h3>
                        <ul className="space-y-3 text-sm">
                            {[
                                { name: 'About Us', path: '/about-us' },
                                { name: 'Careers', path: '#' },
                                { name: 'Blog', path: '#' },
                                { name: 'Contact Us', path: '#' },
                                { name: 'Apply as Mentor', path: '#' }
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <button
                                        onClick={() => link.path !== '#' ? handleNavClick(link.path) : null}
                                        className={`text-left transition-colors ${link.path === '#' ? 'text-gray-400 cursor-default' : 'text-gray-500 hover:text-accent-orange'}`}
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Industries */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-6">Industries</h3>
                        <ul className="space-y-3 text-sm">
                            {['Marketing', 'Product', 'Data', 'Tech', 'Design'].map((item, idx) => (
                                <li key={idx}>
                                    <span className="text-left text-gray-500 block">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Legal */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-6">Legal</h3>
                        <ul className="space-y-3 text-sm">
                            {[
                                { name: 'Privacy Policy', path: '/privacy-policy' },
                                { name: 'Terms and Condition', path: '/terms-and-conditions' },
                                { name: 'Support', path: '#' },
                                { name: 'FAQ', path: '#' },
                                { name: 'Payment and Refund Policy', path: '/refund-policy' }
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <button
                                        onClick={() => link.path !== '#' ? handleNavClick(link.path) : null}
                                        className={`text-left transition-colors ${link.path === '#' ? 'text-gray-400 cursor-default' : 'text-gray-500 hover:text-accent-orange'}`}
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Get in Touch (Socials) */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-6">Get in Touch</h3>
                        <div className="space-y-6">
                            <a href="mailto:contact@globalinterns.in" className="flex items-center gap-3 text-sm text-gray-500 hover:text-accent-orange transition-colors group">
                                <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-accent-orange group-hover:text-white transition-all">
                                    <Mail className="w-4 h-4" />
                                </span>
                                contact@globalinterns.in
                            </a>
                            <div className="flex gap-3">
                                {[
                                    { icon: Linkedin, href: "https://www.linkedin.com/company/globall-internn/" },
                                    { icon: Instagram, href: "https://www.instagram.com/globallnterns/" },
                                    { icon: Twitter, href: "https://twitter.com/globalinterns" }
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-gray-50 hover:bg-accent-orange hover:text-white text-gray-400 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        <social.icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Global Interns. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        All Systems Operational
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
