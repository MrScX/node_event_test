const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const loadRoutes = require("../api");
const logger = require("./logger");

const expressLoader = (app) => {

    app.use(cors());
    
    app.use(morgan("combined", { stream: logger.stream }));
    app.use(helmet());
    app.use(bodyParser.json({ limit: "50mb" }));
    app.use(cookieParser(process.env.SCOOK_SECRET));

    // LOAD API
    app.use(process.env.API_PREFIX, loadRoutes());
}

module.exports = expressLoader;
