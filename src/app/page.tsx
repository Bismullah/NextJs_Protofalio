import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero name="Bismillah" title="Frontend Developer passionate about building fast and modern web apps." />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
