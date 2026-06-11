import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Let's Talk</h3>
                        <p className="text-zinc-400 mb-8">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500">Email</p>
                                    <a href="mailto:rajanivennapusa966@gmail.com" className="text-white font-medium hover:text-primary">rajanivennapusa966@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500">Phone</p>
                                    <a href="tel:+917416374961" className="text-white font-medium hover:text-primary">+91 7416374961</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500">Location</p>
                                    <p className="text-white font-medium">India</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-10">
                            <a href="https://www.linkedin.com/in/rajani-vennapusa-4a938938b/" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-white transition-colors duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/rajanivennapusa966-glitch" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-white transition-colors duration-300">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-zinc-950 border border-white/5 p-8 rounded-2xl shadow-xl"
                    >
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-white/10 bg-zinc-900 text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-zinc-600"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-white/10 bg-zinc-900 text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-zinc-600"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-2 border border-white/10 bg-zinc-900 text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-zinc-600"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
