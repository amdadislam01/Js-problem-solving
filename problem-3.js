/**
 * Write a function to count the number of vowels in a string.
 */
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  
  return count;
}

console.log(countVowels("Amdad Islam")); 
console.log(countVowels("Programming")); 

/**
 * Output :
 * 1. 4
 * 2. 3
 */