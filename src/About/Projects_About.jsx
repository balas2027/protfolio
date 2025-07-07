import React from "react";

function Projects_About() {
  return (
    <>
    <div className="relative content flex h-full flex-col justify-around lg:p-6 rounded-3xl md:p-4 shadow-2xl shadow-emerald-600/50">
      <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-r from-emerald-400/50 via-teal-500/50 to-cyan-500/50 rounded-2xl animate-pulse"></div>
      <div className="heading text-white text-3xl font-bold flex gap-x-10">
        <div className="lg:w-16 lg:h-16 md:h-12 md:w-12 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl animate-bounce">
          🚀
        </div>
        <div className="flex items-center">
          <h1 className="bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text lg:text-4xl md:text-3xl text-transparent font-black">
            Impact Projects
          </h1>
        </div>
      </div>
      <div className="content flex-col items-center text-left mt-5 text-white font-bold text-md w-full hidden 2xl:block">
        <p>
          Projects that blend technology and innovation to solve real-world problems, focusing on security, safety, and smart automation.
        </p>
      </div>
      <div className="space-y-4 lg:mt-5 md:mt-4">
        {/* Project 1 */}
        <div className="group relative overflow-hidden">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl blur opacity-20 group-hover:opacity-50 transition-all duration-700"></div>
          <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-3 border border-emerald-300/20 group-hover:border-emerald-300/50 transition-all duration-700 hover:transform hover:scale-105 hover:rotate-1">
            <div className="flex items-start lg:gap-6 md:gap-4">
              <div className="relative">
                <div className="lg:w-20 lg:h-20 md:w-16 md:h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center text-4xl shadow-2xl group-hover:animate-pulse">
                  🔐
                </div>
              </div>
              <div className="flex-1">
                <h3 className="xl:text-2xl text-lg font-bold text-emerald-200 mb-3 group-hover:text-emerald-100 transition-colors">
                  Secure Route Mapping System
                </h3>
                <p className="text-white/80 xl:text-lg leading-relaxed mb-4 text-justify lg:text-[16px] md:text-sm">
                  Revolutionary navigation technology that integrates real-time crime analytics with AI-powered route optimization. Making every journey safer through intelligent data processing and predictive algorithms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-emerald-400/20 text-emerald-700 font-bold rounded-full text-sm border border-emerald-700">
                    Security
                  </span>
                  <span className="px-4 py-2 bg-teal-400/20 text-teal-700 font-bold rounded-full text-sm border border-teal-700">
                    AI Analytics
                  </span>
                  <span className="px-4 py-2 bg-cyan-400/20 text-cyan-700 font-bold rounded-full text-sm border border-cyan-700">
                    Real-time
                  </span>
                  <span className="px-4 py-2 bg-blue-400/20 text-blue-700 font-bold rounded-full text-sm border border-blue-700">
                    Navigation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="group relative overflow-hidden">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl blur opacity-20 group-hover:opacity-50 transition-all duration-700"></div>
          <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-3 border border-orange-300/20 group-hover:border-orange-300/50 transition-all duration-700 hover:transform hover:scale-105 hover:-rotate-1">
            <div className="flex items-start lg:gap-6 md:gap-4">
              <div className="relative">
                <div className="lg:w-20 lg:h-20 md:w-16 md:h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl flex items-center justify-center text-4xl shadow-2xl group-hover:animate-pulse">
                  🔥
                </div>
              </div>
              <div className="flex-1">
                <h3 className="xl:text-2xl text-lg font-bold text-orange-200 mb-3 group-hover:text-orange-100 transition-colors">
                  IoT Gas Leakage Detection System
                </h3>
                <p className="text-white/80 xl:text-lg leading-relaxed mb-4 text-justify lg:text-[16px] md:text-sm">
                  Life-saving IoT solution with advanced sensor networks and automated response systems. Preventing disasters through continuous monitoring, instant alerts, and smart home integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-red-400/20 text-red-700 font-bold rounded-full text-sm border border-red-700">
                    Alerts
                  </span>
                  <span className="px-4 py-2 bg-orange-400/20 text-orange-700 font-bold rounded-full text-sm border border-orange-700">
                    IoT Sensors
                  </span>
                  <span className="px-4 py-2 bg-yellow-400/20 text-yellow-700 font-bold rounded-full text-sm border border-yellow-700">
                    Automation
                  </span>
                  <span className="px-4 py-2 bg-pink-400/20 text-pink-700 font-bold rounded-full text-sm border border-pink-700">
                    Smart Home
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Projects_About;
