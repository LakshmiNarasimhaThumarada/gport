import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onLoadingComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onLoadingComplete();
        }, 3000); // 3 seconds to let the fill animation complete before sliding up
        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
            initial={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        >
            <div className="relative">
                {/* Outline Text */}
                <motion.h1 
                    className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-[0.2em] uppercase text-transparent"
                    style={{ WebkitTextStroke: '2px #09090b' }} // zinc-950 stroke
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    RAJANI
                </motion.h1>

                {/* Filling Text */}
                <motion.div 
                    className="absolute top-0 left-0 overflow-hidden whitespace-nowrap"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                >
                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-[0.2em] uppercase text-zinc-950">
                        RAJANI
                    </h1>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Preloader;
