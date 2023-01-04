let furniture = ['table','chairs','couch']

// does the same as
// for (let char of furniture) console.log(char)

let iterator = furniture[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break; 
    console.log(result.value); //outputs characters one by one     
    
}