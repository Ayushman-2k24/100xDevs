function ayushmanAsynfn() {
    let p = new Promise(function (resolve){
        setTimeout(function() {
            resolve("hi there")    
        },3000)
    })
    return p
}

// any fn that wants to use await need to be async
async function main() {
    let value= await ayushmanAsynfn()
    console.log(value);
    console.log("hi there 1");  
}
main()
console.log("hi there from main");
