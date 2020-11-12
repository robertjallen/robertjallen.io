import React from 'react'

export default function PortfolioModal(props) {

	console.log("modal", props)
	// let name = props.selcted.name
	// let selected = props.selected
	// console.log(selected)
	
	// nav-overlay
		return (
      <div className={props.open ? 'my-nav nav-overlay' : 'false'}>
				<a id="topNav1" href={props.selected.github} target="_blank" rel="noreferrer"><img src={props.selected.fork} alt="Fork me on GitHub" /></a>
				<a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
				<div className="portfolio-content">
					<h1 className="content-title">{props.selected.name} <span className="thin"></span><span className="thin"></span></h1>
					<p className={`${props.selected.name}-extra nav-extra`}>{props.selected.summary}</p>

					<div className={`${props.selected.name}-details nav-details`}><span>ROLE</span>{props.selected.role} </div>
					<div className={`${props.selected.name}-details nav-details`}><span>DATE</span> {props.selected.date}</div>

					<div className={`intro ${props.selected.name}-intro`}>
						<div className={`circle ${props.selected.name}-circle`}><i className="fa fa-info-circle"></i></div>
						<p>{props.selected.description}</p>
					</div>

					<div className="contents">
						<h1><span>01 </span>USER INTERFACE</h1>
						<div className="overview">
							<img src={props.selected.image} alt={props.selected.name}/>
						</div>
						<div className="overview overview-text">
							<h3>{props.selected.name} <span> UI</span></h3>
							<p>{props.selected.features}</p>
						</div>
					</div>
					
					{/* demo button */}
					<div id="demo" className={`circle ${props.selected.name}-intro`}><a href={props.selected.github}
							target="_blank" rel="noreferrer">demo</a>
						<i className="fas fa-long-arrow-alt-right"></i>
					</div>
					<a className="toTops" href="#topNav1">
						<i className="fa fa-chevron-circle-up fa-3x faa-vertical animated"></i>
					</a>
					<div className={`content-footer ${props.selected.name}-footer`} onclick="closeNav()">
						<a href="javascript:void(0)">
							<h1>GO BACK TO <span>PORTFOLIO</span></h1>
						</a>
					</div>
				</div>
		</div>
  )
  
}
