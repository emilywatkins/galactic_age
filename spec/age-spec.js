import { Age } from './../src/age.js';

describe('Age', function() {
  it('should convert age from years to seconds', function() {
    var age = new Age;
    expect(age.seconds(2)).toEqual(63115200);
  })
})
