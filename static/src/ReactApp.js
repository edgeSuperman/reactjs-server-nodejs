var React = require('react');

var Dog = require("./Dog").Dog;


var SendBar = React.createClass({

    getInitialState: function () {
        return {value: 'Hello!'}
    },
    componentDidMount: function () {

    },

    handleChange: function (event) {
        this.setState({value: event.target.value});
    },

    _sendToFireBase: function () {
        var dog = new Dog();
        dog.pushData(this.state.value);
    },

    render: function () {
        return (
            <div className="container">
                <input type="text" onChange={this.handleChange} value={this.state.value}/>
                <button onClick={this._sendToFireBase}>send</button>
            </div>
        )
    }
});


var ChatList = React.createClass({

    getInitialState: function () {
        return {
            value: this.props.msg
        }
    },
    componentDidMount: function () {
    },

    render: function () {

        var r = [];
        for (var name in this.props.msg) {
            r.push(this.props.msg[name]);
        }

        r = r.reverse();

        return (
            <div>
                <ul>
                    {
                        r.map(function (name, index) {
                            return <li key={index}>Hello,{name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
});


var ReactApp = React.createClass({

    getInitialState: function () {
        return {
            value: this.props.msg
        }
    },

    componentDidMount: function () {

    },

    render: function () {

        return (
            <div className="container well" id="table-area">
                <SendBar />
                <ChatList msg={this.props.msg}/>
            </div>
        )
    }

});

/* Module.exports instead of normal dom mounting */
module.exports.ReactApp = ReactApp;
/* Normal mounting happens inside of /main.js and is bundled with browserify */