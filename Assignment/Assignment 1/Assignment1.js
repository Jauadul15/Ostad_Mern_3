// function multiplication(nmbr) {
//     for(let i=0;i<=10;i++){
//         let product = nmbr * i;
//         console.log(`${nmbr} * ${i} = ${product}`)
//     }
//
// }multiplication(3)
//
// console.log(5 > 7 || 5 > 3);
// var y = 5 + 2 * 3 % 2 - 1;
// console.log(y);
// // console.log(false && (5 / 1));
//
// let age=17;
// let massgae=age>=18?("adult"):("not adult");
// console.log(massgae)

function gradeCalculator(grade) {
    if (grade >= 90) {
        return "A";
    } else if (grade >= 80) {
        return "B";
    } else if (grade >= 70) {
        return "C";
    } else if (grade >= 60) {
        return "D";
    } else {
        return "F";
    }
}
console.log(gradeCalculator(101));