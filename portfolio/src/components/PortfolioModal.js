import React from 'react'

export default function PortfolioModal(props) {

	console.log("modal", props)
	let name = props.project.name
	
	
  return (
      <div id={`my-nav`} className="nav-overlay">
				<a id="topNav1" href={props.project.github} target="_blank" rel="noreferrer"><img src={props.project.fork} alt="Fork me on GitHub" /></a>
				<a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
				<div className="portfolio-content">
					<h1 className="content-title">{props.project.name} <span className="thin"></span><span className="thin"></span></h1>
					<p className={`${props.project.name}-extra nav-extra`}>{props.project.summary}</p>

					<div className={`${name}-details nav-details`}><span>ROLE</span>{props.project.role} </div>
					<div className={`${name}-details nav-details`}><span>DATE</span> {props.project.date}</div>

					<div className={`intro ${name}-intro`}>
						<div className={`circle ${name}-circle`}><i className="fa fa-info-circle"></i></div>
						<p>{props.project.description}</p>
					</div>

					<div className="contents">
						<h1><span>01 </span>USER INTERFACE</h1>
						<div className="overview">
							<img src={props.project.image} alt={props.project.name}/>
						</div>
						<div className="overview overview-text">
							<h3>{name} <span> UI</span></h3>
							<p>{props.project.features}</p>
						</div>
					</div>
					
					{/* demo button */}
					<div id="demo" className={`circle ${name}-intro`}><a href={props.project.github}
							target="_blank" rel="noreferrer">demo</a>
						<i className="fas fa-long-arrow-alt-right"></i>
					</div>
					<a className="toTops" href="#topNav1">
						<i className="fa fa-chevron-circle-up fa-3x faa-vertical animated"></i>
					</a>
					<div className={`content-footer ${name}-footer`} onclick="closeNav()">
						<a href="javascript:void(0)">
							<h1>GO BACK TO <span>PORTFOLIO</span></h1>
						</a>
					</div>
				</div>
		</div>
  )
}
