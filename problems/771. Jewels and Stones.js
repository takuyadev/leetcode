/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    const jewelHashmap = {};
    let result = 0;

    for (let i = 0; i < jewels.length; i++) {
        const jewel = jewels[i];
        jewelHashmap[jewel] = true;
    }

    for (let i = 0; i < stones.length; i++) {
        const stone = stones[i];

        if (jewelHashmap[stone]) {
            result++;
        }
    }

    return result;
};