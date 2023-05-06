const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


router.get('/', (req, res) => {
  // Add query to get all genres
  //SQL to retrieve all frow from the genres table in database
  const query = `SELECT * FROM "genres"`;
  pool.query(query).then(result => { //executes SQL to get results
    res.send(result.rows);
  }).catch(error => {
    console.log(`ERROR: GET in router.get: ${error}`);
    res.sendStatus(500);
  })
  
});



module.exports = router;