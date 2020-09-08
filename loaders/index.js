const dotenv = require("dotenv");
const expressLoader = require("./express");
const eventsLoader = require("./events");



const loader = async (app) => {

    dotenv.config();

    eventsLoader();

    expressLoader(app);
}

module.exports = loader;
