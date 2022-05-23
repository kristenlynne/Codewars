// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
}

console.log(reverseWords('apple')); // elppa
console.log(reverseWords('This is an example!')); // sihT si na !elpmaxe
console.log(reverseWords('double  spaced  words')); // sdrow  decaps  elbuod