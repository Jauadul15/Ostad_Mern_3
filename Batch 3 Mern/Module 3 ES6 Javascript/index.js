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
//if else
let rashik2= {
    family: {
        vy: true,
        mother: true,
        father: true

    },
    friendss:{
        schhol:"nai",
        college:"nai"
    }
}
if(rashik2.family["mother"]===true){
    console.log('mother ase')
}
else if(rashik2.family["mother"]===false){
    console.log('mother nai')
}else{
    console.log('error')
}



//annomous function
let bn=function () {
    return "hi"
}
console.log(bn())

//array

let jodu=["fa","sa","saff"]
let fodu=["sda","sad","sadee"]
for(let item of jodu){
    console.log(item)
}

//array destructure

let bd=["dhaka","ctg","barishal","cumilla"]

let [,,,a]=bd

console.log(a)

//map
let newMap=new Map()
newMap.set('key1','bangladesh')
newMap.set('key2','india')
newMap.set('key3','nepal')
newMap.set('key4','bhutan')
newMap.set('key5','japan')
newMap.set('key6','china')

//console.log(newMap.values())
//console.log(newMap.keys())
//newMap.delete('key1')
//newMap.clear()
//console.log(newMap.get('key4'))
// for(let value of newMap.values()){
//     console.log(value)
// }
// for(let key of newMap.keys()){
//     console.log(key)
//}

if(newMap.has('key9')){
    console.log('yes')
}else{
    console.log("no")
}

//set
let newSet=new Set()
newSet.add("bd")
newSet.add("inda")
newSet.add("nepal")
newSet.add("bd")
newSet.add("maldiv")
newSet.add("hong")
//newSet.clear()
//newSet.delete('inda')
if(newSet.has('bd')){
    console.log("yes")
}else
{
    console.log("no")
}
//console.log(newSet.values())

