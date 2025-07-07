import React from "react";

function Experience() {
  return (
    <div id="experience" className="my-20 mx-auto w-full max-w-5xl px-4">
      <h1 className="text-3xl text-center mb-10 sm:text-6xl font-bold text-white tracking-tight">
        Work
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ml-4">
          Experience
        </span>
      </h1>
      <ol className="relative border-s sm:border-l-2 border-blue-900">
        <li className="mb-20 ml-6 md:ml-10">
          <span className="absolute flex items-center justify-center sm:w-10 sm:h-10 h-6 w-6 rounded-full -start-3 sm:-start-5 ring-8 ring-gray-900 dark:bg-blue-800">
            <svg
              className="w-3 h-3 sm:w-5 sm:h-5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <div className="bg-gray-900 hover:bg-gradient-to-br from-white/1 via-slate-950 to-white/1 p-6 rounded-lg shadow-lg border border-gray-700">
            <h1 className="flex flex-wrap items-center mb-2 text-lg font-semibold text-white">
              Illakanam Private Limited{" "}
              <span className=" text-white/50 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm bg-slate-950 ms-3 mt-1">
                Latest
              </span>
            </h1>
            <div className="mb-2 text-sm font-medium text-blue-600 dark:text-blue-400">
              Front-End Developer Intern
            </div>
            <time className="block mb-2 italic text-sm font-normal leading-none text-gray-400">
              July 2025 – August 2025 | Remote
            </time>
            <div className="mb-3">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Project: Modernized Official Website
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                  React
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                  Tailwind CSS
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                  ShadCN/UI
                </span>
              </div>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <li>
                Architected scalable component library using ShadCN's design
                system, significantly reducing development time through reusable
                UI components.
              </li>
              <li>
                Engineered fully responsive mobile-first layout with Tailwind
                CSS, achieving perfect cross-device compatibility and 95+
                Lighthouse scores.
              </li>
              <li>
                Optimized website performance through strategic code-splitting
                and lazy loading techniques.
              </li>
              <li>
                Collaborated with cross-functional teams to translate
                requirements into polished product, delivering ahead of schedule.
              </li>
              <li>
                Received leadership recognition for creating intuitive user
                experience through clean, modern design.
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-20 ml-6 md:ml-10">
          <span className="absolute  flex items-center justify-center sm:w-10 w-6 h-6 sm:h-10 bg-blue-9 rounded-full -start-3 sm:-start-5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="sm:w-5 sm:h-5 w-3 h-3  text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <div className="bg-gray-900 hover:bg-gradient-to-br from-white/1 via-slate-950 to-white/1 p-6 rounded-lg shadow-lg border border-gray-700">
            <h1 className="mb-2 text-lg font-semibold text-white">
              Codeship Private Limited
            </h1>
            <div className="mb-2 text-sm font-medium text-blue-400">
              Front-End Developer Intern
            </div>
            <time className="block mb-2 italic text-sm font-normal leading-none text-gray-400">
              May 2025 – June 2025 | Chennai (Onsite)
            </time>
            <div className="mb-3">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Project: Full-Stack Development & Portfolio Creation
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                  HTML
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                  CSS
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                  JavaScript
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                  React
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                  Tailwind CSS
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                  Bootstrap
                </span>
              </div>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <li>
                Developed responsive user interfaces using HTML, CSS,
                JavaScript, React, Tailwind CSS, and Bootstrap.
              </li>
              <li>
                Applied Flexbox and CSS Grid for complex layout structures and
                adaptive design.
              </li>
              <li>
                Implemented component-based architecture and state management in
                React.
              </li>
              <li>
                Collaborated with UI/UX teams to integrate front-end components
                with backend APIs.
              </li>
              <li>
                Participated in code reviews, debugging sessions, and real-time
                development in an agile environment.
              </li>
              <li>
                Created comprehensive portfolio showcasing technical skills
                using React and Tailwind CSS.
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default Experience;
