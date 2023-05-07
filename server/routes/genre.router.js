const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


router.get('/', (req, res) => {
  
  const movieId = req.params.id;
  if (!movieId) {
    console.log('Movie id is undefined');
    res.sendStatus(400);
    return;
  }

  // const movieId = req.params.id;
  const queryText = `
    SELECT genres.id, genres.name
    FROM genres
    JOIN movies_genres ON genres.id = movies_genres.genre_id
    WHERE movies_genres.movie_id = $1;
  `;
  pool.query(queryText, [movieId])
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('Error getting genres', error);
      res.sendStatus(500);
    });
});

  
  // Add query to get all genres
  //SQL to retrieve all frow from the genres table in database
//   const query = 
//   `SELECT * FROM genres 
//   ORDER BY "id"
//   ASC
//   `;

//   pool.query(query)
//   .then(result => { //executes SQL to get results
//     res.send(result.rows);
//   }).catch(error => {
//     console.log(`ERROR: GET in router.get: ${error}`);
//     res.sendStatus(500);
//   })
  
// });



module.exports = router;