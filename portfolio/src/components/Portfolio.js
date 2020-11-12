import React from 'react'
import PortfolioCard from './PortfolioCard'
import PortfolioModal from './PortfolioModal'

export default function Portfolio(props) {

  // console.log(props)
  return (
      <div className="portfolio" id="portfolio">
		    <h1 className="sections">Portfolio</h1>
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
