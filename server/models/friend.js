//Creating a file that has the Schema of our friends and creates a model that we can call upon
var mongoose = require("mongoose");

//Creating the actual Schema
var friendSchema = new mongoose.Schema({
  name: String,
  age: Number
});

//Use the Schema to create the model, creating the model CREATES the collection in the database
mongoose.model("friend", friendSchema);
