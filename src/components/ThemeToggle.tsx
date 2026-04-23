import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center gap-2 px-3 py-2.5 min-h-[44px] rounded-full bg-secondary/80 hover:bg-secondary border border-border shadow-sm hover:shadow-md transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
      aria-label="Toggle dark mode"
    >
      {/* Sun Icon - Active in Light Mode */}
      <Sun 
        className={`w-5 h-5 transition-all duration-200 ${
          theme === "light" 
            ? "text-primary scale-110" 
            : "text-muted-foreground scale-90 opacity-50"
        }`} 
      />
      
      {/* Moon Icon - Active in Dark Mode */}
      <Moon 
        className={`w-5 h-5 transition-all duration-200 ${
          theme === "dark" 
            ? "text-primary scale-110" 
            : "text-muted-foreground scale-90 opacity-50"
        }`} 
      />
    </button>
  );
};

export default ThemeToggle;
