var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res) {

  const user = {
    'firstName': req.body.firstName,
    'lastName': req.body.lastName,
    'email': req.body.email,
    'password': req.body.password
  }

  var db = req.app.locals.db;
  db.collection('users').insertOne(user);

  res.send(
    'User Inserted'
  );
});

module.exports = router;
