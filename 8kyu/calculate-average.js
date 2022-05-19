// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    return array.reduce((acc, c) => acc + c, 0) / array.length || 0
}

console.log(find_average([1,1,1])); // 1
console.log(find_average([1,2,3])); // 2
console.log(find_average([1,2,3,4])); // 2.5