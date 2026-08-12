
class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    // 1. If strs is empty array, then return empty string.
    if (!strs.length) {
      return ""
    }

    let encoded = "";
    const sizes = [];

    // 2a. Start encode process, first process how large each word is in sentence.
    for (let i = 0; i < strs.length; i++) {
      sizes.push(strs[i].length);
    }

    // 2b. Push sizes as part as the encode process.
    for (let i = 0; i < sizes.length; i++) {
      encoded += `${sizes[i]},`;
    }

    // 3. Append #, to indicate start of encoded sentence, and append sentence to encoded string
    encoded += "#,";
    encoded += strs.join("");
    return encoded;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    // 1. If strs is empty string, based on error case in encode().
    if (!str) {
      return []
    }

    const decoded = [];
    const sizes = [];

    // 2a. Split string into array via ",", to follow what we encoded.
    const splitStr = str.split(",");

    // 2b. Find initial position of encoded sentence.
    const encodeIndex = str.indexOf('#') + 2;

    // 3. Decode string size as we encoded in first function
    for (const string of splitStr) {
      if (string === "#") break;
      sizes.push(Number(string));
    }

    let offset = 0;

    // 4. Start decode process.
    for (const size of sizes) {
      // 4a. For every size, initiate decode process for word
      let word = "";

      // 4b. Based off of offset, encodeIndex, current index..
      // ... Decode each letter, and append to current decoded string
      for (let j = 0; j < size; j++) {
        word += str[encodeIndex + offset + j];

        if (j === size - 1) {
          // 4c. Offset is updated, so that next word is selected instead of first word
          offset += size;
        }
      }

      // 4c. Push final decoded word to array
      decoded.push(word);
    }

    return decoded;
  }
}
