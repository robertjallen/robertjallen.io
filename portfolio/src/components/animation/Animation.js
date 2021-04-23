import React from 'react'
import styles from './animation.css'

export default function Animation() {
  return (
    <section className="loader">
        <div className='loader-center'>
          <div className='chars'>
          {/* <span className='char brace'>"{"</span> */}
          <span className='dots'>
          <span className='char dot _dot-1'>.</span>
          <span className='char dot _dot-2'>.</span>
          <span className='char dot _dot-3'>.</span>
          </span>
        {/* <span className='char brace'>"}"</span> */}
        </div>
      </div>
    </section>
    
  )
}




