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

}
