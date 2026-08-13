/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// Time compelxity: o(N)
// Space compleixty: o(1)
// Uses fast and slow cycle, there will always come a point if fast cycle (two steps at a time) will reach slow pointer (one step),
// ... because if it does loop, then it will reach the same point as slow pointer.
// Note: References can be equal to each other, but different memory addresses cannot be equal to each other.
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head) return false;

  let fast = head
  let slow = head;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};


// Time complexity: o(n)
// Space complexity: o(n)
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCucle = (head) => {
  const seen = new Set();
  let curr = head;

  while (curr !== null) {
    if (seen.has(curr)) {
      return true;
    }

    seen.add(curr);
    curr = curr.next;
  }

  return false;
}
