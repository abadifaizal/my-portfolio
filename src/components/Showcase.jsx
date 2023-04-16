import React from "react";
import vanlifeImg from "../assets/images/ss_vanlifeApp.png";
import wordCloneImg from "../assets/images/ss_wordleClone.png";
import beginnerReactImg from "../assets/images/ss_beginnerReact.png";

export default function Showcase() {
  return (
    <section id="projects">
      <h2 className="numbered-heading">Some Things I’ve Built</h2>
      <article>
        <div className="text">
          <h4>Latest Project</h4>
          <h3>Vanlife App</h3>
          <p className="blackbox">Vanlife is a web application to rent a camper van to their next road trip adventure. <br/>
            <a href="https://vanlife-app.vercel.app/" target="_blank" rel="noreferrer">Vanlife</a>.
          </p>
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
            Clone of wordle game. <br />
            <a href="https://wordle-clone-abadifaizal.vercel.app/" target="_blank" rel="noreferrer">Wordle Clone</a>.
          </p>
          <ul>
            <li>ReactJS</li>
          </ul>
        </div>
        <img src={wordCloneImg} alt="Screenshot of the Wordle Clone." />
      </article>
      <article>
        <div className="text">
          <h4>Bootcamp Project</h4>
          <h3>Fish Order Simulation</h3>
          <p className="blackbox">
            A simple menu order. <br />
            <a href="https://catch-of-the-day-three-xi.vercel.app/" target="_blank" rel="noreferrer">Catch of the day</a>.
          </p>
          <ul>
            <li>ReactJs</li>
            <li>Firebase</li>
          </ul>
        </div>
          <img src={beginnerReactImg} alt="Screenshot of beginner react." />
      </article>
    </section>
  )
}