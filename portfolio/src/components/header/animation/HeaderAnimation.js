import React from 'react'
import styles from './animation.css'
import smoke from '../../../images/smoke.mp4'

export default function HeaderAnimation() {

  

  return (
    <div className="header-animation">
      <video src={smoke} autoPlay muted={true} />
      <h1>
        <span>r</span>
        <span>o</span>
        <span>b</span>
        {/* <span> </span> */}
        <span>a</span>
        <span>l</span>
        <span>l</span>
        <span>e</span>
        <span>n</span>
      </h1>
      
    </div>
  )
}
