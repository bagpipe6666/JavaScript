function promiseTimeout(ms){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, ms);
    });
}

async function run (){
    //logic
    console.log("start");
    //try take of await and compare
    await promiseTimeout(2000);
    console.log("stop");
}
run();