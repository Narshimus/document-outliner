'Use strict';
let fs = require('fs');

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

let saveTree = function(tree){
  fs.writeFile('./sampleData.json', JSON.stringify(treeToObject(tree)), 'utf8', function(err, data) {
    if (err) {
      console.log('could not save file');
    } else {
      console.log('saved to disc');
    }
  });
};

module.exports = saveTree;
