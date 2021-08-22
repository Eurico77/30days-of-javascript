// Write a function that takes a number as argument
// If the number is a whole number (has no decimal place), return true
// Otherwise, return false

//outher mode
function checkNumberIsWhole(number) {
  if (number % 1 === 0) {
    return true;
  } else {
    return false;
  }
}
// outher mode
function myFunction2(input) {
  return input - Math.floor(input) === 0;
}

function myFunction(input) {
  return console.log(Number.isInteger(input));
}

myFunction(4);
// Expected
// true
myFunction(1.123);
// Expected
// false
myFunction(1048);
// Expected
// true
myFunction(10.48);
// Expected
// false
