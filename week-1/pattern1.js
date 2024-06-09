function staryline(n) {
    ans = " "
        for(var line=1; line<=n;line++){
            ans += "*";
    }
    console.log(ans)
}

function starryPattern(stars) {
    for (var i = 1 ; i <= stars ; i++ ){
        staryline(i)

    }
    
    
}

var pattern = starryPattern(4);
console.log(pattern)