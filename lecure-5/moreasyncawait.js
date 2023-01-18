function who(){
    return new Promise ((reslove)=>{
        setTimeout(()=>{
            reslove (";)");
        },200);
    });
}

function what(){
    return new Promise((reslove)=>{
        setTimeout(()=>{
            reslove("lurks");
        },300);
    });
}

function where(){
    return new Promise((reslove)=>{
        setTimeout(()=>{
            reslove("in the shadows");
        },500);
    });
}

async function msg(){
    const a = await who();
    const b = await what();
    const c = await where();

    console.log(`${a} ${b} ${c}`);
}

console.log('we are looking for:');
msg(); 
console.log('hello')