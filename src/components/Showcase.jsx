import React from "react";
import vanlifeImg from "../assets/images/ss_vanlifeApp.png";
import wordCloneImg from "../assets/images/ss_wordleClone.png";
import projectAppImg from "../assets/images/ss_projectApp1.png";

export default function Showcase() {
  return (
    <div className="section-blue">
      <section id="projects">
        <h2>Projects I&apos;m proud of</h2>
        <article>
          <div className="text">
            <h4>Latest Project</h4>
            <h3>Vanlife App</h3>
            <p className="blackbox">Vanlife is a web application to rent a camper van to their next road trip adventure. <br/>
              <a href="https://vanlife-app.vercel.app/" target="_blank" rel="noreferrer">Home Page</a>.
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>ReactJS</li>
              <li>React Router 6</li>
              <li>Firebase</li>
            </ul>
          </div>
          <img src={vanlifeImg} alt="Screenshot of the Vanlife App." />
        </article>
        <article className="reverse">
          <div className="text">
            <h4>Bootcamp Project</h4>
            <h3>Wordle Clone Game</h3>
            <p className="blackbox">
              A wordle game clone with textinput.
              <a href="https://wordle-clone-abadifaizal.vercel.app/" target="_blank" rel="noreferrer">Wordle Clone</a>.
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>ReactJS</li>
            </ul>
          </div>
          <img src={wordCloneImg} alt="Screenshot of the Wordle Clone." />
        </article>
        <article>
          <div className="text">
            <h4>Bootcamp Project</h4>
            <h3>Project App Schedule</h3>
            <p className="blackbox">
              A scheduling app for managing task project.
              <a href="https://project-xs6zkk33j-abadifaizal.vercel.app/signin" target="_blank" rel="noreferrer">Project App</a>.
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>NextJs 13</li>
              <li>ReactJs</li>
              <li>Railway (postgressSQL)</li>
              <li>Vercel</li>
              <li>Server Component</li>
            </ul>
          </div>
            <img src={projectAppImg} alt="Screenshot of project App." />
        </article>
      </section>
    </div>
  )
}