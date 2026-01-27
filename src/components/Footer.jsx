import React from 'react';
import { Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-primary-bg border-t border-border py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Logo & Tagline */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="mb-4">
                            <img
                                src="/logo.png"
                                alt="Global Interns"
                                className="h-12 w-auto"
                            />
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed max-w-md">
                            Empowering the next generation of professionals through
                            virtual internships with global reach.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-text-primary mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => scrollToSection('programs')}
                                    className="text-text-secondary hover:text-accent-orange transition-colors text-sm"
                                >
                                    Programs
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('how-it-works')}
                                    className="text-text-secondary hover:text-accent-orange transition-colors text-sm"
                                >
                                    How It Works
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('certificate')}
                                    className="text-text-secondary hover:text-accent-orange transition-colors text-sm"
                                >
                                    Certificate
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-text-primary mb-4">Connect</h3>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="w-9 h-9 bg-primary-secondary hover:bg-accent-orange/10 rounded-lg flex items-center justify-center transition-colors group"
                            >
                                <Linkedin className="w-4 h-4 text-text-secondary group-hover:text-accent-orange" />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 bg-primary-secondary hover:bg-accent-orange/10 rounded-lg flex items-center justify-center transition-colors group"
                            >
                                <Twitter className="w-4 h-4 text-text-secondary group-hover:text-accent-orange" />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 bg-primary-secondary hover:bg-accent-orange/10 rounded-lg flex items-center justify-center transition-colors group"
                            >
                                <Instagram className="w-4 h-4 text-text-secondary group-hover:text-accent-orange" />
                            </a>
                            <a
                                href="mailto:contact@globalinterns.com"
                                className="w-9 h-9 bg-primary-secondary hover:bg-accent-orange/10 rounded-lg flex items-center justify-center transition-colors group"
                            >
                                <Mail className="w-4 h-4 text-text-secondary group-hover:text-accent-orange" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-text-secondary">
                            © 2026 Global Interns. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-sm text-text-secondary hover:text-accent-orange transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-sm text-text-secondary hover:text-accent-orange transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
