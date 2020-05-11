var express = require('express');
var mysql = require('mysql');

var router = express.Router();

var conn = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'password',
  database: 'competencias'
});

/* GET users listing. */
router.get('/', function(req, res, next) {

  conn.query('SELECT * FROM competencias', (err,results) => {
    if(err) throw err;
    res.json(results)
  });

  conn.end((err) => {
  });

});

module.exports = router;
 