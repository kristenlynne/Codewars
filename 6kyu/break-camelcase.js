// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// for...of loop solution
function solution(str) {
  let result = '';
  for (let letter of str) {
    if (letter == letter.toUpperCase()) {
      result += ` ${letter}`;
    } else {
      result += letter;
    }
  }
  return result;
}

console.log(solution('camelCase'), 'camel Case');
console.log(solution('camelCaseTest'), 'camel Case Test');
console.log(solution('kristen'), 'kristen');

// method solution with map that has callback function that runs conditional to check if element is uppercase and adds space before letter. uses split to turn it into an array and then joins it into a string once loop is finished.
function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}