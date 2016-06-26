var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  pet_name: String,
  animal_type: String,
  age: Number,
  animal_url: Date
});

var User = mongoose.model('users', userSchema);

module.exports = User;
