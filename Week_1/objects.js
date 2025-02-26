//simple objects
let user1={
    uname:"ayushman",
    gende:"male"
}
console.log(user1["uname"]);
console.log("\n");
//arrays of abjects
let users=[{
    uname:"ayushman",
    gender:"male"
},{
    uname:"mitesh",
    gender:"male"
},{
    uname:"avnish",
    gender:"female"
}]

for (let i = 0; i < users.length; i++) {
    if(users[i]["gender"]=="male"){
        console.log(users[i]["uname"]);         
    }   
}