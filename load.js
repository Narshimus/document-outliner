'Use strict';
let Node = require('./node');

let objectToNode = function(object) {
  if (object.children === []) {
    return new Node(object.name);
  }else {
    let newNode = new Node(object.name);
    object.children.forEach(function(i){
      newNode.addChild(objectToNode(i));
    });
    return newNode;
  }
};

module.exports = objectToNode;
