// *Post-Order Traversal Of Binary Tree
// *Problem Statement: Postorder Traversal of a binary tree. Write a program for the postorder traversal of a binary tree.

import { BinaryTREENode } from "./question_1";
import { Stack } from "./question_3";

// * Postorder traversal of a binary tree🌳 ( recursive ) (left , right , root)

function PostOrderTraversal<T>(root: BinaryTREENode<T> | null) {
  if (root === null) return;

  PostOrderTraversal(root.left);
  PostOrderTraversal(root.right);
  console.log(root.data);
}

// * Postorder traversal of a binary tree🌳 ( iterative ) (left , right , root)
// ?2 stacks approach

function PostOrderTraversalIterative<T>(root: BinaryTREENode<T> | null) {
  let postOrder = new Array<T>();
  let stack1 = new Stack<BinaryTREENode<T>>();
  let stack2 = new Stack<BinaryTREENode<T>>();

  stack1.push(root!);

  while (!stack1.isEmpty()) {
    root = stack1.pop()!;
    stack2.push(root);
    if (root.left !== null) {
      stack1.push(root.left);
    }
    if (root.right !== null) {
      stack1.push(root.right);
    }
  }

  while (!stack2.isEmpty()) {
    root = stack2.pop()!;
    postOrder.push(root.data);
  }
  return postOrder;
}

// ?1 stack approach

function PostOrderTraversalIterative1<T>(root: BinaryTREENode<T> | null) {
  let postOrder = new Array<T>();
  let stack = new Stack<BinaryTREENode<T>>();
  let curr = root;

  while (curr !== null || !stack.isEmpty()) {
    if (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    } else {
      let temp = stack.peek()!.right;
      if (temp === null) {
        temp = stack.pop()!;
        postOrder.push(temp.data);
        while (!stack.isEmpty() && temp === stack.peek()!.right) {
          temp = stack.pop()!;
          postOrder.push(temp.data);
        }
      } else {
        curr = temp;
      }
    }
  }
  return postOrder;
}
