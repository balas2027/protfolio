import React, { useState } from "react";
import haven from "./assets/haven.png";
import ilakkanam from "./assets/ilakkanam.png";
function Projects() {
  const projects = [
    {
      id: "project6",
      title: "HAVENTRAIL",
      description:
        "Secure Travel planning platform that helps users discover and plan their perfect destinations safely.",
      tech: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
      features: [
        "Destination Discovery",
        "Trip Planning",
        "Safety Preview Map System",
        "Safe Travel",
      ],
      imgurl: haven,
      des: "haventrail",
      liveUrl: "https://haventrail.free.nf",
      codeUrl: "https://github.com/balas2027",
    },
    {
      id: "project7",
      title: "ILAKKANAM",
      description:
        "A modern portfolio website showcasing personal projects, achievements, and services with a strong visual design focus.",
      tech: ["React", "Tailwind CSS", "ShadCn / UI", "Material UI"],
      features: [
        "Responsive Design",
        "Animated Sections",
        "Performance Optimization",
        "Company Brading",
      ],
      des: "ilakkanam",
      imgurl: ilakkanam,
      liveUrl: "https://ilakkanam.in",
      codeUrl: "https://github.com/balas2027",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b my-10  py-16  sm:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="heading bg-gradient-to-r font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
            Projects
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore my latest work showcasing innovative solutions and creative
            problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 lg:space-y-10 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card border border-white/10 bg-white/3 hover:bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 transition-all projects p-6 sm:p-8 lg:p-10 rounded-2xl cursor-pointer group ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex flex-col lg:flex lg:gap-12 lg:items-center`}
            >
              {/* Project Image/Preview */}
              <div className="project-image flex-shrink-0 lg:w-1/2">
                <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <img
                    src={project.imgurl}
                    alt="{project.des}"
                    className="h-full w-full"
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content  lg:w-1/2 mt-6 lg:mt-0">
                <div className="space-y-4  sm:space-y-2">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="tech-stack">
                    <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 text-white text-xs sm:text-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="features">
                    <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={project.liveUrl}
                      aria-label="View Live Demo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.codeUrl}
                      aria-label="View Code"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-6 py-3 border border-white/20 text-white rounded-lg font-medium text-center hover:bg-white/10 transition-all duration-200"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visit More Projects Button */}
        <div className="text-center">
          <a href="https://github.com/balas2027" className="inline-block">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-700 via-purple-700 to-pink-700 text-white text-lg font-semibold rounded-full transition-all duration-500 shadow-2xl border border-white/30 hover:border-white/60 hover:scale-105 hover:shadow-cyan-500/50">
              <span className="relative z-10">Visit More Projects...</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
