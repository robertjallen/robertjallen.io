import React from 'react'
import styles from './recommendation.css'
import Recommendation from './Rec'
import Animation from '../animation/Animation'
import recs from './data'


export default function Recommendations() {

  return (
    <div className="recommendation-container">
      <Animation/>
      <h1 className="sections">Recommendations</h1>
      <hr className="hrs"/>
        {recs.map(rec => {
          return <Recommendation rec={rec}/>
        })}      
    </div>
  )
}
