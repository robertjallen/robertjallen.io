import React, {useState} from 'react'
import awards from './data'
import Award from './Award'
import styles from './awards.css'
import Animation from '../animation/Animation'

export default function Awards() {

  const [awardImages, setAwardImages] = useState(awards)
  
  return (
    <div className="awards-container">
      <Animation/>
      <h1 className="sections">Awards</h1>
      <hr className="hrs"/>
      {awards.map(award => {
        return <Award award={award}/>
      })}
    </div>
  )
}
