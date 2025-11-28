import React from 'react';

// Flame Icon for number of fires
const FlameIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.C14 5 16.09 5.777 17.657 7.343A8 8 0 0117.657 18.657z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.343 17.657a8 8 0 011.414-1.414" />
  </svg>
);

// Area/Map Icon for hectares
const AreaIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const fireData = [
  { year: 2021, hectares: '150,000', fires: '7,100' },
  { year: 2022, hectares: '125,000', fires: '6,800' },
  { year: 2023, hectares: '432,000', fires: '7,550' },
  { year: 2024, hectares: '95,000', fires: '6,500' },
];

const Stats: React.FC = () => {
  return (
    <section id="estadisticas" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-brand-green mb-4">La Realidad en Cifras</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Los incendios forestales en Chile son un desafío constante. Estas cifras muestran la magnitud del problema en los últimos años.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {fireData.map((data) => (
            <div key={data.year} className="bg-brand-beige/50 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border-t-4 border-brand-orange">
              <h3 className="text-3xl font-bold text-brand-brown mb-4">{data.year}</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center">
                  <AreaIcon />
                  <div className="ml-3">
                    <p className="font-semibold text-brand-brown text-lg">{data.hectares} ha</p>
                    <p className="text-sm text-gray-600">Hectáreas afectadas</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FlameIcon />
                  <div className="ml-3">
                    <p className="font-semibold text-brand-brown text-lg">{data.fires}</p>
                    <p className="text-sm text-gray-600">N° de incendios</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-8 italic">
            Fuente: Datos recopilados y promediados de informes públicos. Cifras aproximadas para fines ilustrativos.
        </p>
      </div>
    </section>
  );
};

export default Stats;