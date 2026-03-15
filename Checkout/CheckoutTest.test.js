const {productTotal, calculateSubTotal, calculateDiscount, calculateVAT, getBillTotal, getBalance} = require('./Checkout');

test("test for a product total", () =>{
    let prices = [100]
    let quantity = [5]
    expect(productTotal(prices, quantity)).toEqual([500])
})

test("test for total prices of three products", () =>{
    let prices = [100, 200, 500]
    let quantity = [5, 2, 2]
    expect(productTotal(quantity,prices)).toEqual([500, 400, 1000])
})

test("test for subtotal of three products", () =>{
    let prices = [100, 200, 500]
    let quantity = [5, 2, 2]
    expect(productTotal(quantity,prices)).toEqual([500, 400, 1000])
    expect(calculateSubTotal(productTotal(quantity, prices))).toEqual(1900)
})

test("test for discount of 10% on the subtotal of three products", () =>{
    let prices = [100, 200, 500]
    let quantity = [5, 2, 2]
    expect(productTotal(quantity,prices)).toEqual([500, 400, 1000])
    expect(calculateSubTotal(productTotal(quantity, prices))).toEqual(1900)
    let subTotal = calculateSubTotal(productTotal(quantity, prices))
    let discount = 10
    expect(calculateDiscount(subTotal, discount)).toEqual(190)

})

test("test for VAT amount on the subtotal of products", () =>{
    let prices = [100, 200, 500]
    let quantity = [5, 2, 2]
    expect(productTotal(quantity,prices)).toEqual([500, 400, 1000])
    expect(calculateSubTotal(productTotal(quantity, prices))).toEqual(1900)
    expect(calculateVAT(calculateSubTotal(productTotal(quantity, prices)))).toEqual(142.50)
})

test("test for bill total of three products with a discount of 10%", () =>{
    let prices = [100, 200, 500]
    let quantity = [5, 2, 2]
    expect(productTotal(quantity,prices)).toEqual([500, 400, 1000])
    expect(calculateSubTotal(productTotal(quantity, prices))).toEqual(1900)
    expect(calculateVAT(calculateSubTotal(productTotal(quantity, prices)))).toEqual(142.50)
    let subTotal = calculateSubTotal(productTotal(quantity, prices))
    let vatAmount = calculateVAT(calculateSubTotal(productTotal(quantity, prices)))
    let discount = calculateDiscount(subTotal, 10)
    expect(getBillTotal(subTotal,discount,vatAmount)).toEqual(1852.5)
})

test("test for balance on bill of three products with a discount of 10% after paying 2k", () =>{
    let prices = [100, 200, 500]
    let quantity = [5, 2, 2]
    expect(productTotal(quantity,prices)).toEqual([500, 400, 1000])
    expect(calculateSubTotal(productTotal(quantity, prices))).toEqual(1900)
    expect(calculateVAT(calculateSubTotal(productTotal(quantity, prices)))).toEqual(142.50)
    let subTotal = calculateSubTotal(productTotal(quantity, prices))
    let vatAmount = calculateVAT(calculateSubTotal(productTotal(quantity, prices)))
    let discount = calculateDiscount(subTotal, 10)
    let billTotal = getBillTotal(subTotal,discount,vatAmount)
    expect(billTotal).toEqual(1852.5)
    expect(getBalance(billTotal, 2000)).toEqual(147.5)
})