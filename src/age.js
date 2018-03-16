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
    if (planet === 'mercury') {
      return mercuryYears;
    }
  }

  mercury(dob) {
    let ageInSeconds = this.currentAge(dob);
    let mercuryYears = (ageInSeconds/(365*24*60*60))/.24;
    return mercuryYears;
  }

  venus(dob) {
    let ageInSeconds = this.currentAge(dob);
    let venusYears = (ageInSeconds/(365*24*60*60))/.62;
    return venusYears;
  }

  mars(dob) {
    let ageInSeconds = this.currentAge(dob);
    let marsYears = (ageInSeconds/(365*24*60*60))/1.88;
    return marsYears;
  }

  jupiter(dob) {
    let ageInSeconds = this.currentAge(dob);
    let jupiterYears = (ageInSeconds/(365*24*60*60))/11.86;
    return jupiterYears;
  }
}
