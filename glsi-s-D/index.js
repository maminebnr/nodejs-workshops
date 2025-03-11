const a = 23
const b = 37
const birthDate = 2001
let z = 2024

function getMyAge(birthdate){
    return 2025 - birthdate
}

const somme =(x,y) => x + y //arrow function 

//tenary operator 
z === 2024 ? console.log(true) : console.log(false)

//spread operator
const user = {
    name:"ali",
    age:20,
    birthdate:2007,
    cin:123456
}
console.log({...user,job:"developer"})
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1,...arr2]

//destructing 
const {name}=user

2024 == '2024'
2024 === '2024'


//regular expression
const ch = `${user.name} ${user.cin}`

if(a<b){
    let z = 9098
    console.log(z)
}
console.log(z)

if(a < b){
    console.log(getMyAge(birthDate))
}else{
    console.log('sorry for birth date to be negative')
}