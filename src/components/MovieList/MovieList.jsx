import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import MovieItem from '../MovieItem/MovieItem';


function MovieList() {
                  //hooks
    const history = useHistory();
    const dispatch = useDispatch();
    // return movies array
    const movies = useSelector(store => store.movies);
    // return genres array
    const genres = useSelector((store) => store.genres);

    //fetch movie data from server when component mounts
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []); //[] = will only run once, when the component mounts

    return (
        <main>
            {/* <h1>MovieList</h1> */}
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div
                            key={movie.id} >
                            <h3>
                                {movie.title}</h3>
                            <img
                                src={movie.poster}
                                alt={movie.title} />
                                <MovieItem key={movie.id} movie={movie}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;