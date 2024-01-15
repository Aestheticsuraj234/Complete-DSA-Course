// Lowest Common Ancestor for two given Nodes
// Problem Statement: Given a binary tree, Find the Lowest Common Ancestor for two given Nodes (x,y).

import { BinaryTREENode } from "../traversals/question_1";

// Lowest Common Ancestor(LCA): The lowest common ancestor is defined between two nodes x and y as the lowest node in T that has both x and y as descendants (where we allow a node to be a descendant of itself.

function LCA(
  root: BinaryTREENode<number> | null,
  x: number,
  y: number
): BinaryTREENode<number> | null {
  if (root === null || root.data === x || root.data === y) return root;
  let left = LCA(root.left, x, y);
  let right = LCA(root.right, x, y);

  if (right === null) return left;
  if (left === null) return right;
  return root;
}
