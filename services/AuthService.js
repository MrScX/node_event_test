const logger = require("../loaders/logger");

const { signInEvents } = require("../events");

const authService = {

    salt: 12,

    signIn: function() {
        
        try {

            signInEvents.emit("log sign in", "this data should be outputted");

            return 200;
            
        } catch (err) {
            
        }
    }
}

module.exports = authService;
