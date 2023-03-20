import React from "react";
import Contact from "../components/Contact";
import Gradient from "../components/Gradient";
import Intro from "../components/Intro";
import Showcase from "../components/Showcase";

export default function Home() {
  return (
    <>
      <Intro/>
      <Gradient/>
      <Showcase/>
      <Gradient/>
      <Contact/>
      <Gradient/>
    </>
  )
}