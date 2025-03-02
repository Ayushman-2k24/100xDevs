
const fs=require("fs");

function ayushman() {
    console.log("isnide ayushman");
    return new Promise(function(resolve){
        console.log("insife promise");
        fs.readFile("a.txt","utf-8",function(err,data){
            console.log("before resolve");
            resolve(data);  
        })
    })
}

function ondone(data){
    console.log(data);
}

ayushman().then(ondone)
