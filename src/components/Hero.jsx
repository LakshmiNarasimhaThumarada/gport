import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import profileImage from './profile.jpg';
import resumeFile from './Rajani_Resume_FS.pdf';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 text-center md:text-left"
                >
                    <h2 className="text-lg font-semibold text-primary mb-2">Hello, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4">
                        Vennapusa Rajani
                    </h1>
                    <h3 className="text-2xl md:text-3xl text-slate-600 mb-6">
                        Full Stack Developer
                    </h3>
                    <p className="text-slate-600 text-lg mb-8 max-w-lg mx-auto md:mx-0">
                        A 20-year-old passionate developer crafting seamless web experiences with React and Spring Boot.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-blue-600 transition-colors duration-300"
                        >
                            Contact Me
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                        <a
                            href={resumeFile}
                            download="Rajani_Resume_FS.pdf"
                            className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors duration-300"
                        >
                            Download Resume
                            <Download className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex-1 relative"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <img
                            src={profileImage}
                            alt="Vennapusa Rajani"
                            className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
