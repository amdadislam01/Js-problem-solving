/**
 * You are given an array of numbers. Count how many times the a number is repeated in the array.
 * sample-input: numbers = [5,6,11,12,98, 5]
 * find: 5
 * output: 2
 * sample-input:
 * numbers = [5,6,11,12,98, 5]
 * find: 25
 * output: 0
 */

function counts(numbers, find) {
  let count = 0;
  for (let num of numbers) {
    if (num === find) {
      count++;
    }
  }
  return count;
}


console.log(counts([5, 6, 11, 12, 98, 5], 5));   
console.log(counts([5, 6, 11, 12, 98, 5], 25));  

/**
 * Output:
 * 1. 2
 * 2. 0
 */