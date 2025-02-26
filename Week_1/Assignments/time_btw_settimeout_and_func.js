const startime=Date.now()
setTimeout(function(){
    const endtime=Date.now()
    const actualdelay= endtime-startime
    
    console.log("expected time was 1000ms");
    console.log("actual time is "+actualdelay+"ms");
},1000)
