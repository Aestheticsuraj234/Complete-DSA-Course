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
