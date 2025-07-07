import React, { useEffect, useState } from "react";

import Who from "./About/Who.jsx";
import Achievements_About from "./About/Achievements_About.jsx";
import Projects_About from "./About/Projects_About.jsx";
import Services from "./About/Services.jsx";
function About() {
  const [activeindex, setactive] = useState(0);
  function handleClick(index) {
    setactive(index);
  }

  return (
    <>
      <div
        className="appear-animation flex text-justify sm:text-center flex-col justify-center items-center space-y-3 sm:pt-40 lg:pt-50"
        id="about"
      >
        <div className="block space-y-5 sm:hidden">
          <div className="about pt-20 text-transparent mx-auto   max-w-fit text-center bg-clip-text bg-gradient-to-r from-pink-600 to-cyan-500 text-3xl font-bold">
            About Me
          </div>
          <p className=" text-white text-sm mx-3 text-justify ">
            Hey there! I'm Balaskanthan, a passionate Full Stack Developer with
            a strong foundation in PHP and modern frontend magic using React.
            With a problem-solving mindset and a heart for impactful tech, I
            specialize in crafting user-friendly, scalable web applications that
            not only look great but also make a difference.
          </p>
          <p className="text-white mx-3">
            Over the years, I’ve proudly earned the title of a 3x Hackathon
            Winner, which reflects my love for innovation, speed, and
            collaboration under pressure. Whether it’s building seamless UIs,
            integrating complex APIs, or deploying robust backend systems — I
            thrive in creating real-world solutions that empower users and
            communities.
          </p>
          <p className="text-white mx-3">
            I believe in the power of clean code, thoughtful design, and
            purpose-driven development. If it’s meaningful, challenging, and
            contributes to society — count me in!
          </p>
        </div>
        <div className="main-box h-155 w-full max-w-7xl items-center  hidden sm:flex sm:gap-x-5 lg:gap-x-10">
          <div className="menu h-130 w-75 rounded-3xl shadow-xl grid grid-rows-7 items-center bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400">
            <div className="text-3xl font-black bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent flex items-center pl-6">
              About <span className="ml-2 text-cyan-200">Me</span>
            </div>

            <div
              className="flex items-center gap-3 pl-5 text-white bg-white/10 font-semibold text-lg hover:bg-white/10 py-4 mx-4  rounded-xl transition-all"
              onClick={() => handleClick(0)}
              style={{
                background:
                  activeindex === 0
                    ? "linear-gradient(to right,rgba(34, 211, 238, 1),rgba(59, 130, 246, 1),rgba(147, 51, 234, 1)"
                    : "",
              }}
            >
              👋 <span>Who I Am</span>
            </div>

            <div
              className="flex items-center gap-3 pl-5 text-white bg-white/10 font-semibold text-lg hover:bg-white/10 py-4 mx-4  rounded-xl transition-all"
              onClick={() => handleClick(1)}
              style={{
                background:
                  activeindex === 1
                    ? "linear-gradient(to right, rgba(251, 191, 36, 1), rgba(249, 115, 22, 1), rgba(239, 68, 68, 1))"
                    : "",
              }}
            >
              🏆 <span>Achievements</span>
            </div>

            <div
              className="flex items-center gap-3 pl-5 text-white bg-white/10 font-semibold text-lg hover:bg-white/10 py-4 mx-4  rounded-xl  transition-all"
              onClick={() => handleClick(2)}
              style={{
                background:
                  activeindex === 2
                    ? "linear-gradient(90deg, rgba(92, 237, 215, 1) 8% ,rgba(79, 220, 96, 1) 100%)"
                    : "",
              }}
            >
              🚀 <span>Projects</span>
            </div>

            <div
              className="flex items-center gap-3 pl-5 text-white bg-white/10 font-semibold text-lg hover:bg-white/10 py-4 mx-4  rounded-xl  transition-all"
              onClick={() => handleClick(3)}
              style={{
                background:
                  activeindex === 3
                    ? "linear-gradient(to right,  rgb(79, 70, 229) ,rgb(30, 58, 138))"
                    : "",
              }}
            >
              🌐 <span>Services</span>
            </div>
            <div className="flex items-center row-span-2 gap-3 p-3 opacity-70 text-white font-semibold text-lg w-full h-full cursor-default select-none">
              <span>"Turning ideas into digital reality"</span>
            </div>
          </div>

          <div
            className="who-i-am-content relative menu h-full w-full rounded-4xl justify-center items-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse opacity-80 hover:animate-none  "
            style={{ display: activeindex === 0 ? "block" : "none" }}
          >
            <Who />
          </div>
          <div
            className="relative achievements-content menu h-full w-full justify-center items-center bg-gradient-to-r from-amber-400/60 via-orange-500/60 to-red-500/60 rounded-3xl  "
            style={{ display: activeindex === 1 ? "block" : "none" }}
          >
            <Achievements_About />
          </div>

          <div
            className="projects-content menu h-full w-full rounded-4xl justify-center items-center border-2 border-white/10 bg-white/10"
            style={{ display: activeindex === 2 ? "block" : "none" }}
          >
            <Projects_About />
          </div>
          <div
            className="what-drives-me-content menu h-full w-full rounded-4xl justify-center items-center border-2 border-white/10 bg-white/10"
            style={{ display: activeindex === 3 ? "block" : "none" }}
          >
            <Services />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
