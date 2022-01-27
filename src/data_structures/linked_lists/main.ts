class Node {
    // References the next node
    next: Node | null
    // The data stored by the node
    data: string

    constructor(data: string) {
        this.next = null
        this.data = data
    }
}

class LinkedList {
    // References the first node in the list
    head: Node | null

    constructor() {
        this.head = null
    }
    
    /**
     * Appends some data to the end of the list as a new node.
     *
     * @param {string} data - The data to append.
     * @returns {string} The data that was appended.
     */
    // append(data: string): string {
    //
    // }

    /**
     * Returns the data of the last node.
     *
     * @returns {string} The data of the last node.
     */
    // last(): string {
    //
    // }

    /**
     * Returns the data of the node at the specified index.
     * 
     * If the index is out of range of the nodes in the list, an Error is thrown.
     *
     * @param {number} index - The index of the data to be returned.
     * @returns {string} The data of the node at the specified index.
     */
    // get(index: number): string {
    //
    // }
}

function main() {
    
}

main()

