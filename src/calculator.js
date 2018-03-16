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

}
