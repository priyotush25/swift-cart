const categoryContainer = document.getElementById("category-container");
const productContainer = document.getElementById("product-container");

const loadCategory = () =>{
  fetch("https://fakestoreapi.com/products/categories")
  .then(res => res.json())
  .then(data => displayCategory(data))
}

loadCategory();

const displayCategory = (category) =>{
  category.forEach(element => {
    categoryContainer.innerHTML += `
    
    <p class="btn btn-outline font-medium">${element}</p>
    
    `
  });
}