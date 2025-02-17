const a = 90;
const b = 100;
const birthDate = 2000;


const getMyAge = (birthDate) => {return 2025 - birthDate}

if(b > a){
    console.log(getMyAge(birthDate))
}else{
    console.log('sorry trying to get age of ' +birthDate)
}