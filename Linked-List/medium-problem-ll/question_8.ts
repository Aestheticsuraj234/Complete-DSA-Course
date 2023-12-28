// Segrregate odd and even linked List

class LNode {
  val: number;
  next: Node | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

// 1. brute force approach

function segregateOddEven(head: any): any {
  let arr: number[] = [];
  let temp = head;

  if (head === null && head.next === null) return head;

  while (temp !== null && temp.next !== null) {
    arr.push(temp.val);
    temp = temp.next.next;
  }
  if (temp) arr.push(temp.val);
  temp = head?.next;
  while (temp !== null && temp.next !== null) {
    arr.push(temp.val);
    temp = temp.next.next;
  }
  let i = 0;
  temp = head;
  while (temp != null) {
    temp.next = arr[i];
    i++;
    temp = temp.next;
  }
  return head;
}

// time complexity: O(2n) => O(n)
// space complexity: O(n)

// 2. Using Better Optimized Approach

function segregateOddEven2(head: any): any {
  if (head === null && head.next === null) return head;
  let even = head.next;
  let odd = head;
  let evenHead = even;

  while (even !== null && even.next !== null) {
    odd.next = odd.next.next;
    even.next = even.next.next;

    odd = odd.next;
    even = even.next;
  }

  odd.next = evenHead;
  return head;
}
