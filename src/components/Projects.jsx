import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Monitor, Smartphone } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const projects = [
  {
    title: 'Saas MT-Presupuestos',
    description:
      'Diseño y desarrollo de un SaaS para crear, gestionar y exportar presupuestos profesionales de manera rápida y organizada. La plataforma automatiza la tarea y reduce aproximadamente un 40% el tiempo de elaboración de presupuestos. Cuenta con un frontend dinámico y responsivo desarrollado en React, APIs REST construidas con ASP.NET Core Web API y una base de datos relacional, priorizando la usabilidad, la eficiencia y una experiencia de usuario clara.',
    technologies: ['.NET', 'REACT', 'Tailwind CSS', 'JavaScript', 'SQL Server'],
    demoUrl: 'https://mtpresupuestos.netlify.app/',
    githubUrl: 'https://github.com/Xxtoni7/presupuestos-api',
    desktopImage: '/images/MTpresupuestos/MTpresupuestos.png',
    mobileImage: '/images/MTpresupuestos/MTpresupuestosphone.png',
  },
  {
    title: 'Micromecánica Rotania SRL',
    description:
      'Diseño y desarrollo de una landing page moderna, minimalista y totalmente responsiva para la empresa Micromecánica Rotania SRL. El sitio presenta una experiencia clara, visual y ágil, con secciones estratégicas que comunican la identidad de la empresa y sus principales servicios: taller mecánico, repuestos y estética automotor.',
    technologies: ['React', 'Vite', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    demoUrl: 'https://micromecanicarotania.com/',
    githubUrl: 'https://github.com/Xxtoni7/Micromecanica-Rotania-',
    desktopImage: '/images/MicromecanicaRotania/RotaniaPc.png',
    mobileImage: '/images/MicromecanicaRotania/RotaniaMovil.png',
  },
  {
    title: 'MikelFlash',
    description:
      'Landing page desarrollada para la empresa de refacciones MikelFlash, enfocada en mostrar su identidad y servicios. Incluye secciones de presentación, contacto y galería de refacciones realizadas, brindando una experiencia moderna y responsive.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://mikelflash.netlify.app/',
    githubUrl: 'https://github.com/Xxtoni7/MikelFlash-landing',
    desktopImage: '/images/MikelFlash/MikelFlash.png',
    mobileImage: '/images/MikelFlash/MikelFlashPhone.png',
  },
  {
    title: 'Sistema de Gestión para Ferretería',
    description:
      'Sistema CRUD desarrollado para una ferretería, compuesto por tres servicios independientes: productos, clientes y órdenes. Cada servicio permite crear, editar y eliminar registros, y el módulo de órdenes valida la existencia de clientes y stock disponible antes de generar una venta. Incluye un frontend para la interacción del usuario, garantizando una gestión integral y eficiente del negocio.',
    technologies: ['ASP.NET Core Web API', 'SQL Server', 'Blazor'],
    images: [
      '/images/GestionFerreteria/GestionFerreteria1.png',
      '/images/GestionFerreteria/GestionFerreteria2.png',
      '/images/GestionFerreteria/GestionFerreteria3.png',
      '/images/GestionFerreteria/GestionFerreteria4.png',
      '/images/GestionFerreteria/GestionFerreteria5.png',
      '/images/GestionFerreteria/GestionFerreteria6.png',
    ],
    githubUrl: 'https://github.com/Xxtoni7/GestionFerreteria',
  },
];

const BrowserMockup = ({ src, alt }) => (
  <div className="relative w-full">
    <div className="absolute -inset-1 rounded-[1.1rem] bg-gradient-to-r from-cyan-400/20 via-blue-500/10 to-fuchsia-500/20 blur-lg" />
    <div className="relative overflow-hidden rounded-xl border border-white/15 bg-slate-950 shadow-2xl">
      <div className="flex h-9 items-center gap-2 border-b border-slate-300/80 bg-slate-200 px-3">
        <span className="h-3 w-3 rounded-full bg-red-500 shadow-sm" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-amber-400 shadow-sm" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-emerald-500 shadow-sm" aria-hidden="true" />
        <div className="ml-2 hidden h-5 flex-1 items-center rounded-md border border-slate-300 bg-white/80 px-3 sm:flex">
          <span className="truncate text-[10px] font-medium text-slate-400">https://Desarrollado_por_AR.dev</span>
        </div>
        <div className="ml-auto flex gap-1" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
        </div>
      </div>
      <div className="aspect-[2.2/1] overflow-hidden bg-slate-950">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    </div>
  </div>
);

const PhoneMockup = ({ src, alt }) => (
  <div className="relative mx-auto w-full">
    <div className="absolute inset-x-3 -bottom-2 h-4 rounded-full bg-cyan-400/20 blur-xl" />
    <span className="absolute -left-1 top-24 h-10 w-1 rounded-l-full bg-slate-700" aria-hidden="true" />
    <span className="absolute -right-1 top-20 h-12 w-1 rounded-r-full bg-slate-700" aria-hidden="true" />
    <div className="relative aspect-[9/19.5] rounded-[2.5rem] border-[6px] border-slate-950 bg-slate-950 p-1.5 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.95)] ring-1 ring-white/15">
      <div className="h-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="pointer-events-none absolute inset-x-4 bottom-2 h-px bg-white/25" aria-hidden="true" />
    </div>
  </div>
);

const DeviceShowcase = ({ project }) => {
  const [currentView, setCurrentView] = useState(0);
  const views = [
    {
      label: 'Vista de escritorio',
      icon: Monitor,
      src: project.desktopImage,
      alt: `${project.title} en una computadora`,
    },
    {
      label: 'Vista móvil',
      icon: Smartphone,
      src: project.mobileImage,
      alt: `${project.title} en un teléfono móvil`,
    },
  ];
  const activeView = views[currentView];
  const ActiveIcon = activeView.icon;

  const showPreviousView = () => {
    setCurrentView((previous) => (previous - 1 + views.length) % views.length);
  };

  const showNextView = () => {
    setCurrentView((previous) => (previous + 1) % views.length);
  };

  return (
    <div className="relative h-[25rem] overflow-hidden rounded-t-2xl border-b border-white/5 bg-slate-950/70 sm:h-[29rem]">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.08] via-transparent to-blue-600/[0.12]" />
      <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="absolute left-1/2 top-1 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-slate-950/65 px-3 py-1.5 text-xs font-medium text-slate-300 shadow-lg backdrop-blur-md">
        <ActiveIcon size={14} className="text-cyan-400" aria-hidden="true" />
        <span aria-live="polite">{activeView.label}</span>
      </div>

      <div className="relative flex h-full items-center justify-center px-12 pt-5 sm:px-16">
        <motion.div
          key={activeView.src}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className={currentView === 0 ? 'w-full max-w-[42rem]' : 'w-[8.5rem] sm:w-[10rem] lg:w-[11.5rem]'}
        >
          {currentView === 0 ? (
            <BrowserMockup src={activeView.src} alt={activeView.alt} />
          ) : (
            <PhoneMockup src={activeView.src} alt={activeView.alt} />
          )}
        </motion.div>
      </div>

      <button
        type="button"
        onClick={showPreviousView}
        aria-label={`Mostrar ${views[(currentView - 1 + views.length) % views.length].label.toLowerCase()}`}
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-slate-950/70 p-2.5 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:border-cyan-400/60 hover:bg-cyan-500"
      >
        <ChevronLeft size={19} aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={showNextView}
        aria-label={`Mostrar ${views[(currentView + 1) % views.length].label.toLowerCase()}`}
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-slate-950/70 p-2.5 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:border-cyan-400/60 hover:bg-cyan-500"
      >
        <ChevronRight size={19} aria-hidden="true" />
      </button>

    </div>
  );
};

