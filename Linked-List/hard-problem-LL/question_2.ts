// Rotate a Linked List
// In this article, we will solve the problem: “Rotate a Linked List”

// Problem Statement: Given the head of a linked list, rotate the list to the right by k places.

class Nodes {
  num: number;
  next: Nodes | null;

  constructor(a: number) {
    this.num = a;
    this.next = null;
  }
}

class TUF {
  // utility function to insert Nodesin the list
  static insertNode(head: Nodes | null, val: number): Nodes {
    const newNodes = new Node(val);
    if (head === null) {
      return newNode;
    }

    let temp = head;
    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = newNode;
    return head;
  }

  // Function to rotate the list to the right by k places
  static rotateList(head: Nodes | null, k: number): Nodes | null {
    if (head === null || head.next === null || k === 0) {
      return head;
    }

    let temp: Nodes | null = head;
    let len = 1;

    while (temp.next !== null) {
      len++;
      temp = temp?.next;
    }

    // Lln the head;
    temp.next = head;
    k = k % len;
    let end = k - len;
    while (end-- !== 0) {
      temp = temp!.next;
    }
    //breaking last node link and pointing to NULL
    head = temp!.next;
    temp!.next = null;

    return head;
  }

  // utility function to print the list
  static printLinkedList(head: Nodes | null): void {
    while (head !== null && head.next !== null) {
      console.log(head.num + "->");
      head = head.next;
    }
    if (head !== null) {
      console.log(head.num);
    }
  }

  public static main(): void {
    let head: Nodes | null = null;
    const k = 3;
    head = TUF.insertNode(head, 1);
    head = TUF.insertNode(head, 2);
    head = TUF.insertNode(head, 3);
    head = TUF.insertNode(head, 4);
    head = TUF.insertNode(head, 5);
    head = TUF.insertNode(head, 6);
    head = TUF.insertNode(head, 7);
    head = TUF.insertNode(head, 8);

    console.log("Original Linked List: ");
    TUF.printLinkedList(head);
    console.log("After Reversal of k nodes: ");
    const newHead = TUF.reverseKNodes(head, k);
    TUF.printLinkedList(newHead);
  }
}

// Run the program
TUF.main();
