function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight && height) {
        const bmi = weight / (height * height);
        const result = document.getElementById('result');
        
        let bmiCategory = '';
        
        if (bmi < 18.5) {
            bmiCategory = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiCategory = 'Normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            bmiCategory = 'Overweight';
        } else {
            bmiCategory = 'Obesity';
        }
        
        result.innerHTML = `Your BMI is ${bmi.toFixed(2)}<br>You are classified as: ${bmiCategory}`;
    } else {
        alert('Please enter both weight and height.');
    }
}
