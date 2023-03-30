const calculateBMI = () => {
    const weight = document.getElementById("weightInput").value;
    const height = document.getElementById("heightInput").value;
    const resultElement = document.getElementById("result");

    if (weight === "" || height === "") {
        resultElement.innerText = "Please enter both weight and height values.";
        return;
    }

    const bmi = weight / (height * height);
    resultElement.innerText = `Your BMI is ${bmi.toFixed(2)}.`;

    let condition;

    if (bmi < 18.5) {
        condition = "underweight";
    } else if (bmi < 25) {
        condition = "normal weight";
    } else if (bmi < 30) {
        condition = "overweight";
    } else {
        condition = "obese";
    }

    resultElement.innerText += ` You are ${condition}.`;

    const resultField = document.getElementById("resultField");
    resultField.classList.add("show");
};

const resetForm = () => {
    document.getElementById("weightInput").value = "";
    document.getElementById("heightInput").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("resultField").classList.remove("show");
};

document.getElementById("calculateBtn").addEventListener("click", calculateBMI);
document.getElementById("resetBtn").addEventListener("click", resetForm);
