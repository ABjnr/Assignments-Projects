async function products() {
  try {
    const response = await fetch("./json/Product.json");

    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const { products } = await response.json();
    console.log(products);
    displayingProducts(products);
  } catch (error) {
    console.error = error;
  }
}

function displayingProducts(products) {
  const productContainer = document.querySelector("#productDisplay");

  products.forEach((productData) => {
    const productDiv = document.createElement("div");
    productDiv.className = "prodContainer";
    productDiv.innerHTML = `
    <a href="productDisplay2.html?id=${productData.id}">
    <h3>${productData.title}</h3>
    <img style="height: 250px; width: 350px" src="${productData.thumbnail}" /> 
    </a>
    <p>$${productData.price}</p>
       `;
    productContainer.appendChild(productDiv);
  });
}

products();
