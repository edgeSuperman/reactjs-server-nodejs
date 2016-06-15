/**
 * Created by danghongyang on 16/6/15.
 */

var Wilddog = require("wilddog");

var Dog = function () {
    this.callData = function (callback) {
        var ref = new Wilddog("https://xiniao.wilddogio.com");
        ref.child("msg").once("value", function (datasnapshot, error) {
            callback(datasnapshot.val(), error);
        });

    };

    this.pushData = function(data, callback){
        var ref = new Wilddog("https://xiniao.wilddogio.com");
    }
};

module.exports.Dog = Dog;