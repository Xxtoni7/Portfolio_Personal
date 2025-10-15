import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const Projects = () => {
  const { toast } = useToast();

  const projects = [
    {
      title: "OrtRefacciones",
      description: "Landing page desarrollada para la empresa ORTRefacciones, enfocada en mostrar su identidad y servicios. Incluye secciones de presentación, contacto y galería de refacciones realizadas, brindando una experiencia moderna y responsive.",
      technologies: ["React", "Vite", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
      images: [
        "/images/OrtRefacciones/OrtRefacciones1.png",
        "/images/OrtRefacciones/OrtRefacciones2.png",
        "/images/OrtRefacciones/OrtRefacciones3.png",
        "/images/OrtRefacciones/Ortrefacciones4.png",
      ],
      demoUrl: "https://ortrefacciones1.netlify.app/",
      githubUrl: "https://github.com/Xxtoni7/ORT_Refacciones",
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
    },
    {
      title: "Portfolio Interactivo",
      description: "Portfolio personal con animaciones fluidas, diseño moderno y estructura responsiva. Incluye secciones de presentación, proyectos y contacto, ofreciendo una navegación dinámica y visualmente atractiva.",
      technologies: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      images: [
        "/images/PortfolioPersonal/PortfolioPersonal1.png",
        "/images/PortfolioPersonal/PortfolioPersonal2.png",
        "/images/PortfolioPersonal/PortfolioPersonal3.png",
        "/images/PortfolioPersonal/PortfolioPersonal4.png",
        "/images/PortfolioPersonal/PortfolioPersonal5.png",
        "/images/PortfolioPersonal/PortfolioPersonal6.png",
      ],
      demoUrl: "https://portfolio-antonio-riveros.netlify.app/",
      githubUrl: "https://github.com/Xxtoni7/Portfolio_Personal",
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
                {/* Imagen con navegación */}
                <div className="relative overflow-hidden h-52 md:h-56 group">
                  <img
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500 rounded-t-2xl shadow-lg"
                    alt={project.title}
                    src={project.images[currentImage]}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60"></div>

                  {/* Botones de cambio de imagen */}
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
