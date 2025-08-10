/**
 * Write a function to find the longest word in a given string.
 * sample-input: I am learning Programming to become a programmer
 * sample-output: Programming
 */

function findLongestWord(str) {
  let words = str.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}


console.log(findLongestWord("I am learning Programming to become a programmer")); 


/**
 * Output: Programming
 */
