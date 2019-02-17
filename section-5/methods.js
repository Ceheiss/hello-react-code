// practice

let weather = [72,84, 34, 56, 92, 24, 47, 85, 72, 54];

let isWarm = (temp) => temp > 70;

let goOutside = weather.filter(isWarm);

console.log(goOutside);

// second

let forecast = [
  {day: 'Monday', sun: true},
  {day: 'Tuesday', sun: false},
  {day: 'Wednesday', sun: false},
  {day: 'Thursday', sun: true},
  {day: 'Friday', sun: false},
  {day: 'Saturday', sun: true},
  {day: 'Sunday', sun: false}
]

let isSunny = (day) => day.sun;

let sunnyDays = forecast.filter(isSunny);

console.log(sunnyDays.day);

// Map stuff
// Create an array and use the map method twice

let numbers = [1,2,3,4,5];

let doubler = (number) => number * 2;
let addOne = (number) => number + 1;

let doubledPlus = numbers.map(doubler).map(addOne);
console.log(doubledPlus + " should be 3, 5, 7, 9 and 11");

// Transform greetings
let greetings = ["hi", "hello", "howdy"];

let capsLock = greetings.map(function(greet){
  return greet.toUpperCase();
});

let hiShout = capsLock.shift();

console.log(capsLock);
console.log(hiShout);
