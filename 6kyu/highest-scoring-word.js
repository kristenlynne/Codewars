// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
  // 1. split x by ' ' to an array.
  const wordList = x.split(' ');
  
  // 2. calculate each word score to another array.
  const getScore = (word) => {
    return word.split('').reduce((prevScore, currWord) => prevScore + currWord.charCodeAt(0) - 96, 0)
  }
  const scoreList = wordList.map(word => getScore(word));

  // 3. get the highest score and index
  let highestIndex = 0;
  let highestScore = 0;
  scoreList.forEach((score, i) => {
    if (score > highestScore) {
      highestIndex = i;
      highestScore = score;
    }
  });
  
  // 4. return the string of the highest score index of wordList
  return wordList[highestIndex];
}

console.log(high('what time are we climbing up the volcano'), 'volcano');
console.log(high('kristen loves codewars'), 'kristen');
console.log(high('whats love got to do with it', 'with'));

// top codewars solution
function high(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}