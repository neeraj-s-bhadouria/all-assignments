/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

//using this approach as I am new to JS, but will find a shorter way to do this later.
function calculateTotalSpentByCategory(transactions) {
  var result = {}
  var resultList = []
  transactions.map(transaction => {
    if(result.hasOwnProperty(transaction.category)) {
      result[transaction.category] = result[transaction.category] + transaction.price;
    } else {
      result[transaction.category] = transaction.price;
    }
  });
  
  for(var prop in result) {
    resultList.push({ category: prop, totalSpent: result[prop] });
  }
  return resultList;
}

module.exports = calculateTotalSpentByCategory;
