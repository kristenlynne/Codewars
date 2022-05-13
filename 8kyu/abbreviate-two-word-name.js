// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H
// patrick feeney => P.F

function abbrevName(name){
    return name.split(' ').map(x => x[0]).join('.').toUpperCase()
}

console.log(abbrevName("Kristen Smith")); // K.S

// Notes
// "Kristen Smith" => K.S 
// ["Kristen", "Smith"] splits string into an array where there is a space
// ["K", "S"] use map to return new array with the elements first character (index 0)
// K.S use join to join elements together and added a . in between
// .toUpperCase to only return uppercase abbreviations
