// Add two numbers represented as Linked Lists
// Problem Statement: Given the heads of two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class Solution {
  addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy: ListNode = new ListNode(); // dummy node which will be the head of the new linked list
    let temp = dummy; // temp node to traverse the new linked list
    let carry = 0; // carry to store the carry value
    while (l1 !== null || l2 !== null || carry) {
      let sum: number = 0;
      if (l1 !== null) {
        sum += l1.val;
        l1 = l1.next;
      }
      if (l2 !== null) {
        sum += l2.val;
        l2 = l2.next;
      }
      sum += carry;
      carry = Math.floor(sum / 10);
      const node: ListNode = new ListNode(sum % 10);
      temp.next = node;
      temp = temp.next;
    }
    return dummy.next;
  }
}

const obj = new Solution(); 
const head1 = new ListNode(2);
head1.next = new ListNode(4);
head1.next.next = new ListNode(3);
const head2 = new ListNode(5);

console.log(obj.addTwoNumbers(head1, head2));

