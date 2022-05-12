// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
    let classAverage = classPoints.reduce((acc,c) => acc + c) / classPoints.length
    if (classAverage < yourPoints) {
      return true
    }
    return false
}

console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)); // false
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69)); // true