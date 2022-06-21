import React from 'react'
import ImageTen from "../Images/OurWorkImages/us-china-russia-ukraine-war.webp";
import AnneLee from "../Images/Contributors/anne-lee.webp";

import "../Global.css";
import "./Articles.css";

const Articles = () => {
  return (
    <main>
      <div className='article-container'>
        <div className='article'> {/*One Article*/}
          <div className='article__left-container'>
            <img className='article__image' src={ImageTen} />
          </div>

          <div className='article__right-container'>
            <div className='article__image-container'>
              <img className='article__author-image' src={AnneLee} />
            </div>
            <div>
              <p className='article__author-name'>Anne Lee</p>
              <p className='article__date-and-min-to-read'><span>March 29</span> * <span>6 min</span></p>
              <h2 className='article__title'>The Responses of US and China towards the Russia-Ukraine War: An Overview</h2>
              <p className='article__short-description'>A residential building destroyed by shelling in the settlement of Borodyanka in the Kyiv region...</p>
            </div> 
          </div>
        </div>
      </div>
    </main>
  )
}

export default Articles

/*
  1) Mobile First Approach - Yes. 
  2) Create the HTML layout - Yes. 
  <section>
    <div class="container">
    </div>
  </section>
  3) Create the HTML elements
  4) Decorate the HTML elements
    1) Imagine how you want it to look like.
    2) Then use width, padding, border, and margin.
    3) Then calculate: 
        If * {box-sizing: content-box}
        - Parent Div's Width = Child Div's Width+Padding+Border+Margin
        - Parent Div's Width = Block Element's Width+Padding+Border+Margin
        - However, Parent Div's Width != Inline Element's Width+Padding+Border+Margin
*/