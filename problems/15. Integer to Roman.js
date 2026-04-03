// First solution, brute force all scenarios. I noticed that there was a pattern after about an hour of solving.

/**
 * @param {number} num
 * @return {string}
 */

const calculateHundreths = (num, point) => {
  return (num - (num % point)) / point;
};

var intToRoman = function (num) {
  let result = "";
  let currentSum = num;

  const thousandRemainder = calculateHundreths(currentSum, 1000);

  for (let i = 0; i < thousandRemainder; i++) {
    result += "M";
  }

  currentSum -= thousandRemainder * 1000;

  if (currentSum >= 900) {
    result += "CM";
    currentSum -= 900;
  } else if (currentSum <= 499 && currentSum >= 400) {
    result += "CD";
    currentSum -= 400;
  } else {
    const fiveHundredRemainder = calculateHundreths(currentSum, 500);
    for (let i = 0; i < fiveHundredRemainder; i++) {
      result += "D";
      currentSum -= 500;
    }

    const hundredRemainder = calculateHundreths(currentSum, 100);
    for (let i = 0; i < hundredRemainder; i++) {
      result += "C";
      currentSum -= 100;
    }
  }

  if (currentSum >= 90) {
    result += "XC";
    currentSum -= 90;
  } else if (currentSum <= 49 && currentSum >= 40) {
    result += "XL";
    currentSum -= 40;
  } else {
    const fiftyRemainder = calculateHundreths(currentSum, 50);
    for (let i = 0; i < fiftyRemainder; i++) {
      result += "L";
      currentSum -= 50;
    }

    const tenRemainder = calculateHundreths(currentSum, 10);
    for (let i = 0; i < tenRemainder; i++) {
      result += "X";
      currentSum -= 10;
    }
  }

  if (currentSum === 9) {
    result += "IX";
    currentSum -= 9;
  } else if (currentSum === 4) {
    result += "IV";
    currentSum -= 4;
  } else {
    const fiveRemainder = calculateHundreths(currentSum, 5);
    for (let i = 0; i < fiveRemainder; i++) {
      result += "V";
      currentSum -= 5;
    }

    const oneRemainder = calculateHundreths(currentSum, 1);
    for (let i = 0; i < oneRemainder; i++) {
      result += "I";
      currentSum -= 1;
    }
  }

  return result;
};

// Second solution, used one map and one list to iterate. (FYI I asked AI to make variables easier to understand, but the solution is same)
// Time complexity: O(1)
// Space complexity: O(1)

const INTEGER_TO_ROMAN_MAP = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

// Extract integer keys and sort descending (largest to smallest) so we greedily
// match the biggest Roman numeral symbols first (e.g. 1000 before 900 before 500...)
const DESCENDING_INTEGER_KEYS = Object.keys(INTEGER_TO_ROMAN_MAP).reverse();

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let romanResult = "";
  let remaining = num;

  for (let i = 0; i < DESCENDING_INTEGER_KEYS.length; i++) {
    const divisor = DESCENDING_INTEGER_KEYS[i];

    // Find how much of `remaining` cannot be covered by this divisor
    const leftover = remaining % divisor;

    // Isolate the portion of `remaining` that IS divisible by this divisor
    const divisiblePortion = remaining - leftover;

    // How many times does this Roman numeral symbol fit into the remaining value?
    // Ex. divisiblePortion=3000, divisor=1000 → repeatCount=3 → "MMM"
    const repeatCount = divisiblePortion / divisor;

    // Append the Roman numeral symbol repeatCount times
    for (let j = 0; j < repeatCount; j++) {
      romanResult += INTEGER_TO_ROMAN_MAP[divisor];
    }

    // Deduct the handled portion before moving to the next smaller symbol
    remaining -= divisiblePortion;
  }

  return romanResult;
};