const student = {
    name: "John Doe",
    age: 22,
    courses: ["Math", "Physics", "Computer Science"],
    address: {
        city: "New York",
        zip: 10001,
    }
}

console.log(student.name)
console.log(student.courses[1])
console.log(student.address.zip)

// number 2

student.age = 23
console.log(student.age)
student.GPA = 3.8;
function getDetails() {
    return student.name + " is " + student.age + " years old and has a GPA of " + student.GPA;
}

console.log(getDetails(student));

// number 3

const bankAccount = {
    owner: "Alice",
    balance: 500
}
function deposit(amount){
    bankAccount.balance = bankAccount.balance+ amount
}

function withdraw(amount){
    if(bankAccount.balance > amount) bankAccount.balance = bankAccount.balance - amount
}

deposit( 200)
console.log(bankAccount.balance)

withdraw(1000)
console.log(bankAccount.balance)


// number 4

const inventory = {
    apple: 10,
    banana: 5,
    orange: 8,
    mango: 12
};

for (let keys in inventory){
    console.log(`${keys}:  ${inventory[keys]}`);
}

let numberOfFruits = Object.values(inventory);
let totalFruits = 0
for (let number of numberOfFruits){
    totalFruits += number
}
console.log(totalFruits)


// number 5

const company = {
    name: "TechCorp",
    location: "San Francisco",
    employees: [{
        id: "001",
        name: "Dan",
        department: "Engineering"
    },{
        id: "002",
        name: "Chris",
        department: "Marketing"
    },{
        id: "003",
        name: "Brenda",
        department: "HR"
    },{
        id: "004",
        name: "John",
        department: "Engineering"
    }]
}

console.log(company.employees[1].name)

const {name,location,employees} = company
// console.log(name)
// console.log(location)

for(let employee of employees){
    console.log(`${employee.name} : ${employee.department}`)
}


// number 6

const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
    { id: 4, name: "Desktop", price: 700 }
];

function findExpensiveProducts(products, threshold){
    let productsAboveThreshold = []
    for (let product of products){
        if(product.price > threshold){
            productsAboveThreshold.push(product.name)
        }
    }
    return productsAboveThreshold
}

console.log(findExpensiveProducts(products, 700));

module.exports = {student, bankAccount, withdraw, deposit, company, products, findExpensiveProducts};