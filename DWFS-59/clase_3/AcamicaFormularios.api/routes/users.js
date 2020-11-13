var multiparty = require('multiparty');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/crear', function(req, res, next) {

  var form = new multiparty.Form();

  form.parse(req, function(err, fields, files) {
    res.send(fields);
  });
});

module.exports = router;
