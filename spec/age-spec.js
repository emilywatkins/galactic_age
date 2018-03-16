import { Age } from './../src/age.js';

describe('Age', function() {

  it('should convert age from years to seconds', function() {
    let age = new Age;
    expect(age.seconds(2)).toEqual(63115200);
  });

  it('should return the difference between 2 dates in seconds', function() {
    let yesterday = new Date(2018, 2, 15);
    let today = new Date(2018, 2, 16);
    let yesterdaySeconds = yesterday.getTime() / 1000;
    let todaySeconds = today.getTime() / 1000;
    expect(difference(yesterday, today)).toEqual(86400)

  })

})
