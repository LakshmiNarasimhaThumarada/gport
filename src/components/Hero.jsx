import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import resumeFile from './Rajani_Resume_FS.pdf';
import webVideo from './webvideo.mp4';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-16">
            {/* Video Background */}
            <video
                autoPlay
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src={webVideo} type="video/mp4" />
            </video>
            
            {/* Gradient Overlay to ensure text readability on left while highlighting video on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-0 backdrop-blur-[1px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl flex flex-col items-start text-left"
                >
                    <h2 className="text-lg md:text-xl font-semibold text-primary mb-2 tracking-wide uppercase">Hello, I'm</h2>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
                        Vennapusa Rajani
                    </h1>
                    <h3 className="text-xl sm:text-2xl md:text-3xl text-zinc-300 mb-6 font-light">
                        Full Stack Developer
                    </h3>
                    <p className="text-zinc-300 text-lg mb-8 max-w-lg leading-relaxed">
                        A passionate developer crafting seamless web experiences with React and Spring Boot. Building the future, one line of code at a time.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-start">
                        <a
                            href="#contact"
                            className="group inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 border border-primary/50 text-base font-medium rounded-xl text-white bg-primary/20 hover:bg-primary/40 backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]"
                        >
                            Contact Me
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href={resumeFile}
                            download="Rajani_Resume_FS.pdf"
                            className="group inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 border border-white/10 text-base font-medium rounded-xl text-white bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all duration-300"
                        >
                            Download Resume
                            <Download className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
