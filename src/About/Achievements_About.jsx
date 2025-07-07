import React from "react";

function Achievements_About() {
  return (
    <>
      <div className="relative content flex h-full flex-col justify-around lg:p-6 rounded-3xl  md:p-4 shadow-2xl shadow-orange-600/50">
      <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-r from-amber-400/50 to-red-500/50 rounded-2xl animate-pulse"></div>
        <div className="heading text-white text-3xl font-bold flex gap-x-10">
          <div className="lg:w-16 lg:h-16 md:h-12 md:w-12 bg-gradient-to-r from-amber-400 to-red-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl shadow-fuchsia-200 animate-bounce">
            🏆
          </div>
          <div className="flex items-center">
            <h1 className=" bg-gradient-to-r  from-white via-amber-200 to-red-200 bg-clip-text lg:text-4xl md:text-3xl text-transparent font-">
              Achievements
            </h1>
          </div>
          <div className="description"></div>
        </div>
        <div className="content  flex-col items-center text-left mt-5 text-white font-bold text-md w-full hidden 2xl:block">
          <p>
            My journey is marked by achievements that show my dedication and
            passion for technology, from coding to impactful projects.
          </p>
        </div>

        <div className="space-y-4  lg:mt-5 md:mt-4">
          <div className="group relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-3 border border-amber-300/20 group-hover:border-amber-300/40 transition-all duration-500 hover:transform hover:scale-105">
              <div className="flex items-start lg:gap-6 md:gap-4">
                <div className="relative">
                  <div className="lg:w-20 lg:h-20 md:w-17 md:h-17 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center text-4xl shadow-2xl">
                    🚀
                  </div>
                  <div className="absolute -top-2 -right-2 lg:w-14 lg:h-8 md:w-12 md:h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
                    3rd
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="xl:text-2xl text-lg font-bold text-amber-200 mb-3 group-hover:text-amber-100 transition-colors">
                    INNOHACK 2025 - 36 Hour Hackathon
                  </h3>
                  <p className="text-white/80 xl:text-lg leading-relaxed mb-4 text-justify  lg:text-[16px]  md:text-sm">
                    Secured 3rd place at INNOHACK with "Haventrail" - an
                    AI-powered safety route application. Built with teammates
                    Kirthi Sai, Gopinath, and Dillip Kumar, featuring real-time
                    safety analysis, SOS alerts, and 24/7 legal assistance for
                    travelers.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-amber-400/20 text-amber-700 font-bold rounded-full text-sm  border border-amber-700 md:hidden lg:block">
                      AI Innovation
                    </span>
                    <span className="px-4 py-2 bg-orange-400/20 text-orange-700 font-bold rounded-full text-sm  border border-orange-700">
                      Safety Tech
                    </span>
                    <span className="px-4 py-2 bg-red-400/20 text-red-700 font-bold rounded-full text-sm  border border-red-700">
                      Teamwork
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl  opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-3 border border-yellow-300/20 group-hover:border-yellow-300/40 transition-all duration-500 hover:transform hover:scale-105">
              <div className="flex items-start lg:gap-6 md:gap-4">
                <div className="relative">
                  <div className="lg:w-20 lg:h-20 md:w-17 md:h-17 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center text-4xl shadow-2xl">
                    🏆
                  </div>
                  <div className="absolute -top-2 -right-2  lg:w-14 lg:h-8 md:w-12 md:h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
                    2nd
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="xl:text-2xl text-lg font-bold text-yellow-200 mb-3 group-hover:text-yellow-100 transition-colors">
                    TEACHACKS'25 - National Level Hackathon
                  </h3>
                  <p className="text-white/80 xl:text-lg leading-relaxed mb-4 text-justify lg:text-[16px] md:text-sm">
                    Achieved 2nd place out of 40 teams at TEACHACKS'25
                    (TEXUS'25) organized by SRM Institute, Chennai. Collaborated
                    with teammates Gopinath and Kirthi Sai in this intense
                    24-hour coding challenge, pushing limits in problem-solving
                    and innovation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-yellow-400/20 text-yellow-800 rounded-full text-sm font-bold border border-yellow-700">
                      National Level
                    </span>
                    <span className="px-4 py-2 bg-orange-400/20 text-orange-900 rounded-full text-sm font-bold border border-orange-700">
                      Problem Solving
                    </span>
                    <span className="px-4 py-2 bg-red-400/20 text-red-900 rounded-full text-sm font-bold border border-red-700 md:hidden lg:block">
                      Leadership
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

export default Achievements_About;
