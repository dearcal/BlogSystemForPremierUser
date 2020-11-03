var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/example/b',function(req,res,next) {
  console.log('the response will be sent by the next function');
  next();
},function (req,res) {
  res.send('hello from b')
})

module.exports = router;
