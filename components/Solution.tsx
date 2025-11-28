
import React from 'react';
import FeatureCard from './FeatureCard';

const CameraIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
);

const BrainIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);

const WaterIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2.172 5.172a4 4 0 115.656 0M12 18v-3m0 0v-3m0 3h3m-3 0h-3m-2.828-4.828a4 4 0 010-5.656m0 5.656a4 4 0 000-5.656m-5.656 0a4 4 0 010-5.656m0 5.656a4 4 0 000-5.656" /></svg>
);

const SirenIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
);

const Solution: React.FC = () => {
  return (
    <section id="solucion" className="py-20 bg-brand-light-green/20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-brand-green mb-4">Nuestra Solución Integral</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Hemos desarrollado un ecosistema tecnológico que vigila, detecta y actúa en las primeras etapas de un incendio, de forma autónoma y precisa.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<CameraIcon />}
            title="Vigilancia Térmica 24/7"
            description="Cámaras térmicas de alta precisión monitorean 20,000 hectáreas cada una, sin descanso, detectando anomalías de calor invisibles al ojo humano."
          />
          <FeatureCard 
            icon={<BrainIcon />}
            title="IA de Detección Avanzada"
            description="Nuestra IA analiza los datos en tiempo real. Al mínimo indicio de incendio, genera una alerta instantánea, eliminando falsas alarmas por error humano."
          />
          <FeatureCard 
            icon={<WaterIcon />}
            title="Pozos Inteligentes"
            description="La alerta activa pozos cercanos que liberan una neblina de agua espesa, controlando el fuego en su fase inicial y ganando tiempo valioso."
          />
          <FeatureCard 
            icon={<SirenIcon />}
            title="Alerta a Autoridades"
            description="Simultáneamente, la alarma se envía a los bomberos y equipos de emergencia con la ubicación exacta, garantizando una respuesta rápida y coordinada."
          />
        </div>
      </div>
    </section>
  );
};

export default Solution;
