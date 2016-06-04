var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    res.status(err ? 400 : 200).send(err || users);
  });
});

//   /api/users/register
router.post('/register', (req, res) => {
  // console.log('register');
  User.register(req.body, err => {
    res.status(err ? 400 : 200).send(err);
  });
});

router.post('/login', (req, res) => {
  User.authenticate(req.body, (err, token) => {
    if(err) return res.status(400).send(err);
    res.cookie('accessToken', token).send(token);
  });
});

router.delete('/logout', (req, res) => {
  res.clearCookie('accessToken').send();
});

// /api/users/profile
// router.get('/profile', (req, res) => {
router.get('/profile', User.isLoggedIn, (req, res) => {
  // console.log('req.user:', req.user);
  res.send(req.user);
})

// /api/users/profile
router.put('/profile', (req, res) => {

  User.profileUpdate(req.body, err => {
    res.status(err ? 400 : 200).send(err);
  });

})

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.route('/')
//     .get((req, res) => {
//       User.find({}, (err, users) => {
//           if(err) {
//             res.status(400).send(err);
//           } else {
//             res.send(users);
//           }
//         });
//     })
//     .post((req, res) => {
//       var user = new User(req.body);
//       user.save((err, savedUser) => {
//         res.status(err ? 400 : 200).send(err || savedUser);
//       });
//   })
//
// module.exports = router;


// var stormpath = require('express-stormpath');

// router.get('/me', stormpath.loginRequired, (req, res) => {
//
//   for(var key in req.body) {
//     req.user[key] = req.body[key];
//   }
//
//   req.user.save((err, savedUser) => {
//     res.status(err ? 400 : 200).send(err ||  savedUser);
//   });
//
// });

/* GET users listing. */
// router.get('/', function(req, res) {
//   User
//   .find({})
//   .exec((err, users) => {
//     res.status(err ? 400 : 200).send(err || users);
//   });
// });

// router.get('/', function(req, res, next) {
//   req.uesr = req.body;
//   req.user.save((err, savedUser) => {
//     res.status(err ? 400:200).send(err || savdUser);
//   });
// });

// PUT /users/me
// update current user
// router.put('me')

module.exports = router;
