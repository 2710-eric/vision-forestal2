
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Impact from './components/Impact';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Prevention from './components/Prevention';
import Feedback from './components/Feedback';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDiscoverMore = () => {
    setShowDetails(true);
  };

  return (
    <div className="min-h-screen bg-brand-beige">
      <Header showNavLinks={showDetails} />
      <main>
        <Hero onDiscoverMore={handleDiscoverMore} />
        {showDetails && (
          <div className="animate-fade-in">
            <Problem />
            <Solution />
            <HowItWorks />
            <Prevention />
            <Impact />
            <Stats />
            <Contact />
            <Feedback />
          </div>
        )}
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
};

export default App;