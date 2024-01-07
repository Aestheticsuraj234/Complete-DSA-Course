// Level Order Traversal of a Binary Tree
// Problem Statement: Level order traversal of a binary tree. Given the root node of the tree and you have to print the value of the level of the node by level.

import { BinaryTREENode } from "./question_1";

class Queue<T> {
  data: T[] = [];
  push(item: T) {
    this.data.push(item);
  }
  pop() {
    return this.data.shift();
  }
  peek() {
    return this.data[0];
  }
  isEmpty() {
    return this.data.length == 0;
  }
    length() {
        return this.data.length;
    }
}

function LevelOrderTraversal<T>(root: BinaryTREENode<T> | null) {
  let queue = new Queue<BinaryTREENode<T>>();

  let wrapList = new Array<Array<T>>();

  if (root === null) return wrapList;

  queue.push(root);

  while(!queue.isEmpty())
  {
    let levelNum = queue.length();
    let subList = new Array<T>();
    for( let i = 0 ; i< levelNum ; i++)
    {
      if(queue.peek()!.left !== null)
      {
        queue.push(queue.peek()!.left!);
      }
      if(queue.peek()!.right !== null)
      {
        queue.push(queue.peek()!.right!);
      }
      subList.push(queue.pop()!.data);
    }

    wrapList.push(subList);
  }
    return wrapList;

}
