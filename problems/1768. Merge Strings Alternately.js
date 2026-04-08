// Solved in about 3mins. Very easy just keep track via result string and alternately add to result.

function mergeAlternately(word1, word2) {
  let result = "";
  let wordOneIndex = 0;
  let wordTwoIndex = 0;

  while (word1[wordOneIndex] || word2[wordTwoIndex]) {
    if (word1[wordOneIndex]) {
      result += word1[wordOneIndex];
    }

    if (word2[wordTwoIndex]) {
      result += word2[wordTwoIndex];
    }

    wordOneIndex++;
    wordTwoIndex++;
  }

  return result;
}
