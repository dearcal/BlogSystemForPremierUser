var express = require('express');
var router = express.Router();
const crypto = require('crypto');
const User = require('../models/userSchema');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log(req)
});


router.post('/login',(req,res,next)=>{
  res.send("login test api")
})

router.post('/register',(req,res,next)=>{

  let { username, password } = req.body;
  if (!username || !password) {
    return res.status(403);
  }

  User.findOne({username:username})
    .then(data => {
      if (data) {
        return res.json("user existed");
      }
      let user = new User({
        username:username,
        password:crypto.createHash('md5').update(password).digest('hex')
      });
      user.save().then(data => {
        return res.json("registe success");
      })
    })
    .catch(err => {
      console.log(err);
    })
    

})

module.exports = router;
