Certainly! Below is a set of comprehensive notes on Linked Lists, covering the basics, types, advantages, and implementation details. Each section is followed by example questions to reinforce the concepts.

---

## Linked Lists


### Basics of Linked Lists

#### What is a Linked List?

- A **linked list** is a linear data structure where elements are stored in nodes.
- Each node contains:
  - **Data:** The actual value or payload stored in the node.
  - **Next (or Link):** A reference (pointer) to the next node in the sequence.
- The last node typically points to `null`, indicating the end of the list.

#### Nodes

- **Node:** The basic building block of a linked list.
  - Contains data and a reference to the next node.
  
### Types of Linked Lists

#### 1. Singly Linked List

- Each node points to the next node.
- The last node's next reference is `null`.

   ```plaintext
   +---+    +---+    +---+    +---+
   | 1 | -> | 2 | -> | 3 | -> | 4 |
   +---+    +---+    +---+    +---+
   ```

#### 2. Doubly Linked List

- Each node has both next and previous references.
- The first node's previous reference is `null`, and the last node's next reference is `null`.

   ```plaintext
   +---+    +---+    +---+    +---+
   | 1 | <->| 2 | <->| 3 | <->| 4 |
   +---+    +---+    +---+    +---+
   ```

#### 3. Circular Linked List

- Similar to singly or doubly linked lists, but the last node points back to the first node.

   ```plaintext
   +---+    +---+    +---+    +---+
   | 1 | -> | 2 | -> | 3 | -> | 4 |
   +---+    +---+    +---+    +---+
    ^                           |
    +---------------------------+
   ```

### Advantages of Linked Lists

1. **Dynamic Size:**
   - Linked lists allow for dynamic memory allocation, suitable for scenarios with unknown size requirements.

2. **Efficient Insertions/Deletions:**
   - Adding/removing elements in the middle of a linked list involves updating references, leading to efficient operations.

3. **Memory Efficiency:**
   - Linked lists use memory only for the elements they contain, making them memory-efficient.

### Implementing Linked Lists

#### Node Class

```typescript
class Node<T> {
  data: T;
  next: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}
```

#### Singly Linked List Class

```typescript
class SinglyLinkedList<T> {
  head: Node<T> | null;

  constructor() {
    this.head = null;
  }

  append(data: T): void {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  display(): void {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
```

#### Example Usage

```typescript
const myList = new SinglyLinkedList<number>();

myList.append(1);
myList.append(2);
myList.append(3);

myList.display();
```

Output:

```plaintext
1
2
3
```

---

## Linked Lists - Example Questions

1. **Definition:**
   - What is a linked list? Explain its components.
   
2. **Singly vs. Doubly:**
   - Compare and contrast singly linked lists and doubly linked lists.

3. **Advantages:**
   - Discuss the advantages of using linked lists over arrays.

4. **Node Class:**
   - Describe the structure of a node in a linked list.
   
5. **Singly Linked List:**
   - Implement a singly linked list to represent the sequence: `1 -> 2 -> 3`.

6. **Doubly Linked List:**
   - Implement a doubly linked list to represent the sequence: `1 <-> 2 <-> 3`.

7. **Circular Linked List:**
   - Implement a circular linked list to represent the sequence: `1 -> 2 -> 3 -> 1`.

8. **Appending Nodes:**
   - Explain the process of appending nodes in a singly linked list.

9. **Memory Efficiency:**
   - Why are linked lists considered memory-efficient compared to arrays?

10. **Dynamic Size:**
    - How does a linked list accommodate scenarios with an unknown number of