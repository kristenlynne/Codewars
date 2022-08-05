// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

/*
P - string which includes only letters from Aa - Zz
R - returns 1st letter repeated 1x, 2nd letter repeated 2x, 3rd letter repeated 3x... so on and so forth. The repition is capitalized no matter what. There is a - in between each letter
E - "abc" => "A-Bb-Ccc", "aBcD" => "Aa-Bb-Ccc-Dddd"
P - turn string into an array, spilt the string. Capitalize the first letter and lowercase the remaining letters... to get the # of times the letter needs to be repeated need to get the index + 1 and then multiple the letters..... eeeeeeehhh then you join them back together with a - in between.
*/

function accum(s) {
    return s.split('').map((e, i) => (e.toUpperCase() + e.toLowerCase().repeat(i))).join("-")
}

console.log(accum('abc')); // "A-Bb-Ccc"
console.log(accum('kRiStEn')); // "K-Rr-Iii-Ssss-Ttttt-Eeeeee-Nnnnnnn"
