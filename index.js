//if else

function gradecalculator(grade) {
    if(isNaN(grade) || grade<0 || grade>100){
        return "Error"
    }
    else if(grade>=90 && grade<=100){
        return "A"
    }
    else if(grade>=80 && grade<=89){
        return "B"
    }
    else if(grade>=70 && grade<=79){
        return "C"
    }
    else if(grade>=60 && grade<=69){
        return "D"
    }
    else{
        return "F"
    }
}
console.log(gradecalculator(80))

