let fs = require('fs');
let load = require('./load');
let insert = require('./add');
let save = require('./save');
let searchTree = require('./search');
let deleteNode = require('./delete');

let depth = {
  0: '////////////////////////DOCUMENT OUTLINER////////////////////////',
  1: '*',
  2: '  +',
  3: '    -',
  4: '      ~',
  5: '        ='
};

let printTree = function(node) {
  if (node.children === []) {
    console.log(`${depth[node.depth]}${node.name}`);
    return;
  } else {
    console.log(`${depth[node.depth]}${node.name}`);
    node.children.forEach(function(i) {
      printTree(i);
    });
  }
};



    let tree = load('./sampleData.json');
    let string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    // insert(searchTree(tree, string), '//////////Inserted string//////////');
    deleteNode(searchTree(tree, '//////////Inserted string//////////'));
    save(tree);
    printTree(tree);
