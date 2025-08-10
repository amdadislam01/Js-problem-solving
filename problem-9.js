/**
 * Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) 
 * as parameter and count how many 0’s are there in that string.
 */

// For Of For Loop
function count_zero(binary) {
  let count = 0;
  for (let counts of binary) {
    if (counts === '0') {
      count++;
    }
  }
  return count;
}

console.log(count_zero("1010010011010010101"));

/**
 * Output : 10
 */


// Split Filter 
function count_zero(binary) {
  return binary.split('').filter(count => count === '0').length;
}

console.log(count_zero("101010010101"));

/**
 * Output : 6
 */