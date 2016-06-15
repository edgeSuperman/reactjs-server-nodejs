/**
 * Created by danghongyang on 16/6/14.
 */

var express = require('express'),
    hbs = require('hbs'),
    app = express();

require("node-jsx").install();

app.set('view engine', 'hbs');  // 用hbs作为模版引擎
app.set('views', __dirname + '/app/templates'); // 模版所在路径
app.use(express.static(__dirname + "/static/"));

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Dog = require('./static/src/Dog').Dog;
var ReactApp = React.createFactory(require('./static/src/ReactApp').ReactApp);

app.get('/', function (req, res) {
    var dog = new Dog();
    dog.callData("server", function(datasnapshot, error) {
        if (error == null) {
            var reactHtml = ReactDOMServer.renderToString(ReactApp({
                msg: datasnapshot
            }));
            res.render('index', {title: 'I love waimai', body: reactHtml});
        }
    });
});
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});