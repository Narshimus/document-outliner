'Use strict';
let Node = require('./node');

let objectToNode = function(object, count) {
  count = count || 0;
  if (object.children === []) {
    return new Node(object.name, count);
  }else {
    let newNode = new Node(object.name,count);
    count++;
    object.children.forEach(function(i){
      newNode.addChild(objectToNode(i,count));
    });
    return newNode;
  }
};

module.exports = objectToNode;
