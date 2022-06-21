import React from 'react'

import "./ArticleTemplate.css";


const ArticleTemplate = (props) => {
  return (
    <div className='article'> {/*One Article*/}
      <div className='article__left-container'>
        <img className='article__image' src={props.articleImage} />
      </div>

      <div className='article__right-container'>
        <div className='article__image-container'>
          <img className='article__author-image' src={props.articleAuthorPicture} />
        </div>
        <div>
          <p className='article__author-name'>{props.articleAuthor}</p>
          <p className='article__date-and-min-to-read'><span className='article__date'>{props.articleDate}</span> · <span className='article__min-to-read'>{props.articleMinToRead}</span></p>
          <h2 className='article__title'>{props.articleTitle}</h2>
          <p className='article__short-description'>{props.articleShortDescription}</p>
        </div> 
      </div>
  </div>
  )
}

export default ArticleTemplate