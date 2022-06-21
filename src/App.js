import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

/*FontAwesome*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

/*CSS FILES*/
/*Global.css*/
import './Global.css';

/*App.css*/
import './App.css';

/*USCSSO-Logo*/
import logo from "./Images/uscsso-logo.png";

/*Components*/
import Home from "./Pages/Home";
import Events from "./Pages/Events/Events";
import OurWork from "./Pages/OurWork/OurWork";
import About from "./Pages/About";

import Articles from "./Pages/OurWork/Articles/Articles";
import Projects from "./Pages/OurWork/Projects/Projects";

function App() {
  return (
    <Router>
      <nav>
        <div className='nav-bar'>
          <div className='nav-bar__left-container'>
            <h1 className="nav-bar__org-name">USCSS</h1>
            <img className='nav-bar__org-logo' src={logo}></img>
          </div>

          <div className='nav-bar__right-container'>
            <button className='nav-bar__hamburger-menu-button' onClick={() => {
              document.getElementsByTagName("menu")[0].style.cssText = "left: 0%; transition-property: left; transition-duration: 1s;";
            }}><FontAwesomeIcon className='nav-bar__hamburger-menu-icon' icon={ faBars } size="2x" /></button>

            <Link className='nav-bar__link nav-bar__link--margin-right' to="/">Home</Link>
            <Link className='nav-bar__link nav-bar__link--margin-right' to="/events">Events</Link>
            <Link className='nav-bar__link nav-bar__link--margin-right' to="/our-work">Our Work</Link>
            <Link className='nav-bar__link' to="/about">About</Link>
          </div>
        </div>
      </nav>

      <menu>
        <div className='menu-container'>
          <button className='menu-container__x-mark-button' onClick={() => {document.getElementsByTagName("menu")[0].style.cssText = "left: -100%; transition-property: left; transition-duration: 1s;";}}><FontAwesomeIcon className='menu-container__x-mark-icon' icon={ faXmark } size="2x" /></button>

          <div className="menu-container__main-body">
            <div className="menu-container__links-container">
              <Link className='menu-container__link' to="/" onClick={() => {document.getElementsByTagName("menu")[0].style.cssText = "left: -100%; transition-property: left; transition-duration: 1s;";}}>Home</Link>
              <Link className='menu-container__link' to="/events" onClick={() => {document.getElementsByTagName("menu")[0].style.cssText = "left: -100%; transition-property: left; transition-duration: 1s;";}}>Events</Link>
              <Link className='menu-container__link' to="/our-work" onClick={() => {document.getElementsByTagName("menu")[0].style.cssText = "left: -100%; transition-property: left; transition-duration: 1s;";}}>Our Work</Link>
              <Link className='menu-container__link' to="/about" onClick={() => {document.getElementsByTagName("menu")[0].style.cssText = "left: -100%; transition-property: left; transition-duration: 1s;";}}>About</Link>
            </div>

            <div className="menu-container__social-media-container">
             <a className='menu-container--margin-right' href="https://www.facebook.com/USCSSO"><FontAwesomeIcon className="menu-container__social-media-icon menu-container__facebook-icon" icon={ faFacebook } size="2x" /></a>
             <a className='menu-container--margin-right' href="https://www.linkedin.com/company/uscssogwu/"><FontAwesomeIcon className="menu-container__social-media-icon menu-container__linkedin-icon" icon={ faLinkedin } size="2x" /></a>
             <a className='menu-container--margin-right' href="https://www.instagram.com/uschinasso/"><FontAwesomeIcon className="menu-container__social-media-icon menu-container__instagram-icon" icon={ faInstagram } size="2x" /></a>
             <a href ="https://twitter.com/uscsso"><FontAwesomeIcon className="menu-container__social-media-icon menu-container__twitter-icon" icon={ faTwitter } size="2x" /></a>
            </div>
          </div>
        </div>
      </menu>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/our-work" element={<OurWork />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route path="/our-work/articles" element={<Articles />}></Route>
        <Route path="/our-work/projects" element={<Projects />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

/*
Step 1: create the navigation bar
0) To install React Router into the project, type in terminal: "npm install react-router-dom@6" - Yes. 
1) type: import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom" - Yes. 
2) create the JS files for various pages. - Yes. 
3) import the JS files to App.js - Yes. 
4) create <router>, <routes>, and <route> - Yes. 
  <Router>
    <Routes>
      <Route path="/our-work" element={<OurWork />}><Route> <--If the path="/our-work", then <OurWork /> will be executed. 
      ...
    <Routes>
  </Router>
5) Create the navigation bar.
    1) mobile first approach - Yes. 
    2) create the HTML layout - Yes. 
<nav>
  <div>
  </div>
</nav>
    3) create the HTML elements - Yes. 
    <nav>
  <div>
    <Link to="/our-work">Our Work</Link> <-- If "Our Work" is clicked, then path will equal "/our-work", which will make <OurWork /> be executed. 
  </div>
</nav>
    4) decorate the HTML elements in CSS 
        1) Imagine how you want it to look like. 
        2) Then use width, padding, border, and margin. 
        3) Then calculate: 
            If * {box-sizing: content-box}
            - Parent Div's Width = Child Div's Width+Padding+Border+Margin
            - Parent Div's Width = Block Element's Width+Padding+Border+Margin
            - However, Parent Div's Width != Inline Element's Width+Padding+Border+Margin
*/



/*
FontAwesome Download Process:
1) npm i --save @fortawesome/fontawesome-svg-core
2) npm i --save @fortawesome/free-solid-svg-icons
   npm i --save @fortawesome/free-regular-svg-icons
   npm i --save @fortawesome/free-brands-svg-icons
3) npm i --save @fortawesome/react-fontawesome@latest

4) import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
5) import { faFacebook } from '@fortawesome/free-brands-svg-icons';

Styling with FontAwesome: https://fontawesome.com/docs/web/use-with/react/style
*/


/*
If Hamburger-Menu Button clicked, show menu.
1. Mobile First Approach
2 and 3. Create the HTML layout and elements
<button className='nav-bar__hamburger-menu-button'><FontAwesomeIcon className='nav-bar__hamburger-menu-icon' icon={faBars} size="2x" /></button>

<menu>
  <div className='menu-container'>
    <Link className='menu__link' to="/" >Home</Link>
    <Link className='menu__link' to="/events">Events</Link>
    <Link className='menu__link' to="/our-work">Our Work</Link>
    <Link className='menu__link' to="/about">About</Link>
  </div>
</menu>

3. Decorate the HTML elements in CSS

menu {
  position: fixed;
  width: 100%;
  height: 100vh;

  //Before the .nav-bar__hamburger-menu-button clicked, left: -100%. Hence, menu not shown on the screen.
  //After the .nav-bar__hamburger-menu-button clicked, left: 0%. Hence, menu shown on the screen.
  left: -100%; 
}

4. Add onClick to hamburger-menu-button

<button className='nav-bar__hamburger-menu-button' onClick={() => {
              document.getElementsByTagName("menu")[0].style.cssText = "left: 0%; transition-property: left; transition-duration: 1s;";
            }}><FontAwesomeIcon className='nav-bar__hamburger-menu-icon' icon={faBars} size="2x" /></button>

5. Add onClick to <Link>
      <menu>
        <div className='menu-container'>
          <Link className='menu__link' to="/" onClick={() => {document.getElementsByTagName("menu")[0].style.cssText = "left: -100%; transition-property: left; transition-duration: 1s;";}}>Home</Link>
          <Link className='menu__link' to="/events" onClick={() => {document.getElementsByTagName("menu")[0].style.cssText = "left: -100%; transition-property: left; transition-duration: 1s;";}}>Events</Link>
          <Link className='menu__link' to="/our-work" onClick={() => {document.getElementsByTagName("menu")[0].style.cssText = "left: -100%; transition-property: left; transition-duration: 1s;";}}>Our Work</Link>
          <Link className='menu__link' to="/about" onClick={() => {document.getElementsByTagName("menu")[0].style.cssText = "left: -100%; transition-property: left; transition-duration: 1s;";}}>About</Link>
        </div>
      </menu>
*/