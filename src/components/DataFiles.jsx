import React, { useEffect, useState } from 'react'
import axios from 'axios';

function DataFiles() {
  const [movieData,setMovieData] =useState([]);
  const movieUrl = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=5ef212dfa67e7d4937c0cda7fd1362f6"

  function datafetch () {
    
    const fetchData = axios.get(movieUrl)
    .then((reponse)=>{
        
    })
    .catch()
    
    console.log(movieData);
    
  }

 

  useEffect(()=>{
    datafetch()
  },[])

  return (
    <div className='bg-slate-400'>DataFiles</div>
  )
}

export default DataFiles