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
    this.length = 0;
  }

  //adding the element at the end
  append(element) {
    let nodeToBeAdded = new Node(element);
    if (this.length == 0) {
      this.head.next = nodeToBeAdded;
      this.tail.next = nodeToBeAdded;
    } else {
      let lastNode = this.tail.next;
      lastNode.next = nodeToBeAdded;
      this.tail.next = nodeToBeAdded;
    }

    this.length++;
  }
  //Add the start of LinkedList
  prepend(element) {
    if (this.length == 0) {
      this.append(element);
    } else {
      let nodeToBeAdded = new Node(element);
      let firstNode = this.head.next;
      nodeToBeAdded.next = firstNode;
      this.head.next = nodeToBeAdded;
    }
  }

  insertAt(index, element) {
    if (index > this.length - 1 || index < 0) {
      return "Error: Index out of bound";
    }

    if (index == 0) {
      this.prepend(element);
    } else if (index == this.length - 1) {
      this.append(element);
    } else {
      let nodeToBeAdded = new Node(element);

      let indexCount = 0;
      let nodeBeforeTarget = this.head.next;
      while (indexCount < index) {
        nodeBeforeTarget = nodeBeforeTarget.next;
        indexCount++;
      }
      let nextNode = nodeBeforeTarget.next;
      nodeBeforeTarget.next = nodeToBeAdded;
      nodeToBeAdded.next = nextNode;
    }
  }
}
