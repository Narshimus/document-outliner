let test = require('./sampleData');
let load = require('./load');

let printTree = function(node){
  if (node.children === []) {
    console.log(`${node.name}`,node.depth);
    return;
  }else {
    console.log(`${node.name}`,node.depth);
    node.children.forEach(function(i){
      printTree(i);
    });
  }
};

printTree(load(test));
