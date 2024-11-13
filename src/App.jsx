import React from 'react'
import Latest_movies from './components/Latest_movies';
import './App.css'
import Header from './components/Header';
import DataFiles from './components/DataFiles';
import Homepage from './components/homepage';



function App() {

 
  return (
   <div className='bg-slate-900'>
    <Header/>
    {/* <DataFiles/> */}
    <Homepage/>
   </div>
  )
}

export default App