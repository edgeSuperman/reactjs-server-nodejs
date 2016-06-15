var React = require('react');

var Dog = require("./Dog").Dog;


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
        var dog = new Dog();
        dog.pushData(this.state.value);
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
        return  {
            value:  this.props.msg
        }
    },
    componentDidMount: function () {
    },
    render: function () {

        var r = [];
        for(var name in this.state.value) {
            r.push(this.state.value[name]);
        }

        return (
            React.createElement("div", null, 
            React.createElement("ul", null, 
                
                    r.map(function(name, index){
                        return React.createElement("li", {key: index}, "Hello,", name)
                    })
                
            )
                )
        )
    }
});




var ReactApp = React.createClass({displayName: "ReactApp",

    getInitialState: function () {
        return  {
            value:  this.props.msg
        }
    },

    componentDidMount: function () {

    },

    render: function () {

        return (
            React.createElement("div", {className: "container well", id: "table-area"}, 
              React.createElement(SendBar, null), 
                React.createElement(ChatList, {msg: this.props.msg})
            )
        )
    }

});

/* Module.exports instead of normal dom mounting */
module.exports.ReactApp = ReactApp;
/* Normal mounting happens inside of /main.js and is bundled with browserify */