var express = require('express');
var router = express.Router();

// Respond with "hello world" when a GET request is made to the "/helloworld" route
router.get('/', (req, res) => {
  console.log('Helloworld route hit');
  res.send('hello world');
});

module.exports = router;