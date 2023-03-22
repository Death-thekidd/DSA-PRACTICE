"use-strict";
/**
 * same - checks if elements in arr2 are the square
 * of the elements in arr1 using the frequency counter pattern
 * @arr1: first array
 * @arr2: second array
 *
 * Return: true or false
 */
const same_ = (arr1: number[], arr2: number[]) => {
	if (arr1.length !== arr2.length) {
		return false;
	}
	let frequencyCounter1: any = {};
	let frequencyCounter2: any = {};
	for (let val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}
	for (let val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}
	for (let key in frequencyCounter1) {
		if (!(Number(key) ** 2 in frequencyCounter2)) {
			return false;
		}
		if (frequencyCounter2[Number(key) ** 2] !== frequencyCounter1[key]) {
			return false;
		}
	}
	return true;
};

console.log(same_([1, 2, 3, 2], [9, 1, 4, 4]));
