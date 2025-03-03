
const fs=require("fs");

function ayushman() {
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);  
        })
    })
}

function ondone(data){
    console.log(data);
}

ayushman().then(ondone)
