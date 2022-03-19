// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.split('!').join('');
}

console.log(removeExclamationMarks('Hello!? How are you!?')); // 'Hello? How are you?'
