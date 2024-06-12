/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    const startTime = new Date().getTime();

    var ans = 0
    for(var i=1;i<=n;i++){
        ans += i
    }

    

    const endTime = new Date().getTime();

    totalTime = endTime - startTime;
    totalTime = totalTime / 1000;
    var timeTaken = "Addition for 1 to "+n+" is: "+ans+"\ntime required: "+ totalTime+" sec";
    return timeTaken ;

}

console.log(calculateTime(10000000000))