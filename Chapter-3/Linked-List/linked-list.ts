// Implementing the LinkedList

class Nodes<T> {
  public data: T;
  public next: Nodes<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList<T> {
  public head: Nodes<T> | null;
  public size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  public insertAtBeginning(data: T) {
    let newNodes = new Nodes(data);
    newNodes.next = this.head;
    this.head = newNodes;
  }

  public insertAtEnd(data: T) {
    let newNodes = new Nodes(data);

    if (!this.head) {
      this.head = newNodes;
      return;
    }

    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = newNodes;
  }

  insertInMiddle(after: T, data: T): void {
    //
    let newNodes = new Nodes(data);
    let temp = this.head;

    while (temp !== null && temp.data !== after) {
      temp = temp.next;
    }

    if (!temp) {
      console.log("Element not found");
      return;
    }

    newNodes.next = temp.next;
    temp.next = newNodes;
  }

  // !Search an element in a Linked List (Iterative and Recursive)

  // *Iterative searching in a Linked List.

  searchIterative(target: T): boolean {
    let temp = this.head;
    while (temp !== null) {
      if (temp.data === target) {
        return true;
      }

      temp = temp.next;
    }
    return false;
  }

  // *Recursive searching in a Linked List.

  searchRecursive(temp: Nodes<T> | null, target: T): boolean {
    if (temp === null) {
      return false;
    }

    if (temp.data === target) {
      return true;
    }

    return this.searchRecursive(temp.next, target);
  }

  // *Find the length of the linked list (Recursive);
  public findLengthRecursively(temp: Nodes<T> | null): number {
    if (temp === null) {
      return 0;
    }

    return 1 + this.findLengthRecursively(temp.next);
  }

  // *Find the length of the linked list (Iterative);

  public findLengthIterative(): number {
    let temp = this.head;
    let count = 0;

    while (temp !== null) {
      count++;
      temp = temp.next;
    }
    return count;
  }

  public reverseIteratively() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current !== null) {
      // @ts-ignore
      next = current.next;
      current.next = prev;
      // @ts-ignore
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  public reverseRecursively(
    node: Nodes<T> | null = this.head
  ): Nodes<T> | null {
    if (node === null || node.next === null) {
      this.head = node;
      return node;
    }

    const rest = this.reverseRecursively(node.next);
    node.next.next = node;
    node.next = null;

    return rest;
  }
}

// Implementation of the LinkedList

let linkedList = new SinglyLinkedList<number>();

linkedList.insertAtBeginning(1);
linkedList.insertAtBeginning(2);
linkedList.insertAtBeginning(3);

const lengths = linkedList.findLengthRecursively(linkedList.head);
console.log(lengths);

const length2 = linkedList.findLengthIterative();
console.log(length2);

// Deleting a linked list from a given position;

// *Deleting a node from the beginning of the linked list.

const deleteFromBeginning = (
  head: Nodes<number> | null
): Nodes<number> | null => {
  if (head === null) {
    return null;
  }
  const current = head;
  head = head.next;
  current.next = null;
  return head;
};

const deletedNode = deleteFromBeginning(linkedList.head);
console.log(deletedNode);

// *Deleting a node from the end of the linked list.

const deleteFromEnd = (head: Nodes<number> | null): Nodes<number> | null => {
  // Check if the linked list is empty
  if (head === null) {
    return null;
  }
  // Initialize two pointers: current and previous
  let current = head;
  let previous = null;
  // Traverse to the last node of the linked list
  while (current.next !== null) {
    //  @ts-ignore
    // Move the previous pointer to the current node
    previous = current;
    //  Move the current pointer to the next node
    current = current.next;
  }
  // Break the link from the previous node to the last node (current)
  // @ts-ignore
  previous.next = null;

  // Return the head of the modified linked list
  return head;
};


// *Deleting a node from the middle of the linked list.

const deleteFromMiddle = (head: Nodes<number>, targetValue: number): Nodes<number> | null => {
  if (head === null) {
    return null;
  }

  // Initialize two pointers: slow and fast
  let slow = head;
  let fast = head;
  let previous = null;

  // Move fast pointer twice as fast as slow pointer
  while (fast !== null && fast.next !== null) {
    
    previous = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // Check if the target value is found in the middle
  if (slow && slow.value === targetValue) {
    // If the node to be deleted is the head
    if (previous === null) {
      return head.next;
    }

    // Bypass the node to be deleted
    previous.next = slow.next;

    // Return the head of the modified linked list
    return head;
  }

  // Return the original linked list if the target value is not found
  return head;
};




/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // Create a dummy head node to represent the head of the result linked list.
  let dummyHead = new ListNode();
  let resultCurrent = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
      const digitl1 = l1 ? l1.val : 0;
      const digitl2 = l2 ? l2.val : 0;

      // Calculate the sum and carry
      const sum = digitl1 + digitl2 + carry;
      carry = Math.floor(sum / 10);

      // Create a new node with the current digit and append it to the result linked list
      resultCurrent.next = new ListNode(sum % 10);
      resultCurrent = resultCurrent.next;

      // Move to the next nodes in l1 and l2 if they exist
      if (l1 !== null) l1 = l1.next;
      if (l2 !== null) l2 = l2.next;
  }

  // The dummyHead.next represents the actual head of the result linked list
  return dummyHead.next;
}


