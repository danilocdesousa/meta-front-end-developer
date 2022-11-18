"use strict";

const { default: TestRunner } = require('jest-runner');
const addFive = require('./addFive');

test('Returns the var plus 5', () => {
    expect(addFive(1)).toBe(6);
})
