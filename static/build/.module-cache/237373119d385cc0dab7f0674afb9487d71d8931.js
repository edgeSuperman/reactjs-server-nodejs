/**
 * Created by danghongyang on 16/6/15.
 */


var React = require('react');
var Dog = require('./static/src/Dog').Dog;
var ReactApp = React.createFactory(require('./static/src/ReactApp').ReactApp);

var dog = new Dog();

var init = false;
dog.callData(function(datasnapshot, error) {
    if (error == null) {
        ReactApp.render({value: datasnapshot}, document.getElementById("container"));
    }
});