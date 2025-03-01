// function greetWithDate(name:string, date:Date){
//     console.log(`Hello ${name}. Today's date is ${date}`);
//     console.log(typeof(date));
// }
// // greetWithDate("Rajan", Date()) is not correct because Date() returns string but our function is accepting object of type date
// greetWithDate("Rajan", new Date());



//object in function 
// function returnSum(pt: {x:number, y:number}): number{
//     return pt.x+ pt.y
// }
// console.log("The sum is "+ returnSum({x:2, y:3}));



//passing object in a function where object might not have some key
// function returnName(obj: {first:string, last?:string}){

//     if(obj.last != undefined){
//         console.log("Your last name is " + obj.last.toUpperCase())
//     }
//     //modern js syntax
//     console.log(obj.last?.toUpperCase())
// }
// returnName({first:"Rajan Raj", last:"Acharya"});
// returnName({first:"Rajan"});



//type aliases
// type Point = {
//     x:number
//     y:number
// }
// function displayPoint (pt:Point){
//     console.log(`x = ${pt.x}, y = ${pt.y}`)
// }
// displayPoint({x:2, y:3})



// function padRight(padding:number | string, input: string):string{
//     if(typeof padding === "number"){
//         //error is occuring here while converting into js
//         return " ".repeat(padding) + input
//     }
//     return padding+input;
// }
// console.log(padRight(2, "Hello"));



//random
// let str :string[]
// str = ["Rajan"]
// console.log(typeof str);



// function printAll(str: string | string[] | null){
//     if(str && typeof str==="object"){
//         for(const s of str){
//             console.log(s);
//         }
//     }
//     else if (typeof str ==="string"){
//         console.log(str);
//     }
// }
// printAll(["Rajan", "Raj", "Acharya"])



//-----------in Operator-----------
// type Person = {
//     name:string,
//     age:number
// }
// function showDetails(per: Person){
//     if("name" in per){
//         console.log(per.name);
//     }
// }
// const person1 : Person = {name:"Ram", age:21}
// showDetails(person1)



//-----------in operator in documentation example-------
type Bird = {fly:()=>void}
type Fish = {swim:()=>void}
function move(animal: Bird | Fish){
    ("swim" in animal)? animal.swim():animal.fly() 
}
const animal : Bird = {
    fly :():void=>{
        console.log("Fly");
    }
}
move(animal)