const { createLogger, format, transports } = require("winston");
const appRoot = require("app-root-path");

const logger = createLogger({
    level: "silly",
    format: format.combine(
        format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
  ),
    transports: [
        new transports.File({ filename: appRoot + "/logs/errors.log", level: "error" }),
        new transports.File({ filename: appRoot + "/logs/combined.log" })
    ]
});

logger.stream = {
    write: function(message, encoding) {
        logger.info(message);
    },
};

if (process.env.ENV !== "production") {
    
    logger.add(new transports.Console({
        format: format.combine(
            format.colorize(),
            format.simple()
        )
    }));
}

module.exports = logger;
