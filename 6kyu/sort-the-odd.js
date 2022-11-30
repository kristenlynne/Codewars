// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// top codewars solution

function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}

// optimized by sorting descending and using pop instead of shift.

function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => b - a);
  return array.map((x) => x % 2 ? odd.pop() : x);
}

// explantion of why this is more efficient:
//// If you do odd.shift(), your time complexity would be [O(n)] If rather you take the list and sort it reversed .sort((a,b) => b - a), you would now be able to .pop() with constant time [O(1)].The total time complexity of your algorithm is [O(n^2)] (as you have a map [O(n)] which in the worst case is running the odd.shift() method with [O(n)] as well). If you do that little change your algorithm improves to [O(n)] as .pop() will be constant [O(1)].

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]), []);
