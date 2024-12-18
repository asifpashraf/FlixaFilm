import React from 'react'
import { useState,useEffect } from 'react';
import Latest_movies_card from './Latest_movies_card';
import CoverPage from './CoverPage';

function Latest_movies() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cover_image,setCover] =useState([])

   
    
  
    // This function fetches data from an API
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=5ef212dfa67e7d4937c0cda7fd1362f6');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    // useEffect to call fetchData when component mounts
    useEffect(() => {
      fetchData();
    }, []);
  
    // Conditional rendering based on the state
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    // console.log(data);
    

  return (
    <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>

      
        {data.map((movieCard,index)=>{
          return(
            <Latest_movies_card onclick={()=>{
              // console.log(data[index]);
             const singleMovie = data[index]
              setCover(singleMovie)
              console.log(cover_image);
              
              
              
            }} title={movieCard.original_title } photo={`https://image.tmdb.org/t/p/w500/${movieCard.poster_path}`} key={index}/>
          )
          
            
        })}
        {/* <h1>{data.results[0].original_title}</h1> */}

        


    </div>
  )
}

export default Latest_movies