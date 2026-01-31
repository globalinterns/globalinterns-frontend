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

                {/* Top Section: Logo & Address */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">

                    {/* Left: Brand */}
                    <div className="max-w-md">
                        <img
                            src="/global-interns-logo.png"
                            alt="Global Interns"
                            className="h-10 w-auto mb-6"
                        />
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Empowering the next generation of professionals through
                            world-class virtual internships and mentorships.
                        </p>
                    </div>

                    {/* Right: Address */}
                    <div className="lg:text-right">
                        <h4 className="font-semibold text-gray-900 flex items-center lg:justify-end gap-2 mb-4">
                            <MapPin className="w-4 h-4 text-accent-orange" />
                            <span>Address</span>
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed font-light">
                            Global Interns, 46/4, Hosur Rd, Kudlu Gate,<br />
                            Krishna Reddy Industrial Area, Hosapalaya,<br />
                            Muneshwara Nagar, Bengaluru, Karnataka 560068
                        </p>
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