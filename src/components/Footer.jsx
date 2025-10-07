import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-cyan-400/20 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            Desarrollado por <span className="gradient-text font-semibold">Antonio Riveros</span>
          </p>
          <p className="text-slate-500 text-sm mt-2">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;