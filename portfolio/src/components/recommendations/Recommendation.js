import React from 'react'

export default function Recommendation(props) {
  return (
      <div className="image-container">
          <img className="rec-image" src={props.rec.image}/>
      </div>
  )
}
