const a = 34;
const b = 28;
const birthDate = 2001 ;

function getMyAge(birthDate) {
    return 2025 - birthDate;
}

if(a > b){
    console.log(getMyAge(birthDate))
}else{
    console.log("sorry for you ")
}