var express =  require('express');
var app = express();
var path = require ('path');
var bodyParser = require ('body-parser');
var mongoose = require('mongoose');

//new way to require or use body-parser, I like its inclusivity
app.use(bodyParser.json());

//static folder
app.use (express.static('public'));

//require model
var User = require('../models/user');

//making it to mongo
mongoose.connect('mongodb://localhost:27017/petsDB');

//spin up server until last call
app.listen( 3000, 'localhost', function(req, res){
  console.log('listening on 3000, biggles');
});

//base URL
app.get('/', function(req, res){
  res.sendFile(path.resolve('views/index.html'));
});

//create POST
app.post('/postAnimal', function(req, res){
  console.log('in postAnimal');
  console.log('req.body = ' + req.body.pet_name);
  var newPet = new User({
    pet_name : req.body.pet_name,
    animal_type : req.body.animal_type,
    age : req.body.age,
    animal_url : req.body.animal_url
  });
  newPet.save(function(err){
    if(err){
    console.log(err);
    res.sendStatus(500);
  } else {
    console.log('animal saved');
    res.sendStatus(200);
  }
  });//end save
});//end POST

//create GET to retrieve data/animals
app.get('/retrieveData', function(req, res){
  console.log('in retreive data');
  User.find()
  .then(function(data){
    res.send(data);
  });
});//end GET
