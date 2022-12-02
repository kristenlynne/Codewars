// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

// Examples:
// [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
// [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3

// first attempt... 

function getMissingElement(arr){
  let result = 0;
  let sorted = arr.sort((a, b) => b - a)
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] - sorted[i + 1] === 2) {
      result += sorted[i] - 1
    }
  }
  if (sorted[0] === 8) {
    return 9
  } else {
    return result;
  }
}

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]), 8);
console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1]), 3);
console.log(getMissingElement([0, 1, 2, 3, 4, 5, 6, 7, 8]), 9);

// reduce - starting point is 45, it subtracts the values ultimately getting the missing value as 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45.

function getMissingElement(superImportantArray) {
  return superImportantArray.reduce(function (sum, value) {return sum - value;}, 45);
}