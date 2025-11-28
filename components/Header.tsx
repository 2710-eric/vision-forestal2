
import React, { useState } from 'react';

// ENLACE ESPECÍFICO PROPORCIONADO POR EL USUARIO
const PROJECT_SHARE_LINK = "https://aistudio.google.com/app/prompts?state=%7B%22ids%22:%5B%221QJVunkLs_u6x3TimJkO45g8u3guWh2AD%22%5D,%22action%22:%22open%22,%22userId%22:%22117238167330404210211%22,%22resourceKeys%22:%7B%7D%7D&usp=sharing";

const LeafIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ShareIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.235 0 1.22-.328 2.417-.953 3.499l1.012 3.693 3.778-1.011c1.036.593 2.195.916 3.393.916 3.737 0 6.777-3.04 6.777-6.777-.001-1.812-.705-3.513-1.986-4.792zm-8.877 9.873c-1.077 0-2.133-.29-3.059-.838l-.219-.13-2.276.61 1.637-2.219-.142-.228c-.62-.991-.947-2.137-.947-3.327 0-3.468 2.821-6.289 6.29-6.289 1.679 0 3.259.654 4.448 1.843 1.188 1.188 1.843 2.768 1.843 4.448 0 3.469-2.822 6.13-6.275 6.13z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
);


interface HeaderProps {
  showNavLinks: boolean;
}

