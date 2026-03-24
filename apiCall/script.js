const PRODUCT_URL = 'https://dummyjson.com/products';

function getProducts(url) {
    fetch(url)
        .then((response) => (response.json()))
        .then((data)=> {console.log(data)})
        .catch((error)=> {console.log(error)});
}

const getProductsTwo = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayProducts(data.products);
        console.log(data);
    } catch (error){
        console.log(error);
    }
}

//getProducts(PRODUCT_URL);
getProductsTwo(PRODUCT_URL)

const productDiv = document.querySelector('.productsContainer');


function displayProducts(products) {
    products.forEach((product) => {
        const {price, description, title, images} = product;
        productDiv.innerHTML += `
        <div class="products">
          <img src="${images[0]}" alt="An Image">
          <div class="titlePrice">
            <span>${title}</span>
            <span>&#8358 ${price} </span>
          </div>
          <span>${description}</span>
        </div>
        `

    })
}