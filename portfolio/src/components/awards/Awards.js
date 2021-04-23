import React, {useState} from 'react'
import awards from './data'
import Award from './Award'

export default function Awards() {

  const [awardImages, setAwardImages] = useState(awards)
  
  return (
    <>
      {awards.map(award => {
        return <Award award={award}/>
      })}
    </>
  )
}