const ProjectGallery = ({ project, currentImage, onPrevious, onNext }) => (
  <div className="relative overflow-hidden rounded-t-2xl border-b border-white/5 bg-slate-950/70 p-4 sm:p-6">
    <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-slate-900 shadow-xl">
      <img
        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
        alt={`${project.title}, captura ${currentImage + 1}`}
        src={project.images[currentImage]}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />

      {project.images.length > 1 && (
        <>
          <button
            type="button"
            onClick={onPrevious}
            aria-label="Imagen anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-slate-950/70 p-2 text-white backdrop-blur-sm transition hover:scale-105 hover:bg-cyan-500"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Imagen siguiente"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-slate-950/70 p-2 text-white backdrop-blur-sm transition hover:scale-105 hover:bg-cyan-500"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full border border-white/10 bg-slate-950/60 px-2.5 py-1.5 backdrop-blur-sm">
            {project.images.map((image, imageIndex) => (
              <span
                key={image}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  imageIndex === currentImage ? 'bg-cyan-400' : 'bg-white/40'
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
        </>
      )}
    </div>
  </div>
);

const ProjectCard = ({ project, index, onUnavailable }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const imageCount = project.images?.length ?? 0;

  const nextImage = () => {
    setCurrentImage((previous) => (previous + 1) % imageCount);
  };

  const previousImage = () => {
    setCurrentImage((previous) => (previous - 1 + imageCount) % imageCount);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-effect group flex h-full flex-col overflow-hidden rounded-2xl border border-cyan-400/20 transition-all duration-300 hover:border-cyan-400/50"
    >
      {project.desktopImage || project.mobileImage ? (
        <DeviceShowcase project={project} />
      ) : (
        <ProjectGallery
          project={project}
          currentImage={currentImage}
          onPrevious={previousImage}
          onNext={nextImage}
        />
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">
          {project.title}
        </h3>

        <p className="mt-4 flex-1 leading-relaxed text-slate-300">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-400"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          {project.demoUrl ? (
            <Button
              asChild
              className="flex-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-cyan-600 hover:to-blue-700"
            >
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2" size={18} />
                Ver
              </a>
            </Button>
          ) : (
            <Button
              type="button"
              onClick={() => onUnavailable(project.title)}
              className="flex-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-cyan-600 hover:to-blue-700"
            >
              <ExternalLink className="mr-2" size={18} />
              Sin URL
            </Button>
          )}

          {project.githubUrl ? (
            <Button
              asChild
              variant="outline"
              className="flex-1 rounded-lg border-2 border-cyan-400 font-semibold text-cyan-400 transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-slate-950"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2" size={18} />
                GitHub
              </a>
            </Button>
          ) : (
            <Button
              type="button"
              onClick={() => onUnavailable(project.title)}
              variant="outline"
              className="flex-1 rounded-lg border-2 border-cyan-400 font-semibold text-cyan-400 transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-slate-950"
            >
              <Github className="mr-2" size={18} />
              GitHub
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const { toast } = useToast();

  const handleProjectClick = (projectTitle) => {
    toast({
      title: 'Proyecto en desarrollo',
      description: `El enlace para "${projectTitle}" estará disponible pronto.`,
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
          <h2 className="gradient-text mb-4 text-center text-4xl font-bold md:text-5xl">
            Proyectos
          </h2>
          <div className="mx-auto mb-16 h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onUnavailable={handleProjectClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
