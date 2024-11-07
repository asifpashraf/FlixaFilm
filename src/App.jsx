import React from 'react'
import Latest_movies from './components/Latest_movies';
import './App.css'
import Header from './components/Header';


function App() {

 
  return (
   <div className='bg-slate-900 min-h-screen'>
    <Header/>
    <Latest_movies/>
   </div>
  )
}

export default App