import {React, Link} from 'react'
import education from '../../images/education.png'
import styles from './about.css'
import Animation from '../animation/Animation'
import resume from '../../images/resumes/robert-allen-5-21.pdf'

export default function About() {
  return (
  <div className="about" id="about">
      <Animation/>
      <h1 className="sections">About</h1> 
      <hr/>
      <div className="about-col">
        <div className="about1">
          <img className="gradhat" src={education} alt="Education" />
          <h2 className="left-title">Education</h2>

          <div className="school">
            <a id="lambdaschool" href="https://lambdaschool.com/"><i className="fa fa-university"></i>
            Lambdaschool</a>
            <p className="foo wow bounceInLeft" data-wow-delay=".1s" data-wow-duration="2s">Fullstack Web Development
            Certification</p>
            <p className="wow bounceInLeft" data-wow-delay=".1s" data-wow-duration="2s"><i className="fa fa-calendar "></i> 2019 -
            current</p>
            <hr/>
          </div>
          

          {/*Udacity*/}
          <div className="school">
            <a id="udacity" href="https://www.udacity.com/"><i className="fa fa-university"></i>
            Udacity</a>
            <p className="foo wow bounceInLeft" data-wow-duration="2s">Front End Web Development Nano Degree</p>
            <p className="wow bounceInLeft" data-wow-duration="2s"><i className="fa fa-calendar "></i> 2018 - 2019</p>
            <hr/>
          </div>
          

          {/* free code camp */}
          <div className="school">
            <a id="freecodecamp" href="https://www.freecodecamp.org/"><i className="fa fa-university"></i>
            FreeCodeCamp</a>
            <p className="foo wow bounceInLeft" data-wow-delay=".1s" data-wow-duration="2s">Fullstack Web Development
            Certification</p>
            <p className="wow bounceInLeft" data-wow-delay=".1s" data-wow-duration="2s"><i className="fa fa-calendar "></i> 2016 -
            current</p>
          </div>   
        </div>

        <div className="about2">
          <h2 className="right-title">In a few words</h2>
          <p>I'm seeking a challenging career in which I can hone in my
            skills and passion.</p>
          <p><span className="linked">Frontend Architecture</span> is where I specialize the most. Through <a className="linked"
              rel="nofollow" href="https://udacity-students.slack.com" alt="gitter">slack groups</a> and social media groups, I
            spend most of my time learning, collaborating, and, helping others with projects and apps. I believe that there is knowledge
            in helping. By helping others, solving their problems, you retain or even improve your own knowledge.</p>
          <p>I am interested in everything related to web development, industry standards, and new technologies. I 
            enjoyed my roles as a Team Lead, Mentor, and Project Reviewer and love contributing to open-source and helping others.</p>
          <p>I create digital art and music 🖌️ 🎨, workout, 🏋️‍♂️ lift weights, in the meantime, while also enjoying time with my doggo Sid🐕‍🦺 and cat 🐈‍⬛ kitty .</p>  
          <p className="wow bounceInLeft"><i>"Knowledge comes from helping others"</i></p>
          <div className="center-button wow bounceInRight" data-wow-delay="1s" data-wow-duration="1s">
            <a className="resume-link" href={resume} download><button
                className="button button2"><span><i className="fa fa-download faa-vertical animated faa-slow"></i> Download Resume
                </span></button></a>
          </div>
        </div>
      </div>
      <hr></hr>
	</div>
  )
}
