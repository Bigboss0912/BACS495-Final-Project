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

  var updatequestion = {
                        'id': req.body.id,
                        'votes': req.params.newVotes
                      }

  console.log(updatequestion.id);
  console.log(req.params.newVotes);


  var db = req.app.locals.db;
  db.collection('questions').updateOne(req.body.id, req.body.newVotes, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });

});

module.exports = router;
