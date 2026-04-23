const FlagFR = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    viewBox="0 0 900 600" 
    className={className}
    role="img"
    aria-label="French flag"
  >
    <rect width="900" height="600" fill="#ED2939"/>
    <rect width="600" height="600" fill="#fff"/>
    <rect width="300" height="600" fill="#002395"/>
  </svg>
);

export default FlagFR;
