var async = require('async');
var {body, validationResult} = require('express-validator');
var User = require('../models/user')


exports.index = function(req, res) {
  res.render('index', {title: 'Hsssome', user: req.user});
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
    User.find({ 'username': req.body.username }, function(err, user) {
      if (err) {

        console.log('Signup error');
        return next(err);
    }
      if (user.length!=0) {
        if(user[0].username){
          console.log('Username already exists, username: ' + req.body.username);                         
          }                              
          var err = new Error();
          err.status = 310;
          return next(err);
      } else {
        var user = new User(
          {
            username: req.body.username,
            password: req.body.password,
            member: false,
          }
        ).save(err => {
          if (err) { 
            return next(err);
          }
          res.redirect("/home/login");
        })
      }
    })
  }
]