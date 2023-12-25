const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(/* l, k */) {
   throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  
  // delete(k) {
  
  //   if (!this.head) {
  //     return null;
  //   }
  
  //   let deletedNode = null;
  
   
  //   while (this.head && this.head.k === k) {
  //     deletedNode = this.head;

  //     this.head = this.head.next;
  //   }
  
  //   let currentNode = this.head;

  //   if (currentNode !== null) {
  //     while (currentNode.next) {
  //       if (currentNode.next.k === k) {
  //         deletedNode = currentNode.next;
  //         currentNode.next = currentNode.next.next;
  //       } else {
  //         currentNode = currentNode.next;
  //       }
  //     }
  //   }
  
    
  //   if (this.tail && this.tail.k === k) {
  //     this.tail = currentNode;
  //   }
  
  //   return l;
  // }



  
  // console.debug(l)
}

module.exports = {
  removeKFromList
};
