var a=10;
var a=50;
function varscope(){
    var a=5;
    var a=10;
    console.log("Inside function "+a);

    {
        console.log("inside block "+a);
    }
}

//varscope();

//console.log(a);

function letScope(){
    let a=10;
    {
        let a=20;
        console.log(a);
    }
    console.log(a);
}
letScope();
//console.log(a);

function f1(){
    var a=10;
}
//console.log(a);

for(let i=0;i<3;i++){
    console.log(i);
}
//console.log(i);

{
    const x=2;
    console.log(x);
}
//console.log(x);