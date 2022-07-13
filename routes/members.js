var express = require('express');
var router = express.Router();

var message_controller = require('../controllers/messageController');
var user_controller = require('../controllers/userController');

// Home Page
router.get('/', user_controller.index)

// Get for creating new User
router.get('/home/user/create', user_controller.user_create_get);

// POST request for creating new User.
router.post('/home/user/create', user_controller.user_create_post);

// Get for creating new Message
router.get('/home/message/create', message_controller.message_create_get);

// POST request for creating new Message.
router.post('/home/message/create', message_controller.message_create_post);

module.exports = router;