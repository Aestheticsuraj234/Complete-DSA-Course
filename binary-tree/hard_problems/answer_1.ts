// *Print Root to Node Path in a Binary Tree
// *Problem Statement: Print Root to Node Path In A Binary Tree. Write a program to print path from root to a given node in a binary tree.

import { BinaryTREENode } from "../traversals/question_1";

function _PrintPath(
  root: BinaryTREENode<number> | null,
  path: number[],
  x: number
): boolean {
  if (root === null) return false;

  path.push(root.data);
  if (root.data === x) return true;

  if (_PrintPath(root.left, path, x) || _PrintPath(root.right, path, x))
    return true;

  path.pop();
  return false;
}


function PrintPath(root: BinaryTREENode<number> | null, x: number): number[] {
  let path: number[] = [];
  _PrintPath(root, path, x);
  return path;
}

let root = new BinaryTREENode(1);
root.left = new BinaryTREENode(2);
root.right = new BinaryTREENode(3);
root.left.left = new BinaryTREENode(4);
root.left.right = new BinaryTREENode(5);
root.right.left = new BinaryTREENode(6);
root.right.right = new BinaryTREENode(7);


console.log(PrintPath(root, 5));
console.log(PrintPath(root, 7));