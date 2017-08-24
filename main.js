let test = require('./sampleData');
let load = require('./load');

let depth = {
  1: '*',
  2: '  +',
  3: '    -'
};

let printTree = function(node){
  if (node.children === []) {
    console.log(`${depth[node.depth]}${node.name}`);
    return;
  }else {
    console.log(`${depth[node.depth]}${node.name}`);
    node.children.forEach(function(i){
      printTree(i);
    });
  }
};

printTree(load(test));
