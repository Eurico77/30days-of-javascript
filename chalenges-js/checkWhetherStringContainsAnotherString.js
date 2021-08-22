// Write a function that takes two strings, say a and b, as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

// function checkWhetherStringContainsAnotherString(a, b) {
//   return a.indexOf(b) > -1 ? b + a : a + b;
// }

function checkWhetherStringContainsAnotherString(a, b) {
  return a.includes(b) ? b + a : a + b;
}

console.log(checkWhetherStringContainsAnotherString('cheese', 'cake'));

console.log(checkWhetherStringContainsAnotherString('lips', 's'));

console.log(checkWhetherStringContainsAnotherString('Java', 'script'));

console.log(
  checkWhetherStringContainsAnotherString(' think, therefore I am', 'I')
);
