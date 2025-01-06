const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  // list;
  // constructor () {
  //   this.values = {};
  //   this.head = 0;
  //   this.tail = 0;
  // }

  constructor () {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  getUnderlyingList() {
    // const item = this.values;
    // console.debug(item);
    // return item;
    return this.first;
  }

  enqueue(value) {
   
    // this.values[this.tail] = value;
    // this.tail++;
    // return value;

    // let current = this.list;
    // if (!current) {
    //   this.list = new ListNode(value);
    //   return this;
    // }
    // this.next++;

    const NewNode = new Node(value);
    if (this.length ===0) {
      this.first = NewNode;
      this.last = NewNode;
    } else {
      this.last.next = NewNode;
      this.last = NewNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    // const item = this.values[this.head];
    // delete this.values[this.head];
    // this.head++;
    // return item;

    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const hodlingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return hodlingPointer.value;
  }
}

module.exports = {
  Queue
};
