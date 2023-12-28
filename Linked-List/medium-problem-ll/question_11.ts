// Sort a LL of 0's 1's and 2's by changing links

// *1. Brute force approach

function sortList(head: any): any {
  let temp = head;
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;

  while (temp !== null) {
    if (temp.val === 0) count0++;
    else if (temp.val === 1) count1++;
    else count2++;
    temp = temp.next;
  }

  temp = head;
  while (temp !== null) {
    if (count0) {
      temp.val = 0;
      count0--;
    } else if (count1) {
      temp.val = 1;
      count1--;
    } else {
      temp.val = 2;
      count2--;
    }
    temp = temp.next;
  }
  return head;
}

// *2. Better Optimized approach

function sortList2(head: any): any {
  if (head === null || head.next === null) return head;

  let ZeroHead = new LNode(0);
  let OneHead = new LNode(0);
  let TwoHead = new LNode(0);

  let Zero = ZeroHead;
  let One = OneHead;
  let Two = TwoHead;

  let temp = head;

  while (temp !== null) {
    if (temp.val === 0) {
      Zero.next = temp;
      Zero = temp;
    } else if (temp.val === 1) {
      One.next = temp;
      One = temp;
    } else {
      Two.next = temp;
      Two = temp;
    }
    temp = temp.next;
  }

  Zero.next = OneHead.next ? OneHead.next : TwoHead.next;
  One.next = TwoHead.next;
  Two.next = null;
  let newHead = ZeroHead.next;

  return newHead;
}
