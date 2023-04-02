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

let name=function (value) {
    return value;
}
console.log(name("Jauadul karim"))

//for loop
let i;
for (i=1;i<=10;i++){
    console.log(i)
}
let myArray=['jamal','kamal','rahim']
for(let oneName of myArray){
    console.log(oneName);
}
//object

let rashik={face:"good",cloth:true,religion:"islam"}
console.log(["religion"])

let rashik1={
    family:{
        vy:true,
        mother:true,
        father:true

    },
    friends:{
        school:false,
        college:false,
        university:false
    },
    IsGood:{
        behaviour:"good",
        manner:"good"
    }
}
for(let prop in rashik1.IsGood){
    //console.log(props+":"+ JSON.stringify(rashik1["IsGood"]))
    console.log(prop +":"+ rashik1.IsGood[prop])

}

//console.log(rashik1["friends"]["college"])