import React from "react";
import Heading from "./Achievements/Heading";
import ach1 from "./assets/ach1.jpeg";
import ach11 from "./assets/ach11.jpeg";
import ach2 from "./assets/ach2.jpeg";
import { ExternalLinkIcon, Calendar } from "lucide-react";
import ach3 from "./assets/ach3.jpeg";
import ach31 from "./assets/ach31.jpg";
import ach4 from "./assets/ach4.jpeg";
import ach41 from "./assets/ach41.jpeg";
import ach42 from "./assets/ach42.jpeg";
import ach43 from "./assets/ach43.jpeg";
import innov from "./assets/innov.jpeg";
import kirthi from "./assets/kirthi.jpeg";
import tech from "./assets/tech.jpeg";
import tech1 from "./assets/tech1.jpeg";
import tech2 from "./assets/tech2.jpeg";
import webprenur from "./assets/webprenur.jpeg";
import webprenur1 from "./assets/webprenur1.jpeg";
import asimov from "./assets/asimov.jpeg";
import { lazy, Suspense } from "react";

// Lazy load the Timeline component
const Timeline = lazy(() => import("../lib/ui/timeline"));

function TimelineDemo() {
  const data = [
    {
      emoj: "🏆",
      title: "2023",
      content: (
        <div>
          <div className="head flex justify-between items-baseline">
            <h1 className="sm:text-xl text-lg font-bold text-white pb-3">
              🏆 SCI Hackathon Champion – RMK Group of Institutions{" "}
            </h1>
            <div className="flex items-center gap-1 text-sm text-gray-500 font-bold">
              <Calendar className="w-4 h-4" />
              <span>22/11/23</span>
            </div>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/posts/balaskanthan_i-like-to-receive-this-honorable-appreciation-activity-7133099065780695040-NQe_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbCyvIBksGIk_KlHpk0Hdz9rI6xUhUlwgY"
              className="group relative inline-flex items-center gap-3 px-2 py-1 border-2 hover:border-blue-950 hover:text-blue-800 text-sm text-white font-bold rounded-lg  duration-300 hover:shadow-sm hover:shadow-blue-900"
            >
              <span>Visit</span>
              <ExternalLinkIcon
                size={18}
                className="transition-transform duration-300"
              />
            </a>
            <p className="mb-8 mt-3 sm:font-lg text-justify text-sm font-normal shiny-text">
              Led our team to 2nd place (Physics Category) among 18+ teams
              (1st–4th years) at the prestigious SCI Hackathon, showcasing
              innovation, leadership, and collaboration.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={ach1}
                alt=""
                width={500}
                height={500}
                className="h-20 sm:h-50 md:w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />

              <img
                src={ach11}
                alt="startup template"
                width={500}
                height={500}
                className="sm:h-50 h-20 md:w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      emoj: "🚀",
      title: "2024",
      content: (
        <div>
          <div className="head flex justify-between items-baseline">
            <h1 className="sm:text-xl text-lg font-bold text-white pb-3">
              🚀 Paper Presentation Winner – Asimov '24, SRM Easwari Engineering
              College{" "}
            </h1>
            <div className="flex items-center gap-1 text-sm text-gray-500 font-bold">
              <Calendar className="w-4 h-4" />
              <span>10/08/24</span>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/posts/balaskanthan_teamwork-activity-7236048100346228736-MhEz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbCyvIBksGIk_KlHpk0Hdz9rI6xUhUlwgY"
            className="group relative inline-flex items-center gap-3 px-2 py-1  border-2 hover:border-blue-950 hover:text-blue-800 text-sm text-white font-bold rounded-lg  duration-300 hover:shadow-sm hover:shadow-blue-900"
          >
            <span>Visit</span>
            <ExternalLinkIcon
              size={18}
              className="transition-transform duration-300"
            />
          </a>

          <p className="shiny-text font-semibold text-justify text-sm mt-4 mb-8">
            Team Sigma One secured 2nd place in the Paper Presentation at Asimov
            '24 Symposium, organized by the Department of Robotics and
            Automation on August 10th, 2024. Proudly collaborated with teammates
            Prasanna and Kirthi Sai.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={ach2}
              alt="hero template"
              width={500}
              height={500}
              className="sm:h-50 h-20 md:w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />

            <img
              src={asimov}
              alt="feature template"
              width={500}
              height={500}
              className="sm:h-50 h-20 md:w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },

    {
      emoj: "🥉",
      title: "2024",
      content: (
        <div>
          <div className="head flex justify-between items-baseline">
            <h1 className="sm:text-xl text-lg font-bold text-white pb-3">
              🥉 3rd Place in Web Development – Niral2024 Symposium Anna
              University, Guindy
            </h1>
            <div className="flex items-center gap-1 text-sm text-gray-500 font-bold">
              <Calendar className="w-4 h-4" />
              <span>31/08/24</span>
            </div>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/posts/balaskanthan_niral2024-webdevelopment-annauniversity-activity-7236051984695357441-Fcsz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbCyvIBksGIk_KlHpk0Hdz9rI6xUhUlwgY"
              className="group relative inline-flex items-center gap-3 px-2 py-1  border-2 hover:border-blue-950 hover:text-blue-800 text-sm text-white font-bold rounded-lg  duration-300 hover:shadow-sm hover:shadow-blue-900"
            >
              <span>Visit</span>
              <ExternalLinkIcon
                size={18}
                className="transition-transform duration-300"
              />
            </a>
            <p className="mb-8 mt-3 sm:font-lg  text-justify text-sm font-normal shiny-text">
              Team Balaskanthan and Kaven secured 3rd place in Web Development
              at the Niral2024 Symposium, organized by the Department of
              Information Science and Technology, College of Engineering, Anna
              University, Guindy on August 31st, 2024. Proud moment to
              collaborate and celebrate this achievement together! 💻🏆
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={ach3}
                alt=""
                width={500}
                height={500}
                className="sm:h-50 h-20 md:w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />

              <img
                src={ach31}
                alt="startup template"
                width={500}
                height={500}
                className="sm:h-50 h-20 md:w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      emoj: "🥈",
      title: "2025",
      content: (
        <div>
          <div className="head flex justify-between items-baseline">
            <h1 className="sm:text-xl text-lg font-bold text-white pb-3">
              🚀 STACK SPRINT – COGNEBULA '25, Velammal Engineering College
            </h1>
            <div className="flex items-center gap-1 text-sm text-gray-500 font-bold">
              <Calendar className="w-4 h-4" />
              <span>15/02/25</span>
            </div>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/posts/balaskanthan_proudmoment-fullstackmastery-cognebula25-activity-7298270534063034368-6ol5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbCyvIBksGIk_KlHpk0Hdz9rI6xUhUlwgY"
              className="group relative inline-flex items-center gap-3 px-2 py-1  border-2 hover:border-blue-950 hover:text-blue-800 text-sm text-white font-bold rounded-lg  duration-300 hover:shadow-sm hover:shadow-blue-900"
            >
              <span>Visit</span>
              <ExternalLinkIcon
                size={18}
                className="transition-transform duration-300"
              />
            </a>
            <p className="mb-8 mt-3 sm:font-lg text-justify text-sm font-normal shiny-text">
              Me and my teammate Dillip Kumar V secured 2nd place in the STACK
              SPRINT (Full Stack Mastery Challenge) at the COGNEBULA '25
              Symposium, organized by Velammal Engineering College on February
              15th, 2025. Proud moment to collaborate and celebrate this
              achievement together! 💻🥈
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={ach4}
                alt=""
                width={500}
                height={500}
                className="sm:h-50 h-20 md:w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />

              <img
                src={ach41}
                alt="startup template"
                width={500}
                height={500}
                className="sm:h-50 h-20 md:w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src={ach42}
                alt="startup template"
                width={500}
                height={500}
                className="sm:h-50 h-20 md:w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src={ach43}
                alt="startup template"
                width={500}
                height={500}
                className="sm:h-50 h-20 md:w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      emoj: "🥉",
      title: "2025",
      content: (
        <div>
          <div className="head flex justify-between items-baseline">
            <h1 className="sm:text-xl text-lg font-bold text-white pb-3">
              🏆 INNOHACK 2k25, New Prince Shri Bhavani College of Engineering
              and Technology
            </h1>
            <div className="flex items-center gap-1 text-sm text-gray-500 font-bold">
              <Calendar className="w-4 h-4" />
              <span>19/3/2025</span>
            </div>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/posts/balaskanthan_innohack2025-haventrail-safetravel-activity-7311060956673908736-yw9v?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbCyvIBksGIk_KlHpk0Hdz9rI6xUhUlwgY"
              className="group relative inline-flex items-center gap-3 px-2 py-1  border-2 hover:border-blue-950 hover:text-blue-800 text-sm text-white font-bold rounded-lg  duration-300 hover:shadow-sm hover:shadow-blue-900"
            >
              <span>Visit</span>
              <ExternalLinkIcon
                size={18}
                className="transition-transform duration-300"
              />
            </a>
            <p className="mb-8 mt-3 sm:font-lg text-justify text-sm font-normal shiny-text">
              I, Balaskanthan, along with my incredible teammates Kirthi Sai,
              Gopinath, and Dillip Kumar, secured 3rd place at INNOHACK – A
              36-Hour Hackathon held at New Prince Shri Bhavani College of
              Engineering and Technology, Chennai.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={innov}
                alt=""
                width={500}
                height={500}
                className="sm:h-50 h-20 md:w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />

              <img
                src={kirthi}
                alt="startup template"
                width={500}
                height={500}
                className="sm:h-50 h-20 md:w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      emoj: "🌟",
      title: "2025",
      content: (
        <div>
          <div className="head flex justify-between items-baseline">
            <h1 className="sm:text-xl text-lg font-bold text-white pb-3">
              🌟 TEACHACKS'25, SRM Institute of Science and Technology,
              Ramapuram{" "}
            </h1>
            <div className="flex items-center gap-1 text-sm text-gray-500 font-bold">
              <Calendar className="w-4 h-4" />
              <span>26/3/2025</span>
            </div>
          </div>

          <div>
            <a
              href="https://srmrmp.edu.in/tech-hacks-24-hour-national-level-hackathon/"
              className="group relative inline-flex items-center gap-3 px-2 py-1  border-2 hover:border-blue-950 hover:text-blue-800 text-sm text-white font-bold rounded-lg  duration-300 hover:shadow-sm hover:shadow-blue-900"
            >
              <span>Visit</span>
              <ExternalLinkIcon
                size={18}
                className="transition-transform duration-300"
              />
            </a>
            <p className="mb-8 mt-3 sm:font-lg text-justify text-sm font-normal shiny-text">
              I, Balaskanthan AK, along with my teammates Gopinath and Kirthi
              Sai, am thrilled to share that we secured 2nd place 🏆 out of 40
              teams in the TEACHACKS'25 (National Level Hackathon) at TEXUS'25,
              organized by SRM Institute of Science and Technology, Ramapuram,
              Chennai. Competing in this 24-hour hackathon was an incredible
              experience, pushing our limits in problem-solving, teamwork, and
              innovation. Grateful for this opportunity and looking forward to
              more challenges ahead!
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={tech}
                alt=""
                width={500}
                height={500}
                className="sm:h-50 h-20 md:w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />

              <img
                src={tech1}
                alt="startup template"
                width={500}
                height={500}
                className="sm:h-50 h-20 md:w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      emoj: "🚀",
      title: "2025",
      content: (
        <div>
          <div className="head flex justify-between items-baseline">
            <h1 className="sm:text-xl text-lg font-bold text-white pb-3">
              🚀 Webpreneur, TEXUS’25, SRM Institute of Science and Technology{" "}
            </h1>
            <div className="flex items-center gap-1 text-sm text-gray-500 font-bold">
              <Calendar className="w-4 h-4" />
              <span>22/11/23</span>
            </div>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/posts/balaskanthan_hackathon-texus25-teachacks25-activity-7311977127451443201-Ll6a?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbCyvIBksGIk_KlHpk0Hdz9rI6xUhUlwgY"
              className="group relative inline-flex items-center gap-3 px-2 py-1  border-2 hover:border-blue-950 hover:text-blue-800 text-sm text-white font-bold rounded-lg  duration-300 hover:shadow-sm hover:shadow-blue-900"
            >
              <span>Visit</span>
              <ExternalLinkIcon
                size={18}
                className="transition-transform duration-300"
              />
            </a>
            <p className="mb-8 mt-3 sm:font-lg text-justify text-sm font-normal shiny-text">
              We Balaskanthan A K and Kaven are thrilled to announce that we
              secured 2nd place in the Webpreneur event at TEXUS’25, hosted by
              SRM Institute of Science and Technology! 🎉 In just 1.5 hours, we
              built GameZone—a gaming-focused eCommerce website that connects
              users through an integrated Discord community, enhancing both
              interaction and engagement. 🎮🛒 💡 The event featured two
              competitive pitching rounds, testing both development speed and
              communication. We’re proud to have come out on top!
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={webprenur}
                alt=""
                width={500}
                height={500}
                className="sm:h-50 h-20 md:w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />

              <img
                src={webprenur1}
                alt="startup template"
                width={500}
                height={500}
                className="sm:h-50 h-20 md:w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Heading />
      <Suspense
        fallback={
          <div className="text-white text-center py-10">
            Loading timeline...
          </div>
        }
      >
        <Timeline data={data} />
      </Suspense>
    </div>
  );
}

export default TimelineDemo;
