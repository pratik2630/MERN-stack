// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

var counter = 0
function timer(){
    
    console.clear()
    counter += 1
    console.log(counter)
    setTimeout(timer,i*1000)

}

for(var i=0; i<10;i++){
    setTimeout(timer,i*1000)
}
