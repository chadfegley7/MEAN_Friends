//This config file connects to MongoDB and loads all the models.
var mongoose = require("mongoose");

//require file-system so that we can load, read, and require all of the model files
var fs = require("fs");

//Connect to the database
mongoose.connect("mongodb://localhost/MEAN_friends");

//Specifying the path to all of the models
var models_path = __dirname + "/../server/models";

//Read all of the files in the "models_path" and for each one check if it is a javascript file before requiring it
fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf(".js") > 0){
    require(models_path + "/" + file);
  }
});
