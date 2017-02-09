const assert = require('chai').assert;
const createLogger = require('../lib/logger');

describe('logging middleware', () => {

    it('logs request method and url, then calls next', done => {

        let logged = '';
        const logger = createLogger(log => logged = log);

        const req = { method: 'GET', url: '/tests' };

        logger(req, null, done);

        assert.equal(logged, 'GET /tests');

    });
});