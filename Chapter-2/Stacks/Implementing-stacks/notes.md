# Implementing Stacks in TypeScript

## Stack Data Structure

A stack is a LIFO (Last In, First Out) data structure, which means that the last element added to the stack is the first one to be removed. Stacks are commonly used for implementing undo/redo functionality, parsing expressions, and backtracking algorithms.

## Key Characteristics of Stacks:

- LIFO (Last In, First Out) order: Elements are added and removed from the top of the stack.
- Limited Access: Only the top element of the stack can be directly accessed.
- Stacks can grow or shrink as elements are added or removed.

## Operations on Stacks

Common operations performed on stacks include

- Push: Adds an element to the top of the stack.
- Pop: Removes the top element from the stack and returns it.
- Peek: Returns the top element of the stack without removing it.
- IsEmpty: Checks if the stack is empty.
- Size: Returns the current size of the stack.

# Creating a Stack in TypeScript

There are two common ways to implement stacks in TypeScript: using arrays or linked lists.

**Implementing a Stack using an Array:**

Here's an example of implementing a stack using an array:

```typescript
class Stack<T> {
  private data: T[] = [];

  public push(item: T): void {
    this.data.push(item);
  }

  public pop(): T | null {
    if (this.data.length === 0) {
      return null;
    }

    return this.data.pop();
  }

  public peek(): T | null {
    if (this.data.length === 0) {
      return null;
    }

    return this.data[this.data.length - 1];
  }

  public isEmpty(): boolean {
    return this.data.length === 0;
  }

  public size(): number {
    return this.data.length;
  }
}
```

**Implementing a Stack using a Linked List:**

Here's an example of implementing a stack using a linked list:

```typescript
class Node<T> {
  public value: T;
  public next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class StackLL<T> {
  private head: Node<T> | null;

  public push(item: T): void {
    const newNode = new Node(item);
    newNode.next = this.head;
    this.head = newNode;
  }

  public pop(): T | null {
    if (this.head === null) {
      return null;
    }

    const poppedValue = this.head.value;
    this.head = this.head.next;
    return poppedValue;
  }

  public peek(): T | null {
    if (this.head === null) {
      return null;
    }

    return this.head.value;
  }

  public isEmpty(): boolean {
    return this.head === null;
  }

  public size(): number {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      count++;
      current = current.next;
    }

    return count;
  }
}
```

These examples demonstrate the basic implementation of stacks using arrays and linked lists in TypeScript. The choice of implementation depends on the specific requirements of the application. Arrays offer faster access and insertion, while linked lists provide better memory management when frequent insertions and deletions are required.
