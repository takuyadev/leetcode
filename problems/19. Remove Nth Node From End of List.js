/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let tail = head;
  let length = 1;

  // 1. Get length of the entire Linked List.
  while (tail !== null && tail.next !== null) {
    tail = tail.next;
    length++;
  }

  let pointer = head;
  let prev = null;
  let index = 1;

  // 2. Determine target
  const target = (length - n) + 1;

  // 3. Iterate through Linked List again, and stop when target found.
  while (pointer !== null) {
    if (target === index) {
      // 3a. If previous node is in cache, update previous pointer to current.next
      if (prev) {
        prev.next = pointer.next;
      } else {
        // 3b. Else, simply update head to pointer.next to remove head from Linked List
        head = pointer.next;
      }

      return head;
    }

    prev = pointer;
    pointer = pointer.next;
    index++;
  }

  return head;
}
