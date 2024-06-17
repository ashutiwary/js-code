const name = "Ashu"
const repoCount = 4

// console.log(name + repoCount + " Value"); //old pattern of concatenating strings

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`); //Modern Approach of concatenating

const gameName = new String ('Ashu-AT-com') // another method of creating string

console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('T'));

const newString = gameName.substring(0,3)
// console.log(newString);

const anotherString = gameName.slice(-8,  4)
// console.log(anotherString);

const newStringOne = "   Ashu       "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ashu.com/ashu%20tiwary"
console.log(url.replace('%20', '-'))
console.log(url.includes('ashu'));

console.log(gameName.split('-'));