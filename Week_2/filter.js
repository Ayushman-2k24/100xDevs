

const arr=[1,2,3,4,5]

const ans=arr.filter(num=>num>2)
console.log(ans);
console.log("\n");


const ans1=arr.filter((num)=>{
    if (num>0) {
        return true
    }
    return false
})
console.log(ans);



