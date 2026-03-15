const {student,
    bankAccount,
    withdraw,
    deposit,
    company,
    products,
    findExpensiveProducts} = require('./ObjectTask')

test("test student's name", ()=>{
    expect(student.name).toEqual("John Doe")
})

test("test student's course", ()=>{
    let studentCourses = ["Math", "Physics", "Computer Science"]
    let result = student.courses
    expect(result).toEqual(studentCourses)
})

test("test student's zip code", ()=>{
    expect(student.address.zip).toEqual(10001)
})

test("test student's age", ()=>{
    expect(student.age).toEqual(23)
})

test("test student's gpa", ()=>{
    expect(student.GPA).toEqual(3.8)
})

test("test bank account balance", ()=>{
    expect(bankAccount.balance).toEqual(700)
})

test("test bank account withdraw", ()=>{
    withdraw(200)
    expect(bankAccount.balance).toEqual(500)
})

test("test bank account withdraw and deposit", ()=>{
    withdraw(200)
    expect(bankAccount.balance).toEqual(300)
    deposit(1000)
    expect(bankAccount.balance).toEqual(1300)
    withdraw(2000)
    expect(bankAccount.balance).toEqual(1300)
})

test("test name of the second employee in company", ()=>{
    expect(company.employees[1].name).toEqual("Chris")
})

test("test the products higher than given threshold", ()=>{
    expect(findExpensiveProducts(products, 700)).toEqual(["Laptop", "Phone"])
})