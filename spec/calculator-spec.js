import { Calculator } from './../src/calculator.js';

describe('Calculator', function() {

  it('should convert age from years to seconds', function() {
    let calculator = new Calculator;
    expect(calculator.seconds(2)).toEqual(63115200);
  });

  it('should return the difference between 2 dates in seconds', function() {
    let calculator = new Calculator;
    let yesterday = new Date(2018, 2, 15);
    let today = new Date(2018, 2, 16);
    let yesterdaySeconds = yesterday.getTime() / 1000;
    let todaySeconds = today.getTime() / 1000;
    expect(calculator.difference(yesterday, today)).toEqual(86400);
  });

  it('should return exact age in seconds', function() {
    let dob = new Date(2018, 2, 15);
    let calculator = new Calculator(dob);
    let dobSeconds = dob.getTime()/1000;
    let now = Date.now()/1000;
    expect(Math.round(calculator.currentAge())).toEqual(Math.round(now - dobSeconds));
  });

  it('should return the age in Mercury years', function() {
    let dob = new Date(2017, 2, 16);
    let calculator = new Calculator(dob);
    let ageInSeconds = calculator.currentAge();
    let earthYears = ageInSeconds/(365*24*60*60);
    let mercuryYears = earthYears/.24;
    expect(calculator.galacticYears('mercury')).toEqual(mercuryYears);
  });

  it('should return the age in Venus years', function() {
    let dob = new Date(2017, 2, 16);
    let calculator = new Calculator(dob);
    let ageInSeconds = calculator.currentAge();
    let venusYears = (ageInSeconds/(365*24*60*60))/.62;
    expect(calculator.galacticYears('venus')).toEqual(venusYears);
  });

  it('should return the age in Mars years', function() {
    let dob = new Date(2017, 2, 16);
    let calculator = new Calculator(dob);
    let ageInSeconds = calculator.currentAge();
    let marsYears = (ageInSeconds/(365*24*60*60))/1.88;
    expect(calculator.galacticYears('mars')).toEqual(marsYears);
  });

  it('should return the age in Jupiter years', function() {
    let dob = new Date(2017, 2, 16);
    let calculator = new Calculator(dob);
    let ageInSeconds = calculator.currentAge();
    let jupiterYears = (ageInSeconds/(365*24*60*60))/11.86;
    expect(calculator.galacticYears('jupiter')).toEqual(jupiterYears);
  });

  it('should return the remaining years on earth per life expectancy', function() {
    let dob = new Date(2017, 2, 16);
    let lifeExpectancy = 20;
    let calculator = new Calculator(dob, lifeExpectancy);
    let earthAge = calculator.galacticYears('earth');
    expect(calculator.yearsLeft('earth')).toEqual(lifeExpectancy - earthAge);
  });

  it('should return the remaining years on any planet per life expectancy', function() {
    let dob = new Date(2012, 2, 16);
    let lifeExpectancy = 20;
    let calculator = new Calculator(dob, lifeExpectancy);
    let planetExpectancy = lifeExpectancy/.62;
    let venusAge = calculator.galacticYears('venus');
    expect(calculator.yearsLeft('venus')).toEqual(planetExpectancy - venusAge);
  });

  it('should return the number of years lived past expectancy', function() {
    let dob = new Date(2000, 2, 16);
    let lifeExpectancy = 5;
    let calculator = new Calculator(dob, lifeExpectancy);
    let planetExpectancy = lifeExpectancy/.62;
    let venusAge = calculator.galacticYears('venus');
    expect(calculator.yearsLeft('venus')).toBeGreaterThan(0);
  });
})
