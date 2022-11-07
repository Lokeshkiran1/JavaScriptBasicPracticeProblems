const getDay=function(){
    const days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
    const today=new Date().getDay();
    return days[today]
};
console.log(`Today is ${getDay()}`);
