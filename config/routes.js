//Require the controller
var friends = require("../server/controllers/friends.js");

//This is where I'm going to define all of our routing rules!
//Have to require this in the "server.js" file and pass it "app"
module.exports = function(app){
  app.get("/friends", function(request, response){
    friends.show(request, response);
  });

  app.post("/addFriend", function(request, response){
    friends.post(request, response);
  });
};
