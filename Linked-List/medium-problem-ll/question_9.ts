// *Remove N-th node from the end of a Linked List

// *Problem Statement: Given a linked list, and a number N. Find the Nth node from the end of this linked list and delete it. Return the head of the new modified linked list.

// better Approach

function removeNthFromEnd(head: any, n: number): any {
  let start = new LNode(0);
  start.next = head;
  let slow = start;
  let fast = start;

  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  while (fast && fast.next !== null) {
    fast = fast.next;
    slow = slow?.next || null;
  }

  if (slow && slow.next !== null) {
    slow.next = slow.next.next;
  }
  return start.next;
}
