import React from 'react'
import '../components/component.css'

// const dotenv = require('dotenv/config');

function Latest_movies_card(props) {
  return (
    <div className='latest-movies-card'>
        <img src={props.photo} alt="photos are here" className='latest-movies-card-images' />
        
    </div>
  )
}

export default Latest_movies_card