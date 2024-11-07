import React from 'react'

// const dotenv = require('dotenv/config');

function Latest_movies_card(props) {
  return (
    <div className='h-[40vh] w-[30vw] border-2 bg-slate-800 overflow-hidden flex flex-col items-center justify-center'>
        <img className='w-[80%] h-[60%]' src={props.photo} alt="photos are here"   />
      <h1 className='movie-title'>{props.title}</h1>
      
        
    </div>
  )
}

export default Latest_movies_card