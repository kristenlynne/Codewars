// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// for loop solution

function smallEnough(a, limit){
    for (let i = 0; i < a.length; i++) {
        if (a[i] > limit) {
            return false
        }
    }
    return true
}

console.log(smallEnough([3, 77, 78, 89, 101, 121], 111)); // false
console.log(smallEnough([99, 100, 101, 110], 111)); // true

// .every() solution

const smallEnough = (a, limit) => a.every(element => element <= limit)