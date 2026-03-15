const prompt = require('prompt-sync')();

Checkout()

function Checkout() {
    let products = []
    let quantities = []
    let prices = []
    let amountPaid = 0

    let customerName = prompt("What is the Customer's name? ");
    let userResponse = ""

    while (userResponse !== "no"){
        let product = prompt("What is the Product Name? ");
        products.push(product);
        let quantity = prompt("How many pieces would you like to buy? ");
        quantities.push(quantity);
        let price = prompt("How much per unit? ");
        prices.push(price);

        userResponse = prompt("Add more Items(yes/no)? ").toLowerCase()
    }
    let totals = productTotal(quantities, prices)

    let cashierName = prompt("What is your name? ")
    let discount = prompt("How much discount will the customer get? ");

    console.log()

    generateInvoice(cashierName, customerName, products, quantities, prices, totals, discount)

    let subTotal = calculateSubTotal(totals)
    let discountAmount = calculateDiscount(subTotal, discount)
    let vatAmount = calculateVAT(subTotal)
    let bill = getBillTotal(subTotal, discountAmount, vatAmount)

    while (amountPaid < bill){
        amountPaid = prompt("How much did the customer give to you? ")
        if(amountPaid < bill){
            console.log("Insufficient Funds, please pay again")
        }
    }

    getReceipt(cashierName, customerName, products, quantities, prices, totals, discount, bill, amountPaid)
}

function generateInvoice(cashierName, customerName, products, quantities, prices, totals, discount){
    console.log("Generating Invoice...");
    console.log("SEMICOLON STORES\nMAIN BRANCH")
    console.log("LOCATION: 312, HERBERT MACAULAY WAY, SABO YABA, LAGOS.")
    console.log("TEL: 090123456789\nDATE: 27-02-2026")
    console.log("Cashier: ", cashierName)
    console.log("Customer Name: ", customerName)
    line()
    console.log("ITEM\tQTY\tPRICE\tTOTAL(NGN)")
    dash()

    for (let i = 0; i < products.length; i++){
        console.log(products[i],"\t",quantities[i],"\t",prices[i],"\t",totals[i])
    }

    dash()

    console.log("Sub Total:     ", calculateSubTotal(totals))
    console.log("Discount:      ", calculateDiscount(calculateSubTotal(totals),discount))
    console.log("VAT @7.50%:        ", calculateVAT(calculateSubTotal(totals)))
    let subTotal = calculateSubTotal(totals)
    let discountTotal = calculateDiscount(subTotal,discount)
    let vatTotal = calculateVAT(subTotal)

    line()

    console.log("Bill Total:        ", getBillTotal(subTotal,discountTotal,vatTotal))

    line()

    console.log("THIS IS NOT A RECEIPT KINDLY PAY ", getBillTotal(subTotal,discountTotal,vatTotal))

    line()
}

function getReceipt(cashierName, customerName, products, quantities, prices, totals, discount, billTotal, amountPaid){
    console.log("SEMICOLON STORES\nMAIN BRANCH")
    console.log("LOCATION: 312, HERBERT MACAULAY WAY, SABO YABA, LAGOS.")
    console.log("TEL: 090123456789\nDATE: 27-02-2026")
    console.log("Cashier: ", cashierName)
    console.log("Customer Name: ", customerName)
    line()
    console.log("ITEM\tQTY\tPRICE\tTOTAL(NGN)")
    dash()

    for (let i = 0; i < products.length; i++){
        console.log(products[i],"\t",quantities[i],"\t",prices[i],"\t",totals[i])
    }

    dash()

    console.log("Sub Total:     ", calculateSubTotal(totals))
    console.log("Discount:      ", calculateDiscount(calculateSubTotal(totals),discount))
    console.log("VAT @7.50%:        ", calculateVAT(calculateSubTotal(totals)))
    let subTotal = calculateSubTotal(totals)
    let discountTotal = calculateDiscount(subTotal,discount)
    let vatTotal = calculateVAT(subTotal)

    line()

    console.log("Bill Total:        ", getBillTotal(subTotal,discountTotal,vatTotal))
    console.log("Amount Paid:       ", amountPaid)
    console.log("Balance:       ", getBalance(getBillTotal(subTotal,discountTotal,vatTotal), amountPaid))

    line()

    console.log("   THANK YOU FOR YOUR PATRONAGE!!!!    ")
    line()
}

function productTotal(productQuantities, productPrices) {
    let totals = []
    let total = 0

    for(let i = 0; i < productQuantities.length; i++){
        total = productPrices[i] * productQuantities[i];
        totals.push(total);
    }
    return totals;
}

function calculateSubTotal(totals){
    let subTotal = 0;
    for(let total of totals){
        subTotal += total;
    }
    return subTotal;
}

function calculateDiscount(subTotal, discount){
    discount = discount / 100
    return subTotal * discount;
}

function calculateVAT(subTotal){
    let vatAmount = 0.075
    return subTotal * vatAmount
}

function getBillTotal(subTotal, discount, vatAmount){
    let bill = subTotal + vatAmount - discount
    return bill;
}

function getBalance(billTotal, amountPaid){
    return amountPaid - billTotal
}

function line(){
    console.log("=======================================================")
}

function dash(){
    console.log("--------------------------------------------------------")
}



module.exports = {productTotal,calculateSubTotal,calculateDiscount, calculateVAT, getBillTotal, getBalance}