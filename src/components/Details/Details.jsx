import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom"


function Details() {

const dispatch = useDispatch();
const history= useHistory ();
const movie = useSelector((store) => store.movieItem);
const genres = useSelector((store) => store.genres);
const {id} = useParams();

    return(

        <>
        
        </>
    )
}

export default Details;