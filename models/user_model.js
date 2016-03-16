var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost/boards_development');

var userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: String,
});

var User = mongoose.model('User', userSchema);

module.exports = User;
