console.log("Hello ES6");

// TASK 2: VARIABLES (let) and scoping

console.log(dogo);
var dogo = "Akita";
console.log(dogo);
var dogo = "Shibe";
console.log(dogo);
var dogo = "Chow Chow";
console.log(dogo);

let cate = "British Shorthair";
console.log(cate);
cate = "Turkish Angora";
console.log(cate);

var dogo = "Akita";
function printBreed() {
  var dogo = "Cocker Spariel";
  console.log("inside " + dogo);
}

printBreed();
console.log("outside: " + dogo);

// var is available outside a scope but let is not, var is more of a global variable but the error is that it can be assigned multiple times without detection, let cannot be defined multiple times which is better... if you want the variable to be avialable globally you can use var
for (var i = 0; i < 2; i++) {
  var parrot = "Hey!";
}
console.log(parrot);
console.log(i);

// test 2
let age = 15;

for (let age = 1; age <= 10; age++) {
  console.log(age);
}

console.log(age);

// test 3
let myDog = "Jack Russell Terrier";
let shortLeggies = true;

if (shortLeggies) {
  let myDog = "Welsh Corgie";
  console.log(myDog);
} else {
  let myDog = "Border Collie";
  console.log(myDog);
}

console.log(myDog);

//  Variables (const) and Immutability
const painter = {
  name: "Van Gogh",
  nationality: "Dutch",
  paintings: ["The Starry Night", "Irises", "Almond Blossoms"],
};

Object.freeze(painter);
Object.freeze(painter.paintings);

// painter.birthDate = "March 30, 1853";
// painter.paintings.push("Something");

console.log(painter);
// Should print { name: 'Van Gogh', nationality: 'Dutch', paintings: [ 'The Starry Night', 'Irises', 'Almond Blossoms' ] }

/* function getSquaredValuesFactory(numbers) {
  var functions = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    var getSquaredValue = function () {
      return number * number;
    };

    functions.push(getSquaredValue);
  }
  return functions;
}

var numbers = [1, 2, 3, 4];
var squaredValuesFns = getSquaredValuesFactory(numbers);

 */

//  Destructuring
const recipe = {
  name: "Red Lentil Dahl",
  timeInMinutes: 30,
  ingredients: ["red lentils", "cumin", "turmeric"],
};

const { name: myName, ingredients: myIngredients } = recipe;

console.log(recipe, myName, myIngredients);
/* 
v
v
v
v
v
v
v
v
v
v
v
v
*/

// another assignment
const ingredients = {
  tea: "black",
  milk: "soy",
  sweetener: "honey",
  spices: ["ginger", "cardamom", "cinnamon", "nutmeg"],
};

// Destructure the parameters
function prepareChai({ tea, milk, sweetener, spices }) {
  console.log(
    "Mix the " +
      tea +
      " tea " +
      "with the " +
      spices +
      " in a small pot. " +
      "Add a cup of water and bring to boil. Boil for 2-3 min. " +
      "Add " +
      milk +
      " milk and " +
      sweetener +
      ". " +
      "Simmer for 3 min. Serve masala chai hot or warm!"
  );
}

prepareChai(ingredients);

const spices = ["cardomom", "turmeric", "cumin"];

const [spice1, ...theRest] = spices;
console.log(spice1, theRest);

/* 
v
v
v
v
v
v
v
v
v
v
v
v
*/

// TASK 5: Strings and Interpolation
const language = "English";
console.log(language.includes("g"));
console.log(language.startsWith("Eng")); // case sensitive
console.log(language.endsWith("sh")); // case sensitive
console.log(language.repeat(3));

const newNumbers = [1, 2, 3, 4, 5];
const oldnumbers = newNumbers.map((number) => {
  return number * 2;
});

console.log(oldnumbers);
