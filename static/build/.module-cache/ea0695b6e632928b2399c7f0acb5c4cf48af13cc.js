/**
 * Created by danghongyang on 16/6/15.
 */


var React = require('react');
var Dog = require('./Dog').Dog;
var ReactDOM = require('react-dom');
var ReactApp = React.createFactory(require('./ReactApp').ReactApp);

var dog = new Dog();

dog.callData("client", function(datasnapshot, error) {
    if (error == null) {
        var t = Math.random()  * 10000;
        ReactDOM.render(
            (React.createElement(ReactApp, {key: t, msg: datasnapshot}))
            , document.getElementById("container"));

        console.log(datasnapshot);
    }
});