import React from 'react'

import "../../Global.css";
import "./Events.css";

import EventTemplate from "./EventTemplate";

import EventSix from "../../Images/EventsImages/rising-tides-simulation.webp";
import EventFive from "../../Images/EventsImages/southeast-asia.webp";
import EventFour from "../../Images/EventsImages/uscsso-spring-conference.webp";
import EventThree from "../../Images/EventsImages/us-china-comp-coop-africa.webp";
import EventTwo from "../../Images/EventsImages/energy.webp";
import EventOne from "../../Images/EventsImages/climate-policy.webp";


import UpComingEvent from '../../UpcomingEvent';

const Events = () => {
  return (
    <main>
      <div className='event-container'>
        {/*UPCOMING EVENTS*/}
        <h2 className='event-container__title'>Upcoming Events</h2>
        <UpComingEvent />
        <hr className='line'></hr>
        
        {/*PAST EVENTS*/}
        <h2 className='event-container__title'>Past Events</h2>
        <hr className='line'></hr>
        <EventTemplate image={EventSix} date="April 9, 11:00 AM - 5:00 PM" location="Funger Hall" title="Rising Tides Simulation" />
        <EventTemplate image={EventFive} date="Mar 31, 7:00 PM – 8:00 PM" location="" title="Southeast Asia: Roundtable #3" />
        <EventTemplate image={EventFour} date="Wed, March 2 " location="ESIA City View Room " title="USCSSO SPRING CONFERENCE" />
        <EventTemplate image={EventThree} date="Wed, Feb 23 " location="ESIA Linder Commons, 602" title="US-China Competition and Cooperation in Africa: US-China Youth Expo #1" />
        <EventTemplate image={EventTwo} date="Mar 09, 7:00 PM – 8:00 PM" location="" title="Energy: Roundtable #2" />
        <EventTemplate image={EventOne} date="Mar 23, 6:00 PM – 7:00 PM" location="ESIA State Room" title="Climate Policy in US-China Relations: US-China Youth Expo #2" />
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
  4) Decorate the HTML elements - Yes. 
    1) Imagine how you want it to look like.
    2) Then use width, padding, border, and margin.
    3) Then calculate: 
        If * {box-sizing: content-box}
        - Parent Div's Width = Child Div's Width+Padding+Border+Margin
        - Parent Div's Width = Block Element's Width+Padding+Border+Margin
        - However, Parent Div's Width != Inline Element's Width+Padding+Border+Margin
*/