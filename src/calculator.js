export class Calculator {
  constructor(dob, lifeExpectancy) {
    this.dob = dob;
    this.lifeExpectancy = lifeExpectancy;
  }

  seconds(year) {
    let seconds = year * 31557600;
    return seconds;
  }

  difference(startDate, endDate) {
    let start = new Date(startDate);
    let startSeconds = start.getTime() / 1000;
    let end = new Date(endDate);
    let endSeconds = end.getTime() / 1000;
    let difference = endSeconds - startSeconds;
    return difference;
  }

  currentAge() {
    let start = new Date(this.dob);
    let startSeconds = Math.round(start.getTime()/1000);
    let end = Math.round(Date.now()/1000);
    let ageInSeconds = end - startSeconds;
    return ageInSeconds;
  }

  galacticYears(planet) {
    let ageInSeconds = this.currentAge(this.dob);
    let earthYears = ageInSeconds/(365*24*60*60);
    let mercuryYears = earthYears/.24;
    let venusYears = earthYears/.62;
    let marsYears = earthYears/1.88;
    let jupiterYears = earthYears/11.86;
    if (planet === 'mercury') {
      return mercuryYears;
    } else if (planet === 'venus') {
      return venusYears;
    } else if (planet === 'mars') {
      return marsYears;
    } else if (planet === 'jupiter') {
      return jupiterYears;
    } else if (planet === 'earth') {
      return earthYears;
    }
  }

  yearsLeft(planet) {
    let venusExpectancy = this.lifeExpectancy/.62;
    let mercuryExpectancy = this.lifeExpectancy/.24;
    let marsExpectancy = this.lifeExpectancy/1.88;
    let jupiterExpectancy = this.lifeExpectancy/11.86;

    if (planet === 'earth') {
      let earthRemaining = (this.lifeExpectancy - this.galacticYears('earth'));
      if (earthRemaining > 0) {
        return earthRemaining;
      } else {
        return Math.abs(earthRemaining);
      }
    } else if (planet === 'venus') {
      let venusRemaining = (venusExpectancy - this.galacticYears('venus'));
      if (venusRemaining > 0) {
        return venusRemaining;
      } else {
        return Math.abs(venusRemaining);
      }
    } else if (planet === 'mercury') {
      let mercuryRemaining = (mercuryExpectancy - this.galacticYears('mercury'));
      if (mercuryRemaining > 0) {
        return mercuryRemaining;
      } else {
        return Math.abs(mercuryRemaining);
      }
    } else if (planet === 'mars') {
      let marsRemaining = (marsExpectancy - this.galacticYears('mars'));
      if (marsRemaining > 0) {
        return marsRemaining;
      } else {
        return Math.abs(marsRemaining);
      }
    } else if (planet === 'jupiter') {
      let jupiterRemaining = (jupiterExpectancy - this.galacticYears('jupiter'));
      if (jupiterRemaining > 0) {
        return jupiterRemaining;
      } else {
        return Math.abs(jupiterRemaining);
      }
    }
  }

}
