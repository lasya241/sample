let arr=[1,2,4]
let sqr= arr.map(num=>num*num);
console.log(sqr);

let arr1=[1,2,4]
let sqr1= arr1.filter(num=>num%2==0);
console.log(sqr1);

let arr2=[1,2,4]
let sqr2= arr2.reduce((acc, num) => acc + num, 0);
console.log(sqr2);

// let arr3=[1,4,9,2]
// let a1= arr3.sort();
// console.log(a1);

// let arr3=[1,2,3]
// let a1= arr3.reverse();
// console.log(a1);

let arr3=[1,4,9,2]
let a1= arr3.fill(10);
console.log(a1);

