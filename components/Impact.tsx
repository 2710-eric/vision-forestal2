
import React from 'react';

const Impact: React.FC = () => {
  return (
    <section id="impacto" className="py-24 bg-brand-green text-white">
      <div className="container mx-auto px-6 text-center">
        <p className="text-2xl text-brand-light-green mb-2 font-light">Nuestro Objetivo Principal</p>
        <h2 className="text-6xl md:text-8xl font-bold mb-6">
          Reducir los Incendios Forestales en al menos un 
          <span className="text-brand-orange"> 5%</span>
        </h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto mb-10 leading-relaxed">
          Este objetivo no solo significa salvar árboles. Significa proteger la biodiversidad, resguardar comunidades, mejorar la calidad del aire y asegurar un planeta más sano para las futuras generaciones.
        </p>
        <div className="flex justify-center flex-wrap gap-8 text-brand-light-green">
          <div className="flex items-center space-x-3">
            <span className="text-brand-orange font-bold text-2xl">✓</span>
            <span>Protección de Ecosistemas</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-brand-orange font-bold text-2xl">✓</span>
            <span>Seguridad para Comunidades</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-brand-orange font-bold text-2xl">✓</span>
            <span>Respuesta más Rápida</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-brand-orange font-bold text-2xl">✓</span>
            <span>Menos Falsas Alarmas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
