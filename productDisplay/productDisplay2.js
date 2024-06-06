/* async function displayingProducts() {
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

  products.forEach((productDetsData, index) => {
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
 */

function getUrl() {
  const query = window.location.search.substring(1).split("=")[1];
  product(query);
}

async function product(id) {
  try {
    const response = await fetch("./json/Product.json");

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const { products } = await response.json();

    const matching = products.filter((product) => product.id === Number(id));
    console.log(matching);
    displayingProducts(matching);
  } catch (error) {
    console.error(error);
  }
}
function displayingProducts(products) {
  /* const products = */
  const productContainer = document.querySelector("#productDetails");

  products.forEach((productData) => {
    const productDiv = document.createElement("div");
    productDiv.className = "prodContainer";
    productDiv.innerHTML = `
<h3>${productData.title}</h3>
<p>${productData.description}</p>
<br />
<p>
Current price: $${productData.price} Discounted price:
$${productData.discountPercentage}
</p>
<br />
<p>Rating: ${productData.rating}/5.0</p>
<br />
<p>Brand: ${productData.brand}</p>
<br />
<p>Category: ${productData.category}</p>
`;
    productContainer.appendChild(productDiv);
  });
}

window.onload = getUrl();
