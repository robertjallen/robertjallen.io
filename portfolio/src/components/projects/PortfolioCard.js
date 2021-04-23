import React from 'react'
// import styles from './portfolio.css'

export default function PortfolioCard(props) {

  // console.log(props)
  let name = props.project.name

  function myNavOpen() {
    props.setOpen(true)
    props.setSelected(props.project)
    console.log("selected", props.selected)
    // document.getElementById("{name}-my-nav").style.width = "100%";
    // $("body").addClass("overflo");
  }

  

  return (
    <>
    <div className="container wow bounceInRight" data-wow-delay=".1s" data-wow-duration="1.5s" onClick={myNavOpen}>
      <div className="overflower">
				<div className={`bot ${name}`}></div>
			</div>
			<div className={`bot overlay overlay-${props.project.overlay}`}>
				<h1>Web</h1>
			</div>
      <h4>{name}</h4>
			<ul>
        {props.project.skills.map((skill, id) => {
          return <li key={id} className={`${name}`}>{skill}</li>
        })}
			</ul>
    </div>
    </>
  )
}
