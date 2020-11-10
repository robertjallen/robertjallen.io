import React from 'react'

export default function PortfolioModal(props) {
  let name = props.project.name
  return (
      <div id={`${name}-nav`} class="nav-overlay">
				<a id="topNav1" href={props.project.github} target="_blank"><img src={props.project.fork} alt="Fork me on GitHub" /></a>
				<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
				<div class="portfolio-content">
					<h1 class="content-title">{props.project.name} <span class="thin"></span><span class="thin"></span></h1>
					<p class={`${props.project.name}-extra nav-extra`}>{props.project.summary}</p>

					<div class={`${name}-details nav-details`}><span>ROLE</span>{props.project.role} </div>
					<div class={`${name}-details nav-details`}><span>DATE</span> {props.project.date}</div>

					<div class={`intro ${name}-intro`}>
						<div class={`circle ${name}-circle`}><i class="fa fa-info-circle"></i></div>
						<p>{props.project.description}</p>
					</div>

					<div class="contents">
						<h1><span>01 </span>USER INTERFACE</h1>
						<div class="overview">
							<img src={props.project.image}/>
						</div>
						<div class="overview overview-text">
							<h3>{name} <span> UI</span></h3>
							<p>{props.project.features}</p>
						</div>
					</div>
					
					{/* demo button */}
					<div id="demo" class={`circle ${name}-intro`}><a href={props.project.github}
							target="_blank">demo</a>
						<i class="fas fa-long-arrow-alt-right"></i>
					</div>
					<a class="toTops" href="#topNav1">
						<i class="fa fa-chevron-circle-up fa-3x faa-vertical animated"></i>
					</a>
					<div class={`content-footer ${name}-footer`} onclick="closeNav()">
						<a href="javascript:void(0)">
							<h1>GO BACK TO <span>PORTFOLIO</span></h1>
						</a>
					</div>
				</div>
		</div>
  )
}
