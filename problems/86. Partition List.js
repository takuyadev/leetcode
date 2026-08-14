/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {

  // Create two separate list and pointers
  let node1 = new ListNode();
  let node2 = new ListNode();
  let pointer1 = node1;
  let pointer2 = node2;

  // Create separate pointer for head, for traversing Linked List
  let pointer = head;

  while (pointer !== null) {
    if (pointer.val >= x) {
      pointer2.next = pointer;
      pointer2 = pointer2.next;
    } else {
      pointer1.next = pointer;
      pointer1 = pointer1.next;
    }

    // Without this temp swap,
    // ListNode will error out due to cycle issue
    const temp = pointer.next;
    pointer.next = null;
    pointer = temp;
  }

  // Attach the 2 nodes together
  // Note: Since it appends 0, just skip first number before appending
  pointer1.next = node2.next;

  // Same note as above, skip the 0 before returning
  return node1.next;
};
