import React from 'react';

const Problem: React.FC = () => {
  return (
    <section id="problema" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-brand-brown mb-4">Una Amenaza Creciente</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Cada año, los incendios forestales devastan millones de hectáreas, destruyendo ecosistemas, amenazando vidas y liberando enormes cantidades de carbono a la atmósfera. Los métodos tradicionales de detección a menudo son demasiado lentos, permitiendo que pequeños brotes se conviertan en catástrofes incontrolables.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-semibold">
            Es hora de un cambio de paradigma. Es hora de actuar antes de que la primera llama se propague.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;