/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const result = new ListNode(-1);
  const bucket = [];
  let offset = 0;

  for (let i = 0; i < lists.length; i++) {
    let pointer = lists[i];

    while (pointer !== null) {
      offset = Math.min(offset, pointer.val);
      pointer = pointer.next;
    }
  }

  for (let i = 0; i < lists.length; i++) {
    let pointer = lists[i];

    while (pointer !== null) {
      const index = pointer.val - offset;

      if (!bucket[index]) {
        bucket[index] = 1;
      } else {
        bucket[index]++;
      }

      pointer = pointer.next;
    }
  }

  let pointer = result;

  for (let i = 0; i < bucket.length; i++) {
    if (typeof bucket[i] === "number") {
      for (let j = 0; j < bucket[i]; j++) {
        pointer.next = new ListNode(i + offset);
        pointer = pointer.next;
      }
    }
  }

  return result.next;
}
