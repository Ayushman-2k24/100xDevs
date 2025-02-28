
function count(x) {
    var a=0
    for (let i = 0; i < x; i++) {
        a=a+i
    }
    return a
}

var startdate=new Date()
var currenttime=startdate.getTime()

count(10000000000)

var enddate=new Date()
var aftertime=enddate.getTime()

var realtime=aftertime-currenttime

console.log("the time taken to complete the loop is "+realtime);


