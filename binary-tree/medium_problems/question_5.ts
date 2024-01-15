class BinaryTreeNode<T> {
    data: T;
    left: BinaryTreeNode<T> | null;
    right: BinaryTreeNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function areIdenticalTrees<T>(root1: BinaryTreeNode<T> | null, root2: BinaryTreeNode<T> | null): boolean {
    // Base cases: If both trees are empty, they are identical.
    if (root1 === null && root2 === null) {
        return true;
    }

    // If one tree is empty and the other is not, they are not identical.
    if (root1 === null || root2 === null) {
        return false;
    }

    // Check if the current nodes are equal and recursively check left and right subtrees.
    return (
        root1.data === root2.data &&
        areIdenticalTrees(root1.left, root2.left) &&
        areIdenticalTrees(root1.right, root2.right)
    );
}

// Example Usage:
// Create binary trees
const tree1 = new BinaryTreeNode(1);
tree1.left = new BinaryTreeNode(2);
tree1.right = new BinaryTreeNode(3);

const tree2 = new BinaryTreeNode(1);
tree2.left = new BinaryTreeNode(2);
tree2.right = new BinaryTreeNode(3);

// Check if the trees are identical
const result = areIdenticalTrees(tree1, tree2);
console.log(result); // Output: true

