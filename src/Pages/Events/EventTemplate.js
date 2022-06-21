import React from 'react'

import "../../Global.css";
import "./EventTemplate.css";

const EventTemplate = (props) => {
  return (
    <div className='event'>
      <div className='event__image-container'>
        <img className='event__image' src={props.image} />
      </div>
      <div className='event__description-container'>
        <p className='event__date'>{props.date}</p>
        <p className='event__location'>{props.location}</p>
        <h3 className='event__title'>{props.title}</h3>
        <button className='event__learn-more-button'>Learn More</button>
      </div>
  </div>
  );
}

export default EventTemplate