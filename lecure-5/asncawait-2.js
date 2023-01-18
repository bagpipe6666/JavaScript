function promiseTimeout(ms){
    console.log('do somrting');
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, ms);
    });
}

async function longRunningOperation (){
    console.log("start long running opertion");
    //logic 
    return (42);
}
async function run(){
    //logic
    console.log("start");
    await promiseTimeout(2000);
    //try to take awsit out and see
    const response = await longRunningOperation();
    console.log(response);

    console.log("stop");
    
}
console.log('before run');
run();
console.log('after run');