import React from "react";
import { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [forceExpanded, setForceExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      // Only apply scroll effects on medium screens and above (768px+)
      if (window.innerWidth >= 768) {
        // Determine scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setScrollDirection("down");
          setIsScrolled(true);
          setForceExpanded(false); // Reset force expanded when scrolling down
        } else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
          setScrollDirection("up");
          setIsScrolled(false);
        }
      } else {
        // For mobile/tablet, always show normal navbar
        setIsScrolled(false);
        setScrollDirection("up");
        setForceExpanded(false);
      }

      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      // Reset scroll states when resizing
      if (window.innerWidth < 768) {
        setIsScrolled(false);
        setScrollDirection("up");
        setForceExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollY]);

  const handleNavClick = () => {
    // Close mobile menu and minimize navbar after clicking any nav option (only on md+ screens)
    setMenuOpen(false);
    if (window.innerWidth >= 768) {
      setTimeout(() => {
        setForceExpanded(false);
        setIsScrolled(true);
        setScrollDirection("down");
      }, 800);
    }
  };

  const handleHomeClick = () => {
    // Close mobile menu but keep navbar expanded for Home
    setMenuOpen(false);
    // Keep navbar expanded - don't minimize after clicking Home
  };

  const handleIconClick = () => {
    setForceExpanded(true);
  };

  // Determine if navbar should be minimized (only on md+ screens)
  const isMinimized =
    isScrolled &&
    scrollDirection === "down" &&
    !forceExpanded &&
    window.innerWidth > 768;

  return (
    <>
      {/* Minimized navbar (small icon) - Only show on md+ screens */}
      <div
        className={`fixed left-6 top-6 z-50 transition-all duration-700 ease-out transform hidden md:block ${
          isMinimized
            ? "opacity-100 scale-100 rotate-0"
            : "opacity-0 scale-50 -rotate-180 pointer-events-none"
        }`}
      >
        <div className="relative group">
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-md opacity-60 group-hover:opacity-80 transition-all duration-300 animate-pulse"></div>

          {/* Main button */}
          <button
            onClick={handleIconClick}
            aria-label="expand menu bar"
            className="relative bg-black/30 backdrop-blur-xl text-white p-4 rounded-full hover:bg-black/40 transition-all duration-500 shadow-2xl border border-white/30 group-hover:border-white/60 group-hover:scale-110 group-hover:shadow-cyan-500/25"
          >
            <Home
              size={26}
              className="drop-shadow-lg group-hover:text-cyan-300 transition-colors duration-300"
            />
          </button>

          {/* Tooltip */}
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
            Expand Menu
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-black/80"></div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sm:text-white fixed left-0 z-40 right-0 top-0 items-center  2xl:top-15 md:w-150 mx-auto sm:rounded-full px-8 py-4  sm:left-5 sm:right-5 sm:top-10 transition-all duration-700 ease-out transform ${
          isMinimized
            ? "opacity-0 -translate-y-full pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
        style={{
          background:
            "linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 50%, rgba(15, 23, 42, 0.9) 100%)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(148, 163, 184, 0.2)",
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Mobile menu button */}
        <div className="sm:hidden flex justify-end items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-slate-200 hover:text-cyan-400 focus:outline-none transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation menu */}
        <ul
          className={`flex flex-col sm:text-sm text-xl font-extrabold sm:font-bold sm:flex-row justify-between transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          } sm:flex`}
        >
          <a
            href="#home"
            className="relative overflow-hidden sm:bg-gradient-to-r from-slate-700/40 to-slate-600/40 backdrop-blur-sm text-slate-100 p-2 rounded-2xl cursor-pointer lg:px-2 sm:border border-slate-500/30 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:bg-gradient-to-r hover:from-slate-600/50 hover:to-slate-500/50 transition-all duration-300 group"
            onClick={handleHomeClick}
          >
            <span className="relative z-10">Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <li>
            <a
              href="#about"
              className="relative overflow-hidden sm:bg-gradient-to-r from-slate-700/40 to-slate-600/40 backdrop-blur-sm text-slate-100 p-2 rounded-2xl cursor-pointer lg:px-2 sm:border border-slate-500/30 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:bg-gradient-to-r hover:from-slate-600/50 hover:to-slate-500/50 transition-all duration-300 group block"
              onClick={handleNavClick}
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 sm:bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="relative overflow-hidden sm:bg-gradient-to-r from-slate-700/40 to-slate-600/40 backdrop-blur-sm text-slate-100 p-2 rounded-2xl cursor-pointer lg:px-2 sm:border border-slate-500/30 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:bg-gradient-to-r hover:from-slate-600/50 hover:to-slate-500/50 transition-all duration-300 group block"
              onClick={handleNavClick}
            >
              <span className="relative z-10">Projects</span>
              <div className="absolute inset-0 sm:bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="relative overflow-hidden sm:bg-gradient-to-r from-slate-700/40 to-slate-600/40 backdrop-blur-sm text-slate-100 p-2 rounded-2xl cursor-pointer lg:px-2 sm:border border-slate-500/30 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:bg-gradient-to-r hover:from-slate-600/50 hover:to-slate-500/50 transition-all duration-300 group block"
              onClick={handleNavClick}
            >
              <span className="relative z-10">Experience</span>
              <div className="absolute inset-0 sm:bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </li>
          <li>
            <a
              href="#achievements"
              className="relative overflow-hidden sm:bg-gradient-to-r from-slate-700/40 to-slate-600/40 backdrop-blur-sm text-slate-100 p-2 rounded-2xl cursor-pointer lg:px-2 sm:border border-slate-500/30 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:bg-gradient-to-r hover:from-slate-600/50 hover:to-slate-500/50 transition-all duration-300 group block"
              onClick={handleNavClick}
            >
              <span className="relative z-10">Achievements</span>
              <div className="absolute inset-0 sm:bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="relative overflow-hidden sm:bg-gradient-to-r from-slate-700/40 to-slate-600/40 backdrop-blur-sm text-slate-100 p-2 rounded-2xl cursor-pointer lg:px-2 sm:border border-slate-500/30 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:bg-gradient-to-r hover:from-slate-600/50 hover:to-slate-500/50 transition-all duration-300 group block"
              onClick={handleNavClick}
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;