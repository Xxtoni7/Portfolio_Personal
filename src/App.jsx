import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Antonio Riveros - Full Stack Developer</title>
        <meta name="description" content="Portafolio profesional de Antonio Riveros, Programador Full Stack especializado en desarrollo web con React, .NET y Node.js" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;