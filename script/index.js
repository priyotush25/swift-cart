// DOM Elements
const categoryContainer = document.getElementById("category-container");
const productContainer = document.getElementById("product-container");

// Global products array
let allProducts = [];

// ==================== Load Categories ====================
const loadCategory = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    displayCategory(data);
  } catch (err) {
    console.error("Error fetching categories:", err);
  }
};

// Display categories
const displayCategory = (categories) => {
  // Reset container
  categoryContainer.innerHTML = `<p class="font-medium btn btn-outline">All</p>`;

  categories.forEach((cat) => {
    categoryContainer.innerHTML += `
      <p class="font-medium btn btn-outline">${cat}</p>
    `;
  });
};

// ==================== Load Products ====================
const loadProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    allProducts = data; 
    displayProducts(data);
  } catch (err) {
    console.error("Error fetching products:", err);
  }
};

// Display products
const displayProducts = (products) => {
  productContainer.innerHTML = "";

  products.forEach((product) => {
    productContainer.innerHTML += `
      <div class="rounded shadow-sm border border-gray-50">
        <div class="rounded bg-gray-200 p-4 flex items-center justify-center">
          <img src="${product.image}" class="h-80 object-cover" />
        </div>
        <div class="p-4 space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-blue-500">${product.category}</span>
            <p class="text-gray-500">${product.rating.rate} <span>(${product.rating.count})</span></p>
          </div>
          <div>
            <h3 class="text-xl font-medium text-gray-800">${product.title}</h3>
            <p class="text-xl font-semibold mt-4">$ ${product.price}</p>
          </div>
          <div class="flex items-center justify-between">
            <button class="btn btn-primary" onclick="showDetails(${product.id})">Details</button>
            <button class="btn bg-blue-500 text-white">Add</button>
          </div>
        </div>
      </div>
    `;
  });
};

// ==================== Show Product Modal ====================
const showDetails = (id) => {
  const product = allProducts.find((p) => p.id === id);
  if (!product) return;

  document.getElementById("modalTitle").innerText = product.title;
  document.getElementById("modalImage").src = product.image;
  document.getElementById("modalDescription").innerText = product.description;
  document.getElementById("modalPrice").innerText = product.price;
  document.getElementById("modalCategory").innerText = product.category;

  my_modal_2.showModal();
};

// ==================== Category Filter ====================
categoryContainer.addEventListener("click", async (e) => {
  if (e.target.tagName.toLowerCase() !== "p") return;

  const category = e.target.innerText;

  // Remove active from all
  const allButtons = categoryContainer.querySelectorAll("p");
  allButtons.forEach((btn) => {
    btn.classList.remove("bg-blue-500", "text-white");
    btn.classList.add("btn-outline");
  });

  // Add active to clicked
  e.target.classList.add("bg-blue-500", "text-white");
  e.target.classList.remove("btn-outline");

  // Load products
  if (category === "All") {
    loadProducts();
  } else {
    loadProductsByCategory(category);
  }
});

// ==================== Load Products by Category ====================
const loadProductsByCategory = async (category) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = await res.json();
    allProducts = data; 
    displayProducts(data);
  } catch (err) {
    console.error("Error fetching products by category:", err);
  }
};

// ==================== Initialize ====================
loadCategory();
loadProducts();