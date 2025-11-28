
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

// === ICONS ===

const PineTreeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L2 22h20L12 2zm0 3.5l6.5 13H5.5L12 5.5z" fill="#1E4620"/>
    <path d="M12 5L4.5 20h15L12 5z" fill="#2E7D32"/>
    <rect x="11" y="20" width="2" height="4" fill="#5D4037" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const DragIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
    </svg>
);

const GamepadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
  </svg>
);

const ChatBubbleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

const CloudIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
     <path d="M18.5 12c.3 0 .5.1.7.2C19.6 12.1 20 12 20.5 12c1.9 0 3.5 1.6 3.5 3.5S22.4 19 20.5 19H7c-2.8 0-5-2.2-5-5 0-2.4 1.7-4.4 4-4.9C6.8 6.5 9.2 4.5 12 4.5c2.4 0 4.5 1.5 5.3 3.7.4-.1.8-.2 1.2-.2z" opacity="0.8"/>
  </svg>
);

const LeafIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
     <path d="M17 8C8 10 5.9 16.17 3.82 21.34 5.71 21.62 7.5 21 9 20c4.9-3.3 4-11 4-11s.5-5 4-1z" />
  </svg>
);

// === CARTOON ASSETS ===

const CartoonTree = ({ className, color = "#4CAF50" }: { className?: string, color?: string }) => (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
        <path d="M50 15 C30 15, 15 35, 20 50 C10 55, 10 75, 30 80 L30 80 L40 80 L40 95 L60 95 L60 80 L70 80 C90 75, 90 55, 80 50 C85 35, 70 15, 50 15 Z" fill={color} />
        <rect x="42" y="80" width="16" height="20" fill="#795548" />
    </svg>
);

const CartoonFoxFullBody = ({ className, onClick }: { className?: string, onClick?: () => void }) => (
    <svg viewBox="0 0 100 100" className={`${className} ${onClick ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`} onClick={onClick}>
        <path d="M20 65 Q10 55 15 45 Q25 25 40 55" fill="#E65100" />
        <path d="M15 45 Q12 40 18 40 Q20 43 18 47" fill="#FFFFFF" />
        <ellipse cx="50" cy="75" rx="20" ry="15" fill="#EF6C00" />
        <rect x="40" y="85" width="6" height="10" fill="#E65100" rx="3" />
        <rect x="54" y="85" width="6" height="10" fill="#E65100" rx="3" />
        <path d="M35 45 L40 30 L60 30 L65 45 Q50 65 35 45 Z" fill="#EF6C00" /> 
        <path d="M40 30 L35 15 L50 30 Z" fill="#E65100" />
        <path d="M60 30 L65 15 L50 30 Z" fill="#E65100" />
        <circle cx="45" cy="45" r="2" fill="#3E2723" />
        <circle cx="55" cy="45" r="2" fill="#3E2723" />
        <circle cx="50" cy="52" r="3" fill="#3E2723" />
    </svg>
);

// New Puma Asset (Replacing Bear)
const CartoonPumaFullBody = ({ className, onClick }: { className?: string, onClick?: () => void }) => (
    <svg viewBox="0 0 100 100" className={`${className} ${onClick ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`} onClick={onClick}>
        {/* Body */}
        <path d="M20 60 Q30 50 50 50 Q70 50 80 60 L80 80 L70 80 L70 90 L60 90 L60 80 L40 80 L40 90 L30 90 L30 80 L20 80 Z" fill="#D2B48C" />
        {/* Tail */}
        <path d="M80 60 Q95 50 90 80" fill="none" stroke="#D2B48C" strokeWidth="6" strokeLinecap="round" />
        {/* Head */}
        <ellipse cx="25" cy="50" rx="15" ry="12" fill="#D2B48C" />
        {/* Ears */}
        <path d="M15 40 L18 30 L25 38 Z" fill="#D2B48C" />
        <path d="M35 40 L32 30 L25 38 Z" fill="#D2B48C" />
        {/* Face */}
        <circle cx="20" cy="48" r="2" fill="#3E2723" />
        <circle cx="30" cy="48" r="2" fill="#3E2723" />
        <path d="M23 55 Q25 58 27 55" fill="none" stroke="#3E2723" strokeWidth="1" />
    </svg>
);

