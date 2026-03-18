/**
 * @param {string} s
 * @return {boolean}
 */

// This is pretty simple. I was able to solve this in about 15-20min.
// We want setup a parantheses map first. This will check the pairs.
// If a valid parantheses was found, then push into the according right parantheses into the queue or stack. We will run this logic until a right bracket is found.
// Now, if a non left-bracket string was found, check the latest addition in the queue, as that will indicate the matching right bracket.
// If the last added parantheses is not a match, then return false, otherwise pop out the last added parantheses as we have found the match.

const paranthesesMap = {
  "(": ")",
  "{": "}",
  "[": "]",
};

var isValid = function (s) {
  const queue = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (paranthesesMap[char]) {
      queue.push(paranthesesMap[char]);
      continue;
    }

    if (queue[queue.length - 1] === char) {
      queue.pop();
    } else {
      return false;
    }
  }

  return queue.length === 0;
};

// We could also do this without map and rely solely on stack length.
// If a pair is found, then pop. Otherwise, keep pushing, and if the stack is empty at the end, then it is valid.

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (stack.length) {
      const last = stack[stack.length - 1];
      if (isPair(last, cur)) {
        stack.pop();
        continue;
      }
    }
    stack.push(cur);
  }

  return stack.length === 0;
};

var isPair = function (last, cur) {
  return (
    (last === "(" && cur === ")") ||
    (last === "{" && cur === "}") ||
    (last === "[" && cur === "]")
  );
};
