// Creating a Linked List
// There are two information sets to store at every node, thus there is a need to create a self-defined data type to handle them. Therefore, we will use the help of structs and classes. To learn about structs and classes, you can refer to this article.

// To understand linked lists better, let’s take the help of an example:


class MyNode<T> {
    constructor(public data: T, public next: MyNode<T> | null = null) {}
}
