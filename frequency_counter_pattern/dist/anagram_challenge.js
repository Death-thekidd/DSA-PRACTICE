"use strict";
/**
 * validAnagram - determines if str2 is an anagram of str1
 * using frequency counter pattern
 * @str1: first string
 * @str2: second string
 *
 * Return: true if str2 is an ana gram of the first else false
 */
const validAnagram = (str1, str2) => {
    if (str1.length != str2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    let str1_ = str1.split("");
    let str2_ = str2.split("");
    for (let char of str1_) {
        frequencyCounter1[char] = ++frequencyCounter1[char] || 1;
    }
    for (let char of str2_) {
        frequencyCounter2[char] = ++frequencyCounter2[char] || 1;
    }
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }
    return true;
};
/**
 * validAnagram - determines if str2 is an anagram of str1
 * using frequency counter pattern (Instructor's solution)
 * @str1: first string
 * @str2: second string
 *
 * Return: true if str2 is an ana gram of the first else false
 */
const validAnagram2 = (str1, str2) => {
    if (str1.length != str2.length) {
        return false;
    }
    let frequencyCounter = {};
    let str1_ = str1.split("");
    let str2_ = str2.split("");
    for (let char of str1_) {
        frequencyCounter[char] = ++frequencyCounter[char] || 1;
    }
    for (let char of str2) {
        if (!frequencyCounter[char]) {
            return false;
        }
        else {
            frequencyCounter[char] -= 1;
        }
    }
    return true;
};
console.log(validAnagram("qwerty", "qeywrt"), validAnagram2("qwerty", "qeywrt"));
//# sourceMappingURL=anagram_challenge.js.map