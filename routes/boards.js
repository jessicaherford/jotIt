var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');
var Board = require('../models/board_model');
var Note = require('../models/note_model');

// db queries go in the routes

router.get('/boards', function (req, res, next) {
  Board.find().then(function (boards) {
    res.json(boards);
  });
});

router.get("/boards/:id", function(req,res){
  Board.findOne({_id: req.params.id}).then(function(payload){
    res.json(payload);
  });
});

router.get("/boards/:id", function(req,res){
  Note.findOne({board_id: req.params.id}).then(function(payload){
    res.json(payload);
    console.log(payload);
  });
});


router.post('/boards', function (req, res, next) {
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
