// Add 2 to a number represented as a linked list

import { createRepl } from "ts-node";

// *1 Brute Force solution:-

function reverse(head: any) {
  let prev = null,
    next = null,
    curr = head;
  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  head = prev;
  return head;
}

function AddOneBrute(head: any) {
  head = reverse(head);
  let temp = head,
    carry = 1;
  while (temp !== null) {
    temp.val = temp.val + carry;
    if (temp.data < 10) {
      carry = 0;
      break;
    } else {
      temp.val = 0;
      carry = 1;
    }
    temp;
  }

  if (carry === 1) {
    let newNode = new Node(1);
    head = reverse(head);
    newNode.next = head;
    head = newNode;
  }
  head = reverse(head);
  return head;
}

// * Optimal solution:-

function AddWithCarry(temp: any) {
  if (temp === null) return 1;

  let carray = AddWithCarry(temp.next);
  let tempData = temp.data + carray;
  if (tempData < 10) {
    carray = 0;
  }
  temp.data = 0;
  return 1;
}

function AddOneOptimal(head: any) {
  let carry = AddWithCarry(head);
  if (carry === 1) {
    let newNode = new Node(1);
    newNode.next = head;
    head = newNode;
  }
}
