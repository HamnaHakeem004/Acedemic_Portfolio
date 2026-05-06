import Contact from "@/src/components/Contact";
import HeroClientWrapper from "@/src/components/HeroClientWrapper";
import Navbar from "@/src/components/Navbar";
import Skills from "@/src/components/Skills";
import About from "@/src/components/About";
import Projects from "@/src/components/Projects";
import Footer from "@/src/components/Footer";

// Academic Components (you will create these)
import ReflectiveJournal from "@/src/components/academic/ReflectiveJournal";
import CareerPlan from "@/src/components/academic/CareerPlan";
import Certificates from "@/src/components/academic/Certificates";
import CVSection from "@/src/components/academic/CVSection";

// Use the client-only wrapper so the Hero runs only on the client

export default function Home() {
  return (
    <main className="relative bg-transparent text-slate-900">
      <Navbar />
      <HeroClientWrapper />
      <About />
      <Projects />
      <Skills />
      <ReflectiveJournal />
      <CareerPlan />
      <Certificates />
      <CVSection />
      <Contact />
      <Footer />
    </main>
  );
}
