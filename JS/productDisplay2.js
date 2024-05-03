async function displayingProducts() {
  try {
    const response = await fetch("./json/Product.json");
    if (!response.ok) {
      throw new Error("Something went wrong.");
    }
    const { products } = await response.json();
    console.log(products);
    productDetails(products);
  } catch (error) {
    console.error(error);
  }
}

function productDetails(products) {
  const detailsContainer = document.querySelector("#productDetails");

  products.forEach((productDetsData) => {
    const detailsContainer2 = document.createElement("div");
    detailsContainer2.className = "detsCont";
    detailsContainer2.innerHTML = `
    <h3>${productDetsData.title}</h3>
    <p>${productDetsData.description}</p>
    <br />
    <p>
      Current price: $${productDetsData.price} Discounted price:
      $${productDetsData.discountPercentage}
    </p>
    <br />
    <p>Rating: ${productDetsData.rating}/5.0</p>
    <br />
    <p>Brand: ${productDetsData.brand}</p>
    <br />
    <p>Category: ${productDetsData.category}</p>
    `;
    detailsContainer.appendChild(detailsContainer2);
  });
}

displayingProducts();
