// var test=(a,callback)=>{
//     console.log(a);
//     callback();
// }
// var demo=()=>{
//     console.log("Hello");
// }
// test(2,demo);

const posts=[
    {title:'Post One',body:'This is post one'},
    {title:'Post Two',body:'This is post two'}
];

function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output=post.title;
            console.log(output);
        });
    },1000);
}

 function createPost(post,callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

//getPosts();

createPost({title:'Post Three',body:'This is post three'},getPosts);