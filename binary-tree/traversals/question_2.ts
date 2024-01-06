import { BinaryTREENode } from "./question_1"

// * Binary tree traversal :- Inorder , Preorder and Postorder , Level order

// * Inorder traversal (Left, Root, Right)

function InOrderTraversal<T>(root: BinaryTREENode<T> | null) {
    if (root == null) {
        return;
    }

    InOrderTraversal(root.left);
    console.log(root.data);
    InOrderTraversal(root.right);


}

// * Preorder traversal (Root, Left, Right)

function PreOrderTraversal<T>(root: BinaryTREENode<T> | null) {
    if (root == null) {
        return;
    }
console.log(root.data);
PreOrderTraversal(root.left);
PreOrderTraversal(root.right);

}

// * Postorder traversal (Left, Right, Root)

function PostOrderTraversal<T>(root: BinaryTREENode<T> | null) {
    if (root == null) {
        return;
    }

    PostOrderTraversal(root.left);
    PostOrderTraversal(root.right);
    console.log(root.data);

}