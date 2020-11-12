import React from 'react'

export default function Skill(props) {
  // console.log(props.skill.name)
  return (
      <div className="js skill">
        <img className="skill-img" src={props.skill.image} alt={`props.project.name`}/>
        <p>{props.skill.name}</p>
      </div>
  )
}
