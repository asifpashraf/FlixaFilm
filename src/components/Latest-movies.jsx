import React, { useState,useEffect } from 'react'
import '../components/component.css'
import Latest_movies_card from './Latest_movies_card'

function Latest_movies() {
    const [movieList,setMovieList] = useState("")
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    
    function getMovies(){
      fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=5ef212dfa67e7d4937c0cda7fd1362f6")
        .then((response) => response.json())
        .then((data) => setMovieList(data.results))
        .catch((error) => console.error("Error fetching data:", error));
        
      }
      console.log(movieList);

    useEffect(() => {
      getMovies()
    }, []);
    
    
    
        
        
      
  return (
    <div className='latest-movies'>

      {movieList.map(movieCards=> <Latest_movies_card photo={`https://image.tmdb.org/t/p/500//${movieCards.backdrop_path}`}/>,

      // <img src={`https://image.tmdb.org/t/p/500//${movieCards.backdrop_path}`} alt="" />

      )}

  
  </div>
  )
}

export default Latest_movies