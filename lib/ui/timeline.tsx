"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

const Timeline = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 90%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className=" dark:bg-neutral-950/10 border border-white/10 mx-auto rounded-t-3xl shadow-2xl shadow-amber-50/50   font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-15   md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-10  items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className=" absolute left-3 md:left-3 w-10 h-10 text-4xl flex items-center justify-center">
                <div className="  relative p-3 rounded-2xl">
                  <div className="absolute h-full w-full shadow-lg shadow-white/10 top-0 border-1 border-amber-50/10 left-0 bg-white/2 animate-pulse rounded-2xl"></div>
                  <div className="text-4xl  animate-bounce">{item.emoj}</div>
                </div>
              </div>
              <h1 className="hidden md:block md:pl-20 md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ">
                {item.title}
              </h1>
            </div>

            <div className="relative pl-20  rounded-xl animation-rotate pr-4 md:pl-4 w-full">
              <h1 className="md:hidden block text-white text-3xl mb-4 text-left font-bold">
                {item.title}
              </h1>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
      <div className="text-3xl pb-5 font-extrabold text-white text-center">
        To be Continued...
      </div>
    </div>
  );
};

export default Timeline;
