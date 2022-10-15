// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.

// original solution
function divCon(x){
  let nums = x.filter(el => typeof(el) == 'number').reduce((acc, c) => acc + c, 0)
  let strs = x.filter(el => typeof(el) == 'string').map(el => Number(el)).reduce((acc, c) => acc + c, 0)
  return nums - strs
}

console.log(divCon([9, 3, '7', '3']), 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
console.log(divCon(['10', 5]), -5);

// one liner solution
function divCon(x){
  return x.filter(el => typeof(el) == 'number').reduce((acc, c) => acc + c, 0) - x.filter(el => typeof(el) == 'string').map(el => Number(el)).reduce((acc, c) => acc + c, 0)
}

// for loop solution
function divCon(x){
  let sum = 0;
  for(let i = 0; i < x.length; i++){
    if(typeof x[i] === 'number'){
      sum += x[i];
    }else{
      sum -= x[i];
    }
  }
  return sum;
}