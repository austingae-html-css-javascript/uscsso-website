/*
UpComing Event Component: 
What this component does: Displays the Upcoming Event in Home Page and Events Page (under the title "Upcoming Events")

So, if you want to change the upcoming event, then change this component. 
*/
import React from 'react'

import EventTemplate from './Pages/Events/EventTemplate';
import UpcomingEventImage from "./Images/EventsImages/kim-tae-ri.jpg";

const UpComingEvent = () => {
  return (
    <EventTemplate 
    image={UpcomingEventImage}
    date="August 29, 2002 8:00 AM - 12:00"
    location="South Korea" 
    title="Mr. Sunshine" />
  )
}

export default UpComingEvent