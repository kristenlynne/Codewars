// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

function noOdds(values){
    return values.filter(element => element % 2 === 0)
}

console.log(noOdds([0,1,2,3,4,5,6])); // [0,2,4,6]
console.log(noOdds([1,4,6,3,0,2])); // [4,6,0,2]