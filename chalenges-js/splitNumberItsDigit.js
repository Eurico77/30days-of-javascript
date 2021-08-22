//Write a function that takes a number as argument
// The function should split the number into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

// function splitNumberItsDigit(number) {
//   let arr = [];
//   let num = number;
//   while (num > 0) {
//     arr.push(num % 10);
//     num = Math.floor(num / 10);
//   }
//   return arr;
// }

// function myFunction( num ) {
//   const string = num + '';
//   const strings = string.split('');
//   return strings.map(digit => Number(digit))
// }

function splitNumberItsDigit(number) {
  return number.toString().split('').map(Number);
}
console.log(splitNumberItsDigit(193278));
// console.log(splitNumberItsDigit(10));
// console.log(splitNumberItsDigit());
// console.log(splitNumberItsDigit(193278));
