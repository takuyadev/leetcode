// Was able to do it within 20min, but pretty bad solution with hashmap, not two pointer. I was not able to solve two pointer solution.

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = '';
    let hashmap = {};
    let wordCount = 0
    const trimmedString = s.trim(); 

    for (let i = 0; i < trimmedString.length; i++) {
        if (trimmedString[i] === ' ') {
            if (trimmedString[i - 1] !== ' ') {
                wordCount++
            }

            continue;
        }

        if (!hashmap[wordCount]) {
            hashmap[wordCount] = trimmedString[i]
        } else {
            hashmap[wordCount] += trimmedString[i]
        }
    }

    for (let i = wordCount; i >= 0; i--) {
        result += hashmap[i]

        if (i !== 0) {
            result += ' '
        }
    }
    
    return result;
};

// Two pointer solution, just take leftIndex and swap it with right index after trimming

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(' ').filter(word => word !== "");
    let leftIndex = 0
    let rightIndex = words.length - 1

    while (leftIndex < rightIndex) {
        const memoLeft = words[leftIndex];
        words[leftIndex] = words[rightIndex];
        words[rightIndex] = memoLeft;
        leftIndex++;
        rightIndex--;
    }

    return words.join(' ') 
};


