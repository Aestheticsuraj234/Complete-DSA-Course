// Insert Node at beginning of Linked List
// Problem Statement: For a given Singly LinkedList, insert a node at the beginning of the linked list.

class ListNode {
    val: number;
    next: ListNode | null;
  
    constructor(x: number) {
      this.val = x;
      this.next = null;
    }
  }
  
  class TUF {
    static PrintList(head: ListNode | null): void {
      let curr: ListNode | null = head;
      for (; curr !== null; curr = curr.next) {
        console.log(curr.val + "-->");
      }
      console.log("null");
    }
  
    static InsertAtFirst(value: number, head: ListNode | null): ListNode {
      // Step 1: creating a new Node with the given val
      const newNode: ListNode = new ListNode(value);
  
      // Step 2: Making next of the newly created Node point to the head of LinkedList
      newNode.next = head;
  
      // Making the newly created Node the head
      head = newNode;
      return head;
    }

    static Delete(head:ListNode){
       // Check if the linked list is empty or has only one node
    if (head === null || head.next === null) {
        return null;
    }

    // Create a temporary pointer for traversal
    let temp = head;

    // Traverse the list until the second-to-last node
    while (temp?.next?.next !== null) {
        // @ts-ignore
        temp = temp.next;
    }

    // Nullify the connection from the second-to-last node to delete the last node
    temp.next = null;

    // Return the updated head of the linked list
    return head;
    }

    static lengths(head: ListNode | null): number {
        let length = 0;
        let curr: ListNode | null = head;
        while (curr !== null) {
          length++;
          curr = curr.next;
        }
        return length;
    }

    static search(head: ListNode | null, target: number): boolean {
        let curr: ListNode | null = head;
        while (curr !== null) {
          if (curr.val === target) {
            return true;
          }
          curr = curr.next;
        }
        return false;
    }
  
    static main(): void {
      let head: ListNode | null = null; // head of the LinkedList
      head = TUF.InsertAtFirst(40, head);
      head = TUF.InsertAtFirst(30, head);
      head = TUF.InsertAtFirst(20, head);
      head = TUF.InsertAtFirst(10, head);
        TUF.Delete(head);
      console.log("LinkedList before inserting 0 at the beginning : ");
      TUF.PrintList(head);
  
      head = TUF.InsertAtFirst(0, head);
  
      console.log("LinkedList after inserting 0 at the beginning : ");
      TUF.PrintList(head);
    }
  }
  
  // Run the main function
  TUF.main();
  