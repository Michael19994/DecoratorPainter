const assert = require('assert');
const Room = require('../room');

describe('Room', function (){
    let room;

    this.beforeEach(function () {
        room = new Room(1, false)
    })

    it('area', function () {
        const actual = room.area;
        assert.strictEqual(actual, 1)
    })
})