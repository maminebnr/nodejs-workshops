
function somme(a,b){
    return a +b 
}
//arrow function
const sommeTotal =(a,b)=> a+b
const randomFunction = (a,b)=>{
    const x = a +b
    const y = b-a
    return x+y
}
const a=20
const b = 30
//tenary operation 
if(a>b){
    console.log(a > b)
}else{
    console.log(a < b)
}
a>b ?console.log(a > b):console.log(a < b)
//regular expression
const firstName = "med"
const lastName ="amine"
console.log(firstName +""+ lastName)
console.log(`${firstName} ${lastName}`)

//spread object
const user = {
    firstUserName:"alex",
    lastName,
    age:24
}
console.log({...user,jobTitle:"Developer"}
)
//spread array 
const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9]
const arr3 = [...arr1,...arr2]

//Destructing the object
const {firstUserName,age}=user
console.log(firstUserName)

//destructing array 
const [c,d,e]=arr3
console.log(c,d,e)
