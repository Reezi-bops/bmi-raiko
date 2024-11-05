function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const result = document.getElementById('result');
    const classification = document.getElementById('classification');

    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        result.innerText = `Your BMI is: ${bmi.toFixed(2)}`;

        // Determine BMI classification
        if (bmi < 18.5) {
            classification.innerText = "Classification: Underweight";
        } else if (bmi < 24.9) {
            classification.innerText = "Classification: Normal weight";
        } else if (bmi < 29.9) {
            classification.innerText = "Classification: Overweight";
        } else {
            classification.innerText = "Classification: Obesity";
        }
    } else {
        result.innerText = "Please enter valid weight and height.";
        classification.innerText = "";
    }
}

document.getElementById('calculateBtn').addEventListener('click', calculateBMI);
