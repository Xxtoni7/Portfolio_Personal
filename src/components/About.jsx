import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Download } from 'lucide-react';
import { Button } from './ui/button';
import fotoPerfil from '../Img/fotoPerfil.jpg';

const About = () => {

  return (
    <section id="about" className="section-padding bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Sobre mí
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-16"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-2xl opacity-30"></div>
              <img 
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-cyan-400/50 shadow-2xl"
                alt="Antonio Riveros - Programador Full Stack"
               src={fotoPerfil} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              Soy un desarrollador Full Stack, apasionado por la tecnología y el aprendizaje continuo. 
              Me encanta enfrentar nuevos desafíos y crear soluciones innovadoras que marquen la diferencia.
            </p>

            <div className="glass-effect rounded-2xl p-6 border border-cyan-400/20">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-600 p-3 rounded-lg">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">Formación Académica</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Soy estudiante de <span className="font-semibold text-cyan-400">3er año</span> de la Tecnicatura Superior en Análisis de Sistemas en el <span className="font-semibold text-white">Instituto Superior Tecnológico Empresarial Argentino.</span> Poseo una base sólida en desarrollo de software, aplicaciones móviles, gestión de bases de datos y metodologías ágiles.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed">
              Mi objetivo es seguir creciendo profesionalmente, contribuir a proyectos desafiantes y aplicar mis conocimientos en el desarrollo de soluciones tecnológicas robustas y escalables.
            </p>

            <div className="flex justify-center mt-8">
              <a
                href="/CV_Antonio_Riveros.pdf"
                download="CV_Antonio_Riveros.pdf"
                className="block"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  <Download className="mr-2" size={20} />
                  Descargar Curriculum Vitae
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;