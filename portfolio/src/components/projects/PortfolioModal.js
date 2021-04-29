import React from 'react'
import fork from '../../images/fork.png'
// import styles from './portfolio.css'

export default function PortfolioModal(props) {

	console.log("modal", props)
	// let name = props.selcted.name
	// let selected = props.selected
	// console.log(selected)

	function closeNav() {
    props.setOpen(false)
    // props.setSelected({})
    // document.getElementById("{name}-my-nav").style.width = "0%";
    // $("body").removeClass("overflo");
  }
	
	// nav-overlay
		return (
      <div id={props.open ? 'my-nav' : 'closed'} className='nav-overlay'>
				<a id="topNav1" href={props.selected.github} target="_blank" rel="noreferrer"><img src={fork} alt="Fork me on GitHub" /></a>
				<a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
				<div className="portfolio-content">
					<h1 className="content-title">{props.selected.name} <span className="thin"></span><span className="thin"></span></h1>
					<p className={`${props.selected.name}-extra nav-extra`}>{props.selected.summary}</p>

					<div className={`${props.selected.name}-details nav-details`}><span>ROLE</span>{props.selected.role} </div>
					<div className={`${props.selected.name}-details nav-details`}><span>DATE</span> {props.selected.date}</div>

					<div className={`intro intro-${props.selected.overlay} ${props.selected.name}-intro`}>
						<div className={`circle circle-${props.selected.overlay}`}>
							<i className="fa fa-info-circle"></i>
						</div>
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
						<div className="overview">
							<img src={props.selected.gifs} alt={props.selected.name}/>
						</div>
					</div>
					
					{/* demo button */}
					<div id="demo" className={`circle circle-${props.selected.overlay} `}><a href={props.selected.demo}
							target="_blank" rel="noreferrer">demo</a>
						<i className="fas fa-long-arrow-alt-right"></i>
					</div>
					{/* <a className="toTops" href="#topNav1">
						<i className="fa fa-chevron-circle-up fa-3x faa-vertical animated"></i>
					</a> */}
					<div className={`content-footer footer-${props.selected.overlay} `} onclick="closeNav()">
						<a href="javascript:void(0)" onClick={closeNav}>
							<h1>GO BACK TO <span>PORTFOLIO</span></h1>
						</a>
					</div>
				</div>
		</div>
  )
  
}
