import React from 'react'

function CoverPage(props) {

    
  return (
    <div className='bg-slate-500'>
        <img src={props.cover} alt="cover photo" />

        <p>
            overview 
        
        </p>
        <button>
            view trailer
        </button>

    </div>
  )
}

export default CoverPage