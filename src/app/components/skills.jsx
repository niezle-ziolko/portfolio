export default function Skills() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600 via-indigo-900 to-green-600" />

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 1024"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="url(#grad1)"
          d="M0,100 C360,180 1080,0 1440,120 L1440,0 L0,0 Z"
          opacity="0.8"
        />

        <path
          fill="url(#grad2)"
          d="M0,220 C480,340 960,160 1440,260 L1440,0 L0,0 Z"
          opacity="0.75"
        />

        <path
          fill="url(#grad3)"
          d="M0,900 C480,760 960,1040 1440,860 L1440,1024 L0,1024 Z"
          opacity="0.9"
        />

        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
          <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#312e81" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
          <linearGradient id="grad3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};