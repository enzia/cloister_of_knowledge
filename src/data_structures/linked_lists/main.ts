class Node {
    // References the next node
    next: Node | null
    // The value stored by the node
    value: string

    constructor(value: string) {
        this.next = null
        this.value = value
    }
}

class LinkedList {
    // References the first node in the list
    head: Node | null

    constructor() {
        this.head = null
    }
    
    /**
     * Appends a value to the end of the list as a new node.
     *
     * @param {string} value - The value to append.
     * @returns {string} The value that was appended.
     */
    // append(value: string): string {
    //
    // }

    /**
     * Returns the value of the last node.
     *
     * @returns {string} The value of the last node.
     */
    // last(): string {
    //
    // }

    /**
     * Returns the value of the node at the specified index.
     * 
     * If the index is out of range of the nodes in the list, an Error is thrown.
     *
     * @param {number} index - The index of the value to be returned.
     * @returns {string} The value of the node at the specified index.
     */
    // get(index: number): string {
    //
    // }
}

function main() {
    
}

main()

