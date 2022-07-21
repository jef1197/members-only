var express = require('express');
var router = express.Router();
var passport = require('passport');

var message_controller = require('../controllers/messageController');
var user_controller = require('../controllers/userController');

// Home Page
router.get('/', user_controller.index)

// Logout Page
router.get('/logout', (req, res) => {
  req.logout( function(err) {
    if (err) {
      return next(err);
    }
    res.redirect('/')
  });
})

// Login Page
router.get('/login', user_controller.login)

// Login Page Post
// router.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/' }));

// Get for creating new User
router.get('/user/create', user_controller.user_create_get);

// POST request for creating new User.
router.post('/user/create', user_controller.user_create_post);

// Get for creating new Message
router.get('/message/create', message_controller.message_create_get);

// POST request for creating new Message.
router.post('/message/create', message_controller.message_create_post);

module.exports = router;