// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
    const arr = str.toLowerCase().split('')
    const sortedArr = arr.slice().sort();
  
    for (let i = 0; i < arr.length; i++) {
      if (sortedArr[i + 1] == sortedArr[i]) {
        return false;
      }
    }
    return true;
}