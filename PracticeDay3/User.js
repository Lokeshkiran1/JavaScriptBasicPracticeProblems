export default class User{
    constructor(name,age){
        this.name=name
        this.age=age
    }
}

export function printName(user){
    console.log(`User name is: ${user.name}`);
}

export function printAge(user){
    console.log(`User is ${user.age} years old`);
}

//standard export
//export {printName,printAge};

//default export
//export default User;