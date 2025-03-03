function ayushmanAsynfn() {
    let p = new Promise(function (resolve){
        resolve("hi there") 
    })
    return p
}

function main() {
    ayushmanAsynfn().then(function (value) {
        console.log(value);
    })
}
main()