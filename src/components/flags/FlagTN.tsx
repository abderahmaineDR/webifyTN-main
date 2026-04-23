const FlagTN = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    viewBox="0 0 1200 800" 
    className={className}
    role="img"
    aria-label="Tunisian flag"
  >
    <rect width="1200" height="800" fill="#E70013"/>
    <circle cx="600" cy="400" r="200" fill="#fff"/>
    <circle cx="620" cy="400" r="160" fill="#E70013"/>
    <path 
      d="M 560,320 L 640,400 L 560,480 L 700,400 Z" 
      fill="#fff"
    />
  </svg>
);

export default FlagTN;
