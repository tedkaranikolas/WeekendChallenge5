var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  pet_name: String,
  animal_type: String,
  age: String,
  animal_url: String
});

var User = mongoose.model('users', userSchema);

module.exports = User;
