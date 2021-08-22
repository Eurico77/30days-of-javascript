// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

function findTheCorrectWord(string) {
  return string
    .split('')
    .map((letter) => String.fromCharCode(letter.charCodeAt(0) + 1))
    .join('');
}

// function myFunction(str) {
//   const arr = [...str];
//   const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
//   return correctedArray.join('');
// }

// const string = 'abc';
// console.log(String.fromCharCode(string.charCodeAt(2)));

console.log(findTheCorrectWord('bnchmf'));
