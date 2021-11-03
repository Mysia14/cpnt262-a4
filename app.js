'use strict';

const _ = require('lodash')

const args = process.argv.slice(2) // input and slice it in the command line 

const distance = Number(args[0]); // first element of the argument

const time = Number(args[1]); // second element of the argument

if (distance > 0) {
    const result = _.divide(distance, time)
    console.log(result, "km/h")
} else {
    console.log('Sorry,please enter a number')
}









































/////if (typeof(human) === "number") {
/////const years = _.multiply(human, dog);
////console.log(years)
////} else {
/////  console.log('Sorry,please enter a number')
////}