// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// for loop solution
function mygcd(x,y){
  for (let i = Math.min(x,y); i > 0; i--){
    if (x % i === 0 && y % i === 0) {
      return i
    }
  }
}

// recursive solution
function mygcd(a, b){
  if (b === 0) {
    return a;
  }
  return mygcd(b, a % b);
};

console.log(mygcd(30,12), 6)
console.log(mygcd(60,48), 12)

// base case is set so that if b = 0, return a. b is when there is no longer a remainder.
// when the recursion first runs mygcd(12, 30 % 12) == mygcd(12, 6)
// when it runs again mygcd(6, 12 % 6) == mygcd(6, 0) b === 0 so it returns 6 since this meets the base case
// euclidean algorithm