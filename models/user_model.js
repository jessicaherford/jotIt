var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost/boards_development');

var userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: String,
  image_URL: String,
  location: String,
});

var User = mongoose.model('users', userSchema);

module.exports = User;
