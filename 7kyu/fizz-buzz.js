// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

function fizzbuzz(n) {
    let result = [];
    
    for (let i = 1; i <= n; i++) {
      let val = '';
      if (i % 3 === 0) val += 'Fizz'
      if (i % 5 === 0) val += 'Buzz'
  
      result.push(val || i)
    }
    return result;
  }

console.log(fizzbuzz(10), [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']);
console.log(fizzbuzz(15), [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz'])

// alt solution

function fizzbuzz(n){
  const arr = [];
   for (let i = 1; i <= n; i++) {
     if(i % 15 === 0) {
       arr.push("FizzBuzz")
     }else if(i % 3 === 0) {
       arr.push("Fizz")
     }
     else if(i % 5 === 0) {
       arr.push("Buzz")
     } else {
       arr.push(i)
     }
   } return arr
 }
