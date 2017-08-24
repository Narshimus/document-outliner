'Use strict';

let Node = function(name,depth) {
  this.name = name;
  this.children = [];
  this.parent = null;
  this.depth = 1;
};

Node.prototype.addChild = function(childNode) {
  childNode.parent = this;
  childNode.depth =+ JSON.parse(JSON.stringify(childNode.parent.depth));
  this.children.push(childNode);
};

module.exports = Node;
