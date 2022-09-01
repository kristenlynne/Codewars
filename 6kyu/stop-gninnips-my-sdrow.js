// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(str){
    let arr = str.split(' ');
    let result = '';
    arr.map((el, i) => {
      if (el.length >= 5) {
        arr[i] = el.split('').reverse().join('');
      } else {
        arr[i] = el;
      }
      result = arr.join(' ');
    });
    return result;
}

// for loop solution

function spinWords(str) {
    let strArr = str.split(' ');
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i].length >= 5)
        strArr[i] = strArr[i].split('').reverse().join('');
    }
    return strArr.join(' ');
}

// forEach solution

function spinWords(str){
    wordsArray = str.split(' ');
    wordsArray.forEach(function(word, index){
      if (word.length > 4) {
        wordsArray[index] = word.split('').reverse().join('');
      }
    });
    return wordsArray.join(' ');
  }

console.log(spinWords('Hey fellow warriors')); // 'Hey wollef sroirraw'
console.log(spinWords('you spin me right round baby right round')); // 'you spin me thgir dnuor baby thgir dnuor'
console.log(spinWords('ghost')); // 'tsohg'