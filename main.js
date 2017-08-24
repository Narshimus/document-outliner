let test = require('./sampleData');
let load = require('./load');
let insert = require('./add');

let depth = {
  1: '*',
  2: '  +',
  3: '    -',
  4: '      ~'
};

let masterNode = load(test);

let printTree = function(node){
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
let searchTree = function(node, name) {
  let match;
  //check if node name matches string
  if (node.name === name) {
    console.log("Here's the matching node");
    return node;
    //if no match
  } else {
    //if no children return undif
    if (node.children === []) {
      return;
    //if children run search tree on child nodes
    } else {
      node.children.forEach(function(i) {
        let search = searchTree(i, name);
        //check if search is truthy
        search ? match = search : null;
      });
      //return matched node or undif
      return match;
    }
  }
};

let tree = load(test);
let string = 'Contrary to popular belief, Lorem Ipsum is not simply random text';

let deleteNode = function(node, name){
  if (node.name === name){
    let parent = node.parent;
    let children = node.children;
    for (let t = 0; t < children.length; t++){
      children[t].parent = parent;
      children[t].depth = children[t].depth -1;
    }
    for (let y = 0; y < children.length; y++){
      if (parent.children[y].name === name){
        parent.children.splice(y, 1);
        for (let x = 0; x < children.length; x++){
          parent.children.splice(y, 0, children[x]);
        }
      }
    }
    return node;
  }
  if (node.children === []) {
    return;
  }else {
    node.children.forEach(function(i){
      deleteNode(i, name);
    });
  }
}
printTree(masterNode);
insert(searchTree(tree, string),'//////////Inserted string//////////');
deleteNode(masterNode, 'Lorem Ipsum has been the industry\'s standard dummy');
printTree(masterNode);
