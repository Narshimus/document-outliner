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

let searchTree = function(node, name) {
  if (node.name === name){
    console.log("here's the matching node");
    console.log(node);
    return node;
  }
  if (node.children === []) {
    return;
  }else {
    // console.log(`${node.name}`,node.depth);
    node.children.forEach(function(i){
      searchTree(i, name);
    });
  }
}

let string = 'Contrary to popular belief, Lorem Ipsum is not simply random text';
searchTree(load(test), string);
