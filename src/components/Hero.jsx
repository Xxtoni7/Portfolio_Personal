import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from './ui/button';


const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            <motion.p initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.2
          }} className="text-cyan-400 text-lg md:text-xl mb-4 font-medium"></motion.p>
            
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text">
              Antonio Riveros
            </motion.h1>

            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }} className="text-2xl md:text-4xl lg:text-5xl font-semibold text-slate-300 mb-8">
              Full Stack Developer 
            </motion.h2>

            <motion.p initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.5
          }} className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Apasionado por crear experiencias web innovadoras y soluciones tecnológicas eficientes
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6
          }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button onClick={scrollToProjects} size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
                Ver mis proyectos
              </Button>
              
              <a 
                href="/CV_Antonio_Riveros.pdf"
                download="CV_Antonio_Riveros.pdf"
                className="block"
              >
                <Button size="lg" variant="outline" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
                  <Download className="mr-2" size={20} />
                  Descargar CV
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1,
      duration: 1
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2
      }}>
          <ArrowDown className="text-cyan-400" size={32} />
        </motion.div>
      </motion.div>
    </section>;
};
export default Hero;