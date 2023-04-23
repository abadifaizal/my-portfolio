import React from "react";
import { Link } from "react-router-dom";
import { useScrollDirection } from "../helper/scrollDirection";

export default function Header() {
  const scrollDirection = useScrollDirection();

  return (
    <nav className={scrollDirection === 'up' ? 'hide' : 'show'}>
      <ul>
        <li>
          <h1>
            <Link to="/">
              <span className="fa-solid fa-code" aria-hidden="true"></span>
              <span>Faizal Abadi</span>
            </Link>
          </h1>
        </li>
        {/* <li><Link to="projects">Projects</Link></li> */}
        {/* <li><Link to="collections">Collections</Link></li> */}
        <li><a href="mailto:abadifaizal@gmail.com" target="_blank" rel="noreferrer">Contact</a></li>
        <li>
          <a href="https://www.linkedin.com/in/faizal-abadi-36101638/" target="_blank" rel="noreferrer">
            <span className="fa-brands fa-linkedin" aria-hidden="true"></span>
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/abadifaizal" target="_blank" rel="noreferrer">
            <span className="fa-brands fa-square-github" aria-hidden="true"></span>
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="../assets/Documents/resume_faizal.pdf" target="_blank" rel="noreferrer" className="button resume-button">Resume</a>
        </li>
      </ul>
    </nav>
  )
}