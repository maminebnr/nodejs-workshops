const a = 27;
const b= 41;
const birthdate = 2001;

function getMyAge(birthdate){
    return 2025 - birthdate;
}
if(b>a){
    console.log(getMyAge(birthdate))
}else{
    console.log("sorry for birth date to be different")
}
