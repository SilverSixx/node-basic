const path = require('path')

console.log(path.sep) // return a flatform specific seperator

// join a sequence of path segment, return a normalize path
const filePath = path.join('/content', 'text.txt')
console.log(filePath);

const baseFile = path.basename(filePath)
console.log(baseFile);

const absolutePath = path.resolve(__dirname, 'content', 'text.txt')
console.log(absolutePath);
