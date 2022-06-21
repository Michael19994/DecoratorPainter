const assert = require('assert');
const Paint = require('../paint');

describe('Paint', function () {

    let paint;

    this.beforeEach(function () {
        paint = new Paint(1)
    })

    it('it should have a number of litres', function () {
        const actual = paint.numbersOfLitres;
        assert.strictEqual(actual, 1)
    })

    it('it should be able to check if paint can is empty', function () {
        assert.strictEqual(paint.checkIfEmpty(), false)
    })

    it('it should be able to empty can of paint', function () {
        paint.empty()
        assert.strictEqual(paint.checkIfEmpty(), true)
    })
})