//strict mode

"use strict";

function haha() {
   let name="jauad"
    return name;
}
console.log(haha())

//spread operator
//array er moddhe dhukai deya new value
let poorCountry=["bd","afgan","pak"];
let richCountry=["usa","canada","uk"];
let richCountryFinal=[...poorCountry,"usa","canada","uk"];
console.log(richCountryFinal);

//without spread operator push method
let poorCountry1=["bd","afgan","pak"];
let richCountry2=["usa","canada","uk"];
richCountry2.push(poorCountry1)
console.log(richCountry2);

//rest parameter
function cal(...numbers) {
    let sum = 0;
    for (let i of numbers){
         sum =sum +i;
    }
console.log(sum)
}
cal(1,2,43,5,6)

function calculation(...numbers) {
    let sum=0;
    for (let i of numbers){
        sum +=i;
    }
    console.log(sum)
}
calculation(31,4234,5,56,6,6)

//dynamic function

var name=function (value) {
    return value;
}
console.log(name("jauadul karim"))