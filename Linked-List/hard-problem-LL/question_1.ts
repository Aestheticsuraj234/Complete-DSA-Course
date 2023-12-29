// *Reverse Linked List in groups of Size K

// *Problem Statement: Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list. k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.


class Node {
    num: number;
    next: Node | null;

    constructor(a: number) {
        this.num = a;
        this.next = null;
    }
}

class TUF {
    // utility function to insert node in the list
    static insertNode(head: Node | null, val: number): Node {
        const newNode = new Node(val);
        if (head === null) {
            return newNode;
        }

        let temp = head;
        while (temp.next !== null) {
            temp = temp.next;
        }

        temp.next = newNode;
        return head;
    }

    // utility function to find length of the list
    static lengthOfLinkedList(head: Node | null): number {
        let length = 0;
        while (head !== null) {
            ++length;
            head = head.next;
        }
        return length;
    }

    // utility function to reverse k nodes in the list
    static reverseKNodes(head: Node | null, k: number): Node | null {
        if (head === null || head.next === null) {
            return head;
        }

        let length = TUF.lengthOfLinkedList(head);

        const dummyHead = new Node(0);
        dummyHead.next = head;

        let pre = dummyHead;
        let cur: Node | null;
        let nex: Node | null;

        while (length >= k) {
            cur = pre.next as Node;
            nex = cur.next;

            for (let i = 1; i < k; i++) {
                cur!.next = nex!.next;
                nex!.next = pre.next;
                pre.next = nex;
                nex = cur!.next;
            }

            pre = cur!;
            length -= k;
        }

        return dummyHead.next;
    }

    // utility function to print the list
    static printLinkedList(head: Node | null): void {
        while (head !== null && head.next !== null) {
            console.log(head.num + "->");
            head = head.next;
        }
        if (head !== null) {
            console.log(head.num);
        }
    }

    public static main(): void {
        let head: Node | null = null;
        const k = 3;
        head = TUF.insertNode(head, 1);
        head = TUF.insertNode(head, 2);
        head = TUF.insertNode(head, 3);
        head = TUF.insertNode(head, 4);
        head = TUF.insertNode(head, 5);
        head = TUF.insertNode(head, 6);
        head = TUF.insertNode(head, 7);
        head = TUF.insertNode(head, 8);

        console.log("Original Linked List: ");
        TUF.printLinkedList(head);
        console.log("After Reversal of k nodes: ");
        const newHead = TUF.reverseKNodes(head, k);
        TUF.printLinkedList(newHead);
    }
}

// Run the program
TUF.main();
