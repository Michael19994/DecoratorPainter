const assert = require('assert');
const Decorator = require('../decorator');
const Paint = require('../paint');

describe('Decorator', function () {

    let decorator;

    this.beforeEach(function () {
        decorator = new Decorator([]) 
    })

    it('should be able to add with an empty stock', function () {
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    })

    it('should be able to add a can of paint to paint stock', function () {
        paint = new Paint(1)
        decorator.addPaint(paint);
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, [paint]);
    })

    it('should be able to calculate total litres paint it has in stock', function () {
        paint = new Paint(1)
        decorator.addPaint(paint);
        assert.strictEqual(decorator.calculateTotalLitres(), 1)

    })

})