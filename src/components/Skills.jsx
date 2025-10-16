import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server, Wrench } from 'lucide-react';

const Skills = () => {
  // Mapeo: nombre → clase de Devicon (todas existen en la versión enlazada)
  const ICONS = {
    // Frontend
    "HTML": "devicon-html5-plain colored",
    "CSS": "devicon-css3-plain colored",
    "Bootstrap": "devicon-bootstrap-plain colored",
    "JavaScript": "devicon-javascript-plain colored",
    "React": "devicon-react-original colored",
    "Blazor (ASP.NET)": "devicon-dotnetcore-plain colored",

    // Backend
    "C#": "devicon-csharp-plain colored",
    ".NET": "devicon-dotnetcore-plain colored",
    "Entity Framework": "devicon-dotnetcore-plain colored",
    "Node.js": "devicon-nodejs-plain colored",
    "TypeScript": "devicon-typescript-plain colored",

    // Bases de datos
    "SQL Server": "devicon-microsoftsqlserver-plain colored",
    "MySQL": "devicon-mysql-plain colored",
    "MongoDB": "devicon-mongodb-plain colored",

    // Herramientas
    "Git": "devicon-git-plain colored",
    "GitHub": "devicon-github-original",
    "VS Code": "devicon-vscode-plain colored",
    "Figma": "devicon-figma-plain colored",
  };

  const skillCategories = [
    {
      title: "Backend",
      icon: Server,
      color: "from-purple-400 to-pink-500",
      skills: ["C#", ".NET", "Entity Framework", "Node.js", "TypeScript"]
    },
    {
      title: "Frontend",
      icon: Code2,
      color: "from-cyan-400 to-blue-500",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "React", "Blazor (ASP.NET)"]
    },
    {
      title: "Bases de Datos",
      icon: Database,
      color: "from-green-400 to-emerald-500",
      skills: ["SQL Server", "MySQL", "MongoDB"]
    },
    {
      title: "Herramientas",
      icon: Wrench,
      color: "from-orange-400 to-red-500",
      skills: ["Git", "GitHub", "VS Code", "Figma"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-slate-900/50">
      <div className="container mx-auto max-w-7xl">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Habilidades
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-16"></div>
        </motion.div>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-effect rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                {/* Encabezado */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Lista nombre + ícono a la derecha */}
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="flex items-center justify-between bg-slate-800/40 hover:bg-slate-800/70 p-3 rounded-lg transition-all duration-300"
                    >
                      <span className="text-slate-200 font-medium">{skill}</span>
                      <i className={`${ICONS[skill]} text-2xl`}></i>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
