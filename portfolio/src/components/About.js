import React from 'react'
import education from '../images/education.png'

export default function About() {
  return (
  <div class="about" id="about">
      <h1 class="sections">About</h1>
      <hr/>
      <div class="about-col">
        <div class="about1">
          <img class="gradhat" src={education} alt="Education" />
          <h2 class="left-title">Education</h2>
          <p class="foo wow bounceInLeft" data-wow-duration="2s">Front End Web Development Nano Degree</p>
          <p class="wow bounceInLeft" data-wow-duration="2s"><i class="fa fa-university"></i>
            Udacity</p>
          <p class="wow bounceInLeft" data-wow-duration="2s"><i class="fa fa-calendar "></i> 2018 - 2019</p>

          <p class="foo wow bounceInLeft" data-wow-delay=".1s" data-wow-duration="2s">Fullstack Web Development
            Certification</p>
          <p class="wow bounceInLeft" data-wow-delay=".1s" data-wow-duration="2s"><i class="fa fa-university"></i>
            FreeCodeCamp</p>
          <p class="wow bounceInLeft" data-wow-delay=".1s" data-wow-duration="2s"><i class="fa fa-calendar "></i> 2016 -
            current</p>
        </div>

        <div class="about2">
          <h2 class="right-title">In a few words</h2>
          <p><span class="linked">Rob</span> is a fresh graduate seeking a challenging career in which he can hone his
            skills and passion.</p>
          <p><span class="linked">Web development</span> is where he specializes the most. Through <a class="linked"
              rel="nofollow" href="https://udacity-students.slack.com" alt="gitter">slack</a> and social media groups, he
            spends most of his time learning, helping others with projects and apps. He believes that there is knowlegde
            in helping. By helping others, solving their problems, you retain or even improve your own knowledge.</p>
          <p>He is interested in everything related to web development, industry standards, and new technologies. He
            enjoys his role as a mentor and project reviewer and loves contributing to open-source and helping others.</p>
          <p class="wow bounceInLeft"><i>"Knowledge comes from helping others"</i></p>
          <div class="center-button wow bounceInRight" data-wow-delay="1s" data-wow-duration="1s">
            <a class="resume-link" href="images/Robert Allen-newest-3.pdf" download><button
                class="button button2"><span><i class="fa fa-download faa-vertical animated faa-slow"></i> Download Resume
                </span></button></a>
          </div>
        </div>
      </div>
      <hr></hr>
	</div>
  )
}
