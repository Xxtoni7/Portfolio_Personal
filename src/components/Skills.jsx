import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      color: "from-cyan-400 to-blue-500",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 65 },
        { name: "Bootstrap", level: 70 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 65 },
        { name: "Blazor (ASP.NET)", level: 65 },
      ]
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: "C#", level: 85 },
        { name: ".NET", level: 85 },
        { name: ".NET Core / ASP.NET MVC", level: 80 },
        { name: "Entity Framework", level: 75 },
        { name: "Node.js", level: 70 }
      ]
    },
    {
      title: "Bases de Datos",
      icon: Database,
      color: "from-green-400 to-emerald-500",
      skills: [
        { name: "SQL Server", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      title: "Herramientas",
      icon: Wrench,
      color: "from-orange-400 to-red-500",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-slate-900/50">
      <div className="container mx-auto max-w-7xl">
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

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glass-effect rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg`}>
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </div>
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