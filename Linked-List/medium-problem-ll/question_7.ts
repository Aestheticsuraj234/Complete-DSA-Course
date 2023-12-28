class Node {
    val: number;
    next: Node | null;

    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

// Utility function to insert a node at the end of the linked list
function insertNode(head: Node | null, val: number): Node {
    const newNode = new Node(val);
    if (head === null) {
        return newNode;
    }
    let temp: Node | null = head;
    while (temp.next !== null) {
        temp = temp.next;
    }
    temp.next = newNode;
    return head;
}


function reverse(head: Node | null): Node | null {
    let prev: Node | null = null;
    let current: Node | null = head;
    while (current !== null) {
        const nextNode: Node | null = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    return prev;
}

// Utility function to check if the linked list is a palindrome or not
function isPalindrome(head: Node | null): boolean {
    const arr: number[] = [];
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        if (arr[i] !== arr[arr.length - i - 1]) {
            return false;
        }
    }
    return true;
}

if (require.main === module) {
    let head: Node | null = null;
    head = insertNode(head, 1);
    head = insertNode(head, 2);
    head = insertNode(head, 3);
    head = insertNode(head, 2);
    head = insertNode(head, 1);
    console.log(isPalindrome(head));
}


// 2. Optimal Solution

function isPalindromeOpti(head: Node | null): boolean {
    if (head === null || head.next === null) {
        return true;
    }

    let slow: Node | null = head;
    let fast: Node | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next as Node;
        fast = fast.next.next as Node;
    }

    slow.next = reverse(slow.next);
    slow = slow.next;

    let dummy: Node | null = head;

    while (slow !== null) {
        if (dummy.val !== slow.val) {
            return false;
        }
        dummy = dummy.next as Node;
        slow = slow.next as Node;
    }

    return true;
}
