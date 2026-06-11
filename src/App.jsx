import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import StarCursor from './components/StarCursor';
import Preloader from './components/Preloader';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isLoading]);

    return (
        <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-primary/30">
            <AnimatePresence mode="wait">
                {isLoading && <Preloader key="preloader" onLoadingComplete={() => setIsLoading(false)} />}
            </AnimatePresence>

            <StarCursor />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <footer className="bg-zinc-950 py-8 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 text-center text-zinc-500 text-sm">
                    <p>© {new Date().getFullYear()} Vennapusa Rajani. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
