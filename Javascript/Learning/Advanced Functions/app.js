// Pure Function
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 5));
console.log(add(12, 15));

// impure function
function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

// this function has a side effect because it affects something outside the function
function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

const hobbies = ["Sports", "Cooking"];

function printHobbies(h) {
  h.push("NEW HOBBY");
  console.log(h);
}

printHobbies(hobbies);

let multiplier = 1.1;

// Factory Functions are functions that return functions.
// this is an example of factory function
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    console.log(multiplier);
    return amount * tax * multiplier;
  }

  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

let userName = "Jordan";

function greetUser() {
  let name = userName;
  console.log("Hi " + name);
}

userName = "Ruolan";

greetUser();

function powerOf(x, n) {
  //   if (n === 0) {
  //     return 1;
  //   }
  //   if (n === 1) {
  //     return x;
  //   }
  //   return x * powerOf(x, n - 1);

  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));

const myself = {
  name: "Max",
  friends: [
    {
      name: "Manuel",
      friends: [
        {
          name: "Chris",
        },
      ],
    },
    {
      name: "Julia",
    },
  ],
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }

  return collectedNames;
}

console.log(getFriendNames(myself));