const Header: React.FC<HeaderProps> = ({ showNavLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu if open
    }
  };

  const handleShare = (platform: string) => {
      const message = "¡Mira este proyecto increíble para prevenir incendios forestales! 🌲🔥";
      const url = PROJECT_SHARE_LINK;

      if (platform === 'whatsapp') {
          window.open(`https://wa.me/?text=${encodeURIComponent(message + ' ' + url)}`, '_blank');
      } else if (platform === 'facebook') {
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
      } else if (platform === 'instagram') {
          // Instagram no tiene API directa de compartir enlace, copiamos y abrimos
          copyToClipboard(url);
          setTimeout(() => {
              alert("Enlace copiado. ¡Pégalo en tu historia de Instagram!");
              window.open('https://www.instagram.com/', '_blank');
          }, 500);
      } else if (platform === 'copy') {
          copyToClipboard(url);
      }
      setIsShareOpen(false);
  };

  const copyToClipboard = (text: string) => {
    // 1. Try Modern API
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text)
            .then(() => alert("¡Enlace copiado al portapapeles! 📋"))
            .catch(() => fallbackCopy(text));
    } else {
        fallbackCopy(text);
    }
  };

  const fallbackCopy = (text: string) => {
    // 2. Fallback: Create element
    try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
             alert("¡Enlace copiado al portapapeles! 📋");
             return;
        }
        throw new Error("Copy failed");
    } catch (err) {
        // 3. Fallback: Manual Prompt
        prompt("Copia el enlace manualmente:", text);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-40 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <LeafIcon />
          <h1 className="text-2xl font-bold text-brand-green tracking-tight">Vision Forestal</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className={`hidden md:flex space-x-8 transition-opacity duration-500 ${showNavLinks ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <button onClick={() => scrollToSection('solucion')} className="text-gray-600 hover:text-brand-green font-medium transition-colors">Solución</button>
          <button onClick={() => scrollToSection('como-funciona')} className="text-gray-600 hover:text-brand-green font-medium transition-colors">Cómo Funciona</button>
          <button onClick={() => scrollToSection('prevencion')} className="text-gray-600 hover:text-brand-green font-medium transition-colors">Prevención</button>
          <button onClick={() => scrollToSection('impacto')} className="text-gray-600 hover:text-brand-green font-medium transition-colors">Impacto</button>
          <button onClick={() => scrollToSection('estadisticas')} className="text-gray-600 hover:text-brand-green font-medium transition-colors">Estadísticas</button>
          
          {/* Contacto Popover */}
          <div className="relative">
            <button 
                onClick={() => setShowContact(!showContact)}
                className="text-gray-600 hover:text-brand-green font-medium transition-colors"
            >
                Contacto
            </button>
            {showContact && (
                <>
                <div className="fixed inset-0 z-10" onClick={() => setShowContact(false)}></div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-20 animate-fade-in">
                    <p className="text-sm text-gray-500 mb-1">WhatsApp de Eric:</p>
                    <a href="https://wa.me/56958949818" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-brand-green font-bold text-lg hover:text-brand-orange transition-colors">
                        <WhatsAppIcon />
                        <span>+56 9 5894 9818</span>
                    </a>
                </div>
                </>
            )}
          </div>

          <button onClick={() => scrollToSection('feedback')} className="text-gray-600 hover:text-brand-green font-medium transition-colors">Opinión</button>
        </nav>

        {/* Share Button (Desktop & Mobile) */}
        <div className="relative">
            <button 
              onClick={() => setIsShareOpen(!isShareOpen)}
              className={`flex items-center space-x-2 bg-gradient-to-r from-brand-light-green to-brand-green text-white px-4 py-2 rounded-full hover:shadow-lg transition-all transform hover:scale-105 ${showNavLinks ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <ShareIcon />
              <span className="font-semibold">Compartir</span>
            </button>

            {isShareOpen && (
                <>
                <div className="fixed inset-0 z-40" onClick={() => setIsShareOpen(false)}></div>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fade-in">
                    <button onClick={() => handleShare('whatsapp')} className="w-full text-left px-4 py-3 hover:bg-green-50 flex items-center space-x-3 text-gray-700 transition-colors">
                        <span className="text-green-500"><WhatsAppIcon /></span>
                        <span>WhatsApp</span>
                    </button>
                    <button onClick={() => handleShare('facebook')} className="w-full text-left px-4 py-3 hover:bg-blue-50 flex items-center space-x-3 text-gray-700 transition-colors">
                        <span className="text-blue-600"><FacebookIcon /></span>
                        <span>Facebook</span>
                    </button>
                    <button onClick={() => handleShare('instagram')} className="w-full text-left px-4 py-3 hover:bg-pink-50 flex items-center space-x-3 text-gray-700 transition-colors">
                        <span className="text-pink-500"><InstagramIcon /></span>
                        <span>Instagram</span>
                    </button>
                    <div className="border-t border-gray-100"></div>
                    <button onClick={() => handleShare('copy')} className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center space-x-3 text-gray-700 transition-colors">
                        <span className="text-gray-500"><LinkIcon /></span>
                        <span>Copiar Enlace</span>
                    </button>
                </div>
                </>
            )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden text-brand-green focus:outline-none ${showNavLinks ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && showNavLinks && (
        <div className="md:hidden bg-white border-t border-gray-100 py-2">
          <button onClick={() => scrollToSection('solucion')} className="block w-full text-left px-6 py-2 text-gray-700 hover:bg-brand-beige">Solución</button>
          <button onClick={() => scrollToSection('como-funciona')} className="block w-full text-left px-6 py-2 text-gray-700 hover:bg-brand-beige">Cómo Funciona</button>
          <button onClick={() => scrollToSection('prevencion')} className="block w-full text-left px-6 py-2 text-gray-700 hover:bg-brand-beige">Prevención</button>
          <button onClick={() => scrollToSection('impacto')} className="block w-full text-left px-6 py-2 text-gray-700 hover:bg-brand-beige">Impacto</button>
          <button onClick={() => scrollToSection('estadisticas')} className="block w-full text-left px-6 py-2 text-gray-700 hover:bg-brand-beige">Estadísticas</button>
          <button onClick={() => { setShowContact(!showContact); }} className="block w-full text-left px-6 py-2 text-gray-700 hover:bg-brand-beige font-bold text-brand-green">
             Contacto (+56 9 5894 9818)
          </button>
          <button onClick={() => scrollToSection('feedback')} className="block w-full text-left px-6 py-2 text-gray-700 hover:bg-brand-beige">Opinión</button>
        </div>
      )}
    </header>
  );
};

export default Header;
