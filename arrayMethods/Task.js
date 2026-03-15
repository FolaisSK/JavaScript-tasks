function getTestScores(numbers) {
    return numbers.filter((number) => (number >= 70))
}

function addToScores(numbers) {
    return numbers.map((number) => (number + 5))
}


function squareNumbers(numbers) {
    return numbers.map(number => (number * number))
}

function getAfternoonTime(times){
    return times.filter((time) => (time.charAt(5) === 'P'))
}

function calculateTotal(expenses){
    let sum = 0;
    for (const expensesKey in expenses) {
        sum += expenses[expensesKey];
    }
    return sum;
}

function gradeScores(scores){
    return scores.map((grade) => (grade >= 90 ? "A" : grade >= 80 ? "B" : grade >= 70 ? "C" : grade >= 60 ? "D" : grade >= 0 ? "F" : "Negative"))
}

function getHealthyFoods(shoppingList){
    let healthyItems = []
    shoppingList.forEach((item) => {
        if (item.isHealthy === true) healthyItems.push(item.name);
    })
    return healthyItems;
}

function getExpensiveItems(orders){
    let updatedOrders = getTotalPrice(orders)
    console.log(updatedOrders)
    //return orders;
}

function getTotalPrice(orders){
    let total = 0
    let totals = []

    for(let order = 0; order < orders.length; order++) {
        total = 0
        for(let product = 0; product < orders[order].items.length; product++) {
            total += orders.items[product].price * orders.items[product].quantity
        }
        orders[totalCost] = total
        totals.push(total)
    }
    console.log(totals)
    //return orders;
    return totals;
}


module.exports = {getTestScores, addToScores, squareNumbers, getAfternoonTime, calculateTotal, gradeScores, getHealthyFoods, getExpensiveItems, getTotalPrice};