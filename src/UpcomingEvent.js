/*
UpComing Event Component: 
What this component does: Displays the Upcoming Event in Home Page and Events Page (under the title "Upcoming Events")

So, if you want to change the upcoming event, then change this component. 
*/
import React from 'react'

import EventTemplate from './Pages/Events/EventTemplate';
import UpcomingEventImage from "./Images/EventsImages/summer-dog.jpg";

const UpComingEvent = () => {
  return (
    <EventTemplate 
    image={UpcomingEventImage}
    date="May - August"
    location="Washington DC" 
    title="Have a Nice Summer!" />
  )
}

export default UpComingEvent