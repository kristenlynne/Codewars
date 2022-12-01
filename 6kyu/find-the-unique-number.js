// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// codewars solution. O(n) complexity, difficult to understand what's happening though. it destructures the array by getting the first 3 elements and then checks if the first element is unique. if it is unique it returns a. then it uses a for of loop to loop through each element of the array and compares it the first element in the array, if it does not equal a, it returns that element.

function findUniq(arr) {
  let [a,b,c] = arr;
  if( a!=b && a!=c ) return a;
  for( let x of arr ) if( x!=a ) return x
}

// both array.indexOf and array.lastIndexOf take O(n) time complexity and since array.find is O(n); that makes this solution O(n^2).
// take each element in the array, check for the first time it appears and the last time.
// If the index of the first it appears equals to the index of the last time it appears, that means there is only one occurrence of that number.

function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}
