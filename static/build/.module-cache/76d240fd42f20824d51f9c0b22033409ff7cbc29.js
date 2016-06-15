/**
 * Created by danghongyang on 16/6/15.
 */


var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Dog = require('./static/src/Dog').Dog;
var ReactApp = React.createFactory(require('./static/src/ReactApp').ReactApp);

var dog = new Dog();
dog.callData(function(datasnapshot, error) {
    if (error == null) {
        var reactHtml = ReactDOMServer.renderToString(ReactApp({
            msg: datasnapshot
        }));
        res.render('index', {title: 'I love waimai', body: reactHtml});
    }
});