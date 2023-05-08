const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


router.get('/:movieId', (req, res) => {
  
  const movieId = req.params.movieId;
  
  const query = `
  SELECT "genres".id, "genres".name
  FROM "movies_genres"
  JOIN "genres" ON "genres".id = "movies_genres".genre_id
  WHERE "movies_genres".movie_id = $1;
`;
  pool.query(query, [movieId])
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('Error getting genres', error);
      res.sendStatus(500);
    });
});

  
module.exports = router;


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