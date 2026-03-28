
const PRODUCT_URL = 'https://fakestoreapi.com/products'

let productsList = document.querySelector(".productsContainer")
let searchProductForm = document.getElementById('search-product')
let allProducts = []
console.log(productsList.children, productsList)

const getProducts = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        allProducts = data
        displayProducts(data);
        console.log(data);
    } catch (error){
        console.log(error);
    }
}


getProducts(PRODUCT_URL);


const productDiv = document.querySelector('.productsContainer');


function displayProducts(products) {
    console.log(products);
    products.forEach((product) => {
        const {price, description, title, image, category} = product;
        productDiv.innerHTML += `
        <div class="products">
          <img src="${image}" alt="An Image">
          <div class="category"><span><b>${category}</b></span></div>
          <div class="titlePrice">
            <span class="productTitle">${title}</span>
            <span>&#8358 ${price} </span>
          </div>
          <span><i>${description}</i></span>
        </div>
        `

    })
}

searchProductForm.addEventListener('input', (event) => {
    event.preventDefault()
    console.log(allProducts)
    const searchValue = document.querySelector(".search").value.toLowerCase()

    const filtered = allProducts.filter(product => {
        return (
            product.title.toLowerCase().includes(searchValue) ||
            product.description.toLowerCase().includes(searchValue) ||
            product.price.toString().includes(searchValue)
        )
    })

    productDiv.innerHTML = ""
    displayProducts(filtered)
});

