import React from "react";
import logo from '../images/bp_colored.png'

export default function Header() {
  return (
    <header id="pageTop">
      <a class="nav" href="#about" id="to-about">
        <i class="fa fa-chevron-circle-down fa-3x faa-vertical animated faa-slow"></i>
      </a>

      <div class="nav-container">
        <ul class="left-bar navbar">
          <li class="left-bar-logo">
            <a href="index.html" class="logo">
              <img
                src={logo}
                align="left"
                alt="Rob Allen logo"
              />
            </a>
          </li>
          <li class="named">
            <span class="robert">robert</span>
            <span class="allen">allen</span>
          </li>
        </ul>
        <ul class="right-bar navbar" id="right-bar-collapse">
          <li>
            <a href="#contact" class="nav">
              contact
            </a>
          </li>
          <li>
            <a href="#portfolio" class="nav">
              portfolio
            </a>
          </li>
          <li>
            <a href="#skills" class="nav">
              skills
            </a>
          </li>
          <li>
            <a href="#about" class="nav">
              about
            </a>
          </li>
        </ul>
      </div>

      {/* BANNER  */}
      <div class="banner">
        <blockquote class="quote wow bounceInRight" data-wow-duration="2s">
          <i class="fa fa-quote-left fa-1x" aria-hidden="true"></i>
          Magic happens when you're wired
          <i class="fa fa-quote-right fa-1x" aria-hidden="true"></i>
        </blockquote>
        <div class="header-banner">
          <ul class="header-name wow bounceInLeft" data-wow-duration="2s">
            <li>
              <h1 class="😲">R</h1>
            </li>
            <li>
              <h1 class="😮">o</h1>
            </li>
            <li>
              <h1 class="😦">b</h1>
            </li>
            <li>
              <h1 class="😯">e</h1>
            </li>
            <li>
              <h1 class="😉">r</h1>
            </li>
            <li>
              <h1 class="😉">t</h1>
            </li>

            <li>
              <h1 class="😛">A</h1>
            </li>
            <li>
              <h1 class="😜">l</h1>
            </li>
            <li>
              <h1 class="😉">l</h1>
            </li>
            <li>
              <h1 class="😛">e</h1>
            </li>
            <li>
              <h1 class="😝">n</h1>
            </li>
          </ul>
        </div>
        <ul class="colors">
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
