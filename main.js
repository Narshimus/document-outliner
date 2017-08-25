let fs = require('fs');
let load = require('./load');
let insert = require('./add');
let save = require('./save');

let depth = {
  0: '////////////////////////DOCUMENT OUTLINER////////////////////////',
  1: '*',
  2: '  +',
  3: '    -',
  4: '      ~'
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

fs.readFile('./sampleData.json', 'utf8', function(err, data) {
  if (err) {
    console.log('could not read file');
  } else {

    let tree = load(JSON.parse(data));
    let string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    // insert(searchTree(tree, string), '//////////Inserted string//////////');
    // deleteNode(searchTree(tree, '//////////Inserted string//////////'));
    fs.writeFile('./sampleData.json', JSON.stringify(save(tree)), 'utf8', function(err, data) {
      if (err) {
        console.log('could not save file');
      } else {
        console.log('saved to disc');
        printTree(tree);
      }
    });
  }
});

let deleteNode = function(node) {
  let parent = node.parent;
  let children = node.children;
  if (parent) {
    if (children) {
      for (let t = 0; t < children.length; t++) {
        children[t].parent = parent;
        children[t].depth = children[t].depth - 1;
      }
    }
    for (let y = 0; y < parent.children.length; y++) {
      if (parent.children[y].name === node.name) {
        parent.children.splice(y, 1);
        if (children) {
          for (let x = 0; x < children.length; x++) {
            parent.children.splice(y, 0, children[x]);
          }
        }
      }
    }
    return node;
  } else {
    return null;
  }
}
