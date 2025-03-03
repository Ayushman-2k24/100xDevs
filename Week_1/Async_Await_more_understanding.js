function ayushmanAsynfn() {
    let p = new Promise(function (resolve){
        resolve("hi there")    
    })
    return p
}
 function main() {
    ayushmanAsynfn().then(function(value) {
        console.log(value);
    })
}
main()




function ayushmanAsynfn1() {
    let p = new Promise(function (resolve){
        resolve("hi there")    
    })
    return p
}
async function main1(){
    let value = ayushmanAsynfn1()
    console.log(value); 
}
// main1() // op will be Promise{'hi there'} since it is not awaiting the promis itself get logged also it is immediately resolving as there is no asyn logic int the ayushmanasync1fn





function ayushmanAsynfn2() {
    let p = new Promise(function (resolve){
        setTimeout(function() {
            resolve("hi there");  
        },2000)
    })
    return p
}
async function main2() {
    let value = ayushmanAsynfn2()
    console.log(value);
}
main2() 
// Key Takeaways
// JavaScript doesn’t wait for setTimeout to complete before returning.
// The function returns the Promise immediately (which is still in the "pending" state).
// To get the resolved value, you must use await to pause execution until the promise is fulfilled. 


function ayushmanAsynfn3() {
    let p = new Promise(function (resolve){
        setTimeout(function() {
            resolve("hi there");  
        },2000)
    })
    return p
}
async function main3() {
    let value = await ayushmanAsynfn3()
   console.log(value);
   
}
main3() 
console.log("hi there from main");
// Conclusion
// await pauses only inside async functions`, allowing the rest of the code to continue.
// JavaScript does NOT block the main thread, so "hi there from main" prints first.
// The resolved value logs after 2 seconds when the promise is fulfilled.
