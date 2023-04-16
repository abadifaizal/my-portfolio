import React from "react";

export default function Jobs() {
  return (
    <section id="jobs">
      <h2 className="numbered-heading">Where I’ve Worked</h2>
      <div className="inner">
        <div role="tablist" aria-label="Job tabs" className="jobs__styledTabList">
          <button id="tab-0" role="tab" tabIndex="0" aria-selected="true" aria-controls="panel-0" className="jobs__styledButton active">
            <span>Brandex</span>
          </button>
          {/* <button id="tab-1" role="tab" tabIndex="-1" aria-selected="false" aria-controls="panel-1" className="jobs__styledButton notActive">
            <span>Scout</span>
          </button>
          <button id="tab-2" role="tab" tabIndex="-1" aria-selected="false" aria-controls="panel-2" className="jobs__styledButton notActive">
            <span>Apple</span>
          </button>
          <button id="tab-3" role="tab" tabIndex="-1" aria-selected="false" aria-controls="panel-3" className="jobs__styledButton notActive">
            <span>Scout</span>
          </button>
          <button id="tab-4" role="tab" tabIndex="-1" aria-selected="false" aria-controls="panel-4" className="jobs__styledButton notActive">
            <span>Starry</span>
          </button>
          <button id="tab-5" role="tab" tabIndex="-1" aria-selected="false" aria-controls="panel-5" className="jobs__styledButton notActive">
            <span>MullenLowe</span>
          </button> */}
          <div className="jobs__highlighted"></div>
        </div>
        <div className="jobs__styledTabPanel">
          <div id="panel-0" role="tabpanel" tabIndex="0" aria-labelledby="tab-0" aria-hidden="false" className="jobs__styledTabItem active">
            <h3>
              <span>Front Engineer</span>
              <span className="company">
                &nbsp;@&nbsp;<a href="https://www.brandex.ne.jp/" className="inline-link" rel="noopener noreferrer" target="_blank">Brandex</a>
              </span>
            </h3>
            <p className="range">April 2019 - Present</p>
            <div>
              <ul>
                <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                <li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, with .NET as a backend.</li>
                <li>Communicate with multi-disciplinary teams of engineers, designers, producers on a daily basis</li>
              </ul>
            </div>
          </div>
          <div id="panel-1" role="tabpanel" tabIndex="-1" aria-labelledby="tab-1" aria-hidden="true" className="jobs__styledTabItem notActive" hidden="">
            <h3>
              <span>Studio Developer</span>
              <span className="company">
                &nbsp;@&nbsp;<a href="https://web.northeastern.edu/scout/" className="inline-link" rel="noopener noreferrer" target="_blank">Scout</a>
              </span>
            </h3>
            <p className="range">January - April 2018</p>
            <div>
              <ul>
                <li>Worked with a team of three designers to build a marketing website and e-commerce platform for <a href="https://blistabloc.com" target="_blank" rel="noopener noreferrer">blistabloc</a>, an ambitious startup originating from Northeastern</li>
                <li>Helped solidify a brand direction for blistabloc that spans both packaging and web</li>
                <li>Interfaced with clients on a weekly basis, providing technological expertise</li>
              </ul>
            </div>
          </div>
          {/* <div id="panel-2" role="tabpanel" tabIndex="-1" aria-labelledby="tab-2" aria-hidden="true" className="jobs__styledTabItem notActive" hidden="">
            <h3>
              <span>UI Engineer Co-op</span>
              <span className="company">
                &nbsp;@&nbsp;<a href="https://www.apple.com/music/" className="inline-link" rel="noopener noreferrer" target="_blank">Apple</a>
              </span>
            </h3>
            <p className="range">July - December 2017</p>
            <div>
              <ul>
                <li>Developed and shipped highly interactive web applications for Apple Music using Ember.js</li>
                <li>Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs</li>
                <li>Architected and implemented the front-end of Apple Music&apos;s embeddable web player widget, which lets users log in and listen to full songs in the browser</li>
                <li>Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps</li>
              </ul>
            </div>
          </div>
          <div id="panel-3" role="tabpanel" tabIndex="-1" aria-labelledby="tab-3" aria-hidden="true" className="jobs__styledTabItem notActive" hidden="">
            <h3>
              <span>Studio Developer</span>
              <span className="company">
                &nbsp;@&nbsp;<a href="https://web.northeastern.edu/scout/" className="inline-link" rel="noopener noreferrer" target="_blank">Scout</a>
              </span>
            </h3>
            <p className="range">January - June 2017</p>
            <div>
              <ul>
                <li>Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern</li>
                <li>Worked closely with designers and management team to develop, document, and manage the conference’s marketing website using Jekyll, Sass, and JavaScript</li>
              </ul>
            </div>
          </div>
          <div id="panel-4" role="tabpanel" tabIndex="-1" aria-labelledby="tab-4" aria-hidden="true" hidden="" className="jobs__styledTabItem notActive">
            <h3>
              <span>Software Engineer Co-op</span>
              <span className="company">
                &nbsp;@&nbsp;<a href="https://starry.com/" className="inline-link" rel="noopener noreferrer" target="_blank">Starry</a>
              </span>
            </h3>
            <p className="range">July - December 2016</p>
            <div>
              <ul>
                <li>Engineered and maintained major features of Starry&apos;s customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS</li>
                <li>Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with Starry Station</li>
                <li>Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Starry’s iOS and Android mobile apps</li>
              </ul>
            </div>
          </div>
          <div id="panel-5" role="tabpanel" tabIndex="-1" aria-labelledby="tab-5" aria-hidden="true" hidden="" className="jobs__styledTabItem notActive">
            <h3>
              <span>Creative Technologist Co-op</span>
              <span className="company">
                &nbsp;@&nbsp;<a href="https://us.mullenlowe.com/" className="inline-link" rel="noopener noreferrer" target="_blank">MullenLowe</a>
              </span>
            </h3>
            <p className="range">July - December 2015</p>
            <div>
              <ul>
                <li>Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery</li>
                <li>Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness</li>
                <li>Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more</li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
