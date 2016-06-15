var React = require('react');
var firebase = require('firebase');

firebase.initializeApp({
    databaseURL: 'https://dazzling-heat-9970.firebaseio.com',
    serviceAccount: 'dhy.since2009@gmail.com'
});



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
        return {value: ["q113231", "1231231", "12321323"]}
    },
    componentDidMount: function () {
        this.state.value = this._getFromFireBase();
    },

    _getFromFireBase: function(){
        var userRef = firebase.database().ref('/users/' + uid);
        userRef.once('value').then(function(snapshot) {
                var email = snapshot.val().email;
                // Send the email to the user.
                // [START_EXCLUDE]
                if (email) {
                    sendNotificationEmail(email).then(function() {
                        // Save the date at which we sent that notification.
                        // [START write_fan_out]
                        var update = {};
                        update['/posts/' + postId + '/lastNotificationTimestamp'] =
                            firebase.database.ServerValue.TIMESTAMP;
                        update['/user-posts/' + uid + '/' + postId + '/lastNotificationTimestamp'] =
                            firebase.database.ServerValue.TIMESTAMP;
                        firebase.database().update(update);
                        // [END write_fan_out]
                    });
                }
        });

        return [
            "q113231", "1231231", "12321323"
        ];
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