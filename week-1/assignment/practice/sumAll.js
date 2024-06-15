function sumAll(firstIndex,endIndex) {
    sum=0
    for (var i = firstIndex ; i <= endIndex ; i++){
        sum += i;
    }
    
    
return sum
}

sum = sumAll(1,100)
console.log(sum)