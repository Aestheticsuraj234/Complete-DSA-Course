// Reverse a Linked List
// Problem Statement: Problem Statement: Given the head of a singly linked list, write a program to reverse the linked list, and return the head pointer to the reversed list.

// Solution #1 - iteratively

function IReverseLinkedList(
  head: MyNode<number> | null
): MyNode<number> | null {
  let temp = head;
  let prev = null;
  while (temp !== null) {
    let front = temp.next;
    temp.next = prev;
    prev = temp;
    temp = front;
  }
  return prev;
}

// solution #2 - recursively

function ReverseLinkedList(head: MyNode<number> | null): MyNode<number> | null {
  if (head === null || head.next) {
    return head;
  }
  let newHead = ReverseLinkedList(head.next);
  let front = head.next;
  front.next = head;
  head.next = null;
  return newHead;
}
