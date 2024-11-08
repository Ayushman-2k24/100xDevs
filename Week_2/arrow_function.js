
// DIFFERENT VARIATION OF ARROW FUNCTION 

//basic arrow fn ONE expression
const add=(a,s)=>a+s
console.log(add(2,3));


// arrow function with multiple statements
const addandlog=(a,s)=>{
    const sum=a+s
    console.log("the sum is "+sum);
    return sum //{braces} in this return is neccesary    
}
console.log(addandlog(2,3));


//Single Argument (No Parentheses)
const mul=x=>x*x //If there’s only one argument, parentheses () are optional:
console.log(mul(2));

// No Arguments (Empty Parentheses)
const heloo=()=>console.log('heloo');
heloo()





