import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: 'Freelance Full Stack Developer',
            company: 'Sandhya Granites',
            period: 'Mar 2026 - May 2026',
            description: 'Collaborated, Built and deployed a responsive business platform using ReactJS, Next.js, Tailwind CSS, and Vercel. Improved Lighthouse performance score from 65 to 85 using image optimization and lazy loading techniques. Achieved 100/100 SEO and best practices scores with 0.2s First Contentful Paint (FCP). Collaborated with stakeholders following Agile-style iterative development and Git branching workflows.',
            tags: ['ReactJS', 'Next.js', 'Tailwind CSS', 'Vercel']
        }
    ];

    return (
        <section id="experience" className="py-20 bg-zinc-950">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-zinc-900 border border-white/5 p-8 rounded-2xl shadow-lg hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] transition-all duration-300 relative"
                        >
                            <div className="absolute top-8 right-8 text-primary/20 hidden sm:block">
                                <Briefcase className="w-16 h-16" />
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                            <h4 className="text-lg font-medium text-primary mb-2">{exp.company}</h4>
                            <p className="text-sm font-semibold text-zinc-500 mb-6 uppercase tracking-wider">{exp.period}</p>
                            
                            <p className="text-zinc-300 mb-6 leading-relaxed">
                                {exp.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                                {exp.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-zinc-300 rounded-full text-xs font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
