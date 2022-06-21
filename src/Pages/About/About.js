import React from 'react'
import uscssoLogo from "../../Images/uscsso-logo.png";

import "../../Global.css";
import "./About.css";

const About = () => {
  return (
    <main>
      <section className='our-story'>
        <h1 className='our-story__title'>Our Story</h1>
        <hr className='our-story__line'></hr>
        <p className='our-story__description our-story__description--rounded-corners-version-1'>Founded in February 2020 at the George Washington University, the US-China Strategic Studies Organization was built to address the lack of holistic and unbiased study of Sino-American relations.</p>
        <div className='our-story__bottom-container'>
          <p className='our-story__description our-story__description--rounded-corners-version-2'>Since its founding, the USCSSO has grown into a community of forward-thinking students analyzing, discussing, and building an understanding of US-China relations. Through weekly newsletters, events and community engagement, high-level research in various mediums, and a firm willingness to objectively analyze complex issues, USCSSO uplifts hardworking students and educates a wide audience on Sino-American relations.</p>
          <div className='our-story__logo-container'>
            <img className='our-story__logo' src={uscssoLogo} />
          </div>

        </div>
      </section>
    </main>
  )
}

export default About

/*
  1) Mobile First Approach - Yes. 
  2) Create the HTML layout - Yes. 
  <section>
    <div class="container">
    </div>
  </section>
  3) Create the HTML elements - Yes. 
  4) Decorate the HTML elements - Yes. 
    1) Imagine how you want it to look like.
    2) Then use width, padding, border, and margin.
    3) Then calculate: 
        If * {box-sizing: content-box}
        - Parent Div's Width = Child Div's Width+Padding+Border+Margin
        - Parent Div's Width = Block Element's Width+Padding+Border+Margin
        - However, Parent Div's Width != Inline Element's Width+Padding+Border+Margin
*/