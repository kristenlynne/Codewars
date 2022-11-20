// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// My intitial solution
function solution(number){
  let arr = [];
  if (number < 0) {return 0}
  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0 || i % 15 == 0) {
      arr.push(i)
    }
  }
  return arr.reduce((acc,c) => acc + c, 0);
}

console.log(solution(10), 23);
console.log(solution(15), 45);
console.log(solution(16), 60);
console.log(solution(-27), 0);

// better solution from codewars as there's no need to create an array and then reduce to get sum when you can just += i to the sum as it loops through. also don't need to check if i % 15 == 0 as we're already using the || operator. the iterator starts at 3 so the loop won't run for negative numbers and the initial value for sum was set at 0.
function solution(number){
  let sum = 0;
  for (let i = 3; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}