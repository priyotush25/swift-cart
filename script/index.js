const categoryContainer = document.getElementById("category-container");
const productContainer = document.getElementById("product-container");

const loadcateory = () =>{
  fetch("https://fakestoreapi.com/products/categories")
  .then(res => res.json())
  .then(data => console.log(data))
}

loadcateory();