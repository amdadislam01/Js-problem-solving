/**
 * Find the friend with the smallest name.
 * const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function findSmallestName(names) {
    let smallest = names[0];
    for (let name of names) {
        if (name.length < smallest.length) {
            smallest = name;
        }
    }
    return smallest;
}

console.log("Smallest Name:", findSmallestName(friends));


/**
 * Output :
 * 1. Smallest Name: ron
 */