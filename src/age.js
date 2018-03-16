export class Age {

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

  currentAge(dob) {
    let start = new Date(dob);
    let startSeconds = Math.round(start.getTime()/1000);
    let end = Math.round(Date.now()/1000);
    let ageInSeconds = end - startSeconds;
    return ageInSeconds;
  }

  galacticYears(dob, planet) {
    let ageInSeconds = this.currentAge(dob);
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
    }
  }

}
