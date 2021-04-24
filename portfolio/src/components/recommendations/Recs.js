import React from 'react'
import styles from './recommendation.css'
import Recommendation from './Rec'
import Animation from '../animation/Animation'

// images
import Carl from '../../images/recommendations/CarlRedding.jpg'
import DL from '../../images/recommendations/DLombardino.jpg'
import Jay from '../../images/recommendations/JayLeach.jpg'
import Shelbie from '../../images/recommendations/ShelbieTaylor.jpg'
import Sirani from '../../images/recommendations/SiraniMcNeill.jpg'
import Tom from '../../images/recommendations/TomBarber.JPG'


export default function Recommendations() {

  let recs = [
    {image: Carl},
    {image: DL},
    {image: Jay},
    {image: Shelbie},
    {image: Sirani},
    {image: Tom}
  ]

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
