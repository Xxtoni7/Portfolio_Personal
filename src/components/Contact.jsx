import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageSquare, Send, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "⚠️ Campos incompletos",
        description: "Por favor completa todos los campos del formulario.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true); 

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "1e4cae8f-2e19-4ae4-904a-cc00da6594b9"); 
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", { 
        method: "POST",
        body: formDataToSend
      });

      if (response.ok) {
        toast({
          title: "✅ ¡Mensaje enviado con éxito!",
          description: "Gracias por contactarte, te responderé pronto.",
          duration: 5000,
        });
        setSuccess(true); 
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: "❌ Error al enviar",
          description: "Hubo un problema al enviar tu mensaje. Inténtalo nuevamente.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "⚠️ Error de conexión",
        description: "Verifica tu conexión e intenta nuevamente.",
        variant: "destructive"
      });
    }

    setLoading(false); 
  };

  const handleSocialClick = (platform) => {
    if (platform === 'GitHub') {
      window.open('https://github.com/Xxtoni7', '_blank');
    } else if (platform === 'LinkedIn') {
      window.open('https://www.linkedin.com/in/toni-riveros316321/', '_blank');
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-8"></div>
          <p className="text-center text-slate-300 text-lg mb-16 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy siempre abierto a nuevas oportunidades y colaboraciones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Envíame un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-slate-300 mb-2 font-medium">
                    <User className="inline mr-2" size={18} />
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-2 font-medium">
                    <Mail className="inline mr-2" size={18} />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-2 font-medium">
                    <MessageSquare className="inline mr-2" size={18} />
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading} 
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-6 rounded-lg shadow-lg shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  {loading ? "Enviando..." : (
                    <>
                      <Send className="mr-2" size={20} />
                      Enviar Mensaje
                    </>
                  )}
                </Button>

                {success && ( 
                  <p className="text-green-500 text-center mt-3">
                    ✅ ¡Tu mensaje fue enviado correctamente!
                  </p>
                )}
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-2xl p-8 border border-cyan-400/20">
              <h3 className="text-2xl font-bold text-white mb-6">Conéctate conmigo</h3>
              
              <div className="space-y-4">
                <button
                  onClick={() => handleSocialClick('GitHub')}
                  className="w-full flex items-center gap-4 p-4 bg-slate-800/50 hover:bg-slate-800 border border-cyan-400/30 hover:border-cyan-400 rounded-lg transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Github className="text-white" size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold">GitHub</p>
                    <p className="text-slate-400 text-sm">Revisa mis proyectos</p>
                  </div>
                </button>

                <button
                  onClick={() => handleSocialClick('LinkedIn')}
                  className="w-full flex items-center gap-4 p-4 bg-slate-800/50 hover:bg-slate-800 border border-cyan-400/30 hover:border-cyan-400 rounded-lg transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Linkedin className="text-white" size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold">LinkedIn</p>
                    <p className="text-slate-400 text-sm">Conectemos profesionalmente</p>
                  </div>
                </button>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8 border border-cyan-400/20">
              <h3 className="text-xl font-bold text-white mb-4">Información de contacto</h3>
              <div className="space-y-3 text-slate-300">
                <p className="flex items-center gap-2">
                  <Mail className="text-cyan-400" size={18} />
                  <span>Disponible vía formulario</span>
                </p>
                <p className="text-sm text-slate-400 mt-4">
                  Respondo todos los mensajes en un plazo de 12-24 horas.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;