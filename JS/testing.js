/* async function jsonQuestions() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const { questions } = await response.json();
    console.log(questions);
  } catch (error) {
    console.error(`${error}`);
  }
}

function displayQuestions(questions) {
  const questionContainer = document.querySelector("#questionDiv");

  questions.forEach((questionData, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "questionDisplay";
    q;
  });
}

jsonQuestions();
 */
/* 
async function product() {
  try {
    const response = await fetch("./json/Product.json");
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const { products } = await response.json();
    displayingProducts(products);
    console.log(products);
  } catch (error) {
    console.error(`${error}`);
  }
}

function displayingProducts(products) {
  const prodContainer = document.querySelector("#prodDiv");

  products.forEach((productData) => {
    const theDiv = document.createElement("div");
    theDiv.className = "containerProd";
    theDiv.innerHTML = `
    <h3>${productData.title}</h3>
    <img src="${productData.thumbnail}"/>
    <p>$${productData.price}</p>
    `;
    prodContainer.appendChild(theDiv);
  });
}

product();
 */
let name = "TheQuickBrownFoxJumpedOverTheLazyDog";
console.log(name.charAt(Math.floor(Math.random() * name.length)));