const CartoonRabbitFullBody = ({ className, onClick }: { className?: string, onClick?: () => void }) => (
    <svg viewBox="0 0 100 100" className={`${className} ${onClick ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`} onClick={onClick}>
        <ellipse cx="50" cy="75" rx="14" ry="12" fill="#F5F5F5" />
        <circle cx="36" cy="75" r="4" fill="#FFFFFF" />
        <ellipse cx="48" cy="86" rx="5" ry="3" fill="#E0E0E0" />
        <ellipse cx="58" cy="86" rx="5" ry="3" fill="#E0E0E0" />
        <ellipse cx="55" cy="58" rx="10" ry="9" fill="#F5F5F5" />
        <ellipse cx="52" cy="40" rx="3" ry="12" fill="#F5F5F5" transform="rotate(-10 52 40)" />
        <ellipse cx="60" cy="40" rx="3" ry="12" fill="#F5F5F5" transform="rotate(10 60 40)" />
        <circle cx="53" cy="56" r="1.5" fill="#333" />
        <circle cx="58" cy="56" r="1.5" fill="#333" />
    </svg>
);

const SurveillanceCamera = ({ className, onClick }: { className?: string, onClick?: () => void }) => (
    <svg viewBox="0 0 100 200" className={`${className} ${onClick ? 'cursor-pointer hover:scale-105 transition-transform' : ''}`} onClick={onClick}>
        {/* Pole */}
        <rect x="45" y="50" width="10" height="150" fill="#546E7A" />
        {/* Camera Body */}
        <rect x="20" y="40" width="40" height="20" rx="5" fill="#CFD8DC" />
        {/* Lens */}
        <circle cx="25" cy="50" r="8" fill="#263238" />
        <circle cx="25" cy="50" r="4" fill="#1976D2" opacity="0.6" />
        {/* Active Light */}
        <circle cx="55" cy="45" r="2" fill="#F44336" className="animate-pulse" />
        {/* Mount */}
        <path d="M45 50 L60 60 L45 70" fill="#78909C" />
    </svg>
);

const SmartWell = ({ className, onClick }: { className?: string, onClick?: () => void }) => (
    <svg viewBox="0 0 100 100" className={`${className} ${onClick ? 'cursor-pointer hover:scale-105 transition-transform' : ''}`} onClick={onClick}>
        {/* Base */}
        <rect x="30" y="70" width="40" height="30" fill="#78909C" />
        <rect x="25" y="90" width="50" height="10" fill="#546E7A" />
        {/* Sprinkler Head */}
        <rect x="45" y="60" width="10" height="10" fill="#37474F" />
        <circle cx="50" cy="60" r="8" fill="#0288D1" opacity="0.8" />
        <circle cx="50" cy="60" r="3" fill="#B3E5FC" className="animate-pulse" />
        {/* Spray lines (decorative) */}
        <path d="M40 55 L30 45" stroke="#4FC3F7" strokeWidth="2" opacity="0.5" />
        <path d="M60 55 L70 45" stroke="#4FC3F7" strokeWidth="2" opacity="0.5" />
    </svg>
);

const WaterSplash = () => (
    <svg viewBox="0 0 100 100" className="animate-mist">
        <circle cx="50" cy="50" r="40" fill="#03A9F4" opacity="0.6" />
        <circle cx="30" cy="30" r="10" fill="#B3E5FC" />
        <circle cx="70" cy="70" r="10" fill="#B3E5FC" />
        <circle cx="70" cy="30" r="8" fill="#B3E5FC" />
        <circle cx="30" cy="70" r="8" fill="#B3E5FC" />
    </svg>
);

// === TYPES ===
interface Message {
  role: 'user' | 'model';
  text: string;
}

interface Fire {
    id: number;
    x: number;
    y: number;
    isExtinguished: boolean;
    createdAt: number;
    lifespan: number;
}

interface LevelConfig {
    level: number;
    phase: string;
    name: string;
    description: string;
    icon: string;
    targetScore: number;
    spawnRate: number;
    fireLifespan: number;
    educationalText: string;
    isPhoneLevel?: boolean;
}

interface InfoModalData {
    type: 'animal' | 'tech';
    title: string;
    subtitle: string;
    content: string;
    alert?: string;
}

