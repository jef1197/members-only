var async = require('async');
var {body, validationResult} = require('express-validator');
var User = require('../models/user')


exports.index = function(req, res) {
  res.render('index', {title: 'Hsssome'});
};

exports.login = function(req, res, next) {
  res.render('login', {title: 'Login'});
}

exports.user_create_get = function(req, res, next) {
  res.render('create_user_form', {title: 'Create User'});
}

exports.user_create_post = [
  body('name', 'Username required').trim().isLength({ min: 1 }).escape(),
  body('password', 'Password required').trim().isLength({ min: 1 }).escape(),
  (req, res, next) => {
    const errors = validationResult(req);

    var user = new User(
      {
        username: req.body.name,
        password: req.body.password
      }
    ).save(err => {
      if (err) { 
        return next(err);
      }
      res.redirect("/home/login");
    })
  }
]