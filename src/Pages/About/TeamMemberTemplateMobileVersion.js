import React from 'react'

import "../../Global.css";
import "./TeamMemberTemplateMobileVersion.css";

const TeamMemberTemplateMobileVersion = (props) => {
  return (
    <div className='team-member'>
    <div className='team-member__image-container'>
      <img className='team-member__image' src={props.image} />
    </div>
    <div className='team-member__description-container'>
      <h4 className='team-member__name team-member--font-size-'>{props.name}</h4>
      <p className='team-member__year team-member--font-size-small'>Class of {props.year}</p>
      <p className='team-member__major team-member--font-size-small'><span>Major: </span><span>{props.major}</span></p>
      <p className='team-member__role team-member--font-size-small'><span>Role: </span><span>{props.role}</span></p>
    </div>
  </div>
  )
}

export default TeamMemberTemplateMobileVersion