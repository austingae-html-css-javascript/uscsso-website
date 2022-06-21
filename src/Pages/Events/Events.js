import React from 'react'

import EventSix from "../../Images/EventsImages/rising-tides-simulation.webp";
import EventFive from "../../Images/EventsImages/southeast-asia.webp";
import EventFour from "../../Images/EventsImages/uscsso-spring-conference.webp";
import EventThree from "../../Images/EventsImages/us-china-comp-coop-africa.webp";
import EventTwo from "../../Images/EventsImages/energy.webp";
import EventOne from "../../Images/EventsImages/climate-policy.webp";

import "../../Global.css";
import "./Events.css";

const Events = () => {
  return (
    <main>
      <div className='event-container'>
        <h2>Upcoming Events</h2>
        <h2>Past Events</h2>
        <div className='event'>
          <div className='event__image-container'>
            <img className='event__image' src={EventSix} />
          </div>
          <div className='event__description-container'>
            <p className='event__date'>April 9, 11:00 AM - 5:00 PM</p>
            <p className='event__location'>Funger Hall</p>
            <h3 className='event__title'>Rising Tides Simulation</h3>
            <button className='event__learn-more-button'>Learn More</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Events

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