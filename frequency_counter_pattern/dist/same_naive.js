"use strict";
"use-strict";
/**
 * same - checks if elements in arr2 are th square
 * of the elements in arr1
 * @arr1: first array
 * @arr2: second array
 *
 * Return: true or false
 */
const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true;
};
console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
//# sourceMappingURL=same_naive.js.map