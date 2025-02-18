// function greetWithDate(name:string, date:Date){
//     console.log(`Hello ${name}. Today's date is ${date}`);
//     console.log(typeof(date));
// }
// // greetWithDate("Rajan", Date()) is not correct because Date() returns string but our function is accepting object of type date
// greetWithDate("Rajan", new Date());
function displayPoint(pt) {
    console.log("x = ".concat(pt.x, ", y = ").concat(pt.y));
}
displayPoint({ x: 2, y: 3 });
