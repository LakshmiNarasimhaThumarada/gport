import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import StarCursor from './components/StarCursor';

function App() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <StarCursor />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <footer className="bg-white py-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 text-center text-slate-500">
                    <p>© {new Date().getFullYear()} Vennapusa Rajani. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
