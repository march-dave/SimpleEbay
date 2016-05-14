var express = require('express');
var router = express.Router();


var User = require('../models/user');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.route('/')
    .get((req, res) => {
      User.find({}, (err, users) => {
          if(err) {
            res.status(400).send(err);
          } else {
            res.send(users);
          }
        });
    })
    .post((req, res) => {
      var user = new User(req.body);
      user.save((err, savedUser) => {

        console.log('user.save', savedUser);

        res.status(err ? 400 : 200).send(err || savedUser);
      });
  })


module.exports = router;
