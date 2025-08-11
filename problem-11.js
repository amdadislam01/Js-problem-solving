/**
 * Find the lowest number in the array below.
 * const heights2 = [167, 190, 120, 165, 137];
 */

const heights2 = [167, 190, 120, 165, 137];

function findLowestNumber(arr) {
    let lowest = arr[0];
    for (let num of arr) {
        if (num < lowest) {
            lowest = num;
        }
    }
    return lowest;
}

console.log("Lowest Number:", findLowestNumber(heights2));

/**
 * Output :
 * 1. Lowest Number: 120
 */