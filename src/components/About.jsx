import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Server } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="p-6 bg-zinc-900 border border-white/5 rounded-xl hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] transition-shadow duration-300"
                    >
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 text-primary">
                            <User className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Who I Am</h3>
                        <p className="text-zinc-400">
                            I'm Vennapusa Rajani, a 20-year-old Full Stack Developer with a passion for building scalable and user-friendly web applications.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="p-6 bg-zinc-900 border border-white/5 rounded-xl hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-shadow duration-300"
                    >
                        <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 text-accent">
                            <Code className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Frontend</h3>
                        <p className="text-zinc-400">
                            I specialize in crafting responsive and interactive user interfaces using React, HTML, CSS, and JavaScript.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="p-6 bg-zinc-900 border border-white/5 rounded-xl hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] transition-shadow duration-300"
                    >
                        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 text-green-400">
                            <Server className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Backend</h3>
                        <p className="text-zinc-400">
                            For the server-side, I leverage the power of Spring Boot to build robust and secure APIs.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
