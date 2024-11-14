// Interview Questions 
// 01. What is the difference between slice and splice in JavaScript?

// The difference between SLICE and SPLICE in JavaScript is that slice() returns a new array containing the extracted elements, while splice() removes the elements from the original array and returns the removed elements.

// and also the slice() method does not change the original array, while the splice() method changes the original array.

// inside the splice() method, the first argument is the starting index, the second argument is the number of elements to remove, and the third argument is the new elements to add to the array.

// and in splice() method, the second argument is optional.

// 02. What is the difference between shift and unshift in JavaScript?

// the difference between shift() and unshift() in JavaScript is that shift() removes the first element from an array and returns that element, while unshift() adds one or more elements to the beginning of an array and returns the new length of the array.

// 03. Join method in JavaScript?

// the join() method in JavaScript is used to join all elements of an array into a string. The elements are separated by a specified separator. If no separator is specified, a comma is used by default. 
// ***and returns the array as a string.***

// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
