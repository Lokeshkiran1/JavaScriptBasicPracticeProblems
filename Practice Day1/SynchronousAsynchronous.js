//Asynchronous
console.log("Hii!");
setTimeout(()=>{
    console.log("hello");
},5000);
console.log("how are you");

let today=new Date().getDay();
let day=today===0?"sunday":today===1?"monday":today==2?"tuesday":today===3?"wednesday":today===4?"thursday":today===5?"friday":today===6?"saturday":"not exactly a realday";
console.log(day);