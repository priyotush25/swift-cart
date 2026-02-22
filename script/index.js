const loadCategory = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data));
};

const displayCategory = (levels) => {
  const levelContainer = document.getElementById("container");
  levelContainer.innerHTML = "";

  levels.forEach((level) => {
    const btnDiv = document.createElement("div");

    btnDiv.innerHTML = `
        <button class="btn text-xl btn-outline outline-1 px-3 rounded-full">
            ${level}
        </button>
        `;

    levelContainer.appendChild(btnDiv);
  });
};

loadCategory();
