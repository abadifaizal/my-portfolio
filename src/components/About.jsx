import React from "react";
import profileImg from "../assets/images/profile.jpeg";

export default function About() {
  return (
    <section id="about">
      <h2 className="numbered-heading">About Me</h2>
      <div className="inner">
        <div className="about__text">
          <p>Hello! My name is Faizal and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I had a lecture about making a website using JSP (Jakarta Server Pages formerly JavaServer Pages). It taught me a lot about HTML, CSS &amp; Dynamic Pages!</p>
          <p>My main focus these days is building best user experience at <a href="https://brandex.ne.jp/" rel="noopener noreferrer" target="_blank">Brandex</a> for a variety of clients.</p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Firebase</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="about__pict">
          <div className="wrapper">
            <div className="about__pict-wrapper">
              <div className="img">
                <img src={profileImg} alt="profile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}