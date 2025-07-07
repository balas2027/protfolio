import React from "react";

import { ArrowDown, ArrowUp } from "lucide-react";
function ScrollDownButton() {
  return (
    <div>
      <a href="">
        {" "}
        <div className="fixed group bottom-10 right-10 bg-black h-10 w-10 flex items-center justify-center border-white border text-white rounded-full">
          <ArrowUp className="group-hover:animate-bounce" />
          <span className="absolute bottom-full mb-2 w-20 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Scroll to top
          </span>
        </div>
      </a>
    </div>
  );
}

export default ScrollDownButton;
