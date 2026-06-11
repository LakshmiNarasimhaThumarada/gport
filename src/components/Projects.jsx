import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Portfolio website',
            description: 'Developed a fully responsive portfolio website showcasing projects, technical skills, and achievements. Improved page performance by 40% through optimized React rendering and asset compression techniques. Implemented smooth animations, mobile-first layouts, and integrated GitHub, LinkedIn, and resume download features.',
            tags: ['ReactJS', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Scam Shield',
            description: 'Developed a scam email detection platform using TF-IDF text classification with high detection accuracy. Integrated Firebase Authentication for secure user sessions with a responsive ReactJS frontend.',
            tags: ['ReactJS', 'Firebase', 'TF-IDF', 'Firebase Authentication'],
            github: '#',
            demo: '#'
        }
    ];

    return (
        <section id="projects" className="py-20 bg-zinc-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-zinc-950 border border-white/5 rounded-2xl p-8 shadow-lg hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] hover:border-white/10 transition-all duration-300 relative group"
                        >
                            <div className="mb-6 text-primary">
                                <FolderGit2 className="w-10 h-10 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                            <p className="text-zinc-400 mb-8 text-base leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-6 mt-auto">
                                <a href={project.github} className="flex items-center text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                                    <Github className="w-5 h-5 mr-2" /> Source Code
                                </a>
                                <a href={project.demo} className="flex items-center text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                                    <ExternalLink className="w-5 h-5 mr-2" /> Live Demo
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
