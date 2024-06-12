/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

var fruitCategory = [];
var flowerCategory = [];
var fruit = 0
var flower = 0

function calculateTotalSpentByCategory(transactions) {
  // console.log(transactions)
  var newArr = []
  for(var i=0; i<transactions.length; i++){
   
    
    if(transactions[i].category == "fruit" ) {
      fruit = fruit + transactions[i].price
    }

    if (transactions[i].category === "flower" ) {
      flower = flower + transactions[i].price
    }
  }
  console.log("Fruit="+fruit+" Flower= "+flower)

  // return [];
  var categoryPrice = [
    {fruit: fruit},
    {flower: flower}
  ]
  newArr.push(categoryPrice)
  return newArr
}

list = [
  {itermName: "Apple", category:"fruit" , price: 50 , timestamp:"11.11"},
  {itermName: "Banana", category:"fruit" , price: 30 , timestamp:"11.11"},
  {itermName: "Rose", category:"flower" , price: 10 , timestamp:"11.11"},
  {itermName: "Sunflower", category:"flower" , price: 20 , timestamp:"11.11"}
]

// for(var i=0;i<=list.length;i++){
//   console.log(list[i])
// }

// console.log(list[0].price,list[0].category)
ans = calculateTotalSpentByCategory(list)
console.log(ans)
// var expenses = calculateTotalSpentByCategory(list)
// console.log(expenses)
module.exports = calculateTotalSpentByCategory;
