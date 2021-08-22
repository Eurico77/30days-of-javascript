// Write a function that takes a number as argument
// Round the number to the 2nd digit after the comma
// Return the rounded number

function myFunction(input) {
  return Math.round(input * 100) / 100;
}

// function myFunction(num) {
//   return Number(num.toFixed(2));
// }

myFunction(2.12397);
// Expected;
// 2.12;
myFunction(3.136);
// Expected;
// 3.14;
myFunction(1.12397);
// Expected;
// 1.12;
myFunction(26.1379);
// Expected;
// 26.14;
