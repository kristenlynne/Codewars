// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum(a,b) {
    let count = 0;
    if (a === b) {
      return a;
    } else if (a < b) {
      for (let i = a; i <= b; i++) {
        count += i;
      }
    } else if (a > b) {
        for(let i = b; i <= a; i++){
          count += i;
      }
    }
    return count;
}

console.log(getSum(1, 1)); // 1
console.log(getSum(1, 2)); // 3
console.log(getSum(-1, 2)); // 2
console.log(getSum(0, -1)); // -1

// Refractored Codewars Solution

function GetSum( a,b ) {
    const result = 0;
    const bigger = a > b ? a : b;
    const smaller = a > b ? b : a;
    for (var i = smaller; i <= bigger; i++) { 
        result += i 
    }
    return result
}