var React = require('react');

var Wilddog = require("wilddog");


var SendBar = React.createClass({displayName: "SendBar",

    getInitialState: function () {
        return {value: 'Hello!'}
    },
    componentDidMount: function () {

    },

    handleChange: function (event) {
        this.setState({value: event.target.value});
    },

    _sendToFireBase: function(){
        console.log(this.state.value);
    },

    render: function () {
        return (
            React.createElement("div", {className: "container"}, 
                React.createElement("input", {type: "text", onChange: this.handleChange, value: this.state.value}), 
                React.createElement("button", {onClick: this._sendToFireBase}, "send")
            )
        )
    }
});



var ChatList = React.createClass({displayName: "ChatList",

    getInitialState: function () {
        return {value: []}
    },
    componentDidMount: function () {
        this.state.value = this._getFromFireBase();
    },

    _getFromFireBase: function(){
        var ref = new Wilddog("https://xiniao.wilddogio.com");
        ref.child("msg").once("value", function(datasnapshot,error) {
            if (error == null) {
               this.state.value = (datasnapshot.val());
            }
        });
    },

    render: function () {
        return (
            React.createElement("div", null, 
            React.createElement("ul", null, 
                
                    this.state.value.map(function(name){
                        return React.createElement("li", {key: name}, "Hello,", name)
                    })
                
            )
                )
        )
    }
});




var ReactApp = React.createClass({displayName: "ReactApp",

    componentDidMount: function () {

    },

    render: function () {

        return (
            React.createElement("div", {className: "container well", id: "table-area"}, 
              React.createElement(SendBar, null), 
                React.createElement(ChatList, null)
            )
        )
    }

});

/* Module.exports instead of normal dom mounting */
module.exports.ReactApp = ReactApp;
/* Normal mounting happens inside of /main.js and is bundled with browserify */