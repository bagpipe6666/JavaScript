function yayOrNay(){
    return new Promise((resolve, reject)=>{
        const val = Math.round(Math.random()*1);
        //0 or 1 ,at random
        val ? resolve("lucky"):reject("Nope ;-;");
    });
}

async function msg(){
    try{
        const msg = await yayOrNay();
        console.log(msg);
    }catch (err){
        console.log(err);
    }
}

msg();//lucky
msg();//lucky
msg();//lucky
msg();//nope
msg();//lucky
msg();//nope
msg();//nope