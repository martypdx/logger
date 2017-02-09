
module.exports = function createLoggerMiddleware(log = console.log) {

    const logger = function(req, res, next) {
        // 1. write the req method and url to the log
        logger.log(`${req.method} ${req.url}`);

        // 2. call next 
        next();
    };

    logger.log = log;

    return logger;

};