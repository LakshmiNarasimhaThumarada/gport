import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: 'React', level: 90, color: 'bg-blue-500' },
        { name: 'Spring Boot', level: 85, color: 'bg-green-500' },
        { name: 'JavaScript', level: 85, color: 'bg-yellow-400' },
        { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
        { name: 'Tailwind CSS', level: 90, color: 'bg-cyan-400' },
        { name: 'Java', level: 80, color: 'bg-red-500' },
    ];

    return (
        <section id="skills" className="py-20 bg-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-zinc-950 border border-white/5 p-6 rounded-xl shadow-lg hover:border-white/10 transition-colors"
                        >
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold text-zinc-200">{skill.name}</span>
                                <span className="text-zinc-400">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-zinc-800 rounded-full h-2.5">
                                <div
                                    className={`h-2.5 rounded-full ${skill.color}`}
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
