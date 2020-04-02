// const ids = new Set([1, 2, 3]);
// ids.add(2);
// console.log(ids);

// // for (const entry in ids.entries()) {
// //   console.log(entry);
// // }

// for (const value in ids.values()) {
//   console.log(value);
// }

// const person1 = { name: "Max" };
// const person2 = { name: "Manuel" };

// const personData = new Map([
//   [person1, [{ date: "yesterday", price: 10 }]]
// ]);

// personData.set(person2, [
//   { date: "two weeks ago", price: 100 }
// ]);

// console.log(personData);
// console.log(personData.get(person1));

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// for (const key of personData.keys()) {
//   console.log(key);
// }

// for (const value of personData.values()) {
//   console.log(value);
// }

// console.log(personData.size);

let person = { name: "Max" };
const persons = new WeakSet();
persons.add(person);

// .. some operations
//person = null;

console.log(persons);

// In a weakset if you clear the object that you added to the weakset it will clear the data in th weakset, but not in a regular set.

const personData = new WeakMap();
personData.set(person, "extra information");

person = null;

console.log(personData);

//Weakset and WeakMap do the same for garbage collection.
