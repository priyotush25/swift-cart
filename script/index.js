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

const loadProducts = () =>{
  fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => displayProducts(data))

}

loadProducts();

const displayProducts = (products) => {
  products.forEach(product => {

    console.log(product);

    productContainer.innerHTML += `
    
<div class="rounded shadow-sm border border-gray-50">
    
  <div class="rounded bg-gray-200 p-4 flex items-center justify-center">
    <img src="${product.image}" class="h-80 object-cover" />
  </div>

<div class="p-4 space-y-4">

  <div class="flex items-center justify-between">
    <span class="text-blue-600">${product.category}</span>
    <p class="text-gray-500">${product.rating.rate} <span>(${product.rating.count})</span></p>
  </div>

  <div>
    <h3 class="text-xl font-medium text-gray-600">${product.title}</h3>
    <p class="text-xl font-semibold mt-4">$ ${product.price}</p>
  </div>

  <div class="flex items-center justify-between">
    <button class="btn">Details</button>
    <button class="btn btn-primary text-white">Add</button>
  </div>
</div>

</div>
    
    `
  })

}