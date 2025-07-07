"use client";
import React from "react";
import hero from "./assets/hero.webp";

function Hero() {
  return (
    <>
      <div
        id="home"
        style={{ scrollMarginTop: "80px" }}
        className="flex  mt-15 mx-3 flex-col sm:flex-row sm:justify-between items-center md:pt-35"
      >
        {/* {lg:mt-40 2xl:mt-40 sm:mt-30 2xl:pt-15 xl:pt-25 lg:pt-30 md:pt-25 sm:pt-30} */}

        <div className="items-center lg:w-200 md:w-250 sm:w-200">
          <img src={hero} className="w-100 object-cover 2xl:w-170" loading="eager"
  fetchpriority="high" alt="Food" />
        </div>

        <div className="text-white flex flex-col text-center sm:justify-end sm:text-left g  lg:w-230  sm:w-200">
          <div className="content space-y-6 ">
            <h1 className=" font-bold text-4xl xl:text-6xl md:text-5xl sm:text-4xl">
              {" "}
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Balaskanthan
              </span>
              {"👋"}
            </h1>
            <h2 className=" font-semibold 2xl:text-5xl text-xl text-pink-300  md:text-2xl sm:text-xl">
              Aspiring Full Stack Developer & Real-World Problem Solver
            </h2>
            <p className=" text-sm shiny-text sm:text-sm lg:text-lg">
              I’m passionate about building meaningful tech that bridges ideas
              and impact.
              <br />
              Code isn’t just my skill — it’s my way of solving real-world
              problems.
            </p>
          </div>
          <div className="icons  flex-row justify-between gap-x-2 mt-5 lg:text-sm xl:mt-10 xl:text-xl hidden text-white font-bold lg:flex  ">
            <a
              aria-label="Download my CV" href="https://drive.google.com/file/d/1FpG3YvJAPHSYH9T_qUoC4xyneLjE4Ksj/view?usp=sharing"
              className="bg-gradient-to-br group from-white/5 border-white/5 border hover:border-white/20 via-black/10 to-white/5 hover:bg-black/15 p-3 rounded-4xl flex gap-x-3"
            >
              Download CV{" "}
              <svg
                className="group-hover:animate-bounce group-hover:pt-1"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
              </svg>{" "}
            </a>
            <a aria-label="Go to contact"
              href="#contact"
              className="hidden bg-gradient-to-br group from-white/5 border-white/5 border hover:border-white/20 via-black/10 to-white/5 hover:bg-black/15 p-3 rounded-4xl sm:flex gap-x-3"
            >
              Contact{" "}
              <svg
                className="group-hover:animate-pulse"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
              </svg>
            </a>
            <a aria-label="Visit My Github"
              href="https://github.com/balas2027"
              className="bg-gradient-to-br group from-white/5 border-white/5 border hover:border-white/20 via-black/10 to-white/5 hover:bg-black/15 p-3 rounded-full flex items-center"
            >
              <svg
                className="group-hover:animate-pulse bi bi-github"
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
               
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>
            <a aria-label="Visit My Linkedin"
              href="https://linkedin.com/in/balaskanthan"
              className="bg-gradient-to-br group from-white/5 border-white/5 border hover:border-white/20 via-black/10 to-white/5 hover:bg-black/15 p-3 rounded-full"
            >
              <svg
                className="group-hover:animate-pulse bi bi-linkedin"
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
               
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>
            <a aria-label="Visit My Skillrack"
              href="https://www.skillrack.com/faces/resume.xhtml?id=438872&key=d056fbb8b5c39b58fd8eb89767cdbb76405476a6"
              className="bg-gradient-to-br group from-white/5 border-white/5 border hover:border-white/20 via-black/10 to-white/5 hover:bg-black/15 p-3 rounded-full"
            >
              <svg
                className="group-hover:animate-pulse"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="icons flex mx-3 text-sm sm:text-lg flex-row mt-3 justify-between gap-x-2 sm:mx-[75px] md:mx-[100px] lg:hidden text-white font-bold  ">
        <a  aria-label="Download my CV" href="https://drive.google.com/file/d/1FpG3YvJAPHSYH9T_qUoC4xyneLjE4Ksj/view?usp=sharing" className="bg-white/10 p-3 rounded-4xl flex gap-x-3">
          Download CV{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
          </svg>{" "}
        </a>
        <a aria-label="Go to contact"
          href="#contact"
          className="hidden sm:bg-white/10 p-3 rounded-4xl sm:flex gap-x-3"
        >
          Contact{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
          </svg>
        </a>
        <a aria-label="Visit My Github" href="https://github.com/balas2027" className="bg-white/10 p-3 rounded-4xl flex items-center">
          <svg
          className="group-hover:animate-pulse bi bi-github"
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg>
        </a>
        <a aria-label="Visit My Github" href="https://linkedin.com/in/balaskanthan" className="bg-white/10 p-3 rounded-4xl">
          <svg
          className="group-hover:animate-pulse bi bi-linkedin"
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
           
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg>
        </a>
        <a aria-label="Visit My Skillrack" href="https://www.skillrack.com/faces/resume.xhtml?id=438872&key=d056fbb8b5c39b58fd8eb89767cdbb76405476a6" className="bg-white/10 p-3 rounded-4xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
          </svg>
        </a>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 animate-pulse xl:bg-purple-500/15 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 animate-pulse xl:bg-pink-500/15 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
    </>
  );
}

export default Hero;
