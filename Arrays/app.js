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

const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
//const storedResults = testResults.slice(0, 2); // can use negative numbers.
const storedResults = testResults.concat([3.99, 2]); // will make a new array at a different location in memory

testResults.push(5.91);

console.log(storedResults, testResults);
console.log(testResults.indexOf[1.5]);
console.log(testResults.lastIndexOf[1.5]);
console.log(testResults.includes(10.99)); // same as testResults.indexOf(10.99) !== -1

const personData = [{name: 'max'}, {name: 'Manuel'}];
console.log(personData.indexOf({name: 'Manuel'})); // because of the way objects work this will say there isn't anything in the array that is this same object.

const manuel = personData.find((person, idx, persons) => {
    return person.name === 'Manuel'; 
});

manuel.name = 'Anna'; // this will change the value in the array as well.

console.log(manuel, personData);

const maxIndex = personData.findIndex((person, idx, persons) => {
    return person.name === 'Max';
});

console.log(maxIndex);

