
import React, { useState } from 'react';

const Feedback: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [likesProject, setLikesProject] = useState('');
  const [changes, setChanges] = useState('');
  const [wouldInvest, setWouldInvest] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent("Feedback sobre el proyecto Vision Forestal");
    const body = encodeURIComponent(
      `Nombre: ${name}\n` +
      `Correo de contacto: ${email}\n\n` +
      `¿Le gusta el proyecto?: ${likesProject}\n\n` +
      `¿Qué le cambiaría?:\n${changes}\n\n` +
      `¿Invertiría en este proyecto?: ${wouldInvest}`
    );
    window.location.href = `mailto:eric27102004@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="feedback" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-brand-green mb-4">¡Tu Opinión es Importante!</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
          Nos encantaría saber qué piensas sobre Vision Forestal. Tu feedback nos ayuda a mejorar.
        </p>
        <div className="max-w-xl mx-auto text-left">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="feedback-name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input
                  id="feedback-name"
                  type="text"
                  placeholder="Tu Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-brand-light-green rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                />
              </div>
              <div>
                <label htmlFor="feedback-email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                <input
                  id="feedback-email"
                  type="email"
                  placeholder="Tu Correo Electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-brand-light-green rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                />
              </div>
            </div>

            <fieldset>
              <legend className="text-lg font-semibold text-brand-brown mb-3">¿Te gusta este proyecto?</legend>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="likesProject" value="Sí" checked={likesProject === 'Sí'} onChange={(e) => setLikesProject(e.target.value)} required className="h-4 w-4 text-brand-green focus:ring-brand-green border-gray-300"/>
                  <span>Sí</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="likesProject" value="No" checked={likesProject === 'No'} onChange={(e) => setLikesProject(e.target.value)} className="h-4 w-4 text-brand-green focus:ring-brand-green border-gray-300"/>
                  <span>No</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="likesProject" value="No estoy seguro/a" checked={likesProject === 'No estoy seguro/a'} onChange={(e) => setLikesProject(e.target.value)} className="h-4 w-4 text-brand-green focus:ring-brand-green border-gray-300"/>
                  <span>No estoy seguro/a</span>
                </label>
              </div>
            </fieldset>

            <div>
              <label htmlFor="changes" className="block text-lg font-semibold text-brand-brown mb-3">¿Qué le cambiarías?</label>
              <textarea
                id="changes"
                placeholder="Tus sugerencias, ideas, críticas constructivas..."
                rows={5}
                value={changes}
                onChange={(e) => setChanges(e.target.value)}
                required
                className="w-full px-4 py-3 border border-brand-light-green rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
              ></textarea>
            </div>

            <fieldset>
              <legend className="text-lg font-semibold text-brand-brown mb-3">¿Invertirías en este proyecto?</legend>
               <div className="flex flex-wrap gap-x-6 gap-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="wouldInvest" value="Sí" checked={wouldInvest === 'Sí'} onChange={(e) => setWouldInvest(e.target.value)} required className="h-4 w-4 text-brand-green focus:ring-brand-green border-gray-300"/>
                  <span>Sí</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="wouldInvest" value="No" checked={wouldInvest === 'No'} onChange={(e) => setWouldInvest(e.target.value)} className="h-4 w-4 text-brand-green focus:ring-brand-green border-gray-300"/>
                  <span>No</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="wouldInvest" value="Quizás" checked={wouldInvest === 'Quizás'} onChange={(e) => setWouldInvest(e.target.value)} className="h-4 w-4 text-brand-green focus:ring-brand-green border-gray-300"/>
                  <span>Quizás</span>
                </label>
              </div>
            </fieldset>

            <button
              type="submit"
              className="w-full bg-brand-orange text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Enviar Opinión
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
