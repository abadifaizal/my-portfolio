import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <Link to="/">
              <span className="fa-solid fa-code" aria-hidden="true"></span>
              <span>Faizal Abadi</span>
            </Link>
          </h1>
        </li>
        <li><Link to="projects">Projects</Link></li>
        <li><Link to="collections">Collections</Link></li>
        <li><a href="mailto:abadifaizal@gmail.com" target="_blank" rel="noreferrer">Contact</a></li>
        <li>
          <a href="https://www.linkedin.com/in/faizal-abadi-36101638/" target="_blank" rel="noreferrer">
            <span className="fa-brands fa-linkedin" aria-hidden="true"></span>
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://abadifaizal.github.io/portfolio-project/" target="_blank" rel="noreferrer">
            <span className="fa-brands fa-square-github" aria-hidden="true"></span>
            <span className="sr-only">Github</span>
          </a>
        </li>
        {/* <li><a href="#" className="button">Resume</a></li> */}
      </ul>
    </nav>
  )
}