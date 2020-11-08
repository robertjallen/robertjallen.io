import React from 'react'

import html from '../images/icons/html.jpg'

import Skill from './Skill'


export default function Skills() {
  const skills = [{name: "HTML" }, {name: "CSS"}, {name: "JavaScript"}];

  return (
    <div>
      <h1 class="sections skillsec" id="skills">SKILLS</h1>
      <hr class="hrs"/>
      <div class="skills-col">
        <div class="skill-sec">
          <div class="col wow bounceInUp" data-wow-duration="1.5s">
            <h3>Web Development</h3>
            <div class="skill-sec-container">
              {skills.map(skill => {
                return <Skill skill={skill}/> 
              })}

              
              <div class="js skill">
                <img class="skill-img" src="images/icons/js.jpg" alt="JavaScript"/>
                <p>JavaScript</p>
              </div>
              <div class="js skill">
                <img class="skill-img" src="images/icons/react.jpg" alt="react"/>
                <p>React</p>
              </div>
              <div class="js skill">
                <img class="skill-img " src="images/icons/redux-283024.png" alt="redux"/>
                <p>Rudux</p>
              </div>
            </div>
          </div><br/>
          <div class="col wow bounceInUp" data-wow-delay=".4s" data-wow-duration="1.5s">
            <h3>Tools & Technologies</h3>
            <div class="skill-sec-container">

              <div class="react skill">
                <img class="skill-img framework" src="images/icons/jest.png" alt="Jest testing library"/>
                <p>Jest</p>
              </div>
              <div class="sass skill">
                <img class="skill-img" src="images/icons/sass.jpg" alt="C++"/>
                <p>SASS</p>
              </div>
              <div class="mysql skill">
                <img class="skill-img" src="images/icons/nodejs.jpg" alt="node"/>
                <p>node</p>
              </div>
              <div class="sql skill">
                <img class="skill-img" src="images/icons/sql.jpg" alt="Structured Query Language" />
                <p>SQL</p>
              </div>
              <div class="git skill">
                <img class="skill-img" src="images/icons/git.jpg" alt="Git"/>
                <p>Git</p>
              </div>
            </div>
          </div>


          <div class="col wow bounceInUp" data-wow-delay=".8s" data-wow-duration="1.5s">
            <h3>Others</h3>
            <div class="skill-sec-container">
              <div class="design skill">
                <img class="skill-img framework" src="images/icons/responsivedesign.jpg" alt="responsivedesign"/>
                <p>Responsive</p>
              </div>
              <div class="photoshop skill">
                <img class="skill-img" src="images/icons/photoshop.jpg" alt="Adobe Photoshop"/>
                <p>Photoshop</p>
              </div>
              <div class="design skill">
                <img class="skill-img framework" src="images/icons/figma.png" alt="figma"/>
                <p>Figma</p>
              </div>
              <div class="github skill">
                <img class="skill-img" src="images/icons/github.jpg" alt="GitHub"/>
                <p>GitHub</p>
              </div>
              <div class="design skill">
                <img class="skill-img" src="images/icons/Python.png" alt="python"/>
                <p>Python</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
