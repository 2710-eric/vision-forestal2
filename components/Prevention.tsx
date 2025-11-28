
import React from 'react';

const PhoneIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const AlertIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
);


const PreventionStep: React.FC<{ number: string, title: string, description: string }> = ({ number, title, description }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-lg">{number}</div>
    <div className="ml-4">
      <h3 className="text-lg font-semibold text-brand-brown">{title}</h3>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  </div>
);

const EmergencyContact: React.FC<{ agency: string, number: string }> = ({ agency, number }) => (
    <a href={`tel:${number.replace(/\s/g, '')}`} className="flex items-center p-3 bg-white rounded-md hover:bg-gray-50 transition-colors shadow-sm border border-gray-200">
        <PhoneIcon />
        <div className="ml-4 flex-grow">
            <p className="font-bold text-brand-brown">{agency}</p>
            <p className="text-xl text-brand-green font-semibold tracking-wider">{number}</p>
        </div>
    </a>
);

const Prevention: React.FC = () => {
  return (
    <section id="prevencion" className="py-20 bg-brand-light-green/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-green mb-4">Tu Rol es Clave en la Prevención</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            La mayoría de los incendios son causados por acciones humanas. Sigue estos consejos y aprende cómo actuar.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column: Prevention Steps */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-brand-brown mb-8 text-center lg:text-left">¿Cómo Prevenir un Incendio?</h3>
            <div className="space-y-8">
              <PreventionStep number="1" title="No hagas fogatas" description="Nunca enciendas fuego en zonas no autorizadas o en días de alta temperatura y viento. Una pequeña chispa puede ser catastrófica." />
              <PreventionStep number="2" title="Apaga bien cigarros y fósforos" description="No los arrojes al suelo desde vehículos o mientras caminas. Asegúrate de que estén completamente apagados en un lugar seguro." />
              <PreventionStep number="3" title="Maneja herramientas con cuidado" description="Evita usar maquinaria que genere chispas (como soldadoras o amoladoras) cerca de vegetación seca." />
              <PreventionStep number="4" title="Mantén el área limpia" description="Despeja la vegetación seca, basura y otros materiales inflamables alrededor de tu hogar, terreno o lugar de acampada." />
            </div>
          </div>

          {/* Right Column: Emergency Actions & Numbers */}
          <div className="lg:w-1/2 w-full bg-white p-6 sm:p-8 rounded-lg shadow-xl border-t-4 border-brand-orange">
            <div className="flex items-center mb-6">
                <AlertIcon />
                <h3 className="text-2xl font-bold text-brand-brown ml-4">¿Qué Hacer en Caso de Incendio?</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 pl-2">
                <li>Mantén la calma y aléjate del fuego y del humo.</li>
                <li>Tu seguridad es la prioridad; evacúa a una zona segura.</li>
                <li>Llama a emergencias lo antes posible.</li>
            </ul>
            <h4 className="text-xl font-bold text-brand-brown mb-4">Números de Emergencia (Chile)</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <EmergencyContact agency="CONAF (Incendios)" number="130" />
                <EmergencyContact agency="Bomberos" number="132" />
                <EmergencyContact agency="Carabineros" number="133" />
                <EmergencyContact agency="Ambulancia SAMU" number="131" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prevention;
