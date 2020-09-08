const { signInEvents } = require("../events");
const logService = require("../services/LogService");

const loadEvents = () => {
    signInEvents.on("log sign in", function(data) {
        logService.logSignIn(data);
    });
}

module.exports = loadEvents;
