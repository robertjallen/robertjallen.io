import React from 'react'

import html from '../images/icons/html.jpg'
import css from '../images/icons/css.jpg'
import javascript from '../images/icons/js.jpg'
import react from '../images/icons/react.jpg'
import redux from '../images/icons/redux.png'
import jest from '../images/icons/jest.png'
import sass from '../images/icons/sass.jpg'
import node from '../images/icons/nodejs.jpg'
import sql from '../images/icons/sql.jpg'
import git from '../images/icons/git.jpg'

import responsive from '../images/icons/responsivedesign.jpg'
import photoshop from '../images/icons/photoshop.jpg'
import figma from '../images/icons/figma.png'
import github from '../images/icons/github.jpg'
import python from '../images/icons/python.png'


import Skill from './Skill'


export default function Skills() {
  const webSkills = [
    {name: "HTML", image: html },
    {name: "CSS", image: css},
    {name: "JavaScript", image: javascript},
    {name: "REACT", image: react},
    {name: "REDUX", image: redux}
  ];

  const tools = [
    {name: "JEST", image: jest },
    {name: "SASS", image: sass},
    {name: "NODE", image: node},
    {name: "SQL", image: sql},
    {name: "GIT", image: git}
  ]

  const other = [
    {name: "RESPONSIVE", image: responsive },
    {name: "PHOTOSHOP", image: photoshop},
    {name: "FIGMA", image: figma},
    {name: "GITHUB", image: github},
    {name: "PYTHON", image: python}
  ]

  return (
    <div>
      <h1 class="sections skillsec" id="skills">SKILLS</h1>
      <hr class="hrs"/>
      <div class="skills-col">
        <div class="skill-sec">
          <div class="col wow bounceInUp" data-wow-duration="1.5s">
            <h3>Web Development</h3>
            <div class="skill-sec-container">
              {webSkills.map(skill => {
                return <Skill skill={skill}/> 
              })}
            </div>
          </div><br/>

          <div class="col wow bounceInUp" data-wow-delay=".4s" data-wow-duration="1.5s">
            <h3>Tools & Technologies</h3>
            <div class="skill-sec-container">
              {tools.map(skill => {
                  return <Skill skill={skill}/> 
                })}
            </div>
          </div>

          <div class="col wow bounceInUp" data-wow-delay=".8s" data-wow-duration="1.5s">
            <h3>Others</h3>
            <div class="skill-sec-container">
              {other.map(skill => {
                    return <Skill skill={skill}/> 
                  })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
