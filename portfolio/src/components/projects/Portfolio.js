import React from 'react'
import PortfolioCard from './PortfolioCard'
import styles from './portfolio.css'
import Animation from '../animation/Animation'

export default function Portfolio(props) {
  console.log(props, "portfolio props")
  return (
      <div className='portfolio' id='portfolio'>
        <Animation/>
		    <h1 className="sections">Projects and Experience</h1>
        <hr className="hrs"/>
        {props.projects.map(project => {
          return (
            <>
              <PortfolioCard project={project} open={props.open} setOpen={props.setOpen} selected={props.selected} setSelected={props.setSelected}/>
            </>
          ) 
        })}
      </div>
  )
}
