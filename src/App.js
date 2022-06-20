import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

/*FontAwesome*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

/*App.css*/
import './App.css';

/*USCSSO-Logo*/
import logo from "./Images/uscsso-logo.png";

/*Components*/
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import OurWork from "./Pages/OurWork";
import About from "./Pages/About";



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
            <FontAwesomeIcon className='nav-bar__hamburger-menu' icon={faBars} size="2x" /> 
          </div>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/our-work" element={<OurWork />}></Route>
        <Route path="/about" element={<About />}></Route>
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

*/