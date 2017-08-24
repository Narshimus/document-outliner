'Use strict';

let Node = function(name,depth) {
  this.name = name;
  this.children = [];
  this.parent = null;
  this.depth = depth;
};

Node.prototype.addChild = function(childNode, x) {
  childNode.parent = this;
  this.children.push(childNode);
};

module.exports = Node;
