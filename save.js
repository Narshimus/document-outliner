'Use strict';

let treeToObject = function(tree) {
  //should traverse tree and return object suitable for JSON file
  let obj = {
    "name": tree.name,
    "children": []
  };
  if (tree.children === []) {
    return obj;
  } else {
    tree.children.forEach((i)=>{
      obj.children.push(treeToObject(i));
    });
    return obj;
  }
};

module.exports = treeToObject;
