import React from 'react'
import "../Global.css";
import "./OurWork.css";

const OurWork = () => {
  return (
    <main>
      <div className='our-work'>
        <h1 className='our-work__title'>Take a look at our Articles and Projects!</h1>
        <div className='our-work__articles-projects-container'>
          <button className='our-work__articles-button our-work__articles-button--margin-right'>Articles</button>
          <button className='our-work__projects-button'>Projects</button>
        </div>
      </div>
    </main>
  )
}

export default OurWork