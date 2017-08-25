'Use strict';

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
};

module.exports = deleteNode;
