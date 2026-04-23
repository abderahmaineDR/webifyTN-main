import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  label: string;
}

const AnimatedCounter = ({ value, label }: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part and suffix
    const numericMatch = value.match(/^(\d+)/);
    const suffix = value.replace(/^\d+/, "");
    
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseInt(numericMatch[1], 10);
    const duration = 2000; // 2 seconds - slow and deliberate
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easing - slow start, fast middle, slow end
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = Math.round(easeProgress * targetNumber);
      setDisplayValue(currentValue + suffix);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-4">
      <p className="text-3xl lg:text-4xl font-bold text-primary mb-2">{displayValue}</p>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default AnimatedCounter;
