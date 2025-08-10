/**
 * Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

function make_avg(arr, size) {
  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum += arr[i];
  }
  return sum / size;
}


const numbers = [10, 20, 30, 40, 50];
const size = numbers.length;
console.log(make_avg(numbers, size)); 

/**
 * Output : 30
 */
