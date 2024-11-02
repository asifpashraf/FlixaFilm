import React from 'react'
import Latest_movies from './components/Latest-movies';
import './App.css'
import Header from './components/Header';


function App() {

 
  return (
   <div className='home-page'>
    <Header/>
    <Latest_movies/>
   </div>
  )
}

export default App