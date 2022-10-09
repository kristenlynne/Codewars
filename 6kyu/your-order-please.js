// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// regex solution

function order(words){
  return words.split(' ').sort(function(a, b){
    return a.match(/\d/) - b.match(/\d/);
  }).join(' ')
}

console.log(order('lov2e cod3ewars I1'), 'I1 lov2e cod3ewars');
console.log(order('4of Fo1r pe6ople g3ood th5e the2'), 'Fo1r the2 g3ood 4of th5e pe6ople');
console.log(order(''), '');

// for loop solution

function order(words) {
  const result = [];
  const chunks = words.split(' ');
  
  for (let i = 1; i < chunks.length + 1; i++) {
    result.push(chunks.find((chunk) => chunk.includes(i)));
  }
  
  return result.join(' ');
}

// method solution

function order(words){
  return words
    .split(' ')
    .sort((a,b) => {return a.split('').find(Number) - b.split('').find(Number)})
    .join(' ')
}