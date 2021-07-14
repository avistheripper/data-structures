class Queue {
    constructor(elements) {
        this.elements = elements;
    }

    enqueue(e) {
        this.elements.push(e)
    }

    dequeue() {
        this.elements.shift();
    }

    isEmpty() {
        return this.elements.length === 0;
    }

    peek() {
        return !this.isEmpty() ? this.elements[0] : undefined;
    }

    getLength() {
        return this.elements.length;
    }
};


const numbersQueue = new Queue([1,2,3,4,5,6]);

console.log(numbersQueue.peek());
console.log(numbersQueue.dequeue());
console.log(numbersQueue.getLength())
console.log(numbersQueue.enqueue(7));
