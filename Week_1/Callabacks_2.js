function arithmeticCal(a,b,fnToCall){
    const ans=fnToCall(a,b)
    return ans;
}
function sum(a,b){
    return a+b;
}
const value=arithmeticCal(1,2,sum);
console.log("the sum is "+ value);
