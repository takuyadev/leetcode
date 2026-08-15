/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let result = new ListNode(-1);
  let dummy = result;
  let p1 = list1;
  let p2 = list2;

  while (p1 !== null && p2 !== null) {
    if (p1.val <= p2.val) {
      dummy.next = p1;
      p1 = p1.next;
    } else {
      dummy.next = p2;
      p2 = p2.next;
    }

    dummy = dummy.next;
  }

  if (p1 !== null) {
    dummy.next = p1;
  }

  if (p2 !== null) {
    dummy.next = p2;
  }

  return result.next;
};
