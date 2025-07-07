import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Achievements from "./Achievements";
import Projects from "./Projects";
import ScrollDownButton from "./ScrollDownButton";
import Skills from "./Skiils.jsx";
import Experience from "./Experience.jsx";
import Contact from './Contact.jsx';
import Footer from './Footer.jsx'
function Home() {
  return (
    <>
      <Navbar />
      <div className="2xl:mx-50 xl:mx-30 lg:mx-20 md:mx-3 sm:mx-0 mx-1 ">
        <Hero />

        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
          <Contact />
        <ScrollDownButton />
      </div>
      <Footer />
    </>
  );
}

export default Home;
