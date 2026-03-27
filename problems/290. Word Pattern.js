// Solved this about 30min. I noticed this needed to use bi-direcitonal based on isomorphic, so thought the logic would be similar.

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const map = new Map();
    const map2 = new Map();
    const splitStr = s.split(' ');

    // Each letter represents a word, so if the length doesn't match then it's incorrect
    if (pattern.length !== splitStr.length) {
        return false;
    }

    for (let i = 0; i < pattern.length; i++) {
        // Bidirectional check, return false if one direction fails word check
        if (
            (map.get(pattern[i]) && map.get(pattern[i]) !== splitStr[i]) ||
            (map2.get(splitStr[i]) && map2.get(splitStr[i]) !== pattern[i])
        ) {
            return false;
        }

        // If both above check passes, then we can safely add them into bi-directional map
        map.set(pattern[i], splitStr[i]);
        map2.set(splitStr[i], pattern[i]);
    }

    return true;
};