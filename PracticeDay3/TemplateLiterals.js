//ES6 features----------------------->

//Template literals-------------------

const getDay=function(){
    const days=['sunday','Monday','tuesday','wednesday','thursday','friday','saturday'];
    const today=new Date().getDay();
    return days[today];
};
console.log(`Today is ${getDay()}`);

//multiline strings------------------

let lines=`the week day is,
        ${getDay()} and
        there are 7 days
        and one of is ${getDay()} `;
console.log(lines);

//spread operator-------------------

var arr1=[21,22,23];
var arr2=[54,69,87];
var arr3=[...arr1,...arr2];

var arr4=arr1.concat(arr2);

console.log(arr3);

console.log(arr4);


//cloning of objects-----------

var obj1={
    name:"manu",
    age:23,
}
var obj2={
    name:"seeta",
    age:22,
}

var cloneObj={...obj2};
//console.log(cloneObj);

//merging of two objects----------

var mergeObj={ ...obj1, ...obj2 };
console.log(mergeObj);

//destructering ------------>>

let arr=[100,200,300,400,500,600];
let[a,b, ,c,...rest]=arr;
console.log(a,b,c,rest);


({a,b,...rest}={a:10,b:20,c:30,d:40});
console.log(a);
console.log(b);
console.log(rest);



const user={
    number:42,
    isVerified:true,
}
const{number,isVerified}=user;
console.log(number,isVerified);

//ES7 features---------------------------

//Array.prototype.includes()

let numbers=[1,2,3,4,5];
if(numbers.includes(2)){
    console.log('Array contains value');
}else{
    console.log('not contain');
}


// power of

let cube=x=>x**3;
cube(2);


//ES9 features-------------

//Async literals-

function asyncIterator() {
    const array = [1, 2];
    return {
      next: function() {
        if (array.length) {
          return Promise.resolve({
            value: array.shift(),
            done: false
          });
        } else {
          return Promise.resolve({
            done: true
          });
        }
      }
    };
  }
  
  var iterator = asyncIterator();
  
  (async function() {
      await iterator.next().then(console.log); // { value: 1, done: false }
      await iterator.next().then(console.log); // { value: 2, done: false }
      await iterator.next().then(console.log); // { done: true }
  })();

//promise prototype finally

function testFinally() {
    return new Promise((resolve,reject) => resolve())
  }
  
  testFinally().then(() => console.debug("resolved")).finally(() => console.debug("finally"))
  // resolved
  // finally


