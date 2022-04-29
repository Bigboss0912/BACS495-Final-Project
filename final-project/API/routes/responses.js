var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {

  var db = req.app.locals.db;
  db.collection('responses').find({}).toArray(function(err, result) {
    if (err) {
      res.status(400).send("Error fetching records!!!");
    } else {
      res.json(result);
    }
  });

});

router.post('/', function (req, res) {

  var response = {'id': req.body.id, 'qID': req.body.qID, 'response': req.body.response}

  var db = req.app.locals.db;
  db.collection('responses').insertOne(response);

  res.send(
    'Question Inserted'
  );
});

module.exports = router;