import React from "react";
import {
  Twitter,
  Linkedin,
  Github,
  MessageCircleHeart,
} from "lucide-react";

 function Footer() {
  return (
    <footer className="bg-[#0d1117]  text-gray-400 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
       
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Let’s connect and create something impactful
          </h2>
          <p className="mt-2 max-w-md">
            Available for freelance work, collabs, or just tech chats ☕
          </p>
        </div>

    
        <div className="flex space-x-5 text-white text-[1.6rem]">
          <a href="https://x.com/balas_ak3010" aria-label="go to twitter"  className="hover:text-blue-400 transition-all">
            <Twitter strokeWidth={1.5} />
          </a>
          <a href="https://linkedin.com/in/balaskanthan" aria-label="visit my linkedin" className="hover:text-blue-400 transition-all">
            <Linkedin strokeWidth={1.5} />
          </a>
          <a href="https://github.com/balas2027" aria-label="go to github" className="hover:text-blue-400 transition-all">
            <Github strokeWidth={1.5} />
          </a>
          <a href="https://wa.me/+919123587980" aria-label="go to whatsapp" className="hover:text-blue-400 transition-all">
            <MessageCircleHeart strokeWidth={1.5} />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-sm text-gray-300">
        © 2025 Balaskanthan. Built with passion, purpose, and a pinch of ❤️.
      </div>
    </footer>
  );
}

export default Footer;