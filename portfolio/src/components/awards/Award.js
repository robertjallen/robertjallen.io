import React from 'react'
import styles from './awards.css'

export default function Award(props) {
  console.log(props, "award")
  return (
    <div className="container">
      <img className="award-image" src={props.award.image}/>
    </div>
  )
}

