import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom"


function Details() {

    // hooks
    const dispatch = useDispatch();// sends to the store
    const history = useHistory();// goes back to home screen
    const movie = useSelector((store) => store.movieItem);//stores item
    const genres = useSelector((store) => store.genres);
    const { id } = useParams(); // gets id from url
  


    const homePage = () => {
        history.push('/');
    }

   
    // dispatch sends mesage to store to fetch details of the movie using its id
    useEffect(() => {// runs this code
        dispatch({
            type: 'FETCH_MOVIE',
            payload: id
        });
    }, []);

    //dispatch will send message to store to fetch the generes of the movie id when the [movie] variable changes
    useEffect(() => {
        dispatch({
            type: 'FETCH_MOVIE_GENRES',
            payload: movie.id
        });
    }, [movie])



    return (

        <>
            <h2>Movie Discription</h2>

           
                    <span key={movie.id}>
                        <h2>{movie.title}</h2>
                        <img
                            src={movie.poster}
                            alt={movie.title}
                        
                        />
                         {/* <p id="movieItemDescription">{movie.movie.description}</p> */}
                    </span>
              {genres.length > 0 && genres.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
            ))}
            
            <button
                onClick={homePage}>
                Home Page
            </button>
        </>
    )
}

export default Details;