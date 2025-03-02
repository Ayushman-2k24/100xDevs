//promise is a class , and it should be having the first argument as a function and the fn also needs to have the first argument as resolve or any other name u would like  
// basically promises are just a class which makes callbacks and asyn fns slightly more readable 
var a=new Promise(function(resolve){
    setTimeout(()=>{
        resolve("hi there")
    },1000)
})


function callback(){
    console.log(a);
}
console.log(a); // we can print it without returning 
a.then(callback)
      
