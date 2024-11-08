
// create a map that takes an array and transfom fn as a inout and return the transformed array

const arr=[1,2,3,4,5]
function map(array,callback){
    const result=[]
    for (let i = 0; i < array.length; i++) {
        result.push(callback(arr[i]))
    }
    return result
}

const ans = map(arr,(i)=>i*2)
console.log(ans);
