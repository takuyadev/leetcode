// Solved in about 40 min. 
// I got stuck on only using one array, but realized we need to check bidirectionally, so we need two maps to check both directions.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 
var isIsomorphic = function (s, t) {
    const mapOne = {};
    const mapTwo = {};

    for (let i = 0; i < s.length; i++) {
        // If both value does not exist, meaning it's a valid pair; we can continue after adding to map.
        if (!mapOne[s[i]] && !mapTwo[t[i]]) {
            mapOne[s[i]] = t[i];
            mapTwo[t[i]] = s[i];
            continue;
        }

        // Since previous check ensures that one of the value exists, we just need to check if both maps to see if they are pairs.
        if (mapOne[s[i]] !== t[i] && mapTwo[t[i]] !== s[i]) {
            return false;
        }
    }

    return true;
};