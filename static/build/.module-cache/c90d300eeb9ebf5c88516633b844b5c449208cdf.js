/**
 * Created by danghongyang on 16/6/15.
 */

 Dog = function() {}
Dog.prototype.callData = function(){

}
var Wilddog = require("wilddog");
var ref = new Wilddog("https://xiniao.wilddogio.com");
ref.child("msg").once("value", function(datasnapshot, error) {

});

module.exports.Dog = Dog;