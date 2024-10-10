function sum(num1,num2,fnToCall){
    let result=num1+num2;
    fnToCall(result)
}

function DisplayResult(data){
    console.log("Result of sum is " + data);
}
function DisplayResultPassive(data){
    console.log("sum's result is   " + data);
}

const ans=sum(1,2,DisplayResultPassive)