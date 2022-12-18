// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  return str.split('').filter(x => abc.includes(x)).reverse().join('')
}

console.log(reverseLetter('altoids'), 'sdiotla');
console.log(reverseLetter('hello'), 'olleh');
console.log(reverseLetter('kr1ist+en'), 'netsirk');