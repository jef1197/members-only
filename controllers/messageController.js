var async = require('async');
var {body, validationResult} = require('express-validator');
var Message = require('../models/message')

exports.messages = function(req, res, next) {
  Message.find({}, 'title message')
  .populate('message')
  .exec(function(err, list) {
  if(err) { return next(err); }
  res.render('message_list', {title: 'Messages', list: list, user: req.user})
})

}
exports.message_create_get = function(req, res, next) {
  res.render('create_message_form', {title: 'New Message', user: req.user});
}

exports.message_create_post = [
  body('title', 'Title required').trim().isLength({ min: 1 }).escape(),
  body('message', 'Message required').trim().isLength({ min: 1 }).escape(),
  (req, res, next) => {
    const errors = validationResult(req);

    var message = new Message(
      {
        title: req.body.title,
        message: req.body.message
      }
    ).save(err => {
      if (err) { 
        return next(err);
      }
      res.redirect("/home/login");
    })
  }
]