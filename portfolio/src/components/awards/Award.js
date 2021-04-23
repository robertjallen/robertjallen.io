import React from 'react'

export default function Award(props) {
  console.log(props, "award")
  return (
    <div>
      <img src={props.award.image}/>
    </div>
  )
}

