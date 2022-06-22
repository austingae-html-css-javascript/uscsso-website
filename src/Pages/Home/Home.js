import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import ReactPlayer from 'react-player';
import UpComingEvent from '../../UpcomingEvent';

import "../../Global.css";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <header>
        <div>
          <h1 className='heading'>US-CHINA STRATEGIC STUDIES ORGANIZATION</h1>
          <h4>A platform for nonpartisan, objective, and student-centered research, analysis, and discussion of Sino-American competition.</h4>
          <div>
            <ReactPlayer className="video-player"
            width="178px" 
            height="100px" 
            controls 
            url="https://video.wixstatic.com/video/679ced_2896021dfcc843fcb56d2d97608ece36/1080p/mp4/file.mp4"
            />
          </div>
          <h2>About Us</h2>
          <p>The USCSSO is an organization driven by George Washington University students, dedicated to studying US-China strategic competition from an objective and nonpartisan perspective. By establishing intellectual forums to discuss, analyze, learn about, and report on the strategic developments driving Sino-American relations, the crucial geopolitical relationship can be conceptualized to a younger audience. Follow and join us to become part of our movement to bring a fresh perspective to US-China relations, while uplifting student voices and providing a platform to build valuable professional skills.</p>
        </div>
      </header>

      <section>
        <div>
          <h2>Our Values</h2>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2>Our Upcoming Event!</h2>
          <UpComingEvent />
        </div>
      </section>

      <section>
        <div>
          <h2>Check Out Our Articles And Projects!</h2>
          <button>Articles</button>
          <button>Projects</button>
        </div>
      </section>

      <section>
        <div>
          <h2>Contact Us!</h2>
          <a href="mailto:someone@yoursite.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
          <p>Email Us!</p>

          <FontAwesomeIcon icon={faSchool} size="2x" />
          <p>Join Us on GW Engage!</p>

          <div>
            <p>Follow Us on Social Media!</p>
             <a href="https://www.facebook.com/USCSSO"><FontAwesomeIcon icon={ faFacebook } size="2x" /></a>
             <a href="https://www.linkedin.com/company/uscssogwu/"><FontAwesomeIcon icon={ faLinkedin } size="2x" /></a>
             <a href="https://www.instagram.com/uschinasso/"><FontAwesomeIcon icon={ faInstagram } size="2x" /></a>
             <a href ="https://twitter.com/uscsso"><FontAwesomeIcon icon={ faTwitter } size="2x" /></a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home