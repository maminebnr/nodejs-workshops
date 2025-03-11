const a = 25;
const b = 35;
const birthdate = 2001;

function getMyAge(birthdate){
    return 2025 - birthdate;
}

if(b> a){
    console.log(getMyAge(birthdate))
}else{
    console.log("sorry!")
}