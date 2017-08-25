'Use strict';
let Node = require('./node');
let fs = require('fs');

let objectToNode = function(object, count) {
  count = count || 0;
  if (object.children === []) {
    return new Node(object.name, count);
  }else {
    let newNode = new Node(object.name,count);
    count++;
    object.children.forEach(function(i){
      newNode.addChild(objectToNode(i,count));
    });
    return newNode;
  }
};

let loadFile = function(filePath){
  let data;
  try{
    data = fs.readFileSync(filePath,'utf8');
    return objectToNode(JSON.parse(data));
}catch(err){
  throw err;
}
};

module.exports = loadFile;
