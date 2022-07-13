var async = require('async');
var {body, validationResult} = require('express-validator');


exports.index = function(req, res) {
  res.render('index', {title: 'Hsssome'});
};

exports.user_create_get = function(req, res, next) {
  res.render('index', {title: 'Not done'});
}

exports.user_create_post = function(req, res, next) {
  res.render('index', {title: 'Not done'});
}
