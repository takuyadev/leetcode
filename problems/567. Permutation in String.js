/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

function isEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

var checkInclusion = function (s1, s2) {
    // If s1 is longer than s2, then s1 will never be found in s2
    if (s1.length > s2.length) {
        return false;
    }

    const s1CountMap = {};
    const s2CountMap = {};

    // Loop through two arrays at once to prepare 
    for (let i = 0; i < s1.length; i++) {
        s1CountMap[s1[i]] = (s1CountMap[s1[i]] || 0) + 1;
        s2CountMap[s2[i]] = (s2CountMap[s2[i]] || 0) + 1;
    }

    // If already found equal between s1.length, already true.
    if (isEqual(s1CountMap, s2CountMap)) {
        return true;
    }

    // Fixed width sliding window, which means we don't need a while loop or anything.
    // We want to compare two objects later. We will track if character map, and return true once s1Map and s2Map are the same.
    for (let i = s1.length; i < s2.length; i++) {
        // Increment current pointer
        s2CountMap[s2[i]] = (s2CountMap[s2[i]] || 0) + 1;
        
        // Decrement previous count
        s2CountMap[s2[i - s1.length]]--;

        // Delete previous number if less or equal to 0 for equal check later on.
        if (s2CountMap[s2[i - s1.length]] <= 0) {
            delete s2CountMap[s2[i - s1.length]]
        }

        // Do equal check against two object map
        if (isEqual(s1CountMap, s2CountMap)) {
            return true;
        }
    }

    return false;
};