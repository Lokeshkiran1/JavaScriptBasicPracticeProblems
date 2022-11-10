let array=[1,2,3,4,5];
let fruits=["Apple","Banana","Orange","kiwi"];
// console.log(array);
// console.log(fruits.length);

// //let fr=fruits[2];
// //console.log(fr);

// console.log(fruits[fruits.length-1]);

// fruits.forEach((data,i) => {
//     console.log(data,i);
// });

// fruits.push("Mango");
// console.log(fruits);

// let l=fruits.pop();
// console.log("poped element is: "+l);

// let rf=fruits.shift();
// console.log("removed "+rf);

// let newlength=fruits.unshift("strawberry");
// console.log(newlength," "+fruits);

let pos=fruits.indexOf("Apple");
//console.log("index",pos);

//splice--------------------

// const fruit=["orange","mango","apple","grapes"];
// fruit.splice(1,0,"kiwi");
// console.log(fruit);

//slice----------------------------

// let text="hello hi";
// let afterSlice=text.slice(1,7);
// console.log(afterSlice);

const num=[1,2,3,4,5];
const numSlice=num.slice(1,4);
console.log(numSlice);//[2,3,4]

const numSlice1=num.slice(-3);
console.log(numSlice1);//3 4 5

//split---------------------------------

let text="hello hi";
let afterSlice=text.split(" ");
console.log(afterSlice);
console.log(afterSlice[1]);

//concat----------------------

const array1=["a","b","c"];
const array2=[1,2,3,4];
const array3=["@","$","%"];
const newArray=array1.concat(array2,array3);
console.log(newArray);

//join-----------------------

const fru=["kiwi","cherry"];
//let afterCov=fru.join(",");
let afterCov=fru.toString();
console.log(afterCov);