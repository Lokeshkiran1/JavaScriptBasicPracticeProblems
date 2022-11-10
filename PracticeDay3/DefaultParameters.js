const average=function(a=0,b=0){
    return (a+b)/2;
};
console.log(average(4,8));



const calcBmi=function(w=60,h=160){
    return{
        w,
        h,
        bmi:w/(h/100)**2,
    }
}
console.log(calcBmi(50,180));