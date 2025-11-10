const { NotImplementedError } = require('../lib/errors');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (this.rootNode === null) {
      this.rootNode = new Node(data);
      return;
    }

    let current = this.rootNode;
    while (true) {
      if (data < current.data) {
        if (!current.left) {
          current.left = new Node(data);
          return;
        }
        current = current.left;
      } else if (data > current.data) {
        if (!current.right) {
          current.right = new Node(data);
          return;
        }
        current = current.right;
      } else {
        return;
      }
    }
  }

  find(data) {
    let current = this.rootNode;
    while (current) {
      if (data === current.data) {
        return current;
      }
      current = data < current.data ? current.left : current.right;
    }
    return null;
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(data) {
    this.rootNode = this._removeNode(this.rootNode, data);
  }

  min() {
    const node = this._minNode(this.rootNode);
    return node ? node.data : null;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }
    let current = this.rootNode;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }

  _removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    }

    if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    }

    if (!node.left) {
      return node.right;
    }

    if (!node.right) {
      return node.left;
    }

    const successor = this._minNode(node.right);
    node.data = successor.data;
    node.right = this._removeNode(node.right, successor.data);
    return node;
  }

  _minNode(node) {
    if (!node) {
      return null;
    }
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current;
  }
}

module.exports = {
  BinarySearchTree
};