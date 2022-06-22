/*ReactJS*/
import React from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';


/*Icons*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


/*Components*/
import UpComingEvent from '../../UpcomingEvent';

/*CSS Files*/
import "../../Global.css";
import "./Home.css";

const Home = () => {
  let navigate = useNavigate();

  return (
    <main>
      <header>
        <div className='org'>
          <h1 className='org__name'>US-CHINA STRATEGIC STUDIES ORGANIZATION</h1>
          <h4 className='org__short-description'>A platform for nonpartisan, objective, and student-centered research, analysis, and discussion of Sino-American competition.</h4>
          <div className='org__video-container'>
            <ReactPlayer className="org__video"
            width="320px" 
            height="180px"
            controls 
            url="https://video.wixstatic.com/video/679ced_2896021dfcc843fcb56d2d97608ece36/1080p/mp4/file.mp4"
            />
          </div>
          <h2 className='org__about-us-title'>About Us</h2>
          <p className='org__long-description'>The USCSSO is an organization driven by George Washington University students, dedicated to studying US-China strategic competition from an objective and nonpartisan perspective. By establishing intellectual forums to discuss, analyze, learn about, and report on the strategic developments driving Sino-American relations, the crucial geopolitical relationship can be conceptualized to a younger audience. Follow and join us to become part of our movement to bring a fresh perspective to US-China relations, while uplifting student voices and providing a platform to build valuable professional skills.</p>
        </div>
      </header>

      <section>
        <div className='our-values'>
          <h2 className='our-values__title'>Our Values</h2>
          <div className='our-values__container'>
            <div className='our-values__value-container our-values__value-container--blue-color'>
              <h3 className='our-values__value-title our-values--white-color'>Nonpartisanship</h3>
              <p className='our-values__value-description our-values--white-color'>USCSSO is a nonpartisan organization in a highly partisan environment focused on delivering unbiased analysis of complex issues in US-China relations.</p>
            </div>
            <div className='our-values__value-container our-values__value-container--red-color'>
              <h3 className='our-values__value-title our-values--white-color'>Objectivity</h3>
              <p className='our-values__value-description our-values--white-color'>USCSSO aims to retain consistent objectivity by sourcing research from a wide variety of reputable locations, and refraining from the use of bias in analysis</p>
            </div>
            <div className='our-values__value-container our-values__value-container--blue-color'>
              <h3 className='our-values__value-title our-values--white-color'>Student-led</h3>
              <p className='our-values__value-description our-values--white-color'>USCSSO offers a platform for students to educate and become educated on the US-China relationship, while tailoring content to young professionals.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='our-upcoming-event'>
          <h2 className='our-upcoming-event__title'>Our Upcoming Event!</h2>
          <UpComingEvent />
        </div>
      </section>

      <section>
        <div className='articles-projects'>
          <h2 className='articles-projects__title'>Check Out Our Articles And Projects!</h2>
          <div className='articles-projects__button-container'>
            <button className='articles-projects__button articles-projects__button--margin-right articles-projects__button--red-color' onClick={() => {
              navigate("../our-work/articles");
            }}>Articles</button>
            <button className='articles-projects__button articles-projects__button--blue-color' onClick={() => {
              navigate("../our-work/projects");
            }}>Projects</button>
          </div>
          
        </div>
      </section>

      <section>
        <div className='contact-us'>
          <h2 className='contact-us__title'>Contact Us!</h2>
          <a className='contact-us__email-icon' href="mailto:someone@yoursite.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
          <p className='contact-us__email-sentence'>Email Us!</p>

          <a className='contact-us__gw-engage-icon' href="https://gwu.campuslabs.com/engage/"><FontAwesomeIcon icon={faSchool} size="2x" /></a>
          <p className='contact-us__gw-engage-sentence'>Join Us on GW Engage!</p>

          <div className='contact-us__social-media'>
            <p className='contact-us__social-media-title'>Follow Us on Social Media!</p>
             <a className='contact-us__social-media-facebook-icon contact-us__social-media-icon-margin-right' href="https://www.facebook.com/USCSSO"><FontAwesomeIcon icon={ faFacebook } size="2x" /></a>
             <a className='contact-us__social-media-linkedin-icon contact-us__social-media-icon-margin-right' href="https://www.linkedin.com/company/uscssogwu/"><FontAwesomeIcon icon={ faLinkedin } size="2x" /></a>
             <a className='contact-us__social-media-instagram-icon contact-us__social-media-icon-margin-right' href="https://www.instagram.com/uschinasso/"><FontAwesomeIcon icon={ faInstagram } size="2x" /></a>
             <a className='contact-us__social-media-twitter-icon' href ="https://twitter.com/uscsso"><FontAwesomeIcon icon={ faTwitter } size="2x" /></a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home

/*
  1) Mobile First Approach - Yes. 
  2) Create the HTML layout - Yes. 
  <section>
    <div class="container">
    </div>
  </section>
  3) Create the HTML elements - Yes. 
  4) Decorate the HTML elements
    1) Imagine how you want it to look like.
    2) Then use width, padding, border, and margin.
    3) Then calculate: 
        If * {box-sizing: content-box}
        - Parent Div's Width = Child Div's Width+Padding+Border+Margin
        - Parent Div's Width = Block Element's Width+Padding+Border+Margin
        - However, Parent Div's Width != Inline Element's Width+Padding+Border+Margin
*/