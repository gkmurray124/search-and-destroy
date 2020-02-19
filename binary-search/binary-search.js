'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let midpoint = Math.floor(array.length/2)
	let left = array.slice(0, midpoint)
	let right = array.slice(midpoint + 1)

	if (target === array[midpoint]) return true
	else if (target < array[midpoint]) {
		return binarySearch(left, target)
	}
	else if (target > array[midpoint]) {
		return binarySearch(right, target)
	}
	else return false
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
