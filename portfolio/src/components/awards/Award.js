import React from 'react'
import styles from './awards.css'

export default function Award(props) {
  console.log(props, "award")
  return (
        <div className="award-image-container">
          <img className="award-image" src={props.award.image}/>
          <p className="award-title">{props.award.title}</p>
        </div>
  )
}

