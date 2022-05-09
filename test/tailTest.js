const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {

  it("should return ['Lighthouse', 'Labs'] for ['YO YO', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['YO YO', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs'])
  });

  it("should return [2, 3, 4, 5, 6] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6])
  });

});