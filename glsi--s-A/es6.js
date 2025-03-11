const pi = 3.14 //value constant for pi 
//let use case example
let x = 5
let z = 10
if(x > pi){
    let x = 18
    console.log(x)
}
console.log(x)
//tenary operator 
if(x>10){
    console.log("hello")
}else{
    console.log("bye!")
}
x>10?console.log("hello"):console.log("bye!")

//arrow function
function somme(x,y){
    return x+y
}
const sommeTotal =(x,y)=> x+y

//regular expression
const firstName ="ali"
const lastName = "ben mohamed"
console.log(firstName+" "+lastName)
console.log(`${firstName} ${lastName}`)

//spread 
//object
const user={
    firstName,
    lastName,
    age:30,
    address:"tunis",
}
console.log({...user,job:"developer"})

//array 
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1,...arr2]

//destructing
//object
const {age,address}=user

//array
const [a,b,c]=arr3

//mapping array 
const data = arr3.map(item => item *3)
console.log(data)



