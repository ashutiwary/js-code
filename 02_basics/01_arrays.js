// array

const myArr = [0,1,2,3,4,"Ashu"]
const myHeroes = ["Shaktiman","doga","naagraj"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[0]);

// Array methods

// myArr.push(6) //Insert new value to array
// myArr.pop() //remove last element of array

// myArr.unshift(9) //add this element in first position
// myArr.shift(9) //Remove element in first position

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// slice,splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3) //Splice manuplate original array
console.log("C ", myArr);
console.log(myn2);