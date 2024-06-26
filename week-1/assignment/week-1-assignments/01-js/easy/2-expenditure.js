function solve(transactions){
    var spendEstimates = {};

    for(var i=0; i<transactions.length;i++ ){
        var t = transactions[i];
        if (spendEstimates[t.category]){
            spendEstimates[t.category] = spendEstimates[t.category] + t.price
        } else {
            spendEstimates[t.category] = t.price
        }
    }
    // console.log(spendEstimates)
    var keys = Object.keys(spendEstimates)
    // console.log(spendEstimates);
    // console.log(keys);

    let answer = [];
    for(var i=0; i<keys.length;i++){
        var category = keys[i];
        var obj = {
            category: category,
            amountSpend: spendEstimates[category]
        }
        answer.push(obj)
    }
    console.log(answer);
}

var transactions = [
{
    itemName: "pepsi",
    category : "Drink",
    price: 20,
    timestamp:"12-june-2024"
},

{
    itemName: "Mirinda",
    category : "Drink",
    price: 25,
    timestamp:"13-june-2024"
},
{
    itemName: "Samosa",
    category : "Food",
    price: 10,
    timestamp:"12-june-2024"
}
]

solve(transactions)