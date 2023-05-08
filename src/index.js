import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_MOVIE', fetchMovie);
    yield takeEvery('FETCH_MOVIE_GENRES', fetchMovieGenres);
}


 // get all movies from the DB
function* fetchAllMovies() {
   
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}
function* fetchMovie(action) {
    
        try {
          let id = action.payload;
          const eachMovie = yield axios.get(`/api/movie/${id}`);
          yield put({ type: "SET_MOVIE", payload: eachMovie.data });
        } catch (error) {
          console.log("GET error single movie", error);
        }
      }
//     try 
//     {  
        
//         const movie = yield axios.get(`/api/movie/details?id=${action.payload}`);
//         const eachMovie = movie.data.map(genre => {
//             return { name: genre.name, value: genre.genre_id }
//         })
//         yield put({ type: 'SET_MOVIE', payload: { movie: movie.data[0], genres: eachMovie } });
//     } catch {
//         console.log('Get This Movie: Generator Error');
//     }
// }
//let id= action.payload
//         const details = yield axios.get(`/api/movie${id}`);
//         yield put({ type: "SET_MOVIE", payload: details.data });
//     } catch (error) {
//         console.log ("GET error eachMovie", error);
//     }
// }
//yield pauses the execution of the function till the results of the axios.get is returned 
        // action.payload= ID parameter 
        // action type is SET MOVIE and the payload is the data property of eachMovie

function* fetchMovieGenres(action) {
    // get all genres from the DB
    try {
        
        const movieId = action.payload;
        const response = yield axios.get(`/api/genre/${movieId}`);
        yield put({ type: "SET_GENRES", payload: response.data });
      } catch (error) {
        console.log("Error in fetchMovieGenres", error);
      }
    }
    


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
//* movies REDUCER
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
//* genres REDUCER
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}
//* store movieItem REDUCER
const movieItem= (state =[], action) => {
    switch (action.type) {
        case "SET_MOVIE":
        
          if (action.payload.length > 0) {
           
            return action.payload[0];
          }
          return undefined;
        default:
          return state;
      }
    };

//     switch (action.type) {
//         case 'SET_MOVIE':
//         return action.payload;
//         default:
//             return state;
//     }
// }

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieItem,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
