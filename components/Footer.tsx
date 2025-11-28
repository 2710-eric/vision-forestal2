import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-brown text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Vision Forestal. Todos los derechos reservados.</p>
        <p className="text-sm text-gray-400 mt-1">Protegiendo nuestros bosques, un pixel a la vez.</p>
      </div>
    </footer>
  );
};

export default Footer;