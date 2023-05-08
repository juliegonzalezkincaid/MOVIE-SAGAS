import React from 'react';
import { useHistory } from 'react-router-dom'


// DO NOT MODIFY THIS FILE FOR BASE MODE!
//movieItem takes in the parameter movie
function MovieItem({ movie }) {
    
    const history = useHistory() 
    //moves to a different page when the user clicks the movie poster
  
    //sets url to a new value when user clicks on a movie poster
    // const setMovie= (movie) => {
    //     history.push(`details/${movie.id}`)
    // }

    const movieBtn = (id) => {
        // event.preventDefault();
        console.log(id)
        // dispatch({ type: 'SET_MOVIE_BTN', payload: movie });
        history.push(`/details/${id}`)
    }

return (
    <>
    <h3>{movie.title}</h3>

    <img
    onClick={() => movieBtn(movie.id)}
    src={movie.poster}
    alt={movie.title}
    
    />
    </>
)
}

export default MovieItem;