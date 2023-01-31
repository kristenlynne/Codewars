// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// filter solution

function uniqueInOrder(iterable) {
  let strArr = Array.isArray(iterable) ? iterable : iterable.split('');
  let unique = strArr.filter((element, index) => {
    return strArr[index] != strArr[index+1]
  })
  return unique
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
console.log(uniqueInOrder([1,2,2,3,3]), [1,2,3])

// codewars solution for loop

function uniqueInOrder(iterable) {
  var result = []
  
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] !== result[result.length - 1]) {
      result.push(iterable[i])
    }
  }
  
  return result
}