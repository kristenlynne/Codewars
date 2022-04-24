// Write a function to split a string and convert it into an array of words.

// Examples (Input -> Output):
// * "Robin Singh" ==> ["Robin", "Singh"]

// * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string){
    return string.split(' ')
}

console.log(stringToArray('Kristen Smith')); // ['Kristen', 'Smith']
console.log(stringToArray('Strings are cool but arrays are cooler')); // ['Strings', 'are', 'cool', 'but', 'arrays', 'are', 'cooler']