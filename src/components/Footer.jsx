import React from "react";

export default function Footer() {
  return (
    <footer>
      <h2>Faizal Abadi &middot; Frontend Dev</h2>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/faizal-abadi-36101638/" target="_blank">
            <span className="fa-brands fa-linkedin" aria-hidden="true"></span>
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://abadifaizal.github.io/portfolio-project/" target="_blank">
            <span className="fa-brands fa-square-github" aria-hidden="true"></span>
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="mailto:abadifaizal@gmail.com">
            <span className="fas fa-envelope" aria-hidden="true"></span>
            <span className="sr-only">Email</span>
          </a>
        </li>
      </ul>
      <p><small>&copy; 2021 Faizal Abadi. All rights reserved.</small></p>
    </footer>
  )
}