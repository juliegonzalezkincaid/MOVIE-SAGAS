import React, { Component } from 'react';
import { useHistory } from 'react-router-dom'


// DO NOT MODIFY THIS FILE FOR BASE MODE!
//movie item takes in the parameter movie
function MovieItem({ movie }) {
    
    const history = useHistory() 
    //moves to a different page when the user clicks the movie poster
  
    //sets url to a new value when user clicks on a movie poster
    const setMovie= (movie) => {
        history.push(`details/${movie.id}`)
    }


return (
    <>
    <h3>{movie.title}</h3>

    <img
    onClick= {()=>setMovie (movie)}
    src={movie.poster}
    alt={movie.title}
    />
    </>
)
}

export default MovieItem;