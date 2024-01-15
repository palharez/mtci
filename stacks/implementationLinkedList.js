class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.top) {
      this.top = newNode;
      this.bottom = this.top;
      this.length++;
      return this;
    }

    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();

myStack.push("google").push("udemy").push("discord");

console.log(myStack.peek());

myStack.pop();

console.log(myStack.peek());

myStack.pop().pop();

console.log(myStack.peek());
