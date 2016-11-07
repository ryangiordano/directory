var express = require('express');
var router = express.Router();
var Employee = require('../models/employee');

router.get('/', function(req, res, next) {
  Employee.find().exec(function(err, docs) {
    if (err) {
      return res.status(404).json({
        title: 'An error occured',
        error: err
      });
    }
    res.status(200).json({
      message: 'Success',
      obj: docs
    });
  });
});
