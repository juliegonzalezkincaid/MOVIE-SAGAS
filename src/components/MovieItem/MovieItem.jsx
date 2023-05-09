import React from 'react';
import { useHistory } from 'react-router-dom'
import Card from '@mui/material/Card';
import { Grid, Divider, Stack } from '@mui/material';



import { Paper } from "@mui/material";
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
            <Grid item sx={{ margin: '1rem' }}>
                < Paper elevation={3} className='card'>

                    <Card sx={{
                        maxWidth: 355,
                        backgroundColor: '#06A8BA',
                        boxShadow: 50
                    }}
                        style={{
                            border: "8px solid white"

                        }}

                    >
                        <Stack
                            direction="row"
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={5.2}
                        >

                            <img
                                onClick={() => movieBtn(movie.id)}
                                src={movie.poster}
                                alt={movie.title}
                            />

                        </Stack>
                    </Card>


                </Paper>

            </Grid>
        </>
    )
}

export default MovieItem;