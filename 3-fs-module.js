// sync means synchronus function, blocking calls

const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const sec = readFileSync("./content/second.txt", "utf-8")
console.log(first, sec);

// default is overwrite the file but if add {flag : 'a'}, node append the text
writeFileSync('./content/res.txt', `here is the res: ${first}, ${sec}`)