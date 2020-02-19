'use strict';

const binarySearch = (array, target) => {
	let midpoint = Math.floor(array.length/2)

	if (target === array[midpoint]) return true
	else if (target < array[midpoint]) {
		let minIdx = 0
		let maxIdx = midpoint-1
		for(let i = minIdx; i <= maxIdx; i++) { 
			let val = array[i]
			if(target === val) { 
				return true 
			} 
		} return false
	} else if (target > array[midpoint]) {
		let minIdx = midpoint + 1
		let maxIdx = array.length-1
		for(let j = minIdx; j <= maxIdx; j++) { 
			let val = array[j]
			if(target === val) { 
				return true 

		} 
	} return false
} 
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
