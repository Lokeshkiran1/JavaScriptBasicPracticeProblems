let point1={
    x:4,
    y:5
}
let point2={
    x:3,
    y:4
}
// function calcDistance(p1,p2){
//     return Math.hypot(p2.x-p1.x,p2.y-p1.y);
// }
const calcDistance=new Function(
    'p1',
    'p2',
    'return Math.hypot(p2.x-p1.x,p2.y-p1.y)'
);
console.log(`distance between point1 and point2 is ${calcDistance(point1,point2)}`);