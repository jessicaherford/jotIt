var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');
var Board = require('../models/board_model');

// db queries go in the routes

router.get('/', function (req, res, next) {
  Board.find().then(function (boards) {
    console.log('************');
    console.log(boards);
    res.json(boards);
  });
});

router.post('/', function (req, res, next) {
  board = new Board({
    title: req.body.title
  });

  board.save(function () {
    res.json({success: true});
  })

  // Board.save(req.body).then(function () {
  //   res.json({success: true});
  // });
});

// router.get("/:id", function(req,res){
//    Cat().where({id: req.params.id}).first().then(function(payload){
//      res.json(payload);
//    });
// });



module.exports = router;
