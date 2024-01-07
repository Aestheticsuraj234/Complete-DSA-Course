// *Maximum depth of a Binary Tree
// *`Problem Statement`: Find the Maximum Depth of Binary Tree. Maximum Depth is the count of nodes of the longest path from the root node to the leaf node.

import { BinaryTREENode } from "../traversals/question_1";

class Solution_1 {
  static maxDepth(root: BinaryTREENode<number> | null): number {
    if (root === null) return 0;
    let lh = this.maxDepth(root.left);
    let rh = this.maxDepth(root.right);
    return Math.max(lh, rh) + 1;
  }
}


// *Minimum depth of a Binary Tree
// *`Problem Statement`: Find the Minimum Depth of Binary Tree. Minimum Depth is the count of nodes of the shortest path from the root node to the leaf node.

class Solution_2 {
  static minDepth(root: BinaryTREENode<number> | null): number {
    if (root === null) return 0;
    let lh = this.minDepth(root.left);
    let rh = this.minDepth(root.right);
    return Math.min(lh, rh) + 1;
  }
}