// function a(){
//     console.log(b);
// }
// var b=100;
// a();

function a(){
    var b=100;
    c();
    function c(){
        console.log(b);
    }
}
a();
console.log(b);
