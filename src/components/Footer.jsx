import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (id) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <footer className="bg-primary-bg border-t border-border pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <img
                                src="/global-interns-logo.png"
                                alt="Global Interns"
                                className="h-10 w-auto"
                            />
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Empowering the next generation of professionals through
                            world-class virtual internships and mentorships.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Linkedin, href: "https://www.linkedin.com/company/globall-internn/" },
                                { icon: Instagram, href: "https://www.instagram.com/globallnterns/" },
                                { icon: Mail, href: "mailto:contact@globalinterns.com" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-gray-50 hover:bg-accent-orange hover:text-white text-gray-400 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-6 text-lg">Company</h3>
                        <ul className="space-y-4">
                            <li>
                                <button onClick={() => { navigate('/about-us'); window.scrollTo(0, 0); }} className="text-gray-500 hover:text-accent-orange transition-colors text-sm">
                                    About Us
                                </button>
                            </li>
                            <li>
                                <button onClick={() => { navigate('/campus-ambassador'); window.scrollTo(0, 0); }} className="text-gray-500 hover:text-accent-orange transition-colors text-sm">
                                    Campus Ambassador
                                </button>
                            </li>
                            <li>
                                <button onClick={() => { navigate('/find-dream-job'); window.scrollTo(0, 0); }} className="text-gray-500 hover:text-accent-orange transition-colors text-sm">
                                    Find Your Dream Job
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-6 text-lg">Legal</h3>
                        <ul className="space-y-4">
                            <li>
                                <button onClick={() => { navigate('/privacy-policy'); window.scrollTo(0, 0); }} className="text-gray-500 hover:text-accent-orange transition-colors text-sm">
                                    Privacy Policy
                                </button>
                            </li>
                            <li>
                                <button onClick={() => { navigate('/terms-and-conditions'); window.scrollTo(0, 0); }} className="text-gray-500 hover:text-accent-orange transition-colors text-sm">
                                    Terms & Conditions
                                </button>
                            </li>
                            <li>
                                <button onClick={() => { navigate('/refund-policy'); window.scrollTo(0, 0); }} className="text-gray-500 hover:text-accent-orange transition-colors text-sm">
                                    Refund Policy
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-6 text-lg">Get in Touch</h3>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-accent-orange mt-0.5" />
                                <span>contact@globalinterns.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">LIVE</span>
                                <span>Support Available 24/7</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Global Interns. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="w-2 h-2 rounded-full bg-green-400"></span>
                        All Systems Operational
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
