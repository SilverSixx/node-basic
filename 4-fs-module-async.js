// async means asynchronus function, non-blocking calls

const { readFile, writeFile } = require("fs");
console.log('start');
readFile("./content/first.txt",  'utf-8', (err,res) => {
    if(err){
        console.log(err)
        return null;
    }
    const first = res
    readFile("./content/second.txt",  'utf-8', (err,res) =>{
        if (err) {
          console.log(err);
          return null;
        }
        const sec = res;
        writeFile("./content/res-async.txt", `here is the res: ${first}, ${sec}`, (err, res) => {
            if (err) {
              console.log(err);
              return null;
            }
            console.log('done with this task');
        })
    })
});
console.log("start new");