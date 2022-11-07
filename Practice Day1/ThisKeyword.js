'use strict'
const john={
    age:35,
    gender:'M',
    weight:78,
    height:175,
};
const sarah={
    age:28,
    gender:'F',
    weight:90,
    height:165,
};

const calcBmi=function(){
    return this.weight/(this.height/100)**2;
}

const calcBmr=function(){
    if(this.gender=='M'){
        return 12+this.age;
    }else{
        return 10+this.age;
    }
};

// john.calcBmi=calcBmi;
// console.log(john.calcBmi());

//call a function within the context of an object
console.log(`john's Bmi: ${calcBmi.call(john)}`);
console.log(`john's BMR : ${calcBmr.call(john)}`);

console.log(`sarah's Bmi: ${calcBmi.call(sarah)}`);
console.log(`sarah's BMR : ${calcBmr.call(sarah)}`);

//bind

const johnBmi=calcBmi.bind(john);
console.log(johnBmi());
