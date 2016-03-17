// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/boards_development');

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
