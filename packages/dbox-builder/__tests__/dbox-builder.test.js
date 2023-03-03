'use strict';

const dboxBuilder = require('..');
const assert = require('assert').strict;

assert.strictEqual(dboxBuilder(), 'Hello from dboxBuilder');
console.info('dboxBuilder tests passed');
