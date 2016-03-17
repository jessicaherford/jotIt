var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost/boards_development');

var noteSchema = new Schema({
  board_id: String,
  note: String,
});

var Note = mongoose.model('notes', noteSchema);

module.exports = Note;
