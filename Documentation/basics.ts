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



