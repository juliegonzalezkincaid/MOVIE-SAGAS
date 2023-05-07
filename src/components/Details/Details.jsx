import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom"


function Details() {

               // hooks
const dispatch = useDispatch();// sends to the store
const history= useHistory ();// goes back to home screen
const movie = useSelector((store) => store.movieItem);//stores item
const genres = useSelector((store) => store.genres);
const {id} = useParams(); // gets id from url

const homePage= ()=> {
    history.push('/');
}
// dispatch sends mesage to store to fetch details of the movie using its id
useEffect(()=>{// runs this code
    dispatch({ 
        type:'FETCH_MOVIE',
        payload: id
    });
}, [movie]);

//dispatch will send message to store to fetch the generes of the movie id when the [movie] variable changes
useEffect(() => {
    dispatch({
        type:'FETCH_MOVIE_GENRES', 
        payload: movie.id 
     });
},[])



    return(

        <>
       <h2></h2>
        <img

    src={movie.poster}
    alt={movie.title}
    />
    <button
        onClick= {homePage}> 
        Home Page
    </button>

    <h2>{movie.title}</h2>
    {/* {genres.map((genres)=>(
    <span key={genres.id}>{genres.name}</span>
    
    ))} */}
    {genres.length > 0 && genres.map((genre)=>(
                <span key={genre.id}>{genre.name}</span>
            ))}
 <p>{movie.description}</p>

        </>
    )
}

export default Details;