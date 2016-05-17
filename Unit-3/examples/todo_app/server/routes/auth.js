var express = require("express");
var router = express.Router();
var bcrypt = require('bcrypt');
var db = require("../models");

router.post('/signup', function(req, res) {
  console.log('username', req.body.username)
  console.log('password', req.body.password)
  db.User.find({username: req.body.username}, function(err, users){
    if(users) {
      res.status(500);
      res.json({message: "Username taken."})
    } else {
      bcrypt.hash(req.body.password, 10, function(err, hash) {
        db.User.create({
          username: req.body.username,
          password: hash,
        }, function(err, user) {
          res.json(user);
        });
      });
    }
  })
});

module.exports = router;
