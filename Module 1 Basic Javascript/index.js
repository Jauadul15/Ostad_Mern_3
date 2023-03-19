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

var age=80;
if(age>0 && age<18){
    console.log("Child")
}else if(age>=18 && age<50){
    console.log("adult")
}else if(age>=50 && age<70){
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

var i;
for(i=0;i<10;i++){
    console.log("My name is JAuad")
}
//while loop

var p=0;
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

