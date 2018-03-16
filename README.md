# Galactic Age Calculator

#### Exercise in Object-oriented Javascript, TDD, Webpack, npm, Jasmine/Karma testing suite, 3.16.18.

#### Emily Watkins

## Description

This application takes a user's birthdate and life expectancy and returns age and life expectancy in years for Earth, Venus, Mars, Mercury, and Jupiter.

## Setup

Clone this repository.

From root directory in terminal, run the following:

`$ npm install`  

This particular project does not incorporate a user interface yet, but if it did, you could run `$ npm build` and `$ npm start` to interact with the project.

To view terminal commands for this project, see "scripts" section in package.json file.

## Functionality

1. Program can take a year and convert it to seconds:
  * Input: 1
  * Output: 31536000

2. Program can take 2 dates and calculate the number of seconds between those dates:
  * Input: (2018, 2, 15), (2018, 2, 16)
  * Output: 86400

3. Program can take 1 date and return the number of seconds since that date:
  * Input: (2018, 2, 15)
  * Output: 86400

4. Program can take 1 date and planet and return the age on that planet:
  * Input: (2017, 2, 16), venus
  * Output: 1.6159977946351125

5. Program can take 1 date, average life expectancy in earth years, and planet and return the relative life expectancy on that planet:
  * Input: (2012, 2, 16), 20, venus
  * Output: 22.57312451923864

6. If the 'user' has outlived their life expectancy on a planet, it will return the years outlived:
  * Input: (2000, 2, 16), 5, venus
  * Output: 20.98834174154269

## Technologies Used

* JavaScript
* Webpack


## License

Licensed under the MIT License.

Copyright (c) 2018 Emily Watkins
