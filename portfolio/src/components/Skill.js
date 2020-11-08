import React from 'react'

export default function Skill(props) {
  console.log(props.skill.name)
  return (
      <div class="js skill">
        {/* <img class="skill-img" src={props.skillImage} /> */}
        <p>{props.skill.name}</p>
      </div>
  )
}
