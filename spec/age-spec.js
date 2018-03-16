import { Age } from './../src/age.js';

describe('Age', function() {

  it('should convert age from years to seconds', function() {
    let age = new Age;
    expect(age.seconds(2)).toEqual(63115200);
  });

  it('should return the difference between 2 dates in seconds', function() {
    let age = new Age;
    let yesterday = new Date(2018, 2, 15);
    let today = new Date(2018, 2, 16);
    let yesterdaySeconds = yesterday.getTime() / 1000;
    let todaySeconds = today.getTime() / 1000;
    expect(age.difference(yesterday, today)).toEqual(86400);
  });

  it('should return exact age in seconds', function() {
    let age = new Age;
    let dob = new Date(2018, 2, 15);
    let dobSeconds = dob.getTime()/1000;
    let now = Date.now()/1000;
    expect(Math.round(age.currentAge(dob))).toEqual(Math.round(now - dobSeconds));
  });

  it('should return the age in Mercury years', function() {
    let age = new Age;
    let dob = new Date(2017, 2, 16);
    let ageInSeconds = age.currentAge(dob);
    let earthYears = ageInSeconds/(365*24*60*60);
    let mercuryYears = earthYears/.24;
    expect(age.mercury(dob)).toEqual(mercuryYears);
  });

  it('should return the age in Venus years', function() {
    let age = new Age;
    let dob = new Date(2017, 2, 16);
    let ageInSeconds = age.currentAge(dob);
    let venusYears = (ageInSeconds/(365*24*60*60))/.62;
    expect(age.venus(dob)).toEqual(venusYears);
  });

  it('should return the age in Mars years', function() {
    let age = new Age;
    let dob = new Date(2017, 2, 16);
    let ageInSeconds = age.currentAge(dob);
    let marsYears = (ageInSeconds/(365*24*60*60))/1.88;
    expect(age.mars(dob)).toEqual(marsYears);
  });

})