// === GAME CONFIGURATION ===
const LEVELS: LevelConfig[] = [
    // PHASE 1: DETECTION (Cameras)
    { level: 1, phase: "Detección", name: "Iniciando Escaneo", description: "Las cámaras térmicas se encienden. Detecta el calor.", icon: "📷", targetScore: 3, spawnRate: 2000, fireLifespan: 5000, educationalText: "¡Inicio exitoso! 📷\n\nNuestras cámaras cubren 20,000 hectáreas. Son los 'ojos' que nunca duermen." },
    { level: 2, phase: "Detección", name: "Calibración", description: "Ajustando sensibilidad térmica.", icon: "🌡️", targetScore: 5, spawnRate: 1800, fireLifespan: 4500, educationalText: "¡Calibrado! 🌡️\n\nDetectamos diferencias de temperatura invisibles para el ojo humano, incluso de noche." },
    { level: 3, phase: "Detección", name: "Rango Máximo", description: "Escaneo de área completa activa.", icon: "🔭", targetScore: 7, spawnRate: 1600, fireLifespan: 4000, educationalText: "¡Área Cubierta! 🔭\n\nNingún rincón del bosque queda sin vigilancia. Ahora pasamos los datos a la IA." },
    
    // PHASE 2: ANALYSIS (AI)
    { level: 4, phase: "Análisis IA", name: "Procesando Datos", description: "La IA filtra las imágenes. Confirma el fuego.", icon: "🧠", targetScore: 6, spawnRate: 1500, fireLifespan: 3500, educationalText: "¡Procesado! 🧠\n\nLa IA analiza patrones de movimiento y calor para distinguir un incendio de una roca caliente." },
    { level: 5, phase: "Análisis IA", name: "Aprendizaje Veloz", description: "El algoritmo mejora su velocidad.", icon: "⚡", targetScore: 8, spawnRate: 1300, fireLifespan: 3000, educationalText: "¡Qué velocidad! ⚡\n\nEn la vida real, este análisis toma milisegundos. La rapidez es vital para ganar tiempo." },
    { level: 6, phase: "Análisis IA", name: "Precisión Total", description: "Eliminando falsas alarmas.", icon: "🎯", targetScore: 10, spawnRate: 1200, fireLifespan: 2800, educationalText: "¡Sin errores! 🎯\n\nAl filtrar falsas alarmas, evitamos movilizar a bomberos innecesariamente, ahorrando recursos." },

    // PHASE 3: RESPONSE (Wells)
    { level: 7, phase: "Respuesta", name: "Activar Pozos", description: "¡Amenaza confirmada! Libera el agua.", icon: "💧", targetScore: 8, spawnRate: 1100, fireLifespan: 2500, educationalText: "¡Pozos Activos! 💧\n\nLos pozos inteligentes reciben la señal y liberan una neblina de agua a alta presión." },
    { level: 8, phase: "Respuesta", name: "Contención", description: "Evita que el fuego se expanda.", icon: "🛡️", targetScore: 12, spawnRate: 1000, fireLifespan: 2200, educationalText: "¡Contenido! 🛡️\n\nLa neblina humedece el ambiente, bajando la temperatura y frenando el avance de las llamas." },
    { level: 9, phase: "Respuesta", name: "Apoyo a Bomberos", description: "Gana tiempo para los equipos humanos.", icon: "🚒", targetScore: 15, spawnRate: 900, fireLifespan: 2000, educationalText: "¡Ayuda en camino! 🚒\n\nGracias a tu contención, los bomberos llegaron a un incendio controlado, no a un infierno." },
    
    // FINAL PHASE
    { level: 10, phase: "Misión Final", name: "Defensa del Ecosistema", description: "Protege todo el bosque a máxima velocidad.", icon: "🏆", targetScore: 20, spawnRate: 800, fireLifespan: 1800, educationalText: "¡DEFENSA EXITOSA! 🌲\n\nHas demostrado cómo Vision Forestal protege la vida. Pero queda un paso vital..." },

    // BONUS LEVEL: EMERGENCY CALL
    { 
        level: 11, 
        phase: "Protocolo Humano", 
        name: "Llamada Vital", 
        description: "Marca el número de emergencia correcto de Chile (CONAF, Bomberos o Carabineros) y llama.", 
        icon: "📞", 
        targetScore: 1, 
        spawnRate: 0, 
        fireLifespan: 0, 
        educationalText: "¡VICTORIA TOTAL! 🌟\n\nLa tecnología ayuda, pero tu conocimiento salva vidas. ¡Gracias por ser parte de la solución!",
        isPhoneLevel: true
    }
];

const ANIMAL_FACTS: Record<string, InfoModalData> = {
    puma: {
        type: 'animal',
        title: "Puma Chileno",
        subtitle: "Depredador tope del ecosistema.",
        content: "Habita en zonas montañosas y bosques densos. Es vital para el equilibrio natural.",
        alert: "Cientos de pumas pierden su territorio cada año por el fuego. Su recuperación toma décadas."
    },
    fox: {
        type: 'animal',
        title: "Zorro Culpeo",
        subtitle: "Habitante frecuente de nuestros bosques.",
        content: "Se adapta a diversos terrenos, pero el fuego lo acorrala fácilmente.",
        alert: "Miles de zorros mueren anualmente asfixiados o atropellados huyendo de incendios."
    },
    rabbit: {
        type: 'animal',
        title: "Conejo y Fauna Menor",
        subtitle: "La base del ecosistema.",
        content: "Viven en madrigueras y pastizales.",
        alert: "Son los más afectados. El calor penetra sus madrigueras y el fuego avanza más rápido que ellos."
    }
};

