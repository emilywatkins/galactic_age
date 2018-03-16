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
    let startSeconds = start.getTime()/1000;
    let end = Date.now()/1000;
    let ageInSeconds = end - startSeconds;
    return ageInSeconds;
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
}
