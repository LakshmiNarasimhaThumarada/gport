import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StarCursor = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const newStar = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
            };
            setStars((prev) => [...prev, newStar]);

            // Remove star after animation
            setTimeout(() => {
                setStars((prev) => prev.filter((star) => star.id !== newStar.id));
            }, 1000);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            <AnimatePresence>
                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        initial={{ opacity: 1, scale: 1, x: star.x, y: star.y }}
                        animate={{
                            opacity: 0,
                            scale: 0,
                            x: star.x + (Math.random() - 0.5) * 50,
                            y: star.y + (Math.random() - 0.5) * 50,
                            rotate: Math.random() * 360
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute w-4 h-4 text-yellow-400"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-full h-full drop-shadow-md"
                        >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default StarCursor;
