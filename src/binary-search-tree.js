const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  root() {

    // if (this.root === null) {
    //   this.root = new Node();
    // }
    this.root = null;
  }

  add(data) {
    if (this.root === null) {
      this.root = new Node(data);
    } else {
      const node = this.root;
      const setTree = node => {
        if (data < node.value && node.left) {
          setTree(node.left);
        } else if (data < node.value) {
          node.left = new Node(data);
        } else if (data > node.value && node.right) {
          setTree(node.right);
        } else if (data > node.value) {
          node.right = new Node(data);
        }
      }
      return setTree(node);
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};