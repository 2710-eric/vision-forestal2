
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent("Interés en el proyecto Vision Forestal");
    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo de contacto: ${email}\n\nMensaje:\n${message}`
    );
    // This will open the user's default email client
    window.location.href = `mailto:eric27102004@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="py-20 bg-brand-beige">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-brand-green mb-4">Únete a la Causa</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
          ¿Interesado en implementar nuestra tecnología o conocer más sobre el proyecto? Contáctanos.
        </p>
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input 
              type="text" 
              placeholder="Tu Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-brand-light-green rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
            />
            <input 
              type="email" 
              placeholder="Tu Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-brand-light-green rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
            />
            <textarea 
              placeholder="Tu Mensaje" 
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-4 py-3 border border-brand-light-green rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
            ></textarea>
            <button 
              type="submit"
              className="w-full bg-brand-orange text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;