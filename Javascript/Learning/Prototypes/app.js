class AgePerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgePerson {
  name = "Max";

  constructor() {
    super();
    this.age = 30;
  }

  greet() {
    console.log(
      "Hi, I am " +
        this.name +
        " and I am " +
        this.age +
        " years old."
    );
  }
}

// this is another way to make a person Class with a constructor function
// function Person() {
//   this.age = 30;
//   this.name = "Max";
//   this.greet = function () {
//     console.log(
//       "Hi, I am " +
//         this.name +
//         " and I am " +
//         this.age +
//         " years old."
//     );
//   };
// }

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

console.dir(Person);
//With the above function for Person() you need to have new Person() otherwise it will look at it like a function
const person = new Person();
person.greet();
person.printAge();
console.log(person.__proto__);
