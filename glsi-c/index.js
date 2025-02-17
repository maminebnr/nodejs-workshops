const a = 20;
const b = 30;
const birthdate = 2001;

function getMyAge(birthdate){
    return 2025 - birthdate
}
if(b > a){
    console.log(getMyAge(birthdate))
}else{
    console.log("sorry for birth date to be less than " +birthdate)
}