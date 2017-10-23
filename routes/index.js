var express = require('express');
var router = express.Router();

var db = require('../db/index');

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', db.getAllUsers);
router.post('/create', db.createUser);
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});


module.exports = router;
