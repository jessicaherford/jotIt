// grab the mongoose module
var mongoose = require('mongoose');
// var databaseConnect = require('../config/db')
var Schema = mongoose.Schema;

// mongoose.connect('mongodb://localhost/boards_development');
// mongoose.connect('mongodb://jess:jotit@ds015939.mlab.com:15939/jotit');


// define our board model
var boardSchema = new Schema({
  title: String,
  post: [
    {
      user_id: Number,
      created_at: Date,
      updated_at: Date,
      text: String
    }
  ],
  created_at: Date,
  updated_at: Date
});

var Board = mongoose.model('boards', boardSchema);

// export our board model
module.exports = Board;
