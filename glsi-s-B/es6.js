//var const let 
const pi = 3.14;
let x = 25;
let z = 20;

if(z>0){
    let x = 48;
    console.log(x)
}
console.log(x)
// tenary operator 
if(z>0){
    console.log("hello")
}else{
    console.log("bye")
}
z> 0 ?    console.log("hello"):    console.log("bye")

//arrow function 
function somme(x,y){
    return x + y 
}

const sommeTotal = (x,y)=> x+y 
//regular expression
const firstName = "ali"
const lastName = "ahmed"

console.log(firstName + " "+lastName)
console.log(`${firstName} ${lastName}`)

//spread
//object 
let user = {
    firstName,
    lastName,
    age:25,
    birthdate:2000
}
console.log({...user,job:"developer"})
user={...user,job:"developer"}
//array
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1,...arr2]
console.log(arr3)

