const convertTemp=function(temp,convertTo){
    let toUnit=convertTo??'F';
    let tempToConvert=Number(temp)??0;

    if(toUnit==='F'){
        let fahrenheit=(tempToConvert*9)/5+32;
        return `${fahrenheit}\u{00B0}F`;
    }else{
        let celsius=((tempToConvert-32)*5/9);
        return `${celsius}\u{00B0}C`;
    }
}
let today=36;
console.log(convertTemp(today,'C'));
