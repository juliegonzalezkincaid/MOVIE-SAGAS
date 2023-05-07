import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import MovieItem from '../MovieItem/MovieItem.jsx';


function MovieList() {
    //hooks
    const history = useHistory();
    const dispatch = useDispatch();
    // return movies array
    const movies = useSelector((store) => store.movies);
    // return genres array
    const genres = useSelector((store) => store.genres);

    //fetch movie data from server when component mounts
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);
    //[] = will only run once, when the component mounts

    const movieBtn = (event, movie) => {
        event.preventDefault();
        dispatch({ type: 'SET_MOVIE_BTN', payload: movie });
        history.push('/details')
    }



    return (
        <main>


            {/* <h1>MovieList</h1> */}
            <section className="movies">
                {genres.map((genre) => (
                    <span
                        key={genre.id}>
                        {genre.name}
                    </span>
                ))}



                {movies.map(movie => {
                    return (
                        <div
                            key={movie.id} >

                            <MovieItem
                                key={movie.id} movie={movie}
                                onClick={(event) => movieBtn(event, movie)}

                            ></MovieItem>

                            <p>{movies.description}</p>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;