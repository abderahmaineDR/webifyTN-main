import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Track if user has ever scrolled down
      if (scrollTop > 100 && !hasScrolled) {
        setHasScrolled(true);
      }

      // Show button only if user has scrolled before AND is currently scrolled down
      if (hasScrolled) {
        if (scrollTop > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    // Debounce scroll event for performance
    const debouncedHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener("scroll", debouncedHandleScroll, { passive: true });
    
    // Check initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      clearTimeout(timeoutId);
    };
  }, [hasScrolled]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-50 transition-all duration-300 ease-in-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }
      // Position - responsive
      bottom-6 right-6 md:bottom-8 md:right-8
      // Size - responsive
      w-10 h-10 md:w-10 md:h-10
      // Style
      bg-primary hover:bg-primary/90 text-primary-foreground
      rounded-full shadow-lg hover:shadow-xl
      flex items-center justify-center
      // Touch target
      min-w-[44px] min-h-[44px]
      // Animation on hover
      hover:scale-105 active:scale-95
      // Focus styles for accessibility
      focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
      `}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <ArrowUp className="w-8 h-6" />
    </button>
  );
};

export default ScrollToTopButton;
