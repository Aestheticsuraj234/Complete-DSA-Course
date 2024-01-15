import { BinaryTREENode } from "../traversals/question_1";

// Zig Zag Traversal Of Binary Tree
// Problem Statement: Given the root of a binary tree, return the zigzag level order traversal of Binary Tree. (i.e., from left to right, then right to left for the next level and alternate between).
class Queue<T> {
  private data: T[] = [];
  push = (item: T) => this.data.push(item);
  pop = (): T | undefined => this.data.shift();
  peek = (): T | undefined => this.data[0];
  size = (): number => this.data.length;
  isEmpty = (): boolean => this.data.length === 0;
}

function ZigZagLevelOrder(root: BinaryTREENode<number>) {
  let queue = new Queue<BinaryTREENode<number>>();
  let wrapList = new Array<Array<number>>();

  if (!root) return wrapList;

  queue.push(root);
  let flag = true;
  while (!queue.isEmpty()) {
    let levelNum = queue.size();
    let subList = new Array<number>();
    for (let i: number = 0; i < levelNum; i++) {
      let index = i;
      if (queue.peek()?.left !== null) queue.push(queue.peek()?.left!);
      if (queue.peek()?.right !== null) queue.push(queue.peek()?.right!);
      if (flag === true) subList.push(queue.pop()!.data);
      else subList.unshift(queue.pop()!.data);
    }
    flag = !flag;
    wrapList.push(subList);
  }
  return wrapList;
}

// Example Usage:
// Create binary tree
const tree = new BinaryTREENode(1);
tree.left = new BinaryTREENode(2);
tree.right = new BinaryTREENode(3);
tree.left.left = new BinaryTREENode(4);
tree.left.right = new BinaryTREENode(5);
tree.right.left = new BinaryTREENode(6);
tree.right.right = new BinaryTREENode(7);

// Check if the trees are identical
const result = ZigZagLevelOrder(tree);
console.log(result); // Output: [[1], [3, 2], [4, 5, 6, 7]]