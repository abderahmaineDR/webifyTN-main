import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const HeroAnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  
  // Only show animated background on home page
  const isHomePage = location.pathname === "/";
  
  // Don't render anything if not on home page
  if (!isHomePage) {
    return null;
  }

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize floating orbs with staggered delays
    const orbs = container.querySelectorAll('.hero-orb');
    orbs.forEach((orb, index) => {
      const element = orb as HTMLElement;
      element.style.animationDelay = `${index * 0.5}s`;
    });
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 -z-10 overflow-hidden"
      style={{ 
        willChange: 'transform',
        contain: 'layout style'
      }}
    >
      {/* Base gradient layer - from animated_bg light theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/20" />
      
      {/* Animated mesh gradient - from animated_bg light theme */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-primary/40 dark:from-primary/20 via-primary/10 dark:via-transparent to-transparent rounded-full blur-3xl animate-hero-float-slow" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-accent-glow/50 dark:from-accent-glow/30 via-accent-glow/15 dark:via-transparent to-transparent rounded-full blur-3xl animate-hero-float-medium" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-secondary-glow/45 dark:from-secondary-glow/25 via-secondary-glow/12 dark:via-transparent to-transparent rounded-full blur-3xl animate-hero-float-reverse" />
      </div>

      {/* Floating geometric shapes - from animated_bg light theme */}
      <div className="absolute inset-0">
        {/* Large orbs */}
        <div className="hero-orb absolute top-[10%] left-[15%] w-72 h-72 rounded-full bg-gradient-to-br from-primary/25 dark:from-primary/10 to-accent/12 dark:to-accent/5 backdrop-blur-sm animate-hero-morph" />
        <div className="hero-orb absolute top-[60%] right-[10%] w-96 h-96 rounded-full bg-gradient-to-tl from-accent-glow/35 dark:from-accent-glow/15 to-primary/12 dark:to-primary/5 backdrop-blur-sm animate-hero-morph-reverse" />
        <div className="hero-orb absolute bottom-[20%] left-[25%] w-64 h-64 rounded-full bg-gradient-to-tr from-secondary-glow/28 dark:from-secondary-glow/10 to-transparent backdrop-blur-sm animate-hero-morph-slow" />
        
        {/* Medium floating elements */}
        <div className="absolute top-[30%] right-[30%] w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/20 dark:from-primary/8 to-transparent rotate-45 animate-hero-spin-very-slow backdrop-blur-sm border border-primary/12 dark:border-primary/5" />
        <div className="absolute bottom-[40%] left-[10%] w-24 h-24 rounded-full bg-gradient-to-tl from-accent/22 dark:from-accent/10 to-transparent animate-hero-bounce-slow backdrop-blur-sm" />
        <div className="absolute top-[70%] right-[45%] w-20 h-20 rounded-xl bg-gradient-to-br from-secondary-glow/26 dark:from-secondary-glow/12 to-transparent rotate-12 animate-hero-float-slow backdrop-blur-sm border border-accent/12 dark:border-accent/5" />
        
        {/* Additional animated shapes for richness */}
        {/* Large organic blob - top right */}
        <div className="absolute top-[15%] right-[20%] w-80 h-80 rounded-full bg-gradient-radial from-primary/18 dark:from-primary/8 via-accent-glow/10 dark:via-accent-glow/5 to-transparent blur-2xl animate-hero-pulse-soft" />
        
        {/* Medium triangle/diamond shape - left middle */}
        <div className="absolute top-[45%] left-[5%] w-40 h-40 bg-gradient-to-tr from-accent-glow/20 dark:from-accent-glow/10 to-primary/10 dark:to-primary/5 rotate-12 animate-hero-drift-diagonal backdrop-blur-sm" 
             style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
        
        {/* Small floating circle - top center */}
        <div className="absolute top-[25%] left-[40%] w-28 h-28 rounded-full bg-gradient-to-br from-secondary-glow/22 dark:from-secondary-glow/10 to-transparent animate-hero-float-circle backdrop-blur-sm border border-secondary-glow/15 dark:border-secondary-glow/8" />
        
        {/* Medium square with rounded corners - bottom right */}
        <div className="absolute bottom-[15%] right-[35%] w-36 h-36 rounded-3xl bg-gradient-to-bl from-primary/16 dark:from-primary/7 via-accent/12 dark:via-accent/6 to-transparent animate-hero-rotate-slow backdrop-blur-sm border border-primary/10 dark:border-primary/5" />
        
        {/* Small accent circle - middle right */}
        <div className="absolute top-[55%] right-[15%] w-20 h-20 rounded-full bg-gradient-to-tr from-accent-glow/24 dark:from-accent-glow/12 to-transparent animate-hero-float-circle backdrop-blur-sm" 
             style={{ animationDelay: "2s" }} />
      </div>

      {/* Subtle grid overlay - from animated_bg light theme */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Noise texture overlay - from animated_bg light theme */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="hero-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#hero-noise)" />
        </svg>
      </div>

      {/* Floating particles - from animated_bg light theme */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/20 animate-hero-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing lines - from animated_bg light theme */}
      <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hero-line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,300 Q400,100 800,300 T1600,300"
          fill="none"
          stroke="url(#hero-line-gradient)"
          strokeWidth="1"
          className="animate-hero-path-draw"
        />
        <path
          d="M0,500 Q300,300 600,500 T1200,500"
          fill="none"
          stroke="url(#hero-line-gradient)"
          strokeWidth="0.5"
          className="animate-hero-path-draw-reverse"
        />
      </svg>
    </div>
  );
};

export default HeroAnimatedBackground;