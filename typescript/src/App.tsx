

import './App.css'

// interface User {
//   name:string,
//   id:number
// }
// const user :User= {
//   name:"Rajan",
//   id:25
// }

class User{
  name:string;
  id:number;

  constructor(name:string, id:number){
    this.name = name;
    this.id = id;
  }
}

class person {
  name:String
  age:number
  constructor(name:String, age:number){
    this.name = name;
    this.age = age
  }
}
function name(n:String, a:number){
  const person1 : person = new person(n, a);
  console.log(person1)
}

function App() {
  // console.log(typeof(user));
  name("Raj", 21)

  const user : User = new User("Rajan", 21)

  console.log(user);
  user.name ="Hari",
  user.id = 33;
  console.log(user)
  return (
    <>
      
    </>
  )
}

export default App
