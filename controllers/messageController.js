var async = require('async');
var {body, validationResult} = require('express-validator');

exports.message_create_get = function(req, res, next) {
  res.render('create_message_form', {title: 'Not done'});
}

exports.message_create_post = function(req, res, next) {
  res.render('create_message_form', {title: 'Not done'});
}