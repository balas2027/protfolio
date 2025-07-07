import React from "react";

function Services() {
  return (
    <div className="services relative bg-gradient-to-r from-blue-900 to-indigo-900 h-full rounded-3xl w-full flex justify-center items-center shadow-lg shadow-blue-800/50 opacity-100">
      <div className="bg-gradient-to-r rounded-3xl z-5  from-blue-900/25 shadow-2xl shadow-blue-800/60 to-indigo-900/30 animate-pulse h-full w-full absolute top-0 left-0"></div>
      <div className="content flex h-full flex-col lg:p-6 md:p-4">
        <div className="heading text-white text-3xl font-bold flex gap-x-10">
          <div className="lg:w-16 lg:h-16 md:h-12 md:w-12 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl shadow-xl shadow-blue-200 animate-bounce">
            🚀
          </div>
          <div className="flex items-center">
            <h1 className="bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text lg:text-4xl md:text-3xl text-transparent font-">
              My Services
            </h1>
          </div>
        </div>
        <div className="para mt-5 md:mt-2">
          <p className="text-xl text-white/90 leading-relaxed font-light">
            I provide{" "}
            <span className="font-bold text-transparent bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-2xl">
              comprehensive solutions
            </span>{" "}
            — from concept to deployment, delivering excellence in every
            project.
          </p>
        </div>

        <div className="content grid grid-rows-2 gap-10 h-full w-full lg:mt-10 md:mt-5">
          <div className="tech grid grid-cols-5 h-40 gap-10">
            <div className="box1 col-span-3 flex h-full rounded-2xl">
              <div className="bg-gradient-to-r w-full from-pink-400 to-rose-500 rounded-2xl opacity-80 hover:opacity-100 hover:-translate-y-2 transition-all duration-300">
                <div className="backdrop-blur-xl rounded-2xl p-6 transition-all duration-300">
                  <div className="text-pink-300 text-3xl mb-2">💻</div>
                  <h3 className="text-pink-200 font-bold text-lg mb-2">
                    Web Development
                  </h3>
                  <p className="text-white/70 text-sm hidden xl:block">
                    Custom Websites • E-commerce • Landing Pages • CMS
                    <br /> Responsive Design • Performance Optimization
                  </p>
                  <p className="text-white/70 text-sm hidden xl:hidden lg:block">
                    Custom Websites • E-commerce • Landing Pages <br /> CMS •
                    Responsive Design • Performance
                  </p>
                  <p className="text-white/70 text-sm lg:hidden md:block">
                    Custom Websites • E-commerce • Landing Pages <br />• CMS •
                    Responsive Design
                  </p>
                </div>
              </div>
            </div>
            <div className="box2 flex col-span-2 rounded-2xl">
              <div className="bg-gradient-to-r w-full from-violet-400 to-purple-500 rounded-2xl opacity-80 hover:opacity-100 hover:-translate-y-2 transition-all duration-300">
                <div className="rounded-2xl p-6 transition-all duration-300">
                  <div className="text-violet-300 text-3xl mb-2">🎨</div>
                  <h3 className="text-violet-200 font-bold text-lg mb-2">
                    UI/UX Design
                  </h3>
                  <p className="text-white/70 text-sm">
                    Figma • Prototyping • User Research
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box3 flex  rounded-2xl">
            <div className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-emerald-500 hover:-translate-y-2 duration-300 rounded-2xl opacity-100 hover:opacity-90">
              <div className="mx-3 space-y-1">
                <h2 className="text-2xl font-extrabold text-transparent bg-gradient-to-r from-green-900 to-emerald-900 bg-clip-text">
                  I Don’t Just Code — I Deliver Impact.
                </h2>

                <p className="text-sm text-white/90 italic">
                  From startups to student teams, I’ve designed and developed
                  apps, landing pages, and complete user experiences that leave
                  a lasting impression. Whether it's crafting a fitness app,
                  launching a business website, or redesigning everyday tools
                  like WhatsApp — I turn ideas into digital reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
