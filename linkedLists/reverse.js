class Node {
  constructor(value) {
    this.value = value;

    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node(value);

    this.head = node;

    this.tail = this.head;

    this.length = 1;
  }

  append(value) {
    const node = new Node(value);

    this.tail.next = node;

    this.tail = this.tail.next;

    this.length++;

    return this;
  }

  prepend(value) {
    const node = new Node(value);

    node.next = this.head;

    this.head = node;

    this.length++;

    return this;
  }

  traverseToIndex(index) {
    let counter = 0;

    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;

      counter++;
    }

    return currentNode;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    if (index === 0) {
      return this.prepend(value);
    }

    const node = new Node(value);

    const leader = this.traverseToIndex(index - 1);

    node.next = leader.next;

    leader.next = node;

    this.length++;

    return this;
  }

  remove(index) {
    if (index >= this.length) {
      return this;
    }

    if (index === 0) {
      this.head = this.head.next;

      this.length--;

      return this;
    }

    const leader = this.traverseToIndex(index - 1);

    leader.next = leader.next.next;

    this.length--;

    return this;
  }

  reverse() {
    if (!this.head.next) {
      return this;
    }

    let first = this.head;

    this.tail = this.head;

    let second = first.next;

    while (second) {
      const temp = second.next;

      second.next = first;

      first = second;

      second = temp;
    }

    this.head.next = null;

    this.head = first;

    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5).append(20).append(1).reverse();
console.dir(myLinkedList, { depth: null });
