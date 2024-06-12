/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function strReverse(str1){
  var strRev = []
  for (var i=str1.length-1;i>=0;i--){
    strRev.push(str1[i])
  }
  return strRev

}

function isPalindrome(str) {
  // console.log(str)
  newStr = str.toLowerCase()
  console.log("String is converted to lowercase first !")
  console.log("Input string: "+newStr)
  //to reverse string manually by selfmade function
  reversedStr = newStr.split('')
  reversedStr = strReverse(reversedStr)
  reversedStr = reversedStr.join('')

  //by inbuilt function
  // reversedStr = str.split('').reverse().join('')

  console.log("reversed String :"+reversedStr)
  if (newStr==reversedStr) {
    return true;
  } else {
    return false;  
  }
  
}

ans = isPalindrome("bad")
console.log(ans)
module.exports = isPalindrome;
