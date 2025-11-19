import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

// ------------------ MOCKUPS ----------------------------------

const BrowserMockup = ({ src }) => {
  return (
    <div className="w-full bg-white border rounded-xl shadow-xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-200">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <img src={src} className="w-full h-auto" />
    </div>
  );
};

const PhoneMockup = ({ src }) => {
  return (
    <div className="mx-auto bg-black rounded-[2.2rem] p-3 shadow-2xl w-[13rem] h-[26rem] overflow-hidden">
      <img src={src} className="rounded-2xl w-full h-full object-cover" />
    </div>
  );
};

// -------------------------------------------------------------

const Projects = () => {
  const { toast } = useToast();

  const projects = [
    {
      title: " Micromecánica Rotania SRL",
      description: "Diseño y desarrollo de una landing page moderna, minimalista y totalmente responsiva para la empresa Micromecánica Rotania SRL. El sitio presenta una experiencia clara, visual y ágil, con secciones estratégicas que comunican la identidad de la empresa y sus principales servicios: taller mecánico, repuestos y estética automotor. Incluye animaciones suaves, navegación optimizada y componentes UI de alto impacto orientados a la conversión.",
      technologies: ["React", "Vite", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      demoUrl: "https://micromecanicarotania.com/",
      githubUrl: "https://github.com/Xxtoni7/Micromecanica-Rotania-",

      desktopImage: "/images/MicromecanicaRotania/RotaniaPc.png",
      mobileImage: "/images/MicromecanicaRotania/RotaniaMovil.png",
    },
    {
      title: "OrtRefacciones",
      description: "Landing page desarrollada para la empresa ORTRefacciones, enfocada en mostrar su identidad y servicios. Incluye secciones de presentación, contacto y galería de refacciones realizadas, brindando una experiencia moderna y responsive.",
      technologies: ["React", "Vite", "Tailwind CSS", "HTML", "CSS", "JavaScript"],

      demoUrl: "https://ortrefacciones1.netlify.app/",
      githubUrl: "https://github.com/Xxtoni7/ORT_Refacciones",

      desktopImage: "/images/OrtRefacciones/OrtRefacciones1.png",
      mobileImage: "/images/OrtRefacciones/OrtMovil.png",
    },
    {
      title: "E-Commerce Responsive",
      description:"Plataforma e-commerce moderna y responsiva que permite explorar productos, agregar al carrito, realizar compras y gestionar pedidos de manera sencilla e intuitiva.",
      technologies: ["JavaScript", "HTML", "CSS", "Bootstrap", "MySQL"],
      images: [
        "/images/EcommerceProy/EcommerceProy1.png",
        "/images/EcommerceProy/EcommerceProy2.png",
        "/images/EcommerceProy/EcommerceProy3.png",
        "/images/EcommerceProy/EcommerceProy4.png",
      ],
      githubUrl: "https://github.com/franciscojrey/ecommerce-istea",

      // desktopImage: "/mockups/ecommerce-desktop.png",
      // mobileImage: "/mockups/ecommerce-mobile.png",
    },
    {
      title: "Sistema de Gestión para Ferretería",
      description: "Sistema CRUD desarrollado para una ferretería, compuesto por tres microservicios independientes: productos, clientes y órdenes. Cada servicio permite crear, editar y eliminar registros, y el módulo de órdenes valida la existencia de clientes y stock disponible antes de generar una venta. Incluye un frontend para la interacción del usuario, garantizando una gestión integral y eficiente del negocio.",
      technologies: ["ASP.NET Core Web API", "SQL Server", "Blazor"],
      images: [
        "/images/GestionFerreteria/GestionFerreteria1.png",
        "/images/GestionFerreteria/GestionFerreteria2.png",
        "/images/GestionFerreteria/GestionFerreteria3.png",
        "/images/GestionFerreteria/GestionFerreteria4.png",
        "/images/GestionFerreteria/GestionFerreteria5.png",
        "/images/GestionFerreteria/GestionFerreteria6.png",
      ],
      githubUrl: "https://github.com/Xxtoni7/GestionFerreteria",

      // desktopImage: "/mockups/ferreteria-desktop.png",
      // mobileImage: "/mockups/ferreteria-mobile.png",
    },
  ];

  const handleProjectClick = (projectTitle) => {
    toast({
      title: "🚧 Proyecto en desarrollo",
      description: `El enlace para "${projectTitle}" estará disponible pronto. 🚀`,
    });
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Proyectos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-16"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const [currentImage, setCurrentImage] = useState(0);

            const nextImage = () => {
              setCurrentImage((prev) =>
                prev === project.images.length - 1 ? 0 : prev + 1
              );
            };

            const prevImage = () => {
              setCurrentImage((prev) =>
                prev === 0 ? project.images.length - 1 : prev - 1
              );
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-2xl overflow-hidden border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                
                {/*  MOCKUPS o IMÁGENES  */}
                <div className="relative overflow-hidden p-4 bg-slate-900/40 rounded-t-2xl">
                  {project.desktopImage || project.mobileImage ? (
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">

                      {project.desktopImage && (
                        <div className="hidden md:block w-2/3">
                          <BrowserMockup src={project.desktopImage} />
                        </div>
                      )}

                      {project.mobileImage && (
                        <div className="w-full flex justify-center md:w-1/3">
                          <PhoneMockup src={project.mobileImage} />
                        </div>
                      )}
                    </div>
                  ) : (
                    //  SI NO HAY MOCKUPS, USA TUS IMÁGENES NORMALES 
                    <div className="relative h-52 md:h-56 group">
                      <img
                        className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500 rounded-t-2xl shadow-lg"
                        alt={project.title}
                        src={project.images[currentImage]}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60"></div>

                      {project.images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/60 hover:bg-slate-900/90 text-white p-2 rounded-full transition"
                          >
                            ‹
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/60 hover:bg-slate-900/90 text-white p-2 rounded-full transition"
                          >
                            ›
                          </button>
                        </>
                      )}
                    </div>
                  )}
                </div>
                {/* ----------------------------------------- */}

                {/* Contenido del proyecto */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                          <ExternalLink className="mr-2" size={18} />
                          Ver 
                        </Button>
                      </a>
                    ) : (
                      <Button
                        onClick={() => handleProjectClick(project.title)}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink className="mr-2" size={18} />
                        Sin Url
                      </Button>
                    )}

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          className="w-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                        >
                          <Github className="mr-2" size={18} />
                          GitHub
                        </Button>
                      </a>
                    ) : (
                      <Button
                        onClick={() => handleProjectClick(project.title)}
                        variant="outline"
                        className="flex-1 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <Github className="mr-2" size={18} />
                        GitHub
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
