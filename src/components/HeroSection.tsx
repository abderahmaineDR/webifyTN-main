import { motion } from "framer-motion";
import HeroAnimatedBackground from "./HeroAnimatedBackground";

interface HeroSectionProps {
  children: React.ReactNode;
  className?: string;
}

const HeroSection = ({ children, className = "" }: HeroSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.8,
        ease: [0.19, 1.0, 0.22, 1.0],
      }}
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Animated Background Layer */}
      <HeroAnimatedBackground />
      

      {/* Content Layer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.6,
          delay: 0.4,
          ease: [0.19, 1.0, 0.22, 1.0],
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
