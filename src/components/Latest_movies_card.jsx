import React from 'react';

function LatestMoviesCard(props) {

  function fcover(){
    console.log("hiii");
    
}

  return (
    <div className="" onClick={fcover}>
      <div className="relative group h-[28vh] max-w-[300px] border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105">
        <img
          className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
          src={props.photo}
          alt="movie poster"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-white text-lg font-semibold">{props.title}</h1>
            <p className="text-gray-200 text-sm mt-2">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestMoviesCard;
