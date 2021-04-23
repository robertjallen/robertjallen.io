import React, {useState} from 'react'
import awards from './data'
import Award from './Award'
import styles from './awards.css'

export default function Awards() {

  const [awardImages, setAwardImages] = useState(awards)
  
  return (
    <div className="awards-container">
      <h1 className="sections">Awards</h1>
      {awards.map(award => {
        return <Award award={award}/>
      })}
    </div>
  )
}
