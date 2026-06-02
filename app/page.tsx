import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Internship from "@/components/sections/Internship";
import Certifications from "@/components/sections/Certifications";
import Achievements from "@/components/sections/Achievements";
import Education from "@/components/sections/Education";
import CloudSecurityWhy from "@/components/sections/CloudSecurityWhy";
import Learning from "@/components/sections/Learning";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Internship />
      <Certifications />
      <Achievements />
      <Education />
      <CloudSecurityWhy />
      <Learning />
      <Contact />
      <Footer />
    </main>
  );
}
