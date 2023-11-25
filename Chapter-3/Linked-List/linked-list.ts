// Implementing the LinkedList

// !here we are  making a class of Node which will have two properties 1. data 2. next
class Nodes<T> {
  public data: any;
  public next: Node | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

// ?1.Linked List Insertion-INSERTING A IN THE LINKED LIST AS PER THE rEQUIREMENT
// TODO: Insertion at the beginning of the linked list✅
// TODO: Insertion at the end of the linked list✅
// TODO: Insertion at the given position of the linked list

// !Here we are making a class of SinglyLinkedList which will have two properties 1. head 2. size
class SinglyLinkedList<T> {
  public head: Nodes<T> | null;
  public size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  // TODO:Insert at the beginning of the linked list
  //   *create a new node
  //  *check if the head is null or not
  // *if head is null then assign the new node to head
  // *else assign the new node to the head and assign the head to the next of the new node
  // *increase the size of the linked list
  // TIME COMPLEXITY: O(1)
  // SPACE COMPLEXITY: O(1)

  public insertAtBeginning(data: T) {
    let newNode = new Nodes(data);
    // @ts-ignore
    newNode.next = this.head;
    this.head = newNode;
  }

  // TODO: INSERT AT THE END OF THE LINKED LIST
  // *create a new node
  // *check if the head is null or not
  // *if head is null then assign the new node to head
  // *else traverse the linked list till the end and assign the new node to the next of the last node
  // *increase the size of the linked list
  // TIME COMPLEXITY: O(n)
  // SPACE COMPLEXITY: O(1)
  public insertAtEnd(data: T) {
    // 1. allocate the newNode;
    let newNode = new Nodes(data);

    // check if our linked is empty if yes then insert this new Node at the head
    if (!this.head) {
      this.head = newNode;
    }

    // Now our newNode is pointing to the null;
    newNode.next = null;

    var temp = this.head;
    // else check our current node is pointing ot null or not
    //  @ts-ignore
    while (temp !== null) temp = temp.next;
    // @ts-ignore
    temp.next = newNode;
    return;
  }

  //   TODO: INSERT AT THE GIVEN POSITION OF THE LINKED LIST
  // *create a new node
  // *check if the head is null or not
  // *if head is null then assign the new node to head

  insertInMiddle(after: number, data: number): void {
    let newNode = new Nodes(data);
    let current = this.head;

    while (current && current.data !== after) {
      // @ts-ignore
      current = current.next;
    }

    if (!current) {
      console.log("Element not found");
      return;
    }
    newNode.next = current.next;
    // @ts-ignore
    current.next = newNode;
  }
}
