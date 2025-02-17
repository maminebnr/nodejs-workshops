const a = 90;
const b = 100;
// the old one 
function somme(a,b){
    return a+b 
}
// arrow functions
const sommeTotal =(a,b )=>a+b

if(a>b){
    console.log("hello world")
}else{
    console.log("bye world")
}
// tenary operator 
a > b ?    console.log("hello world"):console.log("bye world")
//spread operator
//spread object 
const user = {
    name:"John",    
    lastName:"smith",
    jobTitle:"Developer"
}
console.log({...user,education:"software development"})
const arr1 = [1,2,3 ,4,5]
const arr2 = [7,8,9,10]
const arr3 =[...arr1,...arr2]

//destructing operator 
const {jobTitle}= user
console.log(jobTitle)
const [c,d,e]=arr3

let z = 26;

if(true){
    let z = 38;
    console.log(z)
}
console.log(z)