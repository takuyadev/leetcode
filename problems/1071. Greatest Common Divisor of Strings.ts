// Did not figure out on my own.
// To find repeating pattern, keep recursing remainder until lowest remainder is found.

const gcd = (len1: number, len2: number): number => {
  while (len2 !== 0) {
    [len1, len2] = [len2, len1 % len2];
  }
  return len1;
};

function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 === str2 + str1) {
    return str1.slice(0, gcd(str1.length, str2.length));
  }

  return "";
}
