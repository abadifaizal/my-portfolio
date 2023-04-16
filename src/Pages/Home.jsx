import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import GradientLine from "../components/GradientLine";
import Intro from "../components/Intro";
import Jobs from "../components/Jobs";
import Showcase from "../components/Showcase";

export default function Home() {
  return (
    <>
      <Intro/>
      <GradientLine/>
      <About/>
      <GradientLine/>
      <Jobs/>
      <GradientLine/>
      <Showcase/>
      <GradientLine/>
      <Contact/>
      <GradientLine/>
    </>
  )
}