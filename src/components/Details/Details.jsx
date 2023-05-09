import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
function MovieRating(props) {
    const dispatch = useDispatch();
  
    const handleClick = (value) => {
      dispatch({ type: 'SET_RATING', payload: value });
    };
  
    useEffect(() => {
      const storedRating = localStorage.getItem('rating');
      if (storedRating) {
        dispatch({ type: 'SET_RATING', payload: storedRating });
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('rating', props.value);
    }, [props.value]);
  
    // rest of the code
  }

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
            <Typography
                gutterBottom variant="h6"
                component="div">
            </Typography>

            <span key={movie.id}>
                <h2>{movie.title}</h2>
                <img
                    src={movie.poster}
                    alt={movie.title}

                />

            </span>

            <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                {genres.length > 0 && genres.map((genre) => (
                    <span key={genre.id} style={{ fontWeight: 'bold', fontStyle: 'italic', marginRight: '10px' }}>{genre.name}</span>
                ))}
            </Box>
            <p>{movie.description}</p>
            <div className="button">

<MovieRating />
                <Rating
                />
                <br></br>
                <Button

                    variant="contained"
                    onClick={homePage}>
                    Home Page
                </Button>

            </div>
        </>
    )
}


export default Details;