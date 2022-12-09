// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product.

// Notes
// Array/list will contain positives only.
// Array/list will always have even size

// Input >> Output Examples

// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22

// minSum({12,6,10,26,3,24}) ==> return (342)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342

// minSum({9,2,8,7,5,4,0,6}) ==> return (74)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74

// for loop solution

function minSum(arr) {
  const sorted = arr.sort((a, b) => a - b)
  let sum = 0;
  for (let i = 0; i < arr.length / 2; i++){
    sum += sorted[i] * sorted[sorted.length - 1 - i]
  }
  return sum
}

console.log(minSum([5,4,2,3]), 22);
console.log(minSum([12,6,10,26,3,24]), 342);
console.log(minSum([9,2,8,7,5,4,0,6]), 74);

// sorts the array from biggest -> smallest 
// loops through the array and stops once we reach the middle of the array (arr.length / 2)
// the loop gets the element in the array and multiplys it by the last element in the array minius the index of the given element
// So essentially the array works it's way inward. Biggest * smallest, 2nd biggest * 2nd smallest, 3rd biggest * 3rd smallest... and so on. [5, 4, 3, 2] ((5 * 2) + (4 * 3)) = 22