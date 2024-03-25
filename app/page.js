"use client";

import About from "./components/About";
import Curriculum from "./components/Curriculum";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Curriculum />
      <Skills />
      <About />
    </div>
  );
}
