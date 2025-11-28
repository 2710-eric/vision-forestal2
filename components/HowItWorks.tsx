import React from 'react';

const Step: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
  <div className="relative flex items-start">
    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-xl">
      {number}
    </div>
    <div className="ml-6">
      <h3 className="text-xl font-semibold text-brand-brown">{title}</h3>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-green mb-4">Así es Como Funciona</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Un proceso automatizado y eficiente, desde la detección hasta la primera respuesta en cuestión de segundos.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="lg:w-2/3 space-y-12 relative">
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-brand-light-green" aria-hidden="true"></div>
            <Step 
              number="1"
              title="Detección de Anomalía"
              description="La cámara térmica identifica un punto de calor inusual en el área monitoreada."
            />
            <Step 
              number="2"
              title="Análisis y Confirmación IA"
              description="La IA procesa la imagen, confirma que es un riesgo de incendio y descarta otras fuentes de calor."
            />
            <Step 
              number="3"
              title="Alarma Dual Instantánea"
              description="El sistema envía una alerta simultánea a los pozos inteligentes y a las autoridades competentes."
            />
            <Step 
              number="4"
              title="Acción y Respuesta"
              description="Los pozos liberan la neblina de agua mientras los bomberos se dirigen a la ubicación precisa."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;