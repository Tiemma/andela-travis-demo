const chai = require('chai');
const expect = chai.expect;

const src = require('../src/index');
const add = src.add;
const subtract = src.subtract;
const divide  = src.divide;

describe('Add', () => {
    it('Add two numbers together', () => {
        expect(add(1, 5)).equals(6);
    })
})

describe('Subtract', () => {
    it('Subtract two numbers together', () => {
        expect(subtract(5, 1)).equals(4);
    })
})

describe('Divide', () => {
    it('Divide two numbers together', () => {
        expect(divide(5, 1)).equals(5);
    })
})