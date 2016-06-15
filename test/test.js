/**
 * Created by danghongyang on 16/6/15.
 */


var Wilddog = require("wilddog");
var ref = new Wilddog("https://xiniao.wilddogio.com");
ref.child("msg").once("value", function(datasnapshot,error) {
    if (error == null) {
        console.log(datasnapshot.val());   // 结果会在 console 中打印出 "beijing"
    }
});