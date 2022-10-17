// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

function spacify(str) {
  return str.split('').join(' ');
}

console.log(spacify('hello kristen'), 'h e l l o  k r i s t e n');
console.log(spacify('12345'), '1 2 3 4 5');
console.log(spacify('i love codewars!'), 'i  l o v e  c o d e w a r s !');