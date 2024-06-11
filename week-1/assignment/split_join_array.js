
// converting string to array

function arrayFromString(str) {
    var array = str.split(" "); // here space is delimeter
    return array
}

var ans = arrayFromString("my name is pratik")
console.log(ans)

// converting array to string

function stringFromArray(str) {
    var array = str.join(" "); // here space is delimeter
    return array
}

var ans = stringFromArray([ 'my', 'name', 'is', 'pratik' ])
console.log(ans)

