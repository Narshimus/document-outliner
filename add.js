'Use strict';
let Node = require('./node');

let insert = function(parentNode, value){
  if (parentNode) {
    parentNode.addChild(new Node(value,parentNode.depth+1));
  }else {
    console.error('not a valid parent node');
  }
};

module.exports = insert;
