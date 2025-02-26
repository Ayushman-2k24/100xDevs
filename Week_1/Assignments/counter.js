let counter = 5

const interval=setInterval(function(){
    console.log(counter);
    counter--

    if(counter<0){
        clearInterval(interval)
        console.log("times up");
    }
},1000)