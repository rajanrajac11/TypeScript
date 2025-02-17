// console.log("Hello world")
// class User{
//     name:string
//     age:number
//     constructor(name:string, age:number){
//         this.name = name
//         this.age = age
//     }
// }
// function RegularUser(user :User){
//     console.log(user.name)
// }
// const user : User = new User("Rajan", 20)
// RegularUser(user)
//------------------------
//another problem arises when export{} is not used
// function sum1(a: number, b: number):number{
//     return a+ b
// }
// console.log(sum1(1, 2))
//---------------------------
// const user3:object = {name:"Rajan", age:20}
// console.log(user3);
//-------------------------------------------------------------
// function in typescript
// function getValue(num: number):string | boolean{
//     if(num> 10){
//         return "Greater than 10"
//     }
//     return false
// }
// arrow function
// const getValue = (num:number):string | boolean| number=>{
//     if(num> 10){
//         return "Greater than 10"
//     }
//     return false
// }
// void return example
// function consoleError(msg:string):void{
//     console.log(msg);
// }
//never type
// never type can be used in function to indicate that the function is never returning any value
// can be used in function to indicate that the function is throwing an exception or terminating the program 
function throwError(msg) {
    throw new Error(msg);
}
throwError("error occurred");
// let a = getValue(2)
// export {}
