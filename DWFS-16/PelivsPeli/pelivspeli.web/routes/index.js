var express = require('express');
var router = express.Router();
var path = require('path');

const fileDirectory = path.resolve(__dirname,'.', '../public');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Peli vs Peli' });
});

router.get('/administrar/crear', function(req, res, next) {
  res.sendFile('administrar/crear.html', {root: fileDirectory}, (err) => {
    res.end();

    if (err) throw(err);
  });
});

router.get('/administrar/reiniciar', function(req, res, next) {
  res.sendFile('administrar/reiniciar.html', {root: fileDirectory}, (err) => {
    res.end();

    if (err) throw(err);
  });
})


module.exports = router;
