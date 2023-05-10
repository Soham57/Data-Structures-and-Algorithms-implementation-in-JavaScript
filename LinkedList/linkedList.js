class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.tail.next = this.head;
  }
}
