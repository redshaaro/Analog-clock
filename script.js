let empty="";
let uCase="ABCDEFGHIGKLMNOPQRSTUVWXYZ";
let lCase="abcdefghijklmnopqrstuvwxyz";
let numbers="0123456789";
let symbols="!@#$%^&*()-=";

const plength=document.getElementById("len");
const uppercase=document.getElementById("up");
const lowercase=document.getElementById("low");
const number=document.getElementById("num");
const symbol=document.getElementById("symb");
const submit=document.getElementById("sub")
const password=document.getElementById("password");
submit.addEventListener("click",()=>{
    let inititalpassword=empty;
    (uppercase.checked)? inititalpassword+=uCase:"";
    (lowercase.checked)? inititalpassword+=lCase:"";
    (number.checked)? inititalpassword+=number:"";
    (symbol.checked)? inititalpassword+=symbol:"";
    password.value=generatepassword(plength.value,inititalpassword)})
    function generatepassword(l,inititalpassword){
        let pass="";
        for(let i=0; i<l;i++){
            pass+=inititalpassword.charAt(Math.floor(Math.random()*inititalpassword.length));

        }
        return pass;
    }


