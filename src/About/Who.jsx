import React from "react";

function who() {
  return (
    <div className="who bg-gradient-to-r from-purple-900 to-cyan-900 h-full rounded-2xl w-full flex justify-center items-center shadow-2xl shadow-purple-800/50  opacity-100">
      <div className="content flex h-full flex-col lg:p-6  md:p-4">
        <div className="heading text-white text-3xl font-bold flex gap-x-10">
          <div className="lg:w-16 lg:h-16 md:h-12 md:w-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center text-3xl shadow-xl shadow-fuchsia-200 animate-bounce">
            👋
          </div>
          <div className="flex items-center">
            <h1 className=" bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text lg:text-4xl md:text-3xl text-transparent font-">
              Who I Am
            </h1>
          </div>
        </div>
        <div className="para mt-5 md:mt-2">
          <p className="text-xl text-white/90 leading-relaxed font-light">
            Hi, I'm{" "}
            <span className="font-bold text-transparent bg-gradient-to-r from-cyan-700 to-purple-700 bg-clip-text text-2xl">
              Balaskanthan
            </span>{" "}
            — a visionary developer who transforms impossibilities into
            realities through code.
          </p>
        </div>

        <div className="content grid  grid-rows-2 gap-10 h-full w-full  lg:mt-10 md:mt-5">
          <div className="tech  grid grid-cols-5 h-40 gap-10 ">
            <div className="box1 col-span-3 flex h-full rounded-2xl">
              <div className=" bg-gradient-to-r  w-full from-orange-400 to-red-500 rounded-2xl opacity-80 hover:opacity-100 hover:-translate-y-2 transition-all duration-300 ">
                <div className=" backdrop-blur-xl rounded-2xl   p-6 transition-all duration-300">
                  <div className="text-orange-300  text-3xl mb-2">🎯</div>
                  <h1 className="text-orange-200 font-bold text-lg mb-2">
                    Frontend Specialist
                  </h1>
                  <p className="text-white/70 text-sm hidden xl:block">
                    {" "}
                    Html • CSS • Tailwind • CSS • Bootstrap5 • Java Script
                    <br /> React • Modern UI/UX
                  </p>
                  <p className="text-white/70 text-sm hidden xl:hidden lg:block">
                    {" "}
                    Html • CSS • Tailwind • CSS • Bootstrap5 <br /> Java Script
                    • React • Modern UI/UX
                  </p>
                  <p className="text-white/70 text-sm lg:hidden  md:block">
                    {" "}
                    Html • CSS • Tailwind • CSS • Bootstrap5 • Java Script{" "}
                    <br />• React • Modern UI/UX
                  </p>
                </div>
              </div>
            </div>
            <div className="box2 flex col-span-2 rounded-2xl">
              <div className=" bg-gradient-to-r w-full from-emerald-400 to-teal-500 rounded-2xl  opacity-80 hover:opacity-100 hover:-translate-y-2  transition-all duration-300 ">
                <div className="rounded-2xl p-6  transition-all duration-300">
                  <div className="text-emerald-300 text-3xl mb-2">⚡</div>
                  <h1 className="text-emerald-200 font-bold text-lg mb-2">
                    Full-Stack Power
                  </h1>
                  <p className="text-white/70 text-sm">
                    PHP • APIs • Database (My Sql)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box3 flex rounded-2xl">
            <div className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:-translate-y-2 duration-300 rounded-2xl opacity-100 hover:opacity-90">
              <div className=" rounded-2xl p-6 ">
                <div className="text-center">
                  <div className="lg:text-6xl md:text-3xl font-black text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text mb-2">
                    700+
                  </div>
                  <p className="text-white/80 text-lg font-medium">
                    Coding Challenges Conquered
                  </p>
                  <p className="text-white/60 text-sm mt-2">
                    SkillRack • Daily Practice • Continuous Growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default who;
