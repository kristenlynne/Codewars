// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

function stringTransformer(str) {
  return str.split('').map(function(el, i, arr) {
    if (arr[i] === arr[i].toUpperCase()) {
      return arr[i].toLowerCase()
    } else {
      return arr[i].toUpperCase()
    }
  }).join('').split(' ').reverse().join(' ')
}

console.log(stringTransformer('Example string'), 'STRING eXAMPLE');
console.log(stringTransformer('Apple Pie'), 'pIE aPPLE');
console.log(stringTransformer('Pumpkin spice latte'), 'LATTE SPICE pUMPKIN');