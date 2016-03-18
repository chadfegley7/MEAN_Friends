var mongoose = require("mongoose");
var Friend = mongoose.model("friend");

module.exports = (function(){
  return{
    //Index in the factory(client side) is calling the index method(server side)
    show: function(request, response){
      Friend.find({}, function(err, results){
        if(err){
          console.log(err);
        }
        else{
          response.json(results);
        }
      });
    },

    post: function(request, response){
      Friend.create(request.body, function(hello, results){
        if(hello){
          console.log(hello);
        }
        else{
          response.json(results);
        }
      });
    }
  };
})();
