const assert = require('chai').assert;
const createBodyParser = require('../lib/body-parser');
const EventEmitter = require('events');

describe('body parser middleware', () => {

    it('reads request stream and assigns to req.body and calls next', done => {
        
        const bodyParser = createBodyParser();
        
        const req = new EventEmitter();

        const next = () => {
            // what to test here?
            done();
        };

        bodyParser(req, null, next);

        // simulate stream events
        // req.emit('data', JSON.stringify(data));
        // req.emit('end');
    });
});