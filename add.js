'Use strict';
let Node = require('./node');

let insert = function(parentNode, value){
  parentNode.addChild(new Node(value,parentNode.depth);
};

module.exports = insert;
