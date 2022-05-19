// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
    let averageGrade = (s1 + s2 + s3) / 3
    if (averageGrade <= 100 && averageGrade >= 90) {
        return 'A'
    } else if (averageGrade < 90 && averageGrade >= 80) {
        return 'B'
    } else if (averageGrade < 80 && averageGrade >= 70) {
        return 'C'
    } else if (averageGrade < 70 && averageGrade >= 60) {
        return 'D'
    } else {
        return 'F'
    }
}

console.log(getGrade(95,90,93)); // A
console.log(getGrade(82,85,87)); // B
console.log(getGrade(60,82,76)); // C
console.log(getGrade(65,70,59)); // D
console.log(getGrade(44,55,52)); // F
