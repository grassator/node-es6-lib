'use strict';

const lib = require('../lib/index');
const assert = require('assert');

describe('lib', () => {
    it('should give the answer', () => {
        assert.equal(lib(), 42);
    });
});
