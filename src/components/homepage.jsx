import React, { useState } from 'react'
import Latest_movies from './Latest_movies'
import LatestMoviesCard from './Latest_movies_card'
import CoverPage from './CoverPage'

function Homepage() {
    const [menu,setMenu] =useState(true)
    const [movie,setmovie] =useState(false)
  return (
    <div>
        {menu ? <Latest_movies/>:<CoverPage/>}
        

        

    </div>
  )
}

export default Homepage