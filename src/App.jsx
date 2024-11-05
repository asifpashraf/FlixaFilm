import React from 'react'
import Latest_movies from './components/Latest-movies';
import './App.css'
import Header from './components/Header';
import LatestTvShow from './components/sample';


function App() {

 
  return (
   <div className='home-page'>
    <Header/>
    <Latest_movies/>
    <LatestTvShow/>
    
   </div>
  )
}

export default App