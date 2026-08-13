/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  let slow = head;
  let fast = head.next;

  // 1. Find middle of the loop
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 2. "Cuts off" first portion of Linked List.
  let second = slow.next;
  let prev = null;
  slow.next = null;

  // Expected behaviour after of below while loop:
  // [] [3, 4, 5, 6]
  // [3], [4, 5, 6]
  // [4, 3], [5, 6]
  // [5, 4, 3], [6]
  // [6, 5, 4, 3], []

  while (second !== null) {
    // 2a. Grab the next value, before terminating current connection to next value
    const tmp = second.next;

    // 2b. Next value, should be going to previous value.
    // 2bi. In the case of the first loop, it will be null, because we are reversing order, and head will become tail.
    // 2bii. In the case of subsequent loops, it will equal to previous value.
    second.next = prev;

    // 2c. Preserve value from current iteration. 
    prev = second;

    // 2d. To iterate while loop, second will iterate through Linked List until nothing is found next.
    // 2di. Note that tmp = second.next. If second.next is not available (ex. [5, 4, 3], [6] -> [6, 5, 4, 3], []), stop.
    second = tmp;
  }

  // 3. Reorder LinkedList, using non-reversed and reversed Linked List
  let first = head;
  second = prev;

  while (second !== null) {
    const tmp1 = first.next;
    const tmp2 = second.next;
    first.next = second;
    second.next = tmp1;
    first = tmp1;
    second = tmp2;
  }
};
