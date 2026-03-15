const {getTestScores, addToScores, squareNumbers, getAfternoonTime, calculateTotal, gradeScores, getHealthyFoods, getExpensiveItems, getTotalPrice} = require('/arrayMethods/Task')

test("scores greater than or equal to 70", ()=>{
    let scores = [45,77,90,43,66,90,81,29,75,82]
    let answer = [77,90,90,81,75,82]
    expect(getTestScores(scores)).toEqual(answer);
})

test("add 5 to student scores", () =>{
    let scores = [85, 92, 78, 88, 95]
    let result = [90,97,83,93,100]
    expect(addToScores(scores)).toEqual(result)
})

test("square the numbers", ()=>{
    let numbers = [2, 4, 6, 8, 10]
    let answer = [4,16,36,64,100]
    expect(squareNumbers(numbers)).toEqual(answer)
})

test("get afternoon times", () => {
    let times = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM","5:00 PM"]
    let answer = ["1:00 PM", "3:00 PM", "5:00 PM"]
    expect(getAfternoonTime(times)).toEqual(answer)
})

test("calculate total amount spent", () =>{
    const expenses = {
        "groceries": 150,
        "dining out": 100,
        "transportation": 50,
        "entertainment": 80
    }

    let answer = 380
    expect(calculateTotal(expenses)).toEqual(answer)
})

test("assign grade to scores", () =>{
    let studentScores = [95, 78, 85, 60, 45, 92];
    let grades = ["A", "C", "B", "D", "F", "A"]
    expect(gradeScores(studentScores)).toEqual(grades)
})

test("get healthy foods from shopping list", () => {
    let shoppingList = [
        { name: 'Apples', category: 'Fruits', isHealthy: true },
        { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
        { name: 'Carrots', category: 'Vegetables', isHealthy: true },
        { name: 'Chocolate Bars', category: 'Sweets', isHealthy: false },
        { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
        { name: 'Soda', category: 'Beverages', isHealthy: false }
    ];
    let answer = ['Apples', 'Carrots', 'Greek Yogurt']
    expect(getHealthyFoods(shoppingList)).toEqual(answer)
})

test("get items priced over 100", () => {
    let orders = [
        { id: 1, items: [{ price: 25, quantity: 2 }, { price: 15, quantity: 3 }] },
        { id: 2, items: [{ price: 100, quantity: 1 }, { price: 25, quantity: 2 }] },
        { id: 3, items: [{ price: 30, quantity: 1 }] },
    ];
    //console.log(getExpensiveItems(orders));
    getTotalPrice(orders);
    //expect(getExpensiveItems(orders)).toEqual(orders);
})

test("items total price", () => {
    let orders = [
        { id: 1, items: [{ price: 25, quantity: 2 }, { price: 15, quantity: 3 }] },
        { id: 2, items: [{ price: 100, quantity: 1 }, { price: 25, quantity: 2 }] },
        { id: 3, items: [{ price: 30, quantity: 1 }] },
    ];
    let answer = [95,150,30]
    expect(getTotalPrice(orders)).toEqual(answer)
})
