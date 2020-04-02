// const numbers = [1,2,3];
// console.log(numbers);

// const moreNumbers = new Array(5);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1,2);
// console.log(yetMoreNumbers);

//  const listItems = document.querySelectorAll('li');
//  console.log(listItems);

//  const arrayListItems = Array.from(listItems);
//  console.log(arrayListItems);

//  const hobbies = ['cooking', 'sports'];
//  const personalData = [30, 'max', {moredetail: []}];

//  const analyticsData = [[1,1.5], [5,-2]];

//  for (const data of analyticsData) {
//      for (const datapoints of data) {
//          console.log(datapoints);
//      }
//  }

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// //hobbies[5] = 'Reading'; rarely used
// console.log(hobbies);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// hobbies.splice(0, 1); // splice also returns the elements that it removed
// console.log(hobbies);

// hobbies.splice(-1, 1);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// //const storedResults = testResults.slice(0, 2); // can use negative numbers.
// const storedResults = testResults.concat([3.99, 2]); // will make a new array at a different location in memory

// testResults.push(5.91);

// console.log(storedResults, testResults);
// console.log(testResults.indexOf[1.5]);
// console.log(testResults.lastIndexOf[1.5]);
// console.log(testResults.includes(10.99)); // same as testResults.indexOf(10.99) !== -1

// const personData = [{name: 'max'}, {name: 'Manuel'}];
// console.log(personData.indexOf({name: 'Manuel'})); // because of the way objects work this will say there isn't anything in the array that is this same object.

// const manuel = personData.find((person, idx, persons) => {
//     return person.name === 'Manuel';
// });

// manuel.name = 'Anna'; // this will change the value in the array as well.

// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//     return person.name === 'Max';
// });

// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //     taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//     const priceObj = {index: idx, taxeAdjPrice: price * (1 + tax)};
//     taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// // const taxAdjustedPrices = prices.map((price, idx, prices) => {
// //     const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)};
// //     return priceObj;
// // });

// // console.log(prices, taxAdjustedPrices)

// const sum = prices.reduce(
//   (prevValue, curValue) => prevValue + curValue,
//   0
// );

// console.log(sum);

// const data = "new york;10.99;2000";

// const transformedData = data.split(";");
// transformedData[1] = +transformedData[1];
// console.log(transformedData);

// const nameFragments = ["Max", "Schwarz"];
// const name = nameFragments.join(" ");
// console.log(name);

// const copiedNameFragments = [...nameFragments];
// nameFragments.push("Mr");
// console.log(nameFragments, copiedNameFragments);

// console.log(Math.min(1, 5, -3));
// console.log(Math.min(...prices)); // console.log(Math.min(prices));

// const persons = [
//   { name: "Max", age: 30 },
//   { name: "Manuel", age: 31 }
// ];
// const copiedPersons = [...persons];
// const copiedPersons2 = persons.map(person => ({
//   name: person.name,
//   age: person.age
// })); // This is a way to stop the idea of copying the reference but instead copying the values only and the data only.
// persons.push({ name: "Anna", age: 29 });
// persons[0].age = 31; //This will affect copiedPersons as well because the spread operator copies the address of each element. So any edits to the objects will also affect the new array.

// console.log(persons, copiedPersons);

// const nameData = ["Jordan", "Graves", "Ruolan", 24];
// // const firstName = nameData[0];
// // const lastName = nameData[1];

// const [firstName, lastName, ...otherInformation] = nameData;
// console.log(firstName, lastName, otherInformation); //otherInformation will be displayed as an array.
