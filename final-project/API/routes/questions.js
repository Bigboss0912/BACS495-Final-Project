var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {

  var db = req.app.locals.db;
  db.collection('questions').find({}).toArray(function(err, result) {
    if (err) {
      res.status(400).send("Error fetching records!!!");
    } else {
      res.json(result);
    }
  });

});

router.post('/', function (req, res) {

  var question = {
    'id': req.body.id,
    'question': req.body.question
  }

  var db = req.app.locals.db;
  db.collection('questions').insertOne(question);

  res.send(
    'Question Inserted'
  );
});

router.patch('/', function(req, res) {

  var id = {
    'id': req.body.id,
  }

  var votes = {
    'votes': req.body.votes
  }

  var db = req.app.locals.db;
  db.collection('questions').updateOne(id, { $set: votes}, function(err) {
    if (err) throw err;
  });

  res.send(
    '1 document updated'
  );
});

module.exports = router;
