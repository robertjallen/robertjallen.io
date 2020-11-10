import React from 'react'

export default function PortfolioCard(props) {
  let name = props.project.name

  return (
    <div class="container wow bounceInRight" data-wow-delay=".1s" data-wow-duration="1.5s" onclick="myBrewsNavOpen()">
      <div class="overflower">
				<div class={`bot ${name}`}></div>
			</div>
			<div class={`bot overlay-${props.project.overlay}`}>
				<h1>Web</h1>
			</div>
      <h4>{name}</h4>
			<ul>
        {props.project.skills.map(skill => {
          return <li class={`${name}`}>{skill}</li>
        })}
			</ul>
    </div>
  )
}
