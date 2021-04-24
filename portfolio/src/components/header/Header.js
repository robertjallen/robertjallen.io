import React from "react";
import logo from '../../images/bp_colored.png'
import styles from './header.css'

export default function Header() {
  return (
    <header id="pageTop">
      <a className="nav" href="#about" id="to-about">
        <i className="fa fa-chevron-circle-down fa-3x faa-vertical animated faa-slow"></i>
      </a>

      <div className="nav-container">
        <ul className="left-bar navbar">
          <li className="left-bar-logo">
            <a href="index.html" className="logo">
              <img
                src={logo}
                align="left"
                alt="Rob Allen logo"
              />
            </a>
          </li>
          <li className="named">
            <span className="robert">robert</span>
            <span className="allen">allen</span>
          </li>
        </ul>
        <ul className="right-bar navbar" id="right-bar-collapse">
          <li>
            <a href="#contact" className="nav">
              contact
            </a>
          </li>
          <li>
            <a href="#portfolio" className="nav">
              portfolio
            </a>
          </li>
          <li>
            <a href="#skills" className="nav">
              skills
            </a>
          </li>
          <li>
            <a href="#about" className="nav">
              about
            </a>
          </li>
        </ul>
      </div>

      {/* BANNER  */}
      <div className="banner">
        <blockquote className="quote wow bounceInRight" data-wow-duration="2s">
          <i className="fa fa-quote-left fa-1x" aria-hidden="true"></i>
          Magic happens when you're wired
          <i className="fa fa-quote-right fa-1x" aria-hidden="true"></i>
        </blockquote>
        <div className="header-banner">
          <ul className="header-name wow bounceInLeft" data-wow-duration="2s">
            <li>
              <h1>Robert</h1>
            </li>
            <li>
              <h1>Allen</h1>
            </li>
          </ul>
        </div>
        <ul className="colors">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      {/* </div> */}
      {/* End of Banner  */}

      {/* <a class="toTop" href="#pageTop" id="toTop"><i class="fa fa-chevron-circle-up fa-3x faa-vertical animated faa-slow"></i></a>  */}
    </header>
  );
}
