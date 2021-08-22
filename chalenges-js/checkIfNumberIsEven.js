// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

function checkIfNumberIsEven(number) {
  return console.log(number % 2 === 0);
}

checkIfNumberIsEven(10);
// Expected
// true
checkIfNumberIsEven(-4);
// Expected
// true
checkIfNumberIsEven(5);
// Expected
// false
checkIfNumberIsEven(-111);
// Expected
// false
