var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {

  var db = req.app.locals.db;
  db.collection('users').find({}).toArray(function(err, result) {
    if (err) {
      res.status(400).send("Error fetching records!!!");
    } else {
      res.json(result);
    }
  });

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
