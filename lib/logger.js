
module.exports = function createLoggerMiddleware(log) {

    return function logger(req, res, next) {

        // 1. write the req method and url to the log
        log(`${req.method} ${req.url}`);

        // 2. call next 
        next();

    };

};