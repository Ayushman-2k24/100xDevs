const user=[{
    firstname:"ayusman",
    gender:"male"
},{
    firstname:"mitesh",
    gender:"male"
},{
    firstname:"rando",
    gender:"female"
}]

for(let i=0;i<user.length;i++){
    if(user[i]["gender"]=="male"){
        console.log(user[i]["firstname"]);
    }
}

