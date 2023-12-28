// Delete the middle node of LL

// *1. Brute force approach

function deleteMid(head: any): any {
  if (head === null || head.next === null) return null;
  let temp = head;
  let n = 0;
  while (temp !== null) {
    n++;
    temp = temp.next;
  }

  let res = Math.floor(n / 2);
  temp = head;
  while (temp !== null) {
    res--;
    if (res === 0) {
      let middle = temp.next;
      temp.next = temp.next.next;
      break;
    }
    temp = temp.next;
  }
  return head;
}

// *2. Better Optimized approach

function deleteMid2(head: any): any {
  let slow = head;
  let fast = head;

  fast = fast.next.next;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  slow.next = slow.next.next;
  delete this.slow.next;
  return head;
}
