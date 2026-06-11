import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import StarCursor from './components/StarCursor';

function App() {
    return (
        <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-primary/30">
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
