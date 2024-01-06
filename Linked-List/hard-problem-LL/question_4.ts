// Clone Linked List with Random and Next Pointer
// In this article we will solve the most asked coding interview problem “Clone Linked List”.

// Problem Statement: Given a Linked list that has two pointers in each node and one of which points to the first node and the other points to any random node. Write a program to clone the LinkedList.
class NodeWithRandom {
  data: number | null;
  next: NodeWithRandom<number | null>;
  random: NodeWithRandom<number | null>;

  constructor(data: number | null) {
    this.data = data;
    this.next = null;
    this.random = null;
  }
}

// 1. *Optimized Approach:* The idea is to use Pointer and make copy node. Below is algorithm.

function clone(
  head: NodeWithRandom<number | null>
): NodeWithRandom<number | null> {
  if (head === null || head.next) return head;
  let itr = head;
  let front = head;

  //  *1. Create a copy of each node and insert it between current node and next node.
  while (itr !== null) {
    front = itr.next;
    let copy = new NodeWithRandom(itr.data);
    itr.next = copy;
    copy.next = front;
    itr = front;
  }
  // *2. Copy random pointers of all original nodes to corresponding nodes in copy list.
  itr = head;
  while (itr !== null) {
    if (itr.random !== null) {
      itr.next.random = itr.random.next; // itr.next is copy of itr
      itr = itr.next.next;
    }
  }

  // *3. Break the linked list and create a new copy list.

  itr = head;
  let psudoHead = new NodeWithRandom(0);
  let copy = psudoHead;
  while (itr !== null) {
    front = itr.next.next;
    copy.next = itr.next;
    itr.next = front;
    copy = copy.next;
    itr = itr.next;
  }

  return psudoHead.next;
}
