// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// Initial Solution

let x = 'x'
let o = 'o'

function XO(str) {
    let xCount = str.toLowerCase().split('').filter(e => e.includes(x));
    let oCount = str.toLowerCase().split('').filter(e => e.includes(o));
    if (xCount.length === oCount.length) {
        return true
    }
    return false
}

console.log(XO('xo')); // true
console.log(XO('xxOo')); // true
console.log(XO('xxxm')); // false
console.log(XO('Oo')); // false
console.log(XO('ooom')); // false

// Refractored

function XO(str) {
    let arr = str.toLowerCase().split('')
    let x = arr.filter(e => e === 'x');
    let o = arr.filter(e => e === 'o');
    return (x.length === o.length) ? true : false;
}

console.log(XO('xo')); // true
console.log(XO('xxOo')); // true
console.log(XO('xxxm')); // false
console.log(XO('Oo')); // false
console.log(XO('ooom')); // false