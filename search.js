'Use strict';

let searchTree = function(node, name) {
  let match;
  //check if node name matches string return matching node
  if (node.name === name) {
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

module.exports = searchTree;
