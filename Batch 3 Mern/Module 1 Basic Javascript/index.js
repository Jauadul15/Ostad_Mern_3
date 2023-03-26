//First js

console.log("Hello world")

//variable
var x=10;
var y=11;
var z=x+y;
console.log(z)

//if Else ,,if else if
var  age=18;
if(age>0 && age<18){
    console.log("Child")
}else{
    console.log("Adult")
}
//if else if

let Age=80;
if(Age>0 && Age<18){
    console.log("Child")
}else if(Age>=18 && Age<50){
    console.log("adult")
}else if(Age>=50 && Age<70){
    console.log("Full Adult")
}else{
    console.log("Bura")
}

//Switch
let mark=95;
switch (true){
    case (mark<=0 && mark>32):
        console.log("F");
        break;
    case (mark>=33 && mark<40):
        console.log("D");
        break;

    case (mark>=40 && mark<50):
        console.log("C");
        break;
    case (mark>=50 && mark<60):
        console.log("B");
        break;
    case (mark>=60 && mark<70):
        console.log("A-");
        break;
    case (mark>=70 && mark<80):
        console.log("A");
        break;
    case (mark>=80 && mark<100):
        console.log("A+");
        break;
    default:
        console.log("No Grade")
}


//for loop

let i;
for(i=0;i<10;i++){
    console.log("My name is JAuad")
}
//while loop

let p=0;
while (p<10){
    console.log(p)
    p++;
}

//do While loop

var q=20;
do {
    console.log(q);
    q++;
}
while (q<25)


//for in loop @ for in loop in a array

var khana=["alu","morich","peyaj"]

for(var item in khana){
    console.log(khana[item]);
}

//function

function myfun() {
    var x=2,y=5;
    z=x+y;
    console.log(z)
}
myfun()

function my(x,y) {
    z=x+y;
    console.log(z)
}
my(10,20)

function myfun1(name) {
    console.log(name)

}myfun1("Jauadul karim Rashik")

function n1() {
    return "rashi";
}var newvalue=n1()+"K";
console.log(newvalue)

//object
var myDetails={
    name:"jauadul karim",
    class:10,
    Adult:true,
}
console.log(myDetails['class'])


//array

var house=["ma","baba","ami","vy"]
//array theke value tene ber kore show kora sequense onujaiyi
var m;
for(m=0;m<house.length;m++){
    console.log(house[m])
}

//for in loop in object

var myDetail={
    name:"jauadul karim",
    class:10,
    Adult:true,
}
for(var item in myDetail){
    console.log(myDetail[item])
}

//array concate
var kk=['a','b','c'];
var cc=['v','r','t']
var result = kk.concat(cc);
console.log(result);

//array form
//string k every word alada kore array kore show kore aitai form er kaj
var arr=Array.from("Jauadul Karim")
//console.log(arr);
console.log(arr[4]);

//array filter

var arrayfilter=[34,545,76,768,879,67];

var arrayresult=arrayfilter.filter(function (item){

    return item<100;
})
console.log(arrayresult);
//array find method

var ar=[432,56,76,76,8]
var resutl=ar.find(function (value){
    return value<77
})
console.log(resutl);
// array find index method
//jeita value shb cheye choto 70 er first e jei index thakbe oitar oita e output hbe
var kala=[32,56,76,76,8]
var res=kala.findIndex(function (value){
    return value<70
})
console.log(res);

//array foreach
//array er bhitor theke element gula ekta ekta kore ber kore ana...

var kala=[32,56,76,76,8]
kala.forEach(function (item){
    console.log(item);
})
//array index ber kora
var shada=[32,56,534,4,78,78]
var resu=shada.includes(4)//includes hocche ai element ta ase kina and oitar ekta boolean type bole dei
var resul=shada.indexOf(78)
console.log(resul,resu);

//array reverse
//ultai dei pura array ta k
var my=[23,453,563,6456,47,76,6]
var result=my.reverse()
console.log(result);

//array push ekta element k dukano array er modde
var my=[23,453,563,6456,47,76,6]
my.push(34)
console.log(my);

//array pop
// last element delete kore fele
var my=[23,453,563,6456,47,76,6]
my.pop()
my.pop()
my.pop()
console.log(my);

//array sort
//choto theke boro sort//r boro thekek choto reverse
var myy=[3,66,6,4]
var resulttt=myy.sort().reverse();
console.log(resulttt);
//slice array
var ut=[223,34,5,456,65,6]
var resum=ut.slice(0,3)
console.log(resum);

//array splice
var dada=[2,5,7,9,8]
var r=dada.splice(1,3)
console.log(dada);
console.log("rashik")

//string method
//charAt
let bd="bangladesh"
console.log(bd.charAt(7))

//concat
let id="india"
let b="bangladesh"
console.log(id.concat(b))
//indexof string
console.log(b.indexOf("g"))
//string e sesh e koto nmbr index tate a ase!!
console.log(b.lastIndexOf("a"))
//replace 

let kkk="srilan"
console.log(kkk.replace("lan","lanka"))

//substrt
let da = "bangladesh"
console.log(da.substr(6,4));
//substring
console.log(da.substring(6,10));
//lowercase
console.log(da.toLowerCase())
//uppercase
console.log(da.toUpperCase());

//trim
let yes="  rashik    "
let rt=yes.trim()

console.log(rt.length)

//date object

let obj=new Date();
console.log(obj.getDate())
console.log(obj.getFullYear())
console.log(obj.getHours())
console.log(obj.getMinutes())

//math
let tyson=2.6;
console.log(Math.abs(tyson))
console.log(Math.round(tyson))
console.log(Math.ceil(tyson))
console.log(Math.floor(tyson))
console.log(Math.max(3,23,42,5))
console.log(Math.min(3,23,42,5))
console.log(Math.random())


//nmbr object

let asdas="5.43321425";
console.log(Number.isFinite(asdas))
console.log(Number.isInteger(asdas))
console.log(Number.parseFloat(asdas))
console.log(Number.parseInt(asdas))
console.log(asdas.toString())

const numString = "123";
const num = parseInt(numString,10);
console.log(num)



console.log("module 1")