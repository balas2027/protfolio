import React, { useState } from "react";

function Skills() {
  const [isAnimated, setIsAnimated] = useState(false);

  const skillsData = [
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind CSS",
    "React",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Node.js",
    "MySQL",
    "MongoDB",
    "Express.js",
    "Next.js",
    "Java",
    "C",
    "C++",
    "DSA",
    "phpMyAdmin",
    "VS Code",
    "Git",
    "Figma",
    "Vite",
  ];

  const handleMouseEnter = () => {
    if (!isAnimated) {
      setIsAnimated(true);
    }
  };

  return (
    <div
      className="relative group overflow-hidden text-white  pt-28 px-4"
      onMouseEnter={handleMouseEnter}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white/60 via-white/30 to-white/60 max-w-fit mx-auto  tracking-tight">
            Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center rotate-1 items-center gap-3 sm:gap-4 lg:gap-5 max-w-5xl mx-auto">
          {skillsData.map((skill, index) => {
            const delay = index * 100; // 80ms delay between each skill

            return (
              <div
                key={index}
                className={`transform transition-all duration-600 ease-out ${
                  isAnimated ? "animate-in" : "animate-out"
                }`}
                style={{
                  transitionDelay: `${delay}ms`,
                  transform: isAnimated
                    ? "translateY(0px) rotateX(0deg) scale(1)"
                    : "translateY(25px) rotateX(90deg) scale(0.9)",
                  opacity: isAnimated ? 1 : 0,
                }}
              >
                <div className="hover:bg-white/4 rounded-full py-3 px-6 flex items-center justify-center text-xs sm:text-sm lg:text-base font-medium  bg-gradient-to-br from-white/10 via-black/10 to-white/10 transition-colors duration-300 border border-white/10 hover:border-white/30">
                  {skill}
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative Lines */}
        <div className="mt-12 lg:mt-20 flex justify-center items-center space-x-4">
          <div className="w-16 sm:w-20 md:w-32 h-px bg-white/20"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white/20 rotate-45"></div>
          <div className="w-16 sm:w-20 md:w-32 h-px bg-white/20"></div>
        </div>

        {/* Skills Counter */}
        <div className="text-center mt-8">
          <div className="text-white/60 text-sm lg:text-base">
            {skillsData.length} Technical Skills
          </div>
        </div>
      </div>

      <style>{`
        .animate-out {
          opacity: 0;
          transform: translateY(25px) rotateX(90deg) scale(0.9);
        }

        .animate-in {
          opacity: 1;
          transform: translateY(0px) rotateX(0deg) scale(1);
        }

        /* Hover effects for individual skills */
        .skill-pill:hover {
          transform: translateY(-3px) scale(1.05) !important;
          transition: transform 0.3s ease !important;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .skill-pill {
            transform-origin: center;
          }
        }

        @media (max-width: 480px) {
          .skill-pill > div {
            width: 72px;
            height: 32px;
            font-size: 10px;
          }
        }

        /* Smooth entrance animation */
        .skill-pill {
          will-change: transform, opacity;
          backface-visibility: hidden;
          perspective: 1000px;
        }

        /* Staggered animation timing */
        .skill-pill:nth-child(even) {
          animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .skill-pill:nth-child(odd) {
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}

export default Skills;
