const assert = require('chai').assert;
const createLogger = require('../lib/logger');

describe('logging middleware', () => {

    it('logs request method and url, then calls next', done => {
        let logged = '';
        let log = l => logged = l;
        const logger = createLogger(log);
        assert.equal(logger.log, log);

        const req = { method: 'GET', url: '/tests' };
        logger(req, null, done);
        assert.equal(logged, 'GET /tests');
    });

    it('uses console.log by default', () => {
        const logger = createLogger();
        assert.equal(logger.log, console.log);
    });
});