const TECH_FACTS: Record<string, InfoModalData> = {
    camera: {
        type: 'tech',
        title: "Cámara Térmica",
        subtitle: "Vigilancia 24/7",
        content: "Equipada con sensores infrarrojos, detecta diferencias de temperatura a kilómetros de distancia. Envía alertas instantáneas a la IA."
    },
    well: {
        type: 'tech',
        title: "Pozo Inteligente",
        subtitle: "Respuesta Autónoma",
        content: "Recibe la señal de la IA y activa aspersores de alta presión, creando una barrera de humedad que frena el avance del fuego."
    }
}

const SYSTEM_INSTRUCTION = `
Eres "Guardián Forestal", la IA de "Vision Forestal".
Tu personalidad es amable, experta y ecológica.

TU COMPORTAMIENTO:
1. TEMAS PRIORITARIOS (Proyecto y Naturaleza): Extiéndete.
2. CONTACTO: NO menciones "Eric" ni "+56 9 5894 9818" a menos que te pregunten "¿Quién creó esto?" o "¿Contacto?".
3. TEMAS EXTERNOS: Sé breve y redirige a la naturaleza.
`;

const ChatBot: React.FC = () => {
  // Chat State
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Hola! Soy Guardián Forestal 🌲. Pregúntame sobre el proyecto o juega conmigo a proteger el bosque.' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Game State
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLevelIdx, setCurrentLevelIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [forestHealth, setForestHealth] = useState(100);
  const [fires, setFires] = useState<Fire[]>([]);
  const [gameState, setGameState] = useState<'playing' | 'level_complete' | 'game_over' | 'victory'>('playing');
  const [showLevelIntro, setShowLevelIntro] = useState(true);
  
  // Phone Level State
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState('');

  // Info Modal State
  const [modalData, setModalData] = useState<InfoModalData | null>(null);

  // Dragging State
  const [position, setPosition] = useState({ x: -1, y: -1 });
  const [isDragging, setIsDragging] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLDivElement>(null);

  // === UI EFFECTS ===
  useEffect(() => {
    setPosition({ x: window.innerWidth - 90, y: window.innerHeight - 90 });
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen, isPlaying]);

  // === GAME LOGIC ===
  const startGame = () => {
      setIsPlaying(true);
      setCurrentLevelIdx(0);
      resetLevel();
  };

  const resetLevel = () => {
      setScore(0);
      setForestHealth(100);
      setFires([]);
      setGameState('playing');
      setShowLevelIntro(true);
      setModalData(null);
      setPhoneNumber('');
      setPhoneError('');
  };

  const nextLevel = () => {
      if (currentLevelIdx < LEVELS.length - 1) {
          setCurrentLevelIdx(prev => prev + 1);
          resetLevel();
      } else {
          setGameState('victory');
      }
  };

  // Game Loop
  useEffect(() => {
      if (!isPlaying || gameState !== 'playing' || showLevelIntro || !isOpen || modalData) return;

      const levelConfig = LEVELS[currentLevelIdx];
      
      if (levelConfig.isPhoneLevel) return; // No fires in phone level

      const spawnInterval = setInterval(() => {
          setFires(prev => {
              if (prev.length >= 6) return prev; 
              const id = Date.now();
              return [...prev, {
                  id,
                  x: Math.random() * 80 + 10,
                  y: Math.random() * 60 + 20,
                  isExtinguished: false,
                  createdAt: Date.now(),
                  lifespan: levelConfig.fireLifespan
              }];
          });
      }, levelConfig.spawnRate);

      const healthInterval = setInterval(() => {
          setFires(prev => {
              const now = Date.now();
              let damage = 0;
              const nextFires = prev.filter(fire => {
                  if (fire.isExtinguished) return false;
                  if (now - fire.createdAt > fire.lifespan) {
                      damage += 15;
                      return false;
                  }
                  return true;
              });

              if (damage > 0) {
                  setForestHealth(h => {
                      const newHealth = Math.max(0, h - damage);
                      if (newHealth <= 0) setGameState('game_over');
                      return newHealth;
                  });
              }
              return nextFires;
          });
      }, 500);

      return () => {
          clearInterval(spawnInterval);
          clearInterval(healthInterval);
      };
  }, [isPlaying, gameState, showLevelIntro, isOpen, currentLevelIdx, modalData]);

  const handleFireClick = (id: number) => {
      if (modalData) return;

      setFires(prev => prev.map(f => {
          if (f.id === id) return { ...f, isExtinguished: true };
          return f;
      }));
      
      setTimeout(() => {
          setFires(prev => prev.filter(f => f.id !== id));
          setScore(s => {
              const newScore = s + 1;
              if (newScore >= LEVELS[currentLevelIdx].targetScore) {
                  setGameState(currentLevelIdx === LEVELS.length - 1 ? 'victory' : 'level_complete');
              }
              return newScore;
          });
      }, 400); // Wait for splash animation
  };

  // Phone Level Logic
  const handlePhoneInput = (digit: string) => {
      if (phoneNumber.length < 3) {
          setPhoneNumber(prev => prev + digit);
          setPhoneError('');
      }
  };
  
  const handlePhoneDelete = () => {
      setPhoneNumber(prev => prev.slice(0, -1));
  };

  const handlePhoneCall = () => {
      const validNumbers = ['130', '132', '133'];
      if (validNumbers.includes(phoneNumber)) {
          setGameState('level_complete');
      } else {
          setPhoneError('Número incorrecto. Inténtalo de nuevo.');
          setPhoneNumber('');
      }
  };

  // === CHAT LOGIC ===
  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMessage = inputText;
    setInputText('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: messages.map(m => ({ role: m.role, parts: [{ text: m.text }] }))
                  .concat([{ role: 'user', parts: [{ text: userMessage }] }]),
        config: { systemInstruction: SYSTEM_INSTRUCTION }
      });

      const responseText = response.text || "Inténtalo de nuevo.";
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Error de conexión." }]);
    } finally {
      setIsLoading(false);
    }
  };

  // === DRAG LOGIC ===
  const handleDragStart = (cx: number, cy: number) => {
    setIsDragging(true);
    setHasMoved(false);
    if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        dragStartPos.current = { x: cx - rect.left, y: cy - rect.top };
    }
  };

  const handleDragMove = (cx: number, cy: number) => {
    if (!isDragging) return;
    setHasMoved(true);
    let newX = cx - dragStartPos.current.x;
    let newY = cy - dragStartPos.current.y;
    const maxX = window.innerWidth - 70;
    const maxY = window.innerHeight - 70;
    setPosition({ x: Math.max(10, Math.min(newX, maxX)), y: Math.max(10, Math.min(newY, maxY)) });
  };

  const handleDragEnd = () => setIsDragging(false);

  useEffect(() => {
    const mm = (e: MouseEvent) => handleDragMove(e.clientX, e.clientY);
    const mu = () => handleDragEnd();
    const tm = (e: TouchEvent) => handleDragMove(e.touches[0].clientX, e.touches[0].clientY);
    const tu = () => handleDragEnd();

    if (isDragging) {
        window.addEventListener('mousemove', mm); window.addEventListener('mouseup', mu);
        window.addEventListener('touchmove', tm, { passive: false }); window.addEventListener('touchend', tu);
    }
    return () => {
        window.removeEventListener('mousemove', mm); window.removeEventListener('mouseup', mu);
        window.removeEventListener('touchmove', tm); window.removeEventListener('touchend', tu);
    };
  }, [isDragging]);

  const levelConfig = LEVELS[currentLevelIdx];

  return (
    <>
      <style>{`
        @keyframes sway { 0%, 100% { transform: rotate(-5deg); } 50% { transform: rotate(5deg); } }
        .animate-sway { animation: sway 3s ease-in-out infinite; }
        @keyframes driftCloud { from { transform: translateX(-100%); } to { transform: translateX(350px); } }
        .animate-drift-cloud { animation: driftCloud linear infinite; }
        @keyframes popIn { 0% { transform: scale(0); } 80% { transform: scale(1.1); } 100% { transform: scale(1); } }
        .animate-pop-in { animation: popIn 0.3s ease-out forwards; }
        @keyframes mist { 0% { opacity: 0; transform: scale(0.5); } 50% { opacity: 0.8; } 100% { opacity: 0; transform: scale(1.5); } }
        .animate-mist { animation: mist 0.5s ease-out forwards; }
      `}</style>

      <div 
        ref={buttonRef}
        style={{ left: position.x === -1 ? 'auto' : `${position.x}px`, top: position.y === -1 ? 'auto' : `${position.y}px`, bottom: position.y === -1 ? '24px' : 'auto', right: position.x === -1 ? '24px' : 'auto', touchAction: 'none' }}
        className="fixed z-50 flex flex-col items-end"
      >
        
        <div 
          className={`bg-white rounded-2xl shadow-2xl w-80 sm:w-96 mb-4 overflow-hidden border border-brand-light-green transition-all duration-300 origin-bottom-right absolute bottom-20 right-0 flex flex-col ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
          onMouseDown={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-brand-green text-white p-3 flex justify-between items-center cursor-move relative z-50"
               onMouseDown={(e) => handleDragStart(e.clientX, e.clientY)} onTouchStart={(e) => handleDragStart(e.touches[0].clientX, e.touches[0].clientY)}
          >
            <div className="flex items-center space-x-2">
              <PineTreeIcon className="w-5 h-5 text-brand-light-green" />
              <h3 className="font-bold text-sm">Guardián Forestal</h3>
            </div>
            <div className="flex items-center space-x-3">
                <button onClick={() => setIsPlaying(!isPlaying)} className={`p-1 rounded hover:bg-white/20 transition-colors ${isPlaying ? 'text-brand-orange bg-white/20' : 'text-white'}`} title={isPlaying ? "Volver al Chat" : "Jugar Misión"}>
                    {isPlaying ? <ChatBubbleIcon /> : <GamepadIcon />}
                </button>
                <DragIcon />
                <button onClick={() => setIsOpen(false)}><CloseIcon /></button>
            </div>
          </div>

          {/* CONTENT AREA */}
          <div className="h-80 relative bg-[#e0f2f1] overflow-hidden">
            
            {!isPlaying ? (
              /* --- CHAT VIEW --- */
              <>
                 <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-4 left-0 text-blue-200 animate-drift-cloud" style={{animationDuration: '25s'}}><CloudIcon className="w-12 h-8 opacity-60" /></div>
                    <div className="absolute bottom-0 right-10 text-brand-light-green animate-sway"><LeafIcon className="w-6 h-6" /></div>
                 </div>
                 <div className="absolute inset-0 overflow-y-auto p-4 space-y-4 z-10">
                    {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] p-3 rounded-xl text-sm shadow-sm ${msg.role === 'user' ? 'bg-brand-orange text-white rounded-br-none' : 'bg-white text-brand-brown rounded-bl-none'}`}>
                        {msg.text}
                        </div>
                    </div>
                    ))}
                    {isLoading && <div className="text-xs text-gray-500 ml-4">Escribiendo...</div>}
                    <div ref={messagesEndRef} />
                </div>
                 <form onSubmit={handleSendMessage} className="absolute bottom-0 w-full p-3 bg-white border-t flex items-center space-x-2 z-20">
                    <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Pregunta algo..." className="flex-grow px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none" />
                    <button type="submit" disabled={isLoading} className="bg-brand-green text-white p-2 rounded-full"><SendIcon /></button>
                </form>
              </>
            ) : (
              /* --- GAME VIEW --- */
              <div className="relative h-full w-full select-none cursor-crosshair">
                
                {levelConfig.isPhoneLevel ? (
                    // PHONE INTERFACE
                    <div className="absolute inset-0 bg-gray-900 flex items-center justify-center p-4">
                        <div className="bg-white rounded-3xl p-4 w-64 shadow-inner border-4 border-gray-300 flex flex-col items-center">
                            <div className="w-full bg-gray-100 p-3 rounded-lg mb-4 text-center text-2xl font-mono tracking-widest min-h-[50px] flex items-center justify-center border border-gray-200">
                                {phoneNumber || "___"}
                            </div>
                            {phoneError && <div className="text-red-500 text-xs mb-2 text-center animate-pulse">{phoneError}</div>}
                            <div className="grid grid-cols-3 gap-2 w-full mb-4">
                                {[1,2,3,4,5,6,7,8,9].map(n => (
                                    <button key={n} onClick={() => handlePhoneInput(n.toString())} className="bg-gray-200 p-3 rounded-full font-bold hover:bg-gray-300 active:bg-gray-400">{n}</button>
                                ))}
                                <button className="col-start-2 bg-gray-200 p-3 rounded-full font-bold hover:bg-gray-300 active:bg-gray-400" onClick={() => handlePhoneInput('0')}>0</button>
                                <button className="bg-red-100 p-3 rounded-full font-bold text-red-500 hover:bg-red-200" onClick={handlePhoneDelete}>⌫</button>
                            </div>
                            <button onClick={handlePhoneCall} className="w-full bg-green-500 text-white font-bold py-3 rounded-full hover:bg-green-600 shadow-md">LLAMAR</button>
                        </div>
                    </div>
                ) : (
                    // FOREST GAME INTERFACE
                    <>
                    {/* Game Background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-300 to-blue-100 z-0"></div>
                    <div className="absolute bottom-0 h-1/3 w-full bg-[#8BC34A] z-0 rounded-t-[50px] transform scale-110"></div>
                    
                    {/* Background Trees (Back Layer) */}
                    <CartoonTree className="absolute bottom-16 left-4 w-24 h-24 text-green-800 z-0 opacity-80" />
                    <CartoonTree className="absolute bottom-12 right-1/4 w-16 h-16 text-green-700 z-0 opacity-80" />
                    
                    {/* Interactive Tech */}
                    <div className="absolute bottom-20 right-8 w-12 h-20 z-20" title="Cámara de Vigilancia">
                        <SurveillanceCamera className="w-full h-full" onClick={() => setModalData(TECH_FACTS.camera)} />
                    </div>
                    <div className="absolute bottom-8 right-16 w-12 h-12 z-20" title="Pozo Inteligente">
                        <SmartWell className="w-full h-full" onClick={() => setModalData(TECH_FACTS.well)} />
                    </div>

                    {/* Animals (Interactive - Middle Layer) z-20 */}
                    <div className="absolute bottom-8 left-8 z-20 group" title="Clic para info">
                        <CartoonPumaFullBody className="w-20 h-20 transform scale-x-[-1]" onClick={() => setModalData(ANIMAL_FACTS.puma)} />
                    </div>
                    <div className="absolute bottom-10 left-1/2 z-20 group" title="Clic para info">
                        <CartoonFoxFullBody className="w-12 h-12" onClick={() => setModalData(ANIMAL_FACTS.fox)} />
                    </div>
                    <div className="absolute bottom-5 left-1/3 z-20 group" title="Clic para info">
                        <CartoonRabbitFullBody className="w-8 h-8" onClick={() => setModalData(ANIMAL_FACTS.rabbit)} />
                    </div>

                    {/* Foreground Trees (Front Layer) */}
                    <CartoonTree className="absolute bottom-4 right-2 w-28 h-32 text-green-600 z-10 opacity-90 pointer-events-none" />
                    <CartoonTree className="absolute bottom-2 left-[-10px] w-20 h-24 text-green-500 z-10 opacity-90 pointer-events-none" />

                    {/* HUD z-50 */}
                    <div className="absolute top-0 w-full p-2 flex justify-between items-start z-50 bg-black/10 backdrop-blur-sm pointer-events-none">
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-brand-brown">{levelConfig.phase}: Nivel {levelConfig.level}</span>
                            <div className="flex items-center space-x-1">
                                <span className="text-xs">Salud:</span>
                                <div className="w-20 h-2 bg-gray-300 rounded-full overflow-hidden">
                                    <div className="h-full bg-red-500 transition-all duration-300" style={{width: `${forestHealth}%`}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/80 px-2 py-1 rounded-lg text-xs font-bold shadow-sm">
                            {score}/{levelConfig.targetScore} {levelConfig.icon}
                        </div>
                    </div>

                    {/* Fires z-25 (Above animals, below HUD/Modals) */}
                    {fires.map(fire => (
                        <div 
                            key={fire.id}
                            onClick={() => handleFireClick(fire.id)}
                            className="absolute w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-25 hover:scale-125 transition-transform"
                            style={{ left: `${fire.x}%`, top: `${fire.y}%` }}
                        >
                            {fire.isExtinguished ? (
                                <WaterSplash />
                            ) : (
                                <div className="text-3xl animate-pulse filter drop-shadow-lg">🔥</div>
                            )}
                        </div>
                    ))}
                    </>
                )}

                {/* MODALS & OVERLAYS z-50+ */}
                
                {/* INFO MODAL */}
                {modalData && (
                    <div className="absolute inset-0 bg-black/60 z-[60] flex items-center justify-center p-4">
                        <div className={`bg-white rounded-xl p-4 shadow-2xl w-full max-w-[90%] text-center animate-pop-in border-4 ${modalData.type === 'tech' ? 'border-blue-500' : 'border-brand-green'}`}>
                            <h3 className={`text-lg font-bold mb-1 ${modalData.type === 'tech' ? 'text-blue-600' : 'text-brand-green'}`}>{modalData.title}</h3>
                            <p className="text-xs text-gray-500 mb-2 italic">{modalData.subtitle}</p>
                            <p className="text-xs text-gray-800 mb-3">{modalData.content}</p>
                            {modalData.alert && (
                                <div className="bg-red-50 p-2 rounded-lg text-left mb-3 border-l-4 border-red-500">
                                    <p className="text-[10px] text-red-800 font-bold">⚠️ IMPACTO INCENDIOS:</p>
                                    <p className="text-[10px] text-gray-700">{modalData.alert}</p>
                                </div>
                            )}
                            <button onClick={() => setModalData(null)} className="bg-gray-800 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">Cerrar</button>
                        </div>
                    </div>
                )}

                {/* LEVEL INTRO */}
                {showLevelIntro && !modalData && (
                    <div className="absolute inset-0 bg-black/80 z-[55] flex flex-col items-center justify-center text-white p-6 text-center">
                        <div className="text-4xl mb-2">{levelConfig.icon}</div>
                        <h3 className="text-xl font-bold mb-1">Nivel {currentLevelIdx + 1}</h3>
                        <p className="text-sm font-semibold text-brand-orange mb-2">{levelConfig.name}</p>
                        <p className="mb-4 text-xs text-gray-300">{levelConfig.description}</p>
                        {!levelConfig.isPhoneLevel && <p className="text-[10px] text-gray-400 mb-4">(Apaga los fuegos antes de que dañen el bosque)</p>}
                        <button onClick={() => setShowLevelIntro(false)} className="bg-brand-orange px-6 py-2 rounded-full font-bold animate-bounce">¡Comenzar!</button>
                    </div>
                )}

                {/* LEVEL COMPLETE */}
                {gameState === 'level_complete' && (
                    <div className="absolute inset-0 bg-brand-green/95 z-[55] flex flex-col items-center justify-center text-white p-6 text-center">
                        <h3 className="text-2xl font-bold mb-2">¡Nivel Completado!</h3>
                        <p className="mb-6 text-sm whitespace-pre-line leading-relaxed">{levelConfig.educationalText}</p>
                        <button onClick={nextLevel} className="bg-white text-brand-green px-6 py-2 rounded-full font-bold shadow-lg">
                            {currentLevelIdx === LEVELS.length - 1 ? 'Terminar' : 'Siguiente Nivel ➡️'}
                        </button>
                    </div>
                )}

                {/* VICTORY */}
                {gameState === 'victory' && (
                    <div className="absolute inset-0 bg-brand-orange/95 z-[55] flex flex-col items-center justify-center text-white p-6 text-center">
                        <div className="text-6xl mb-4">🏆</div>
                        <h3 className="text-2xl font-bold mb-2">¡Misión Cumplida!</h3>
                        <p className="mb-6 text-sm">Has completado todas las etapas de defensa de Vision Forestal. Gracias por proteger nuestro futuro.</p>
                        <button onClick={startGame} className="bg-white text-brand-orange px-6 py-2 rounded-full font-bold shadow-lg">Jugar de Nuevo 🔄</button>
                    </div>
                )}

                {/* GAME OVER */}
                {gameState === 'game_over' && (
                    <div className="absolute inset-0 bg-red-900/95 z-[55] flex flex-col items-center justify-center text-white p-6 text-center">
                        <div className="text-5xl mb-2">🔥</div>
                        <h3 className="text-2xl font-bold mb-2">Alerta Crítica</h3>
                        <p className="mb-6 text-sm">El fuego se salió de control.</p>
                        <div className="flex space-x-3">
                            <button onClick={resetLevel} className="bg-white text-red-900 px-4 py-2 rounded-full font-bold text-xs shadow-lg">Reintentar Nivel</button>
                            <button onClick={startGame} className="bg-red-700 text-white px-4 py-2 rounded-full font-bold text-xs shadow-lg">Reiniciar Todo</button>
                        </div>
                    </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Floating Button */}
        <div
            onMouseDown={(e) => handleDragStart(e.clientX, e.clientY)}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX, e.touches[0].clientY)}
            onClick={() => { if (!hasMoved) setIsOpen(!isOpen); }}
            className="cursor-move group relative transform transition-transform hover:scale-105 active:scale-95"
        >
            <div className="absolute inset-0 bg-brand-green/20 rounded-full animate-ping group-hover:animate-none"></div>
            <div className={`bg-white w-16 h-16 rounded-full shadow-lg border-4 border-brand-green flex items-center justify-center relative z-10 overflow-hidden transition-colors ${isDragging ? 'border-brand-orange' : ''}`}>
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-brand-green animate-sway origin-bottom">
                    <path fill="currentColor" d="M12 2L2 22h20L12 2zm0 3.5l6.5 13H5.5L12 5.5z" />
                    <rect x="11" y="20" width="2" height="4" fill="#5D4037" />
                </svg>
            </div>
            {!isOpen && !isDragging && (
                <div className="absolute -top-2 -right-2 bg-brand-orange text-white text-xs font-bold px-2 py-1 rounded-full shadow-md animate-bounce pointer-events-none">
                    Ayuda
                </div>
            )}
        </div>
      </div>
    </>
  );
};

export default ChatBot;
